import { BootstrapReboot, PipFill, Strava } from "react-bootstrap-icons";

export default function Values(){

  return(
    <div className="flex-flex-col md:grid grid-cols-3 gap-10 px-8 my-12">
        <div className="flex flex-col">
          <PipFill className="text-6xl text-blue"/>
          <h1 className="text-blue font-bold text-2xl my-5">Planning</h1>
          <p className="text-justify">Notre mission est de fournir à nos clients des solutions de services exceptionnelles et sur mesure, 
            qui dépassent leurs attentes et contribuent à leur succès. En nous appuyant sur notre expertise, notre créativité 
            et notre engagement envers l'excellence, nous nous efforçons d'établir des partenariats solides avec nos clients, 
            en les aidant à atteindre leurs objectifs commerciaux et à prospérer dans un environnement concurrentiel. Nous nous engageons 
            à offrir un service client exceptionnel, à stimuler l'innovation dans tout ce que nous entreprenons, et à maintenir des normes 
            élevées d'intégrité et de professionnalisme dans toutes nos interactions. Notre vision est de devenir le partenaire de choix pour 
            nos clients en matière de prestation de services, reconnu pour notre qualité, notre fiabilité et notre capacité à apporter une réelle 
            valeur ajoutée à leurs activités.
            </p>
        </div>


        <div className="flex flex-col my-12 md:my-0 animate__animated animate__backInUp duration-1000">
          <Strava className="text-6xl text-blue"/>
          <h1 className="text-blue font-bold text-2xl my-5">Vision : Stratégie</h1>
          <p className="text-justify">Notre vision est de devenir le leader incontesté dans le domaine des services,
             reconnu pour notre capacité à innover, à anticiper et à répondre aux besoins changeants de nos clients. 
             Nous cherchons à établir des normes de qualité et d'excellence dans tout ce que nous entreprenons, en offrant 
             des solutions de services novatrices qui repoussent les limites de l'industrie. Nous aspirons à créer un impact 
             positif durable sur nos clients, nos employés, nos partenaires et les communautés dans lesquelles nous opérons.
              En cultivant une culture d'entreprise axée sur l'innovation, l'intégrité et la responsabilité sociale, nous visons 
              à bâtir un héritage solide et durable, tout en restant à l'avant-garde des évolutions du marché et des attentes de nos parties prenantes.
            </p>
        </div>
      


        <div className="flex flex-col">
          <BootstrapReboot className="text-6xl text-blue"/>
          <h1 className="text-blue font-bold text-2xl my-5">Objectifs : Résultats</h1>
          <p className="text-justify">Excellence opérationnelle, Croissance du chiffre d'affaires,
             Satisfaction client, Innovation et adaptation, Développement des compétences, Responsabilité
              sociale et environnementale.
            </p>
        </div>
    </div>
  )
}