import Tech from "./Tech";
import { TbArrowUpRight } from "react-icons/tb";
import MainBox from "./MainBox";
import { Experience } from "../lib/data";
import DotSeparator from "./DotSeparator";
import Link from "next/link";

interface CardProps {
  experience: Experience;
}
export default function ExperienceCard({ experience }: CardProps) {
  const { startDate, endDate, title, company, desc, techsList } = experience;

  return (
    <MainBox className='relative bg-white mb-12 hover:!bg-[--primary-color] group '>
      <Link
        href='https://agilteem.com//'
        className='absolute w-full h-full top-0 left-0'
        target='_blank'
      />
      <div className='card grid sm:grid-cols-8 gap-4'>
        <div className=' sm:col-span-2 relative'>
          <p className='flex items-center pt-1 text-xs font-medium group-hover:!text-white'>
            {startDate}
            <DotSeparator />
            {endDate}
          </p>
        </div>
        {/* START Card body */}
        <div className='content sm:col-span-6'>
          <h3 className='mb-3 text-lg sm:text-lg font-semibold text-[--primary-color] group-hover:!text-white tracking-wide flex items-center'>
            {title.toLocaleUpperCase()}
            <DotSeparator />
            <span className='text-sm'> {company}</span>
            <span className='ms-2 inline-block group-hover:ps-1 duration-100'>
              <TbArrowUpRight />
            </span>
          </h3>
          <p className='mb-3 group-hover:!text-white leading-relaxed text-sm'>
            {desc}
          </p>
          <div className='tech flex justify-between'>
            <Tech techsList={techsList} />
          </div>
        </div>
        {/* END Card body */}
      </div>
    </MainBox>
  );
}
