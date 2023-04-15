import Post from './post'
import { postProps } from '@/types/posts'

interface Props {
  data: postProps[]
  type: 'horizontal' | 'vertical' | 'normal'
}

export default function PostProvider({ data, type }: Props) {
  return (
    <div>
      {data?.map((propsData, i) => (
        <Post key={data[i].id} type={type} {...propsData} />
      ))}
    </div>
  )
}
