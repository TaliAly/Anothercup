import style from './navbar.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import Search from './Search/search'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <Link className={style.header} href='/'>
        <img src='/favicon.jpg' alt='mewhen' />
        <Search />
      </Link>

      <div className={style.items}>
        <p>Daily</p>
        <p>Javascript</p>
        <p>Rust</p>
        <p>Golang</p>
        <p>Carbon</p>
        <AiOutlineMenu />
      </div>
    </div>
  )
}
