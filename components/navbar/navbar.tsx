import style from "./navbar.module.scss"
import { AiOutlineMenu } from "react-icons/ai"
import Search from "./Search/search"
import Link from "next/link"

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <Link className={style.header} href="/">
                <img src="/favicon.jpg" alt="mewhen" />
                <p className={style.title}>Another cup</p>
            </Link>

            <Search />

            <div className={style.items}>
                <p>About</p>
                <p>Board</p>
                <AiOutlineMenu />
            </div>
        </div>
    )
}