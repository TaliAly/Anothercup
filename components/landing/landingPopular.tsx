import style from './landingPopular.module.scss'
import { useState, useEffect } from 'react'
import { postProps } from '../types/posts'
import Post from '../posts/post'
import { fetchData } from '@/Fapi/fakerApi'

interface Props {
  fetchUrl: string
}

export default function LandingPopular({ fetchUrl }: Props) {
  const [data, setData] = useState<postProps[]>()

  useEffect(() => {
    // async () => {
    //     const data = await fetch(fetchUrl)
    //     .then(res => res.json())
    //     .catch(err => console.error(err));

    //     setData(data);
    // }

    setData(fetchData(4))
  }, [])

  return (
    <div className={style.landingPopular}>
      {
        // create a map with the data
        data?.map(({ author, createdAt, id, img, title }: postProps) => {
          return (
            <Post
              key={id}
              author={author}
              createdAt={createdAt}
              id={id}
              img={img}
              title={title}
              type='vertical'
            />
          )
        })
      }
    </div>
  )
}
