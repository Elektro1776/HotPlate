import express from 'express';

const dealerRouter = express.Router();
import { Dealer } from '../models';

dealerRouter.get('/news', (req, res) => {
  Dealer.getNews().then((news) => {
    res.json(news);
  });
});

dealerRouter.get('/leaderboard', (req, res) => {
  Dealer.getDealerLeaders().then((leaders) => {
    res.json(leaders);
  });
});

dealerRouter.get('/price_list', (req, res) => {
  Dealer.getPriceList().then((priceList) => {
    res.json(priceList);
  });
});

dealerRouter.get('/manuals', (req, res) => {
  Dealer.getProductManuals().then((productManuals) => {
    res.json(productManuals);
  });
});

dealerRouter.get('/brochures', (req, res) => {
  Dealer.getProductBrochures().then((productBrochures) => {
    res.json(productBrochures);
  });
});

dealerRouter.get('/parts', (req, res) => {
  Dealer.getPartsList().then((partsList) => {
    res.json(partsList);
  });
});

dealerRouter.get('/incentives/:dealer_id', (req, res) => {
  const dealer_id = req.params.dealer_id;
  Dealer.getIncentives(dealer_id).then((incentives) => {
    res.json(incentives);
  });
});

dealerRouter.post('/incentives/:dealer_id', (req, res) => {
  const dealer_id = req.params.dealer_id;
  const newSpiff = {
    dealer_id,
    ...req.body,
  };
  // Dealer.postIncentives(newSpiff).then((spiffSubmitted) => {
  //  res.redirect('/incentives');
  // };
});

export default dealerRouter;
