import projects1 from "../src/assets/projects1.png";
import projects2 from "../src/assets/projects2.png";
import projects3 from "../src/assets/projects3.png";
import projects4 from "../src/assets/projects4.png";
import projects5 from "../src/assets/projects5.png";
import projects6 from "../src/assets/projects6.png";
import projects7 from "../src/assets/projects7.png";
import projects8 from "../src/assets/projects8.png";
import project9 from "../src/assets/projects9.png";
import project10 from "../src/assets/projects10.png";
import { source } from "framer-motion/client";

export const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Manmeet Singh, a creative frontend developer, crafting immersive and intuitive web experiences.",
  description:
    "I’m currently working as a front-end developer at a startup for the past few months. I'm primarily working with Vue.js, and I also work on personal projects using React.js.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Zobiko",
    techStack: ["Vue.js", "Javascript", "HTML", "CSS", "Vuex"],
    description:
      "This is a modern job and profile management platform built with Nuxt 3 and Vuetify 3, featuring secure authentication, onboarding flows, and custom middleware for route protection. It includes rich text editors for structured content input and supports native sharing of job posts and profiles via the Web Share API. The platform is SEO-friendly with dynamic sitemap generation and is built using a modular, responsive UI architecture for scalability and maintainability.",
    image: projects8,
    link: "https://www.web.zobiko.com/",
    sourceCode: "",
  },
  {
    name: "Warehouse Management System (In Progress)",
    techStack: ["Vue.js", "Javascript", "HTML", "CSS", "Vuex"],
    description:
      "This Warehouse Management System (WMS) is a scalable and modular application built from scratch using Vue 3, Vuetify 3, and Vuex, designed to handle complex warehouse operations. It features dynamic hierarchical location mapping (Hall → Room → Rack → Bin), multi-tab inventory handling, API-integrated dependent dropdowns, and role-based access control (RBAC). The system includes modules like Dashboard, Inventory, QA, Reports, Notifications, and Settings, all developed with a focus on usability, performance, and maintainability.",
    image: project9,
    link: "",
    sourceCode: "",
  },
  {
    name: "CyberVibe Landing Page",
    techStack: ["React.js", "Javascript", "HTML", "CSS"],
    description:
      "CyberVibe build tools for developers Empower your creativity and bring your VR app ideas to life with our inituitive development tools.Get started today and turn your imagination into immersive reality!",
    image: project10,
    link: "https://landing-page-orpin-ten.vercel.app/",
    sourceCode: "",
  },
  {
    name: "Income Tracker",
    techStack: ["Vue.js", "Javascript", "HTML", "CSS"],
    description:
      "A convenient application for managing and tracking your income. Users can add income entries with a detailed description, amount, and date.Additionally, users can delete entries as needed, maintaining an up-to-date and clutter-free tracker.",
    image: projects3,
    link: "https://vue-income-tracker-lyart.vercel.app/",
    sourceCode: "",
  },
  {
    name: " Keeper App",
    description:
      "A simple and intuitive note-taking application that allows users to easily add and manage notes. Users can create notes with titles and detailed content, ensuring all important information is organized and readily accessible. The app features a clean and user-friendly interface, making it easy to capture thoughts, to-dos, and ideas on the go.",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    image: projects4,
    link: "",
    sourceCode: "https://github.com/ManmeetSingh99/keeper-app",
  },
  {
    name: "Portfolio",
    techStack: ["React js", "Javascript", "HTML", "CSS", "Framer Motion"],
    description:
      "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    image: projects1,
    sourceCode:
      "https://github.com/ManmeetSingh99/React-Portfolio-framer-motion",
    link: "",
  },
  {
    name: "Portfolio",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    description:
      "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    image: projects2,
    sourceCode: "https://github.com/ManmeetSingh99/react-portfolio",
    link: "",
  },

  {
    name: "Portfolio",
    description:
      "A sleek platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    techStack: ["Javascript", "HTML", "CSS"],
    image: projects5,
    link: "https://github.com/ManmeetSingh99/PortfolioJs.github.io",
    sourceCode: "",
  },
  {
    name: "Weather Application",
    description:
      "A comprehensive and user-friendly application that provides real-time weather updates. Users can view current weather conditions, including temperature, humidity, and wind speed, for their selected location. The app also offers detailed forecasts for the upcoming days, helping users plan their activities accordingly.",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    image: projects6,
    link: "https://github.com/ManmeetSingh99/WeatherWebsiteReact",
    source: "",
  },
  {
    name: "Portfolio",
    description:
      "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    image: projects7,
    link: "https://animated-portfolio-react.vercel.app/",
    sourceCode: "",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I’m a frontend developer with 1 year of hands-on experience building responsive, high-performance web applications. I specialize in React, Vue.js, and Tailwind CSS, crafting user interfaces that are both intuitive and visually engaging.",
    "I specialize in using technologies like React, Vue.js and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "July, 2023 — Now",
    title: "Front-End Developer",
    company: "CodeNicely Pvt. Ltd, Raipur",
    description: [
      " Developed a scalable, modular frontend architecture using Vue 3 and Vuetify 3.",

      "Collaborated with backend developers and product teams to design and implement user interfaces.",

      "Ensured state consistency and modularity using Vuex for complex data flows across multiple tabs/modules.",

      "Implemented dynamic form structures, multi-level data hierarchies, and interdependent dropdowns.",

      "Integrated rich text editors and dynamic sharing features using Web APIs.",

      "Managed user access and redirection using custom middleware and authentication logic in Nuxt 3.",
      "Optimized performance and user experience through lazy loading, code splitting, and efficient state management.",
      "Developed and maintained a large-scale Warehouse Management System (WMS) using Vue 3, Vuetify 3, and Vuex.",
    ],
  },
  {
    yearRange: "April, 2023 — June, 2023",
    title: "Software Developer Trainee",
    company: "Interbiz Consulting Pvt.Ltd, Raipur",
    description: [
      "Developed a console application for a student management system.",
      "Designed and implemented a database for managing member details such as address, contact information, bank accounts, educational background, and employment history.",
      "Actively participated in code reviews, providing and receiving constructive feedback to improve code quality.",
    ],
  },
  {
    yearRange: "October, 2021 — November, 2021",
    title: "Web Developer Intern",
    company: "LetsGrowMore, Remote",
    description: [
      "Created a responsive single-page portfolio website to showcase personal projects, skills, and experiences.",
      "Developed reusable React components for efficient code management.",
    ],
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "manmeetsvirdi99@gmail.com",
  socialLinks: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/mannnu1699/",
      ariaLabel: "Follow me on Instagram",
      icon: "RiInstagramFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/ManmeetSingh99",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "www.linkedin.com/in/manmeetsingh1699",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Jason Root. All rights reserved.`,
};
