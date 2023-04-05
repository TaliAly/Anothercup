// make a react component that uses post
import style from "./landingContent.module.scss"

import { useEffect, useState } from "react"
import { postProps } from "../types/posts"
import Post from "../posts/post"
import fakerApi from "@/Fapi/fakerApi"

interface props {
    fetchURL: string,
}

export default function LandingContent({ fetchURL }: props) {
    const [data, setData] = useState<postProps[]>([])

    useEffect( () => {
        // async () => {
        //     const data = await fetch(fetchUrl)
        //     .then(res => res.json())
        //     .catch(err => console.error(err));

        //     setData(data);
        // }

        setData(fakerApi(8))

      }, []);

    return (
        <div className={style.landingContent}>
            {data.map(({ author, img, title, content, createdAt, id }: postProps) => {
                return <Post
                    author={author}
                    img={img}
                    title={title}
                    content={content}
                    key={id}
                    id={id}
                    createdAt={createdAt}
                    type="horizontal"

                />

            })}
        </div>
    )
}