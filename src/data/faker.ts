import { faker } from '@faker-js/faker';

faker.seed(42);

const data = [...Array(20).keys()].map(() => ({
  id: faker.string.uuid(),
  title: faker.food.dish(),
  description: faker.food.description(),
  bgColor: faker.color.rgb(),
  image: faker.image.urlLoremFlickr({
    category: 'food',
    height: 300 * 1.4,
    width: 300,
  }),
  author: {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  },
}));

export type Item = (typeof data)[number];

export default data;
