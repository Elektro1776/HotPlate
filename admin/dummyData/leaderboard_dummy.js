const faker = require('Faker');

const randomReps = () => {
  const rand = Math.floor((Math.random() + 1) * 20);
  const leadingSales = [];
  for (let i = 0; i <= rand; i += 1) {
    leadingSales.push(
      {
        rank: i + 1,
        name: `${faker.Name.firstName()} ${faker.Name.lastName()}`,
        value: faker.random.number(1000000),
        company: faker.Company.companyName(),
        town: faker.Address.city(),
      },
    );
  }
  return leadingSales;
};

const leadingSales = randomReps();
export default leadingSales;
