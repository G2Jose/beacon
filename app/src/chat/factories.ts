import faker from 'faker'

export const createMessage = (overrides = {}) => ({
  message: faker.lorem.sentence(),
  date: faker.date.recent(),
  from: faker.random.uuid(),
  to: faker.random.uuid(),
  ...overrides,
})

export const createId = (override?: number) => faker.random.number(100) || override
