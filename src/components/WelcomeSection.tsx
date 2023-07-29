import style from "../styles/welcomesection.module.scss";
import img from "../assets/group.webp";

export const WelcomeSection = () => {
  return (
    <section className={style.welcomeContainer}>
      <h2>Velkommen</h2>
      <article>
        <section className={style.welcomeText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque
            suscipit quod molestiae non saepe error, repellat at incidunt
            necessitatibus culpa repudiandae quisquam laborum, aliquid nihil
            facilis magnam deleniti in?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet neque
            suscipit quod molestiae non saepe error, repellat at incidunt
            necessitatibus culpa repudiandae quisquam laborum, aliquid nihil
            facilis magnam deleniti in?
          </p>
        </section>

        <section className={style.welcomeImages}>
          <img alt="ceramic_collage_image" src={img}></img>
        </section>
      </article>
    </section>
  );
};
