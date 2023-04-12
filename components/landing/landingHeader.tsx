import style from "./landingHeader.module.scss"

export default function LandingHeader() {

    return (
        <div className={style.landingHeader}>
            <div className={style.grid}>
                <span>
                    <h1>Another Cup</h1>
                    <p>Just the right amount you want it</p>
                </span>
                <img src="/medium-cup.png" alt="cup" />
            </div>

        </div>
    )
}