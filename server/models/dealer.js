
class Dealer {
  constructor(knex) {
    this.db = knex;
  }

  getNews = () => {
    console.info('we are returning the news here');
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('dealer_news');
  }

  getDealerLeaders = () => {
    console.info('we are returning the leaders');
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('dealer_leaders');    
  }

  getPriceList = () => {
    console.info('we are returning the prices');
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('dealer_prices');
  }

  getProductManuals = () => {
    console.info('we are returning the product manuals');
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('product_manuals');
  }

  getProductBrochures = () => {
    console.info('we are returning the product brochures');
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('product_brochures');
  }

  getPartsList = () => {
    console.info('we are returning the parts list!');
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('parts_list');
  }

  getIncentives = (dealer_id) => {
    console.info('we are returning our incentives for dealer: ', dealer_id);
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.select().table('dealer_incentives');
  }

  postIncentives = (newSpiff) => {
    console.info('we are making a post for a new spiff! \n', newSpiff);
    return new Promise((resolve, reject) => {
      const data = [{
        returnedData: 'sweetness',
      }];
      resolve(data);
    });
    // this.db.make stuff happen here.
  }
}


export default Dealer;
