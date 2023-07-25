import style from '../styles/navbar.module.scss'
export const Navbar = () => {

    return (
        <nav className={style.navBar}>
            <div>
                <a href="#">HJEM</a>
                <a href="#">GALLERI</a>
                <a href="#">KONTAKT</a>
            </div>
        </nav>
    )
}