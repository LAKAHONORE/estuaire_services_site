export default function About(){
  return (
    <div className="flex flex-col w-full justify-center items-center my-16">
      <div className="flex flex-row">
        <span className="relative text-2xl font-semibold text-blue after:absolute after:left-0 after:w-full after:scale-x-50 after:border-b-4 after:border-blue after:bottom-0">
            Qui sommes-nous ?
        </span>
      </div>


      <div className="flex flex-col-reverse md:flex-row px-5 md:px-12 mt-16">
        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="lugrasimo-font text-center md:text-start text-2xl text-blue">Estuaire Services,</h1>
          <p className="text-justify mt-8 leading-8">
          Est une structure qui a pour objet l'accompagnement à la maturation des projets des jeunes et de son personnel. 
          Alors depuis 2019, sous l'impulsion de la nouvelle équipe dirigeante, L'Incubateur : Estuaire Service vient être 
          la matérialisation du nouveau paradigme : la massification des étudiants à l'entrée et la sortie des universités,
           nous oblige à forger des leaders, des Chefs d'entreprises et de véritables créateurs d'emplois et de richesses au 
           service du développement.

          Notre objectif est faciliter la création des entreprise (Star-up) et par ricochet créer de l'emploi.
           Ce processus passe par la sélection et l'accompagnement des étudiants porteurs de projets économiques 
           innovants de la sous-région ou université à fort potentiel de croissance. L'Estuaire Service accompagne 
           le créateur d'entreprises en l'occurrence les étudiants (nouveaux et anciens) et le personnel d'université, 
           à travers l'initiation à l'entrepreneuriat grâce à des formations, des Rendez-vous conseil individuel, le coaching, 
           l'accompagnement à la recherche de financement etc.
          </p>
        </div>


        <div className="flex flex-row justify-center w-full mb-8 md:w-1/2">
          <img src="/assets/home.jpg" className="md:w-[80%]" alt="" />
        </div>
      </div>
    </div>
  )
}