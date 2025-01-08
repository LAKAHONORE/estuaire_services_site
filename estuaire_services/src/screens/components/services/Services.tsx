import SingleService from "../single-service/SingleService";

export default function Services(){
  return(
    <div className="flex flex-col w-full justify-center items-center my-16">
    <div className="flex flex-row my-8">
      <span className="relative text-2xl font-semibold text-blue after:absolute after:left-0 after:w-full after:scale-x-50 after:border-b-4 after:border-blue after:bottom-0">
         Nos Services
      </span>
    </div>
    
    <div className="flex-flex-col md:grid grid-cols-3 px-4 md:px-12 gap-10 my-12">
        <SingleService
          img="/assets/estuaire_learning.jpg"
          title="Estuaire Learning"
          description="Chez estuaire learning, nous croyons en l'importance de l'apprentissage continu et de l'enrichissement personnel. nous offrons une vaste sélection de formations en ligne de haute qualité, ainsi qu'une bibliothèque de livres numériques captivants, conçus pour vous aider à développer de nouvelles compétences, à élargir vos horizons et à atteindre vos objectifs personnels et professionnels." 
          link="https://learning.estuaireservices.com/"
          linkTitle="En savoir plus"
        />

        <SingleService
          img="/assets/estuaire_emploi.jpg"
          title="Estuaire Emploi"
          description="          Chez estuaire emploi, nous nous engageons à offrir une gamme complète de services visant à 
          optimiser le potentiel humain et commercial, tout en facilitant la croissance et le succès de nos clients. 
          grâce à nos solutions innovantes de placement du personnel, d'offre d'emploi, de conception de cv, de digitalisation
          des entreprises, de géolocalisation des entreprises et de marketing, nous visons à répondre à vos besoins en matière
          de ressources humaines et de développement commercial de manière intégrée et efficace." 
          link="https://estuaireemploi.com/"
          linkTitle="En savoir plus"
        />


        <SingleService
          img="/assets/estuaire_achats.jpg"
          title="Estuaire Achats"
          description="Chez etuaire achats, notre mission est de faciliter le commerce transcontinental et de simplifier 
          les transactions financières internationales pour nos clients en afrique centrale, en offrant un 
          service d'e-commerce complet, de transfert d'argent fiable et d'importation de marchandises de qualité
          en provenance d'europe, d'asie et d'amérique vers le cameroun et d'autres pays de la région." 
          link="https://estuaireachats.com/"
          linkTitle="En savoir plus"
        />

        
    </div>
    

  </div>
  )
}