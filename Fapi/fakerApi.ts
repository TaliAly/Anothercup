import { faker } from "@faker-js/faker"
import { postProps } from "@/components/types/posts";

export default function fakerApi(num: number) {
    let data: postProps[] = [];

    for (let i = 0; i < num; i++) {
        data.push({
            id: faker.datatype.uuid(),
            img: faker.image.unsplash.food(1024, 512, true),
            title: faker.music.songName(),
            author: faker.name.fullName(),
            content: faker.lorem.sentence(15),
            createdAt: faker.date.past(),
        })
    }

    return data
}