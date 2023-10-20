import {
  FaNodeJs,
  FaVuejs,
  FaWordpress,
  FaPalette,
  FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiAmazonaws,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

const mockProjects = [
  {
    id: 1,
    title: "Kalmarsund Pride",
    img: "https://tierset.s3.eu-north-1.amazonaws.com/assets/kalmarsundspride/Mockup.jpg",
    desktopImages: [
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/kalmarsundspride/Mockup.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/kalmarsundspride/Mockup2.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/kalmarsundspride/Mockup3.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/kalmarsundspride/Mockup4.jpg",
    ],
    logo: "https://tierset.s3.eu-north-1.amazonaws.com/assets/kalmarsundspride/Ksplogotyp.svg",
    services: ["UX", "Visuell Design", "Webb", "Strategi"],
    skillsIcons: [
      ["Wordpress", FaWordpress],
      ["User Interface", FaPalette],
      ["User Experience", FaBrain],
    ],
    isLogoDark: false,
    desc: "Kalmarsund Pride - Startad år 2015 av engagerade ideella krafter, har Kalmarsund Pride blomstrat genom åren. Nu var det dags för en efterlängtad uppgradering av deras webbplats, och därför vände de sig till det professionella teamet på Tierset. Med deras expertis och kreativa touch levererade Tierset en helt ny, unik och fräsch design som du kan se nedan. Utforska nu det fantastiska resultatet och få en inblick i det färgsprakande och inkluderande Pride-universumet hos Kalmarsund Pride!",
  },
  {
    id: 2,
    title: "Norrvulk",
    img: "https://tierset.s3.eu-north-1.amazonaws.com/assets/norrvulk/Norrvulk-mock.jpg",
    desktopImages: [
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/norrvulk/Mockup1.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/norrvulk/Mockup2.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/norrvulk/Mockup3.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/norrvulk/Mockup4.jpg",
    ],
    logo: "https://tierset.s3.eu-north-1.amazonaws.com/assets/norrvulk/Norrvulklogotyp.svg",
    services: ["Visuell Design", "Webb"],
    skillsIcons: [
      ["Wordpress", FaWordpress],
      ["User Interface", FaPalette],
      ["User Experience", FaBrain],
    ],
    isLogoDark: false,
    desc: "Norrvulk - Etablerad år 2007 som ett ungt och ambitiöst företag, har Norrvulk vuxit och utvecklats genom åren. När det blev dags att ta deras digitala närvaro till nästa nivå, vände de sig till det professionella teamet på Tierset. Med Tierset's expertis inom UX, visuell design, webbutveckling och strategi, skapades en webbplats som inte bara speglar Norrvulk's engagemang för kvalitet och service, utan också stärker deras varumärke i den digitala världen. Utforska den förnyade webbplatsen och upplev Norrvulk's engagemang för excellence inom sitt område, förstärkt av Tierset's kreativa touch.",
  },
  {
    id: 3,
    title: "Autenticityleads",
    img: "https://tierset.s3.eu-north-1.amazonaws.com/assets/authenticity/Mockup1.jpg",
    desktopImages: [
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/authenticity/Mockup1.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/authenticity/Mockup2.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/authenticity/Mockup3.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/authenticity/Mockup4.jpg",
    ],
    logo: "https://tierset.s3.eu-north-1.amazonaws.com/assets/authenticity/Authenticitylogotyp.png",
    services: ["Visuell Design", "UX", "Webb"],
    skillsIcons: [
      ["User Interface", FaPalette],
      ["User Experience", FaBrain],
      ["Vue", FaVuejs],
      ["Typescript", SiTypescript],
      ["AWS", SiAmazonaws],
      ["Node.js", FaNodeJs],
    ],
    isLogoDark: true,
    desc: "Authenticity Leads -  Trots att de redan hade en stark digital närvaro, kände de att det fanns utrymme för förbättring och vidareutveckling. Därför vände de sig till det skickliga teamet på Tierset. Tierset, som tog över ett redan påbörjat arbete, införde sin expertis inom UX, visuell design och webbutveckling för att förbättra och vidareutveckla projektet. Resultatet? En webbplats som inte bara maximerar vinsten och ökar kundnöjdheten, men som också ger Authenticity Leads ett övertag över konkurrenterna. Med Tierset's hjälp har Authenticity Leads nu en plattform som säkerställer att endast äkta telefonnummer och e-postadresser tillåts genom deras system, vilket sparar tid och pengar för deras kunder. Utforska den förnyade webbplatsen och upplev hur Authenticity Leads och Tierset tillsammans har skapat en lösning som sätter kvaliteten i första rummet.",
  },
  {
    id: 4,
    title: "Boka Eventstudio",
    img: "https://tierset.s3.eu-north-1.amazonaws.com/assets/eventstudio/Mockup1.jpg",
    desktopImages: [
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/eventstudio/Mockup1.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/eventstudio/Mockup2.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/eventstudio/Mockup3.jpg",
      "https://tierset.s3.eu-north-1.amazonaws.com/assets/eventstudio/Mockup4.jpg",
    ],
    logo: "https://tierset.s3.eu-north-1.amazonaws.com/assets/eventstudio/logoEvent.svg",
    services: ["UX", "Visuell Design", "Webb", "Strategi"],
    skillsIcons: [
      ["User Interface", FaPalette],
      ["User Experience", FaBrain],
      ["Next.js", SiNextdotjs],
      ["Typescript", SiTypescript],
      ["AWS", SiAmazonaws],
      ["Node.js", FaNodeJs],
      ["SQL", SiPostgresql],
      ["Tailwind", SiTailwindcss],
    ],
    isLogoDark: true,
    desc: "Boka Eventstudio - Från en enkel idé till en konkret verklighet, har Boka Eventstudios blivit till tack vare det engagerade och professionella teamet på Tierset. Boka Eventstudios, en unik plattform som fungerar som en förmedlingssida mellan företag som erbjuder studios för streaming och event, samt kunder som vill skapa dem. Från strategi och varumärkesutveckling till logotypdesign och webbutveckling, har Tierset levererat en komplett lösning som har förvandlat vision till verklighet. Utforska det fantastiska resultatet och bli en del av Boka Eventstudios!",
  },
];

export default mockProjects;
