import Image from "next/image";
import Tech from "./Tech";
import MainBox from "./MainBox";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Project } from "../lib/data";

interface CardProps {
  project: Project;
}

export default function ProjectCard({ project }: CardProps) {
  const { title, desc, techsList, url, repoUrl, image } = project;

  return (
    <MainBox className='relative bg-white mb-12 hover:!bg-[--primary-color] group '>
      <Link
        href={url}
        className='absolute w-full h-full top-0 left-0'
        target='_blank'
      />
      <div className='card grid sm:grid-cols-8 gap-4 '>
        <div className='sm:col-span-2 relative'>
          <MainBox className='relative h-32 sm:h-20 !p-0 sm:mt-3'>
            <Image
              className=' w-full h-full absolute object-fill'
              src={image}
              height={300}
              width={300}
              alt={"image"}
            />
          </MainBox>
        </div>
        {/* START Card body */}
        <div className='content sm:col-span-6'>
          <h3 className='mb-3 text-base font-bold text-[--primary-color] group-hover:!text-white tracking-wide'>
            {title.toLocaleUpperCase()}
          </h3>
          <p className='mb-3 group-hover:!text-white leading-relaxed text-sm'>
            {desc}
          </p>
          <div className='tech flex justify-between'>
            <Tech techsList={techsList} />
            <Link
              href={repoUrl}
              className=' text-xl text-[--gray-color] sm:text-2xl group-hover:!text-white md:me-3'>
              <FaGithub />
            </Link>
          </div>
        </div>
        {/* END Card body */}
      </div>
    </MainBox>
  );
}
