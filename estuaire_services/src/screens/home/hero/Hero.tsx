import { Facebook, Instagram, Twitter, Whatsapp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Hero(){
  return(
    <section className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-[600px] inset-0 bg-gradient-to-t from-purple to-blue px-3 md:px-12">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:justify-start md:items-start">
          <h1 className="lugrasimo-font text-2xl md:text-5xl text-white animate__animated animate__bounce">Estuaire Services</h1>
          <span className="text-white mt-6 text-sm md:text-xl text-center md:text-start ">
            Notre équipe d'experts est là pour vous accompagner à chaque étape de votre parcours.
             Nous mettons à votre disposition une expertise approfondie dans différents domaines,
              afin de vous offrir des services de qualité supérieure.
          </span>

          <div className="hidden md:flex flex-row justify-start items-center gap-8 mt-10">
            <Link to="https://www.facebook.com/estuaireservices?mibextid=rS40aB7S9Ucbxw6v" target="_blank" className="animate-pulse">
              <Facebook className="text-2xl text-white hover:cursor-pointer"/>
            </Link>
            <Link to="/instagram" className="animate-pulse">
              <Instagram className="text-2xl text-white hover:cursor-pointer"/>
            </Link>
            <Link to="/twitter" className="animate-pulse">
              <Twitter className="text-2xl text-white hover:cursor-pointer"/>
            </Link>
            <Link to="/whatsapp" className="animate-pulse">
              <Whatsapp className="text-2xl text-white hover:cursor-pointer"/>
            </Link>

          </div>
        </div>

        <div className="flex flex-row justify-center w-[300px] mt-16 md:mt-0 md:w-1/2">
          <img src="/assets/svg_home.png" className="animate-pulse" alt="" />
        </div>
    </section>
  )
}