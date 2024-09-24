import { GrReactjs } from "react-icons/gr";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import TechIcon from "./TechIcon";

export default function About() {
  // const reactSvg =
  return (
    <section
      id='about'
      className=''>
      <span className='main-span-h block'></span>
      <SectionTitle content='About' />
      {/* 
      <Image
        src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
        alt='react icon'
        width={16}
        height={16}
      /> */}

      <p className={`  mb-4 tracking-wide `}>
        From a <strong>young age</strong>, I&apos;ve always been fascinated by
        how things work, especially when it comes to technology. But it
        wasn&apos;t until 2020, during the COVID-19 pandemic, that I truly acted
        on my <strong>curiosity</strong>. At that time, I found myself searching
        online for <strong>“How do websites work?”</strong> and that&apos;s when
        I discovered <strong>coding</strong>. Learning that websites were built
        by people using code felt like unlocking a hidden superpower, and from
        that moment, I knew I wanted to dive deeper.
      </p>
      <p className='mb-4 tracking-wide'>
        Now, at <strong>23 years</strong> old, I specialize in{" "}
        <strong>front-end development</strong>, focusing on
        <TechIcon name='Reactjs' />,
        <TechIcon name='nextjs' />,
        <TechIcon name='Tailwindcss' />, and <TechIcon name='SCSS' />. Although
        I&apos;ve chosen to focus on these technologies, my solid understanding
        of front-end fundamentals like <TechIcon name='HTML' />,
        <TechIcon name='CSS' />,<TechIcon name='JavaScript' /> allows me to{" "}
        <strong>quickly and flexibly adapt</strong> to any new front-end
        framework or technology in a short time. I&apos;m passionate about
        building <strong>fast</strong>, <strong>user-friendly </strong>
        websites that deliver an exceptional experience. While my diploma in
        digital development gave me full-stack expertise, my heart has always
        been in <strong>front-end development</strong>.
      </p>
      <p className='tracking-wide'>
        I’m especially excited about the opportunity to develop my skills in
        front-end development within a creative team and under the guidance of
        mentors. Being part of an environment where I can grow, learn, and
        refine my craft is something I deeply value. I look forward to
        transforming ideas into interactive experiences with the support of
        experienced professionals who can guide me in my journey.
      </p>
    </section>
  );
}
