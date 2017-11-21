import express from 'express';

const spiffRouter = express.Router();
import { Dealer } from '../models';

spiffRouter.get('/dealer/:dealerId/spiffs', (req, res) => {


});

export default spiffRouter;
