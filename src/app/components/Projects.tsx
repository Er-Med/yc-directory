import { projects } from "../lib/data";
import ProjectCard from "./ProjectCard";
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
          <ProjectCard project={project} />
        </div>
      ))}

      {/* Permanent */}
      {/* <MainLink
        href='/'
        content='View Full Project Archive'
      /> */}
    </div>
  );
}
