const { Resend } = require("resend");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const userModel = require("../models/user.model");
const { verifyGoogleToken } = require("../utils/utils");

const resend = new Resend("re_foT35HTR_3ooic6zP3ZBv7kTycoFxkKns");

exports.login = catchAsyncErrors(async (req, res, next) => {
    let user = await userModel.findOne({ email: req.body.email });
    // If user does not exist, create a new user
    
    if (!user) {
      user = await userModel.create({ email: req.body.email });
      if(user?.loginType == "google"){
        res.status(401).json({
            message:"You can login with google"
        })
    }   
    } else {
    //   Check if the existing user has exceeded the limit of token requests
      if (user.tokenRequestCount >= 3 && user.lastTokenRequestDate > Date.now() - 24 * 60 * 60 * 1000) {
        return res.status(429).json({ message: "Token request limit exceeded. Please try again later." });
      }
  
      // Reset the count if it's been more than 24 hours since the last request
      if (user.lastTokenRequestDate < Date.now() - 24 * 60 * 60 * 1000) {
        user.tokenRequestCount = 0;
      }
    }
  
    // Generate login token
    const loginToken = user.getLoginToken();
    const loginTokenUrl = `https://whatiffounders.com/auth/token/${loginToken}`;
    console.log(loginTokenUrl)
    // Send token via email
    const { data, error } = await resend.emails.send({
      from: "<support@whatiffoudners.com>",
      to: [user.email],
      subject: "Verification link for you",
      html: `<a href="${loginTokenUrl}">Click Here</a>`,
    });
  
    user.loginToken = loginToken;
    user.loginTokenExpire = Date.now() + 3600000; // 1 hour from now
    user.tokenRequestCount = 1;
    user.lastTokenRequestDate = Date.now();
    await user.save();
  
    res.status(200).json({
      message: user.isNew ? "User registered" : "Login token sent",
      user,
    });
  });
  exports.checkLoginToken = catchAsyncErrors(async (req, res, next) => {
    const user = await userModel.findOne({
      loginToken: req.body.loginToken,
    });
    if (!user) {
      return res.status(401).json({
        message: "There is some issue in token try regenerating",
        user,
      });
    }
  
    user.isVerified = true;
    user.loginToken = null;
    user.loginTokenExpire = null;
    await user.save();
  
    res.status(200).json({
      message: "User verified",
      user,
    });
  });
  

exports.resendPasswordToken = catchAsyncErrors(async (req, res, next) => {
    const { email } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Check if the user has exceeded the limit of token requests
    if (user.tokenRequestCount >= 3 && user.lastTokenRequestDate > Date.now() - 24 * 60 * 60 * 1000) {
        return res.status(429).json({ message: "Token request limit exceeded. Please try again later." });
    }

    // Reset the count if it's been more than 24 hours since the last request
    if (user.lastTokenRequestDate < Date.now() - 24 * 60 * 60 * 1000) {
        user.tokenRequestCount = 0;
    }

    // Generate new token and update user
    const newToken = generateNewToken(); // Implement this function based on your token generation logic
    user.loginToken = newToken;
    user.loginTokenExpire = Date.now() + 3600000; // 1 hour from now
    user.tokenRequestCount += 1;
    user.lastTokenRequestDate = Date.now();
    await user.save();
    res.status(200).json({ message: "New token sent successfully." });
});
exports.googleLogin = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body)
    const { account } = req.body;
    console.log(account)
    const googleUser = await verifyGoogleToken(account.id_token);
    let user = await userModel.findOne({ email: googleUser.email,loginType:"google" });

    if (!user) {
      user = await userModel.create({
        email: googleUser.email,
        name: googleUser.name,
        profilePicture: googleUser.picture,
        isVerified:true,
        loginType:"google"
      });
    }
  
    res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  });
  