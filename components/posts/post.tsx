import { postProps } from "../types/posts"
import Link from "next/link"

import styleHori from "./postHorizontal.module.scss"
import styleVertical from "./postVertical.module.scss"
import style from "./post.module.scss"

export default function Post({ author, img, title, content, createdAt, id, type }: postProps) {
    const name = () => {
        switch (type) {
            case "horizontal":
                return styleHori
            case "vertical":
                return styleVertical
            default:
                return style
        }
    }

    const date = () => {
        return createdAt!.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        })
    }

    return (
        <Link className={name().post} href={id}>
            <img src={img} alt={title} />

            <span>
                {(type != "normal") && <p className={style.date}>{date()}</p>}
                <p className={name().title}>{title}</p>

                <span>
                    <p>{author}</p>
                </span>
            </span>

            {(type != "normal") && (!!content) &&
                <p className={style.content}>{content}</p>
            }
        </Link>
    )
}