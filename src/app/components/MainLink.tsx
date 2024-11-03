import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

interface LinkProps {
  href: string;
  content: string;
}
export default function MainLink({ href, content }: LinkProps) {
  return (
    <div className='w-fit group'>
      <Link
        href={href}
        className='text-md font-semibold text-[--primary-color] capitalize flex items-center gap-1 group'>
        {content}
        <span className='inline-block group-hover:ps-1 duration-100'>
          <HiArrowNarrowRight className='font-bold' />
        </span>
      </Link>
      <div className='ms-1 h-[3px] w-[35%] rounded-full bg-[--primary-color] group-hover:w-[85%] duration-100'></div>
    </div>
  );
}
