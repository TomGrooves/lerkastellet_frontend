import style from '../styles/header.module.scss'
import bgimage from '../assets/image4.jpg'
export const Header = () => {

    return (
        <header className={style.header} style={{backgroundImage: `url(${bgimage})`}}>
            <h1>Cool shop name</h1>
        </header>
    )
}