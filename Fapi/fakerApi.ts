import { faker } from '@faker-js/faker'
import { postProps } from '@/types/posts'

export default function fakerApi() {
  let data: postProps = {
    id: faker.datatype.uuid(),
    img: faker.image.abstract(500, 500, true),
    title: faker.lorem.sentence(4),
    author: `@${faker.name.firstName()}`,
    content: faker.lorem.sentence(15),
    createdAt: faker.date.past(),
  }

  return data
}

export const fetchData = (num: number) => {
  let data: postProps[] = []

  for (let i = 0; i < num; i++) {
    data.push(fakerApi())
  }

  return data
}
