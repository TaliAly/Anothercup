import { useEffect, useState } from "react"
import { postProps } from "../types/posts"

import style from "./landingHeader.module.scss"
import fakerApi from "@/Fapi/fakerApi"
import Post from "../posts/post"

export default function LandingHeader() {
    const [data, setData] = useState<postProps[]>([])

    useEffect( () => {
        // async () => {
            // const data = await fetch(fetchUrl)
            // .then(res => res.json())
            // .catch(err => console.error(err));

        //     setData(data);
        // }

        setData(fakerApi(3))

      }, []);

    return (
        <div className={style.landingHeader}>
            <div className={style.grid}>
                <span>
                    <h1>Another Cup of Coffee</h1>
                    <p>Just the right amount you want it</p>
                </span>
                <img src="/cups.jpeg" alt="cup" />
            </div>

            <div className={style.content}>
                {
                    data.map(({ author, img, title, createdAt, id }: postProps) => {
                        return <Post
                            author={author}
                            img={img}
                            title={title}
                            createdAt={createdAt}
                            id={id}
                            key={id}
                            type="normal"
                        />
                    })
                }
            </div>

        </div>
    )
}