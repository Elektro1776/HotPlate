import knex from 'knex';
import knexfile from '../../knexfile';
import Dealer from './dealer';
import Media from './media';
import User from './user';

const knexInstance = knex(knexfile.development);
const DealerInstance = new Dealer(knexInstance);
const MediaInstance = new Media(knexInstance);
const UserInstance = new User(knexInstance);

export {
  DealerInstance as Dealer,
  MediaInstance as Media,
  UserInstance as User,
};
