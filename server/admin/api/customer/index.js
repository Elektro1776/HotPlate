import express from 'express';
import { Customer } from '../../../models';

const customerRouter = express.Router();

customerRouter.get('/', (req, res) => {
  // console.log('WE HIT CUSTOMERS API');
  Customer.getCustomers().then((customers) => {
    // console.info('ALL CUSTOMERS', customers);
    res.status(200).json(customers);
  })
    .catch((err) => {
      res.status(401).json(err);
    });
});
customerRouter.post('/', (req, res) => {
  Customer.addCustomer().then((customer) => {
  });
});

customerRouter.get('/:customer_id', (req, res) => {
  Customer.getCustomer().then((customer) => {
  });
});


customerRouter.put('/:customer_id', (req, res) => {
  Customer.editCustomer().then((customer) => {
  });
});

customerRouter.delete('/:customer_id', (req, res) => {
  Customer.deleteCustomer().then((success) => {});
});

export default customerRouter;
