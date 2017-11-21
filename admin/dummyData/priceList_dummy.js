const faker = require('Faker');

const randomItems = () => {
  const rand = Math.floor(Math.random() * 200);
  const itemData = [];
  for (let i = 0; i <= rand; i += 1) {
    itemData.push(
      {
        name: faker.Company.catchPhrase(),
        category: faker.random.bs_buzz(),
        quantity: faker.random.number(200),
        price: faker.random.number(10000),
        shipping: faker.random.number(1000),
      },
    );
  }
  return itemData;
};

const itemData = randomItems();
export default itemData;
