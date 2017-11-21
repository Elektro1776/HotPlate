
class User {
  constructor(knex) {
    this.db = knex;
  }
  // escape dis shnaz
  createUser = (newAccountInformation, accountType) => this.db(`${accountType}_account`).insert(newAccountInformation);

  findUser = (email) => this.db.select().from('user_account').where('email_address', email);

  findAccount = () => {
    // this is to be used for relating user accounts to a dealer/corp
  }

  update = () => {

  }

  delete = () => {

  }

  checkUniqueUserId = (genId, accountType) => this.db.select().from(`${accountType}_account`).where(`${accountType}_id`, genId);
}
export default User;
