import SingleService from "../../components/single-service/SingleService";

export default function ServicesComponents() {
  return (
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
          description="Chez estuaire learning, nous croyons en l'importance de l'apprentissage
           continu et de l'enrichissement personnel. nous offrons une vaste sélection de formations
            en ligne de haute qualité, ainsi qu'une bibliothèque de livres numériques captivants, conçus
             pour vous aider à développer de nouvelles compétences, à élargir vos horizons et à atteindre
              vos objectifs personnels et professionnels."
          link="https://learning.estuaireservices.com/"
          linkTitle="En savoir plus"
        />

        <SingleService
          img="/assets/estuaire_emploi.jpg"
          title="Estuaire Emploi"
          description="Chez estuaire emploi, nous nous engageons à offrir une gamme complète de services visant à 
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

        <SingleService
          img="/assets/estuaire_immobilier.jpg"
          title="Immobilier de l'estuaire"
          description="Chez immobilier de l’estuaire, nous nous engageons à offrir des solutions immobilières complètes
           et sur mesure, conçues pour répondre à vos besoins uniques en matière d'investissement, de vente, d'achat ou
           de location de biens immobiliers."
          link="https://imes.estuaireservices.com/"
          linkTitle="En savoir plus"
        />


        <SingleService
          img="/assets/estuaire_radio.jpg"
          title="Radio de l'estuaire"
          description="Chez Radio de l'Estuaire, notre mission est d'offrir des contenus de qualité, allant
           de l'information locale aux émissions musicales, en passant par des débats et des interviews, 
           afin de créer un lien fort entre les auditeurs et les acteurs de notre territoire. En collaborant 
           avec des artistes, des entrepreneurs et des associations, nous cherchons à stimuler l'innovation et à encourager le partage d'idées."
          link="https://radioestuaire.estuaireservices.com/"
          linkTitle="En savoir plus"
        />

        <SingleService
          img="/assets/estuaire_btp.jpg"
          title="Estuaire BTP"
          description="Chez Estuaire BTP, nous nous engageons à fournir une gamme complète de services dédiée à 
          l'optimisation du potentiel dans le secteur du bâtiment et des travaux publics. Notre objectif est de 
          faciliter la croissance et le succès de nos partenaires. Grâce à nos solutions innovantes en matière de 
          recrutement, de formation, de gestion de projets, de digitalisation, et de marketing, nous répondons de manière 
          intégrée et efficace à vos besoins en ressources humaines et en développement commercial. Ensemble, construisons 
          l'avenir de votre entreprise !"
          link="https://btp.estuaireservices.com/"
          linkTitle="En savoir plus"
        />


        <SingleService
          img="/assets/estuaire_auto.jpg"
          title="Estuaire Auto"
          description="Chez Estuaire Auto, nous nous engageons à offrir une expérience d'apprentissage complète pour 
          tous ceux qui souhaitent obtenir leur permis de conduire. Notre objectif est de favoriser la réussite de nos 
          élèves en leur fournissant des formations de qualité et un encadrement personnalisé. Grâce à nos méthodes pédagogiques 
          innovantes et à notre équipe d'instructeurs expérimentés, nous vous accompagnons à chaque étape de votre parcours, que 
          ce soit pour la conduite traditionnelle ou des cours spécialisés. Ensemble, prenons la route vers votre indépendance et 
          construisons l'avenir de votre mobilité !"
          link="https://estuaireauto.estuaireservices.com/"
          linkTitle="En savoir plus"
        />


        <SingleService
          img="/assets/clean_estuaire.jpg"
          title="Clean Estuaire"
          description="Chez Clean Estuaire, nous nous consacrons à offrir des services de pressing, de repassage et de 
          blanchisserie de haute qualité, adaptés aux besoins de notre clientèle. Notre objectif est de simplifier votre 
          quotidien en garantissant des vêtements impeccables et un service irréprochable. Grâce à nos techniques de nettoyage 
          respectueuses et à notre attention aux détails, nous assurons un soin optimal de vos textiles. Ensemble, préservons 
          l’éclat de vos vêtements et construisons un avenir plus propre et plus soigné pour votre garde-robe !"
          link="https://clean.estuaireservices.com/"
          linkTitle="En savoir plus"
        />


        <SingleService
          img="/assets/estuaire_assurance.jpg"
          title="Estuaire Assur"
          description="Chez Estuaire Assur, nous nous engageons à offrir des solutions d'assurance adaptées spécifiquement
           aux besoins des étudiants. Notre objectif est de garantir votre tranquillité d'esprit tout au long de votre parcours
            académique. Grâce à nos offres sur mesure, incluant l'assurance santé, l'assurance habitation et la responsabilité 
            civile, nous vous accompagnons pour protéger ce qui compte le plus pour vous. Notre équipe d'experts est à votre 
            disposition pour vous conseiller et vous aider à choisir la couverture qui correspond le mieux à votre situation.
             Ensemble, sécurisons votre avenir et construisons un environnement d'étude serein et protégé !"
          link="https://assur.estuaireservices.com/"
          linkTitle="En savoir plus"
        />


        <SingleService
          img="/assets/estuaire_com.jpg"
          title="Estuaire Communication"
          description="Chez Estuaire Communication, nous nous engageons à offrir des solutions de communication
           digitale adaptées spécifiquement aux besoins de nos clients. Notre objectif est de garantir votre visibilité
            et votre succès dans le monde numérique. Grâce à nos services sur mesure, incluant la création de sites web,
             la gestion des réseaux sociaux et le marketing digital, nous vous accompagnons pour optimiser votre présence
              en ligne. Notre équipe d'experts est à votre disposition pour vous conseiller et vous aider à élaborer une
               stratégie de communication qui correspond le mieux à vos objectifs. Ensemble, développons votre image de
                marque et construisons un avenir digital serein et prospère !"
          link="https://communication.estuaireservices.com/"
          linkTitle="En savoir plus"
        />

      </div>

    </div>
  )
}