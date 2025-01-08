import Footer from "../components/footer/Footer";
import OldHero from "../components/hero/OldHero";
import Navbar from "../components/navbar/Navbar";
import ServicesComponents from "./service-components/ServicesComponents";

export default function Service(){
  return(
    <>
    <Navbar />
    <OldHero title="Services" />
    <ServicesComponents />
    <Footer />

    </>
  )
}