import { ReactNode } from "react";

interface MainBoxProps {
  children: ReactNode;
  className?: string;
}

export default function MainBox({ children, className }: MainBoxProps) {
  return (
    <div className={`main-box relative`}>
      <div
        className={` ${className} box group relative z-10 block w-full -translate-x-0.5 -translate-y-0.5 overflow-hidden border-2 border-neutral-950 bg-white px-4 py-4 transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0`}>
        {children}
        <span className='span-border absolute block origin-top-right rotate-45 object-cover z-20 bg-neutral-950'></span>
      </div>
      <div className='bg-div absolute inset-0 z-0 bg-neutral-950'></div>
    </div>
  );
}
