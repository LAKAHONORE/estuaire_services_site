import { Link } from "react-router-dom"

type Props = {
  title: string,
  text: string | undefined,
  link: string,
  linkTitle: string
}

export default function More({title, text, link, linkTitle}: Props) {
  return(
    <div className="flex flex-col md:flex-row w-full bg-purple py-16 my-16 px-12">
      <div className="flex flex-col w-full md:w-2/3">
        <h1 className="text-white text-2xl font-semibold text-center md:text-start">{title}</h1>
          {
            text ? (
              <p className="text-white mt-8 text-center md:text-start">{text}</p>
            ):(
              <p className="text-white mt-8 text-center md:text-justify">
                Découvrez l'ensemble de nos services chez <span className="lugrasimo-font text-xl">Estuaire Services </span>! 
                Nous vous invitons à explorer nos solutions variées, conçues pour 
                répondre à vos besoins spécifiques. Que vous soyez à la recherche 
                d'informations, de conseils ou de services personnalisés, notre équipe 
                est là pour vous accompagner. Ne manquez pas l'occasion de profiter de 
                tout ce que nous avons à offrir pour optimiser votre expérience. Visitez 
                notre site dès maintenant !
              </p>
            )
          }


      </div>
      <div className="flex flex-row justify-center items-center mt-10 md:mt-0 md:w-1/3">
        <Link to={link} className="bg-white text-purple px-8 py-3 hover:bg-gray-100 font-semibold rounded-md ">
          {linkTitle}
        </Link>
      </div>
    </div>
  )
}