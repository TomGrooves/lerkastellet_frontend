import style from '../styles/header.module.scss'
import bgimage from '../assets/image2.jpg'
export const Header = () => {

    return (
        <header className={style.header} style={{backgroundImage: `url(${bgimage})`}}>
            <h1>Lerkastellet</h1>
        </header>
    )
}