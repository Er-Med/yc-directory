import { experiencesList } from "../lib/data";
import ExperienceCard from "./ExperienceCard";
import MainLink from "./MainLink";
import SectionTitle from "./SectionTitle";

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

      <MainLink
        href='/'
        content='View full resume'
      />
    </div>
  );
}
