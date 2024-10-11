import projects1 from "../src/assets/projects1.png";
import projects2 from "../src/assets/projects2.png";
import projects3 from "../src/assets/projects3.png";
import projects4 from "../src/assets/projects4.png";
import projects5 from "../src/assets/projects5.png";
import projects6 from "../src/assets/projects6.png";
import projects7 from "../src/assets/projects7.png";

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
    name: "Portfolio",
    techStack: ["React js", "Javascript", "HTML", "CSS", "Framer Motion"],
    description:
      "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    image: projects1,
    link: "https://github.com/ManmeetSingh99/React-Portfolio-framer-motion",
  },
  {
    name: "Portfolio",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    description:
      "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    image: projects2,
    link: "https://github.com/ManmeetSingh99/react-portfolio",
  },
  {
    name: "Income Tracker",
    techStack: ["Vue.js", "Javascript", "HTML", "CSS"],
    description:
      "A convenient application for managing and tracking your income. Users can add income entries with a detailed description, amount, and date.Additionally, users can delete entries as needed, maintaining an up-to-date and clutter-free tracker.",
    image: projects3,
    link: "https://github.com/ManmeetSingh99/vue-income-tracker",
  },
  {
    name: " Keeper App",
    description:
      "A simple and intuitive note-taking application that allows users to easily add and manage notes. Users can create notes with titles and detailed content, ensuring all important information is organized and readily accessible. The app features a clean and user-friendly interface, making it easy to capture thoughts, to-dos, and ideas on the go.",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    image: projects4,
    link: "https://github.com/ManmeetSingh99/keeper-app",
  },
  {
    name: "Portfolio",
    description:
      "A sleek platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    techStack: ["Javascript", "HTML", "CSS"],
    image: projects5,
    link: "https://github.com/ManmeetSingh99/PortfolioJs.github.io",
  },
  {
    name: "Weather Application",
    description:
      "A comprehensive and user-friendly application that provides real-time weather updates. Users can view current weather conditions, including temperature, humidity, and wind speed, for their selected location. The app also offers detailed forecasts for the upcoming days, helping users plan their activities accordingly.",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    image: projects6,
    link: "https://github.com/ManmeetSingh99/WeatherWebsiteReact",
  },
  {
    name: "Portfolio",
    description:
      "A sleek and dynamic platform showcasing my skills and projects. The application highlights my expertise as a front-end developer, featuring applications built with React.js and Vue.js. It includes detailed sections for my professional experience, projects, and skills, along with an interactive UI for an engaging user experience",
    techStack: ["React js", "Javascript", "HTML", "CSS"],
    image: projects7,
    link: "https://github.com/ManmeetSingh99/animated-portfolio-react",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a dedicated frontend developer with a passion for building modern web applications that are both functional and aesthetically pleasing. Over the years, I have worked on numerous projects ranging from single-page applications to complex multi-tiered systems, always ensuring high performance and seamless user experiences.",
    "I specialize in using technologies like React, Vue.js and Tailwind CSS to create responsive and scalable interfaces. My focus is on writing clean, maintainable code while collaborating with cross-functional teams to deliver projects that meet both business goals and user needs. I thrive in environments that challenge me to continuously learn and grow.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "July, 2023 — Now",
    title: "Front-End Developer",
    company: "CodeNicely Pvt. Ltd, Raipur",
    description: [
      // "Leading the development of scalable frontend architecture for enterprise-level applications.",
      // "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      // "Driving innovation through continuous improvements in performance and UI/UX design.",
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
