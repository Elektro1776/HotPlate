
class Customer {
  constructor(knex) {
    this.db = knex;
  }
  addCustomer = () => {

  }
  editCustomer = () => {

  }
  deleteCustomer = () => {

  }
  getCustomers = () => this.db.select().table('customers');
  getCustomer = () => {

  }
}

export default Customer;
