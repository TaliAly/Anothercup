import { faker } from '@faker-js/faker'
import { postProps } from '@/components/types/posts'

export default function fakerApi() {
  let data: postProps = {
    id: faker.datatype.uuid(),
    img: faker.image.unsplash.imageUrl(),
    title: faker.lorem.sentence(4),
    author: `@${faker.name.firstName()}`,
    content: faker.lorem.sentence(15),
    createdAt: faker.date.past(),
    type: undefined, // dont mind this, just add the type in the component
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
