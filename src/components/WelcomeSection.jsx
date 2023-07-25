import style from '../styles/welcomesection.module.scss'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

export const WelcomeSection = () => {

    return (
        <section className={style.welcomeContainer}>
            <h2>Velkommen</h2>
            <div>

                <section className={style.welcomeText}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque suscipit quod molestiae non saepe error, repellat at incidunt necessitatibus culpa repudiandae quisquam laborum, aliquid nihil facilis magnam deleniti in?
                    <br/>
                    <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque suscipit quod molestiae non saepe error, repellat at incidunt necessitatibus culpa repudiandae quisquam laborum, aliquid nihil facilis magnam deleniti in?
                    </p>
                </section>

                <section className={style.welcomeImages}>
                    <img src={image1}></img>
                    <img src={image2}></img>
                    <img src={image3}></img>
                </section>
            
            </div>
        </section>
    )
}