import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },

  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: "/assets/tech/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Three.js",
      icon: "/assets/tech/threejs.svg",
      link: "https://threejs.org/",
    },
    {
      name: "Styled-Components",
      icon: "/assets/tech/styled-components.png",
      link: "https://styled-components.com/",
    },
    {
      name: "Framer-motion",
      icon: "/assets/tech/framer.svg",
      link: "https://www.framer.com/motion/",
    },
    {
      name: "Redux/Redux-toolkit",
      icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
      link: "https://redux.js.org",
    },
    {
      name: "NextAuth.js",
      icon: "/assets/tech/nextauthjs.png",
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: "/assets/tech/prisma.svg",
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: "/assets/tech/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: "/assets/tech/docker.svg",
      link: "https://www.docker.com/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: "/assets/tech/firebase.svg",
      link: "https://firebase.google.com/",
    },
  ],
};

const experiences = [
  {
    title: "Full Stack Developer - Team Leader",
    company_name: "Network-IT   ",
    icon: "/assets/company/vku.svg",
    iconBg: "#E6DEDD",
    date: "September 2024 - November 2024",
    points: [
      "Led a team to develop a comprehensive social networking platform connecting people through posts, interactions, chat, and video calls.",
      "Implemented robust technology stack using ReactJS frontend, NodeJS backend, MySQL primary database, and Firebase for real-time management.",
      "Integrated advanced communication features including WebRTC and Stringee SDK for seamless video and voice calling functionality.",
      "Managed Firebase Authentication with Gmail and OTP, Firebase Storage for media content, and real-time messaging with Firebase Realtime Database.",
      "GitHub: https://github.com/hapdev05/Network-Client & https://github.com/hapdev05/Network_Server",
    ],
  },
  {
    title: "Full Stack Developer - Team Leader", 
    company_name: "Silent English Learning Platform",
    icon: "/assets/company/vku.svg",
    iconBg: "#E6DEDD",
    date: "December 2024 - January 2025",
    points: [
      "Led development of an inclusive web-based English learning platform specifically designed for the hearing impaired community.",
      "Built with ReactJS, TypeScript, Vite, and Tailwind CSS focusing on accessibility features including ARIA for screen readers and keyboard navigation.",
      "Implemented Firebase Authentication with email and Google login, Firebase Firestore for real-time learning progress tracking.",
      "Integrated video, image, and text-based learning materials with sign language support for comprehensive visual learning experience.",
      "GitHub: https://github.com/hapdev05/Silent_English",
    ],
  },
  {
    title: "Mobile Developer - Team Leader",
    company_name: "Delivery Application System", 
    icon: "/assets/company/vku.svg",
    iconBg: "#E6DEDD",
    date: "April 2025 - May 2025",
    points: [
      "Developed a comprehensive delivery application connecting senders, receivers, and delivery personnel with real-time synchronization.",
      "Built using React Native and TypeScript for cross-platform mobile development with Node.js backend integration.",
      "Implemented Firebase Authentication for secure login, Firebase Realtime Database for live order tracking and status updates.",
      "Created admin panel for user and order management, integrated payment processing and real-time shipment tracking features.",
      "GitHub: https://github.com/hapdev05/App_ghtk & https://github.com/hapdev05/AppMobile_server",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Network-IT Social Platform",
    description:
      "A comprehensive social networking platform that connects people through posts, interactions, real-time chat, and video calls. Built with ReactJS frontend, NodeJS backend, MySQL database, and Firebase for real-time features including WebRTC and Stringee SDK integration.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "webrtc",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/network.png",
    source_code_link: "https://github.com/hapdev05/Network-Client",
    deployed_link: "https://github.com/hapdev05/Network_Server",
  },
  {
    name: "Silent English Learning Platform",
    description:
      "An inclusive web-based English learning platform designed specifically for the hearing impaired. Features interactive exercises, sign language integration, visual learning materials, and real-time progress tracking with comprehensive accessibility support.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/slientEnglish.png",
    source_code_link: "https://github.com/hapdev05/Silent_English",
    deployed_link: "https://silentenglish.vercel.app",
  },
  {
    name: "Delivery Application System",
    description:
      "A comprehensive delivery application connecting senders, receivers, and delivery personnel with real-time synchronization. Features order tracking, payment processing, admin panel, and cross-platform mobile development using React Native and Firebase.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "realtime-database",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/delivery-app1.png",
    source_code_link: "https://github.com/hapdev05/App_ghtk",
    deployed_link: "https://github.com/hapdev05/AppMobile_server",
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/hapdev05",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/hoanhanhphi/",
  },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "React/Nodejs developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "ReactNative developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
