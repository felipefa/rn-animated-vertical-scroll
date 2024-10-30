import { faker } from '@faker-js/faker';

faker.seed(42);

const data = [...Array(20).keys()].map(() => ({
  id: faker.string.uuid(),
  title: faker.book.title(),
  description: faker.lorem.paragraph(),
  bgColor: faker.color.rgb(),
  image: faker.image.urlLoremFlickr({
    category: 'books',
    height: 300 * 1.4,
    width: 300,
  }),
  author: {
    name: faker.person.fullName(),
    avatar: faker.image.urlLoremFlickr({
      category: 'avatar',
      height: 24,
      width: 24,
    }),
  },
}));

export type Item = (typeof data)[number];

export default data;
