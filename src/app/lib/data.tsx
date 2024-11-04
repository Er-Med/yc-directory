import { StaticImageData } from "next/image";
import project1Img from "../../../public/images/Bicycle-Shop-Website.png";
import project2Img from "../../../public/images/FitMe.png";
export type Experience = {
  title: string;
  state?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  desc: string;
  techsList?: { name: string }[];
  image?: {
    alt: string;
    src: string;
  };
};

export type ExperiencesList = Experience[];

export type Project = {
  id: number;
  title: string;
  desc: string;
  url: string;
  repoUrl: string;
  techsList?: { name: string }[];
  image: StaticImageData;
};
export type ProjectList = Project[];
const experiencesList = [
  {
    id: 293,
    title: "Front End Developer",
    company: "AGILTEEM",
    state: "Remote",
    startDate: "Feb",
    endDate: "May 2024",
    desc: "Over a 4-month period, maintained and enhanced company projects by delivering responsive, pixel-perfect implementations and resolving styling issues. Extended responsibilities included working with Strapi headless CMS while ensuring optimal user experiences and cross-platform compatibility.",
    techsList: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "SCSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Bootstrap" },
      { name: "Strapi" },
    ],
  },
  {
    id: 213,
    title: "Front End Developer",
    company: "AGILTEEM",
    state: "Internship",
    startDate: "Nov",
    endDate: "Jan 2024",
    desc: "During a 3-month internship, transformed Figma designs into responsive web interfaces and maintained company projects' styling consistency. Utilized Tailwind and Bootstrap frameworks while focusing on cross-browser compatibility and responsive design principles.",
    techsList: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "SCSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "Bootstrap" },
    ],
  },
];

const projects = [
  {
    id: 823,
    title: "Bicycle Shop Website",
    desc: "A modern, responsive bicycle shop website built with cutting-edge web technologies. Features include product listings, shopping cart functionality, and a sleek user interface.",
    url: "https://ecom-website-ashen.vercel.app/",
    repoUrl: "https://github.com/Er-Med/Ecom-Website",
    techsList: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Cloudinary" },
      { name: "Clerk" },
    ],
    image: project1Img,
  },
  {
    id: 223,
    title: "Digital Web Agency Site",
    desc: "A sleek, responsive website for a digital web agency, showcasing services, portfolio, and team. Features a dynamic content management system for easy updates.",
    url: "/",
    repoUrl: "/",
    techsList: [
      { name: "Next.js" },
      { name: "Tailwind" },
      { name: "Strapi" },
      { name: "Framer Motion" },
    ],
    image: project2Img,
  },
  {
    id: 503,
    title: "Premium Quality Catering Diets",
    desc: "A website showcasing premium catering diets focused on effective, practical, and healthy weight loss solutions to help clients make a fundamental life change.",
    url: "https://er-med-fitme.netlify.app/",
    repoUrl: "https://github.com/Er-Med/FitMe",
    techsList: [{ name: "React" }, { name: "CSS" }],
    image: project2Img,
  },
];

export { experiencesList, projects };
