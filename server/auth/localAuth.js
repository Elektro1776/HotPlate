import express from 'express';

const authRouter = express.Router();

import User from '../schema/User';


authRouter.get('/token', (req, res, next) => {
  console.log(`api is hit from page load`);
  if (req.user) {
    const currentUser = req.user;
    if (req.session.dealer_token) {
      currentUser.dealer_token = req.session.dealer_token.access_token;
      currentUser.profile = req.session.profile;
      const { login, id } = req.session.profile;
      User.where({ username: req.user.username })
        .update({ profile: { login, id } }, (err, doc) => {
          console.info(`lots of things here User: ${User} \n also we have currentUser: ${currentUser}`);
        });
    }
    currentUser.token = res.locals.token;
    currentUser.access_token = res.locals.access_token;
    console.info(`currentUser before res.json ${currentUser}`);
    res.status(200).json(currentUser);
  }
});

export default authRouter;
