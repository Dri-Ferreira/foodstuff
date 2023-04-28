import { faker } from '@faker-js/faker';

export default async () => {
  return {
    id: parseInt(faker.random.numeric()),
    name: faker.internet.userName(),
    address: faker.address.streetName(),
    photo: faker.image.food(),
    businessHours: faker.lorem.sentence(5),
  };
};
