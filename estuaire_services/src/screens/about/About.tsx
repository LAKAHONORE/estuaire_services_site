import OldHero from "../components/hero/OldHero";
import Navbar from "../components/navbar/Navbar";
import Values from "../components/values/Values";
import About from "../components/about/About";
import More from "../components/more/More";
import Footer from "../components/footer/Footer";

export default function AboutPage(){
  return(
    <>
      <Navbar />
      <OldHero title="A Propos" />
      <Values />
      <About />
      <More title="Consulter la liste de nos services" text="" link="/services" linkTitle="Consulter"/>
      <Footer />
    </>
  )
}