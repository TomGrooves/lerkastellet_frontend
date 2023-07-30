import { useEffect, useState } from "react";
import style from "../styles/navbar.module.scss";
import logo from '../assets/Black logo - no background.png'

export const Navbar = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
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
