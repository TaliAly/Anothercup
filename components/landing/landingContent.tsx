// make a react component that uses post
import style from './landingContent.module.scss'

import { useEffect, useState } from 'react'
import { postProps } from '@/types/posts'
import Post from '../posts/post'
import { fetchData } from '@/Fapi/fakerApi'
import PostProvider from '../posts/postProvider'

interface props {
  fetchURL: string
}

export default function LandingContent({ fetchURL }: props) {
  const [data, setData] = useState<postProps[] | null>(null)

  useEffect(() => {
    // async () => {
    //     const data = await fetch(fetchUrl)
    //     .then(res => res.json())
    //     .catch(err => console.error(err));

    //     setData(data);
    // }

    setData(fetchData(6))
  }, [])

  return (
    <div className={style.landingContent}>
      <div className={style.postToday}>
        <h3 className={style.title}>Today</h3>

        <PostProvider data={data!} type='horizontal' />
      </div>

      <span className={style.popular}>
        <h3 className={style.title}>You might have missed</h3>

        <PostProvider data={data!.slice(3)} type='vertical' />
      </span>
    </div>
  )
}
