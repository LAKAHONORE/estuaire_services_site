import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import More from "../components/more/More";
import Navbar from "../components/navbar/Navbar";
import Services from "../components/services/Services";
import Values from "../components/values/Values";
import Hero from "./hero/Hero";

export default function Home(){
  return(
    <>
      <Navbar />
      <Hero />
      <Values />
      <About />
      <Services />
      <More title="Consulter la liste de nos services" text="" link="/services" linkTitle="Consulter"/>
      <Footer />

    </>
  )
}