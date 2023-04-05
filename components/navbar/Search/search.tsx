import { FiSearch } from "react-icons/fi"
import style from "./search.module.scss"

export default function Search() {
    return (
        <div className={style.search}>
            <FiSearch />

            <input
                type="text"
                placeholder="search"
                autoComplete="off"
            />
        </div>
    )
}