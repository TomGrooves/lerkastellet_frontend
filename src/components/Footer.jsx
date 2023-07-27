import style from '../styles/footer.module.scss'

export const Footer = () => {

    return ( 
        <footer className={style.footerContainer}>
            <h2>Find mig her</h2>
            <div>
                <p>ICON 1</p>
                <p>ICON 2</p>
            </div>
            <h2><i>Dorte Møller keramik - 2023</i></h2>
        </footer>
    )
}