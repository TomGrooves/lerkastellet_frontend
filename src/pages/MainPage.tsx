import { ContactForm } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { Seperator } from "../components/Seperator";
import { WelcomeSection } from "../components/WelcomeSection";

export const MainPage = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <WelcomeSection />
      <Seperator />
      <Gallery />
      <Seperator />
      <ContactForm />
      <Footer />
    </main>
  );
};
