const { OAuth2Client } = require('google-auth-library');
const CLIENT_ID = '728858239326-mlov3m3p25o3v50o44m4epq70gorfmsh.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);

exports.verifyGoogleToken= async (token) => {
    console.log('hey')
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
  });
  const payload = ticket.getPayload();
  return {
    email: payload['email'],
    name: payload['name'],
    picture: payload['picture'],
    verified_email: payload['email_verified'],
  };
}
