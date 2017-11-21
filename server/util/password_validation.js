import crypto from 'crypto';
import jsonwebtoken from 'jsonwebtoken';
import { User } from '../models';


const randomString = () => crypto.randomBytes(4).toString('hex');

export const saltHashPassword = ({ password, salt = randomString() }) => {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password);
  return {
    salt,
    hash: hash.digest('hex'),
  };
};

export const authenticateAccount = (email, password) => User.findUser(email).first()
  .then((user) => {
    if (user) {
      const { email_address, password_hash, salt } = user;
      const { hash } = saltHashPassword({
        password,
        salt,
      });
      if (hash === password_hash) {
        return { success: true, user, message: `Successfully logged in user: ${email_address}` };
      }
      return { success: false, user, message: `Password does not match to email: ${email_address}` };
    }
    return { success: false, user, message: `No user account with the email: ${user.email_address}` };
  })
  .catch((err) => (`we have an err ${err}`));

export const createUserToken = () => new Promise((resolve, reject) => {
  const access_token = jsonwebtoken.sign({
    iss: 'mod',
    role: 'checker',
  }, process.env.JWT_SECRET, {
    expiresIn: '8h',
  });
  const token = jsonwebtoken.sign({
    iss: 'mod',
    role: 'normal', // default is normal
  }, process.env.JWT_SECRET, { // get secret from config
    expiresIn: '8h',
  });
  resolve({
    token,
    access_token,
  });
});

