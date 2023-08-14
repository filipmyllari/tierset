import logoKS from '@/public/assets/kalmarsundspride/Ksplogotyp.svg'
import ksImg1 from '@/public/assets/kalmarsundspride/Mockup.jpg'
import mockNorr from '@/public/assets/norrvulk/Norrvulk-mock.jpg'
import logoNV from '@/public/assets/norrvulk/Norrvulklogotyp.svg'
import mockAuth from '@/public/assets/authenticity/Mockup1.jpg'
import logoAuth from '@/public/assets/authenticity/Authenticitylogotyp.png'
import logoEvent from '@/public/assets/eventstudio/logoEvent.svg'
import event from '@/public/assets/eventstudio/Mockup1.jpg'
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaVuejs,
  FaWordpress,
  FaPalette,
  FaBrain,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiAmazonaws,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiKubernetes,
  SiFirebase,
} from 'react-icons/si'

const mockProjects = [
  {
    id: 1,
    title: 'Kalmarsund Pride',
    img: ksImg1,
    desktopImages: [
      '/assets/kalmarsundspride/Mockup.jpg',
      '/assets/kalmarsundspride/Mockup2.jpg',
      '/assets/kalmarsundspride/Mockup3.jpg',
      '/assets/kalmarsundspride/Mockup4.jpg',
    ],
    logo: logoKS,
    services: ['UX', 'Visuell Design', 'Webb', 'Strategi'],
    skillsIcons: [
      ['Wordpress', FaWordpress],
      ['User Interface', FaPalette],
      ['User Experience', FaBrain],
    ],
    isLogoDark: false,
    desc: 'Kalmarsund Pride - Startad år 2015 av engagerade ideella krafter, har Kalmarsund Pride blomstrat genom åren. Nu var det dags för en efterlängtad uppgradering av deras webbplats, och därför vände de sig till det professionella teamet på Tierset. Med deras expertis och kreativa touch levererade Tierset en helt ny, unik och fräsch design som du kan se nedan. Utforska nu det fantastiska resultatet och få en inblick i det färgsprakande och inkluderande Pride-universumet hos Kalmarsund Pride!',
  },
  {
    id: 2,
    title: 'Norrvulk',
    img: mockNorr,
    desktopImages: [
      '/assets/norrvulk/Mockup1.jpg',
      '/assets/norrvulk/Mockup2.jpg',
      '/assets/norrvulk/Mockup3.jpg',
      '/assets/norrvulk/Mockup4.jpg',
    ],
    logo: logoNV,
    services: ['Visuell Design', 'Webb'],
    skillsIcons: [
      ['Wordpress', FaWordpress],
      ['User Interface', FaPalette],
      ['User Experience', FaBrain],
    ],
    isLogoDark: false,
    desc: "Norrvulk - Etablerad år 2007 som ett ungt och ambitiöst företag, har Norrvulk vuxit och utvecklats genom åren. När det blev dags att ta deras digitala närvaro till nästa nivå, vände de sig till det professionella teamet på Tierset. Med Tierset's expertis inom UX, visuell design, webbutveckling och strategi, skapades en webbplats som inte bara speglar Norrvulk's engagemang för kvalitet och service, utan också stärker deras varumärke i den digitala världen. Utforska den förnyade webbplatsen och upplev Norrvulk's engagemang för excellence inom sitt område, förstärkt av Tierset's kreativa touch.",
  },
  {
    id: 3,
    title: 'Autenticityleads',
    img: mockAuth,
    desktopImages: [
      '/assets/authenticity/Mockup1.jpg',
      '/assets/authenticity/Mockup2.jpg',
      '/assets/authenticity/Mockup3.jpg',
      '/assets/authenticity/Mockup4.jpg',
    ],
    logo: logoAuth,
    services: ['Visuell Design', 'UX', 'Webb'],
    skillsIcons: [
      ['User Interface', FaPalette],
      ['User Experience', FaBrain],
      ['Vue', FaVuejs],
      ['Typescript', SiTypescript],
      ['AWS', SiAmazonaws],
      ['Node.js', FaNodeJs],
    ],
    isLogoDark: true,
    desc: "Authenticity Leads -  Trots att de redan hade en stark digital närvaro, kände de att det fanns utrymme för förbättring och vidareutveckling. Därför vände de sig till det skickliga teamet på Tierset. Tierset, som tog över ett redan påbörjat arbete, införde sin expertis inom UX, visuell design och webbutveckling för att förbättra och vidareutveckla projektet. Resultatet? En webbplats som inte bara maximerar vinsten och ökar kundnöjdheten, men som också ger Authenticity Leads ett övertag över konkurrenterna. Med Tierset's hjälp har Authenticity Leads nu en plattform som säkerställer att endast äkta telefonnummer och e-postadresser tillåts genom deras system, vilket sparar tid och pengar för deras kunder. Utforska den förnyade webbplatsen och upplev hur Authenticity Leads och Tierset tillsammans har skapat en lösning som sätter kvaliteten i första rummet.",
  },
  {
    id: 4,
    title: 'Boka Eventstudio',
    img: event,
    desktopImages: [
      '/assets/eventstudio/Mockup1.jpg',
      '/assets/eventstudio/Mockup2.jpg',
      '/assets/eventstudio/Mockup3.jpg',
      '/assets/eventstudio/Mockup4.jpg',
    ],
    logo: logoEvent,
    services: ['UX', 'Visuell Design', 'Webb', 'Strategi'],
    skillsIcons: [
      ['User Interface', FaPalette],
      ['User Experience', FaBrain],
      ['Next.js', SiNextdotjs],
      ['Typescript', SiTypescript],
      ['AWS', SiAmazonaws],
      ['Node.js', FaNodeJs],
      ['SQL', SiPostgresql],
      ['Tailwind', SiTailwindcss],
    ],
    isLogoDark: true,
    desc:  'Boka Eventstudio - Från en enkel idé till en konkret verklighet, har Boka Eventstudios blivit till tack vare det engagerade och professionella teamet på Tierset. Boka Eventstudios, en unik plattform som fungerar som en förmedlingssida mellan företag som erbjuder studios för streaming och event, samt kunder som vill skapa dem. Från strategi och varumärkesutveckling till logotypdesign och webbutveckling, har Tierset levererat en komplett lösning som har förvandlat vision till verklighet. Utforska det fantastiska resultatet och bli en del av Boka Eventstudios!'
  },
]

export default mockProjects
