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
  techsList?: { name: string }[];
  image?: {
    alt: string;
    src: string;
  };
};
export type ProjectList = Project[];
const experiencesList = [
  {
    id: 293,
    title: "Front End Developer",
    company: "AGILTEEM",
    state: "Remote",
    startDate: "Feb 2024",
    endDate: "May 2024",
    isProjectCard: false,
    desc: "Over a 4-month period, maintained and enhanced company projects by delivering responsive, pixel-perfect implementations and resolving styling issues. Extended responsibilities included working with Strapi headless CMS while ensuring optimal user experiences and cross-platform compatibility.",
    techsList: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "SCSS" },
      { name: "TailwindCss" },
      { name: "Bootstrap" },
    ],
  },
  {
    id: 213,
    title: "Front End Developer",
    company: "AGILTEEM",
    state: "Internship",
    startDate: "Nov 2024",
    endDate: "Jan 2024",
    isProjectCard: false,
    desc: "During a 3-month internship, transformed Figma designs into responsive web interfaces and maintained company projects' styling consistency. Utilized Tailwind and Bootstrap frameworks while focusing on cross-browser compatibility and responsive design principles.",
    techsList: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "SCSS" },
      { name: "TailwindCss" },
      { name: "Bootstrap" },
    ],
  },
];

const projects = [
  {
    id: 823,
    title: "Bicycle Shop Website",
    desc: "A modern, responsive bicycle shop website built with cutting-edge web technologies. Features include product listings, shopping cart functionality, and a sleek user interface.",
    isProjectCard: true,
    techsList: [{ name: "Next js" }, { name: "Tailwindcss" }],
    image: {
      alt: "image",
      src: "image",
    },
  },
  {
    id: 223,
    title: "Digital Web Agency Site",
    desc: "A sleek, responsive website for a digital web agency, showcasing services, portfolio, and team. Features a dynamic content management system for easy updates.",
    isProjectCard: true,
    techsList: [
      { name: "HTML" },
      { name: "HTML" },
      { name: "HTML" },
      { name: "HTML" },
    ],
    image: {
      alt: "image",
      src: "image",
    },
  },
];

export { experiencesList, projects };
