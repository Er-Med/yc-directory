import { projects } from "../lib/data";
import Card from "./Card";
import MainLink from "./MainLink";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <div
      id='PROJECTS'
      className='  '>
      <span className='main-span-h block'></span>
      <SectionTitle content='PROJECTS' />
      {projects.map((project) => (
        <div key={project.id}>
          <Card
            title={project.title}
            // image={project.image}
            desc={project.desc}
            // techsList={project.techsList}
            isProjectCard={true}
            techsList={project.techsList}
          />
        </div>
      ))}

      <MainLink
        href='/'
        content='View Full Project Archive'
      />
      {/* </MainBox> */}
    </div>
  );
}
