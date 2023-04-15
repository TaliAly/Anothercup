import { useEffect, useState } from 'react'
import { postProps } from '@/types/posts'
import style from './postShowdown.module.scss'
import fakerApi from '@/Fapi/fakerApi'

import Post from '@/components/posts/post'

export default function PostShowdown() {
  // useState for the data
  const [data, setData] = useState<postProps | null>(null)

  useEffect(() => {
    setData(fakerApi())
    console.log(fakerApi())

    console.log(data)
  }, [])

  if (!data) {
    return <p>Somethint Went wrong!</p>
  }

  return (
    <div className={style.container}>
      <h2>Post Showdown</h2>

      <div>
        <span>
          <p>Post Normal</p>
          <Post
            author={data?.author}
            title={data?.title}
            content={data?.content}
            createdAt={data?.createdAt}
            id={data?.id}
            img={data?.img}
            type='normal'
          />
        </span>

        <span>
          <p>Post Horizontal</p>
          <Post
            type='horizontal'
            author={data?.author}
            title={data?.title}
            content={data?.content}
            createdAt={data?.createdAt}
            id={data?.id}
            img={data?.img}
          />
        </span>

        <span>
          <p>Post Vertical</p>

          <Post
            author={data?.author}
            title={data?.title}
            content={data?.content}
            createdAt={data?.createdAt}
            id={data?.id}
            img={data?.img}
            type='vertical'
          />
        </span>
      </div>
    </div>
  )
}
