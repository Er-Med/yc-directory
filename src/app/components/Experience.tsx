import Link from "next/link";
import { experiencesList } from "../lib/data";
import ExperienceCard from "./ExperienceCard";
import SectionTitle from "./SectionTitle";
import ResumeLink from "./ResumeLink";

export default function ExperiencesSection() {
  return (
    <div id='EXPERIENCE'>
      <span className='main-span-h block'></span>
      <SectionTitle content='EXPERIENCE' />
      {experiencesList.map((experience) => (
        <div key={experience.id}>
          <ExperienceCard experience={experience} />
        </div>
      ))}

      {/* <Link
        href='/Ermili_Mohamed_resume.pdf'
        target='_blank'
        // download={true}
        locale={false}
        rel='noopener noreferrer'>
        Resume
      </Link> */}

      <ResumeLink
        href='/Ermili_Mohamed_resume.pdf'
        content='View full resume'
      />
    </div>
  );
}
