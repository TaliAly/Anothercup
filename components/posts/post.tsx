import { postProps } from '../../types/posts'
import Link from 'next/link'

import styleHorizontal from './postHorizontal.module.scss'
import styleVertical from './postVertical.module.scss'
import style from './post.module.scss'

interface Props extends postProps {
  type: 'horizontal' | 'vertical' | 'normal' | undefined
}

export default function Post({
  author,
  img,
  title,
  content,
  createdAt,
  id,
  type,
}: Props) {
  const name = () => {
    switch (type) {
      case 'horizontal':
        return styleHorizontal
      case 'vertical':
        return styleVertical
      default:
        return style
    }
  }

  const date = () => {
    return createdAt.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }

  return (
    <div className={name().post}>
      <div className={name().author}>
        <Link href={`/users/%{author}`}>
          <p>
            {author} . {date()}
          </p>
        </Link>
      </div>
      <Link href={id}>
        <div className={name().content}>
          <img src={img} alt={title} />

          <div>
            <h3 className={name().title}>{title}</h3>
            <p className={name().body}>{content}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}
