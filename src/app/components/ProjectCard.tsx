import Image from "next/image";
import Tech from "./Tech";
import img from "/projImg.png";
import MainBox from "./MainBox";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Project } from "../lib/data";

interface CardProps {
  project: Project;
}

export default function ProjectCard({ project }: CardProps) {
  const { title, desc, techsList } = project;

  return (
    <MainBox className='bg-white mb-12 hover:!bg-[--primary-color] group '>
      <div className=' card grid sm:grid-cols-8 gap-4 '>
        <div className=' sm:col-span-2 relative'>
          <Image
            className='h-4/6 w-full absolute object-cover pt-1 border border-[--balck-color]'
            src={img}
            height={100}
            width={100}
            alt={"image"}
          />
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
              href='https://github.com/Er-Med'
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
