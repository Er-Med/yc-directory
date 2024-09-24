import Image from "next/image";
import Tech from "./Tech";
import img from "/projImg.png";
import { TbArrowUpRight } from "react-icons/tb";
import MainBox from "./MainBox";
import Link from "next/link";

interface CardProps {
  isProjectCard: boolean;
  title: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  desc: string;
  techsList?: { name: string }[];
  image?: {
    alt: string;
    src: string;
  };
}

export default function Card({
  isProjectCard,
  // image,
  startDate,
  endDate,
  title,
  desc,
  techsList,
}: CardProps) {
  return (
    <MainBox className='bg-white mb-12 hover:!bg-[--primary-color] group '>
      <Link
        href={"/"}
        className=' card grid sm:grid-cols-8 gap-4 '>
        <div className=' sm:col-span-2 relative'>
          {isProjectCard ? (
            <Image
              className='h-4/6 w-full absolute object-cover pt-1 border border-[--balck-color]'
              src={img}
              height={100}
              width={100}
              alt={"image"}
            />
          ) : (
            <p className='flex items-center pt-1 text-sm font-medium group-hover:!text-white'>
              {startDate}
              <span className='inline-block mx-2 w-2 h-2 rounded-full bg-[--primary-color] '></span>
              {endDate}
            </p>
          )}
        </div>
        <div className='content sm:col-span-6'>
          <h3 className='mb-3 text-xl font-bold text-[--primary-color] group-hover:!text-white'>
            {title}
            <span className='inline-block group-hover:ps-1 duration-100'>
              <TbArrowUpRight />
            </span>
          </h3>
          <p className='mb-3 group-hover:!text-white'>{desc}</p>
          <div className='tech'>
            <Tech techsList={techsList} />
          </div>
        </div>
      </Link>
    </MainBox>
  );
}
