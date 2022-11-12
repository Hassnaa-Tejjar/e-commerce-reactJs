
import AccordionWrapper from './AccordionWrapper'; 
import AccordionItem from './AccordionItem';
import './Accordion.css';


function AboutUs() {

  const data = [
    {
      "title": "Mot du fondateur",
      "description":`La Société 5S MAROC est créé après une réflexion de fond qui a été encadré  d’une part, par les résultats  d’une vaste consultation auprès de plusieurs intervenants industriels et de professionnels des métiers de service aux entreprises et d’autre  part, par  le retour d’expérience, de son fondateur, dans le domaine industrielle et services.
       Cette longue réflexion a défini  la « raison d’être » de la société  « 5S MAROC ». 
       Engageante, cette raison d’être affirme avec détermination l’ambition de  jouer un rôle moteur dans les transformations positives de l’industrie marocaine et  des services annexes, et d’introduire et  de développer des activités et services qui parlent le langage : « 5S ».
       Le modèle d’affaires résilient de 5S MAROC s’incarne dans sa raison d’être au service d’un avenir meilleur et durable.
       Les équipes sont rassemblées autour d’un socle de valeurs partagées, pour offrir à ses clients des services et prestations respectant la  culture 5S avec une démarche d’amélioration continue.`
    }

    ,
    {
      "title": "Nos valeurs",
      "description": `Les valeurs de la société 5S MAROC : DISCIPLINE, RESPONSABILITE, ENGAGEMENT se concrétisent dans chaque activité, auprès de l’ensemble de ses clients. 
      5S MAROC agit avec intégrité en lien avec son  Code de conduite. 
      Un Module de formation basique, portant sur la législation de travail, le code de conduite interne en plus du module technique 5S, a été élaboré : chaque employé (quelle que soit sa catégorie et sa fonction) intégrant 5S MAROC doit suivre cette formation avec une évaluation positive. 
      Le chalenge étant de taille pour améliorer la façon de parler services, nous avons vite signé un contrat d’accompagnement RH (recrutement, formation et administration) avec LE Cabinet BEN'S MODERNHR(WWW.BENSMODERNHR.COM).`
    },
    {
      "title": "Nos métiers",
      "description": `Sont encadrées par la raison d’être de notre société, et sont orienté Client pour aller au delà de satisfaire votre cahier de charge pour être un partenaire qui vous accompagne pour avoir le niveau 5S nécessaire comme base de de votre système  qualité et de votre démarche d’amélioration continue: 
      -Conseil, Formation  et accompagnement en gestion industrielle. 
      -Maintenance et entretien des bâtiments, installations et espace  verts. 
      -le nettoyage de bureaux,  d’immeubles, de locaux privés. 
      -désinfection et extermination  de nuisibles. 
      -Entretien des espaces verts. 
      -Maintenance du bâtiment et ces  installations (électrique, pneumatique et climatisation). 
      -Travaux divers 5S. 
      -Réaménagement des espaces. 
      -Conception et fabrication des moyens de  stockage. 
      -Menuiserie, Serrurerie, fermeture,  Plomberie, Electricité, Éclairage, Peinture,Carrelage... 
      -Fourniture industrielle. 
      -Fourniture de bureau. 
      -Fourniture des produits et moyens de  nettoyage industriel. 
      -Fourniture de plastique d’emballage. 
      -Visserie.`
    },
    {
      "title": "Démarche qualité",
      "description": `Nous adaptons nos moyens a Vos besoins et nous mettons a votre service une équipe formée, motivée et engagée Pour aller au-delà de vous satisfaire pour vous être une force de proposition et de conseils et accompagner  ainsi votre démarche d’amélioration continue confirme le directeur général de 5SMAROC. 
      Désireux d’entamer la démarche certification à la norme ISO 9002. 
      5S MAROC a l’ambition de s’investir en terme de produit et méthodes qui unies l’efficacité et le respect de l’environnement. 
      Nos opérations suivent un processus standard en se basant sur la Méthodologie PDCA et en intégrant en premier lieu l’adhésion de l’ensemble du personnel, l'engagement de la direction pour assurer une amélioration continue de nos services (qualité/cout ) et permettre  ainsi a nos clients fidèle de réaliser des bénéfices. 
      -Rédiger un cahier des charges, estimer les coûts, réaliser un planning. 
      -Etablir les ressources à mettre en œuvre. 
      -Définir les indicateurs clés de performance qui permettront. 
      -de mesurer les résultats obtenus. 
      -Former, Sensibiliser et mobiliser les différents collaborateurs. 
      -impliqués dans le service. 
      Une fois la solution planifiée, il est alors temps de la mettre en oeuvre. Le déploiement peut être assuré par : 
      -Les collaborateurs concernés. 
      -Le manager multiservice lui-même. 
      -le directeur général doit toutefois s’assurer que le plan valide par ses soins est bien compris et déployé selon les modalités prévues.`
    }
  ];

  return (
    <div className="App">
      <div className="content">
        <div className="app-description">
      
        </div>
          <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
            ))}
          </AccordionWrapper>

           
      </div>

    </div>

  );
}

export default AboutUs;