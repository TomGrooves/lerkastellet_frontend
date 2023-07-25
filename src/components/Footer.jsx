import style from '../styles/footer.module.scss'

export const Footer = () => {

    return ( 
        <footer className={style.footerContainer}>
            <h3>Some text here</h3>
            <div>
                <p>ICON 1</p>
                <p>ICON 2</p>
            </div>
            <h3>Some other text</h3>
        </footer>
    )
}