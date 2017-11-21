const faker = require('Faker');

const news = [
  {
    title: faker.Lorem.sentence(),
    image: 'http://via.placeholder.com/450x850?text=lorem+ipsum+dolore',
    date: faker.Date.recent(5000),
    alt: faker.Lorem.words(),
  },
  {
    title: faker.Lorem.sentence(),
    image: 'http://via.placeholder.com/450x850?text=lorem+ipsum+dolore',
    date: faker.Date.recent(5000),
    alt: faker.Lorem.words(),
  },
  {
    title: faker.Lorem.sentence(),
    image: 'http://via.placeholder.com/450x850?text=lorem+ipsum+dolore',
    date: faker.Date.recent(5000),
    alt: faker.Lorem.words(),
  },
  {
    title: faker.Lorem.sentence(),
    image: 'http://via.placeholder.com/450x850?text=lorem+ipsum+dolore',
    date: faker.Date.recent(5000),
    alt: faker.Lorem.words(),
  },
  {
    title: faker.Lorem.sentence(),
    image: 'http://via.placeholder.com/450x850?text=lorem+ipsum+dolore',
    date: faker.Date.recent(5000),
    alt: faker.Lorem.words(),
  },
];

export default news;
