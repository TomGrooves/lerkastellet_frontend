import { useState } from "react";
import { useForm } from "react-hook-form";
import style from "../styles/contact.module.scss";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [feedbackText, setFeedbackText] = useState<string>("");

  const onSubmit = (data: FormValues) => sendFormData(data);

  const sendFormData = (data: FormValues) => {
    if (data.name && data.email && data.email) {
      const fetchOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const clientUrl =
        "https://public.herotofu.com/v1/469a7e40-28ac-11ee-8058-515da3888232";

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
    <section id="contact" className={style.contactContainer}>
      <h2>Kontakt</h2>
      <h4>{feedbackText}</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          <span>Navn</span>
        </label>
        <input {...register("name", { required: true })} />
        <label htmlFor="email">
          <span>Email</span>
        </label>
        <input type="email" {...register("email", { required: true })} />

        <label htmlFor="message">
          <span>Besked</span>
        </label>
        <input type="textfield" {...register("message", { required: true })} />
        <input type="submit" value="Send" />
      </form>
      <div
        style={{
          textIndent: -99999 + "px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          position: "absolute",
        }}
        aria-hidden="true"
      >
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
    </section>
  );
};
