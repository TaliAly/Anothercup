import Head from "next/head"
import Navbar from "./../components/navbar/navbar"
import style from "./../styles/layout.module.scss"

interface Props {
    children: React.ReactNode,
    title: string,
    description: string,
}

export default function Layout({ children, title, description }: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="description" content="Me when amongus" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={style.layout}>
                <Navbar />
                {children}
            </div>
        </>
    )
}