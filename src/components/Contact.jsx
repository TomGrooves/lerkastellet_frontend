import { useState } from "react";
import { useForm } from "react-hook-form";
import style from '../styles/contact.module.scss';

export const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const [feedbackText, setFeedbackText] = useState("");

  const onSubmit = (data) => sendFormData(data);

  const sendFormData = (data) => {
    if (data.name && data.email && data.email) {
      const fetchOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const clientUrl = "https://public.herotofu.com/v1/469a7e40-28ac-11ee-8058-515da3888232";

      fetch(clientUrl, fetchOptions)
        .then((res) => {
          if (!res.ok) {
            setFeedbackText("Beskeden blev ikke sendt. Prøv igen");
          } else {
            setFeedbackText(
              `Tak for din besked ${data.name}. Jeg vender tilbage med et svar på din forespørgsel`
            );
          }
        })
        .then();
    } else {
      setFeedbackText(
        "Beskeden blev ikke sendt. Vær sikker på alle felter er udfyldt."
      );
    }
  };

  return (
    <section className={style.contactContainer}>
      <h4>{feedbackText}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input {...register("name", { required: true })} />
        <label htmlFor="email">Email:</label>
        <input type="email" {...register("email", { required: true })} />
        <label htmlFor="message">Message:</label>
        <input {...register("message", { required: true })} />
        <input type="submit" />
      </form>
      <div style={{textIndent:-99999 + "px", whiteSpace:"nowrap", overflow:"hidden", position:"absolute",}} aria-hidden="true">
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
    </div>
    </section>
  );
}
