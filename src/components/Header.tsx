import style from '../styles/header.module.scss'
import bgimage from '../assets/bgimgnew.webp'
import { ReactComponent as Logo } from '../assets/newLogo.svg'

export const Header = () => {

    return (
        <header id="home" className={style.header} style={{backgroundImage: `url(${bgimage})`}}>
            <h1>Lerkastellet</h1>
            <Logo/>
        </header>
    )
}