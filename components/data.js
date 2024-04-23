  // icons
  import {
    HiUser,
    HiSquare2Stack,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
  } from "react-icons/hi2";
  
import {
    RxDesktop,
  } from "react-icons/rx";
  
import {
    BiBug,
  } from "react-icons/bi";
  
import {
    FaBug,
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
  } from "react-icons/fa";
  
  import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
  } from "react-icons/si";

  import { IoSchool } from "react-icons/io5";
  

// nav data
export const navData = [
  { name: "Inicio", path: "/", icon: <HiUser size={28} /> },
  { name: "Expertis", path: "/about", icon: <IoSchool size={28}/> },
  { name: "Servicios", path: "/services", icon: <HiRectangleGroup size={28} /> },
  { name: "Trabajos", path: "/work", icon: <HiSquare2Stack size={28}/> },
  {
    name: "Testimonios",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText size={28}/>,
  },
  {
    name: "Contacto",
    path: "/contact",
    icon: <HiEnvelope size={28}/>,
  },
];

  //  About data
  export const aboutData = [
    {
      title: 'expertise',
      info: [
        {
          title: 'Desarrollo Web',
          icons: [
            <FaHtml5 />,
            <FaCss3 />,
            <FaJs />,
            <FaReact />,
            <SiNextdotjs />,
            <SiFramer />,
          ],
        },
        {
          title: 'Diseño UI/UX',
          icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
        },
      ],
    },
    {
      title: 'Experiencia laboral reciente',
      info: [
        {
          title: 'Desarrollo full stack web - El Cazatalentos, Hidalgo',
          year: '2023',
        },
        {
          title: 'Desarrollo full stack movil - PI & UVIE, Hidalgo',
          year: '2022',
        },
        {
          title: 'Diseño UX/UI - Consejo coordinador empresarial, Hidalgo',
          year: '2021',
        },
      ],
    },
    {
      title: 'Educación',
      info: [
        {
          title: 'Ing. Desarrollo y gestión de software - UTTT ',
          year: '2023',
        },
        {
          title: 'TSU. Desarrollo de software multiplataforma - UTTT',
          year: '2022',
        },
        {
          title: 'Programación orientada a objetos - CBTIS 200',
          year: '2021',
        },
      ],
    },
  ];
  
  // Services data
  export const servicesData = [
    {
        icon: <FaFigma />,
        title: 'Diseño UI/UX',
        description: 'Diseño intuitivo y atractivo para experiencias digitales memorables.',
    },
    {
        icon: <RxDesktop />,
        title: 'Desarrollo Web',
        description: 'Construcción de sitios web modernos y funcionales para tu marca.',
    },
    {
      icon: <FaReact />,
      title: 'Desarrollo movil',
      description: 'Creación de aplicaciones móviles robustas y escalables para tus necesidades específicas.',
    },
    {
      icon: <BiBug />,
      title: 'Bug fixing',
      description: 'Identificación y solución rápida de problemas para mantener tu sistema en funcionamiento óptimo.',
    },
    {
      icon: <FaNodeJs />,
      title: 'Desarrollo Backend',
      description: 'Construcción de la parte central de tu aplicación para un rendimiento eficiente y seguro.',
    },
  ];

  // Work data
export const workData = {
  slides: [
    {
      images: [
        {
          title: 'title',
          url: '/img1.png',
          link: 'https://www.cceh.com.mx/',
        },
        {
          title: 'title',
          url: '/img2.png',
          link: 'https://www.elcazatalentos.com.mx/',
        }
      ],
    },
    {
      images: [
        {
          title: 'title',
          url: '/img3.png',
          link: 'https://www.erpsanandres.com/Account/Login',
        },
        {
          title: 'title',
          url: '/img4.png',
          link: 'https://suprxtecharmandovl.vercel.app/',
        }
      ],
    },
  ],
};

//  Testimonial data
export const testimonialData = [
  {
    url: '/person-1.jpg',
    name: 'Alejandro Sánchez',
    position: 'Presidente del CCEH',
    message:
      'Estamos encantados con la página web que este joven creó para nosotros. Su trabajo fue excepcional y estamos muy agradecidos por su dedicación.',
  },
  {
    url: '/person-2.jpg',
    name: 'Edwin Uriel',
    position: 'Fundador del Cazatalentos',
    message:
      'El equipo detrás de nuestra página web de conciertos y votación hizo un trabajo increíble; estamos muy satisfechos con su trabajo, esperamos volver a colaborar juntos otra vez.',
  },
  {
    url: '/person-3.jpg',
    name: 'José Luis',
    position: 'Ing. en PI & UVIE',
    message:
      'La aplicación movil nos ha facilitado el trabajo en la recopilación de datos y la generación de informes. Estamos muy contentos con el resultado.',
  },
  {
    url: '/person-4.jpg',
    name: 'Ana Lilia',
    position: 'Delegada en San Andrés',
    message:
      'La web que implementamos ha sido clave en nuestra lucha contra la corrupción y la pérdida de datos, mejorando la transparencia y eficiencia en los pagos.',
  },
];
