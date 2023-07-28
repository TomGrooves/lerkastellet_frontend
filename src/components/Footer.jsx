import style from '../styles/footer.module.scss'
import {PiInstagramLogoThin, PiFacebookLogoThin} from 'react-icons/pi'

export const Footer = () => {

    return ( 
        <footer className={style.footerContainer}>
            <h2>Find mig her</h2>
            <div>
                <PiFacebookLogoThin/>
                <PiInstagramLogoThin/>
            </div>
            <h2><i>Dorte Møller keramik - 2023</i></h2>
        </footer>
    )
}