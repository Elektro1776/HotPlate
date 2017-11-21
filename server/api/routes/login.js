import express from 'express';

import { authenticateAccount, createUserToken } from '../../util/password_validation';

const loginRouter = express.Router();

loginRouter.post('/login', (req, res) => {
  const { email, password } = req.body;
  authenticateAccount(email, password)
    .then((credentialStatus) => {
      const { success, message, user: { first_name, last_name, role } } = credentialStatus;
      if (success) {
        return createUserToken()
          .then((token) => res.status(200).json({ token, message, first_name, last_name, role }))
          .catch((err) => res.status(500).json({ err, message }));
      }
    })
    .catch((err) => res.status(500).json({ err }));
  // we don't have a user with that name
});

export default loginRouter;
