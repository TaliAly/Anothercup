import style from './../styles/pagesIndex.module.css'
import Layout from './layout'
import Landing from '@/components/Landing'

export default function Home() {
  return (
    <Layout
      title='Another Cup'
      description='Just an app to get info about exactly anything'
    >
      <main className={style.content}>
        <Landing />
      </main>
    </Layout>
  )
}
