import style from "./../styles/pagesIndex.module.css"
import Layout from './layout'
import LandingHeader from './../components/landing/landingHeader'
import LandingContent from "@/components/landing/landingContent"
import LandingPopular from "@/components/landing/landingPopular"

export default function Home() {
  return (
    <Layout
      title='Another Cup'
      description='Just an app to get info about exactly anything' >

      <main className={style.content}>
        <LandingHeader />
        <LandingPopular fetchUrl="null" />
        <LandingContent fetchURL="null" />
      </main>
    </Layout>
  )
}