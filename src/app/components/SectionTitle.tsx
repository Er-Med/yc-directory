import Link from "next/link";

interface TitleProps {
  content: string;
}
export default function SectionTitle({ content }: TitleProps) {
  return (
    <Link
      href={`#${content}`}
      className='block py-4 mb-6 w-[calc(100% + 50px)] sticky z-50 top-0  backdrop-blur-sm bg-[--primary-color] -mx-6 lg:sr-only'>
      <h2 className='text-xl font-bold uppercase tracking-wider  ps-6 text-white  '>
        {content}
      </h2>
    </Link>
  );
}
