import { useEffect, useState } from "react";
import style from "../styles/navbar.module.scss";
export const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrollHeight <= 0 ? style.navBar : style.slim}>
      <div>
        <a href="#home">HJEM</a>
        <a href="#gallery">GALLERI</a>
        <a href="#contact">KONTAKT</a>
      </div>
    </nav>
  );
};
