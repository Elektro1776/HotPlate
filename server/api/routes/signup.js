import express from 'express';
import { User } from '../../models';
import { saltHashPassword, createUserToken } from '../../util/password_validation';
// import { currentId } from 'async_hooks';

const signupRouter = express.Router();

const createUserId = (accountType) => {
  const newId = Math.floor(Math.random() * 90000) + 10000;
  return User.checkUniqueUserId(newId, accountType)
    .then((response) => {
      if (response > 0) {
        createUserId(accountType);
      } else {
        return newId;
      }
    })
    .catch((err) => {
      console.info(`We have an error creating a new id here ${err}`);
    });
};

signupRouter.post('/signup', (req, res) => {
  const accountType = 'user'; // this needs to be made dynamic in the future
  const { password, email, first_name, last_name, company_id } = req.body;
  // TODO: **** Need to encrypt the user password here probably *****
  User.findUser(email)
    .then((user) => {
      if (user.length === 0) {
        createUserId(accountType)
          .then((newId) => {
            const { salt, hash } = saltHashPassword({ password });
            const accountInformation = {
              first_name,
              last_name,
              email_address: email,
              password_hash: hash,
              user_id: newId,
              salt,
              company_id,
              role: accountType,
            };
            User.createUser(accountInformation, accountType)
              .then((success) => {
                createUserToken(email, accountType)
                  .then((jwtToken) => {
                    const { token, access_token } = jwtToken;
                    res.status(200).json({
                      email,
                      token,
                      access_token,
                    });
                  });
              })
              .catch((err) => {
                res.sendStatus(500).json({ err, message: 'The user was not created please try again' });
              });
          });
      }
      // handle existing account
    });
});


export default signupRouter;
