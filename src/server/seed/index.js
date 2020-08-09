import faker from 'faker';
import DBConn from '../DBConn';
import Product from '../models/Product';

DBConn();

const seedProducts = async (total) => {
  let newProducts = [];

  newProducts = [...Array(total).keys()].map((key) => {
    return {
      id: faker.random.uuid(),
      name: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      price: faker.finance.amount(10, 5000),
      size: faker.random.number(20),
      image: faker.image.fashion(),
    };
  });

  try {
    await Product.insertMany(newProducts);
  } catch ({ msg }) {
    console.log('Error occured ', msg);
  }
};

seedProducts(500);
