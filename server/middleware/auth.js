const ErrorHander = require("../utils/errorHander");
const catchAsyncErrors = require("./catchAsyncErrors");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  // const { token } = req.cookies;

  // if (!token) {
  //   return next(new ErrorHander("Please Login to access this resource", 401));
  // }

  // if (token === "fwcwjeojiofjewfoiwjeijfjewfuweufweofowejoieofiojfeio") {
    next();
  // }
});

