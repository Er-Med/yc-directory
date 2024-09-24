import { experience } from "../lib/data";
import Card from "./Card";
import MainLink from "./MainLink";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  return (
    <div id='EXPERIENCE'>
      <span className='main-span-h block'></span>
      <SectionTitle content='EXPERIENCE' />
      {experience.map((exp) => (
        <div key={exp.id}>
          <Card
            title={exp.title}
            // image={exp.image}
            desc={exp.desc}
            // techsList={exp.techsList}
            isProjectCard={false}
            startDate={exp.startDate}
            endDate={exp.endDate}
            techsList={exp.techsList}
          />
        </div>
      ))}

      <MainLink
        href='/'
        content='View full resumeee'
      />
    </div>
  );
}
