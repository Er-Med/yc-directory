import Link from "next/link";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/ermilimohamed/",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/Er-Med",
    icon: <FaGithubAlt />,
  },
  {
    href: "#",
    icon: <MdOutlineEmail />,
  },
  // { next version
  //   href: "#",
  //   icon: <MdDarkMode />,
  // },
];

export default function SocialMediaLinks() {
  return (
    <div>
      <ul className='flex gap-4'>
        {socialLinks.map((link, index) => (
          <div
            key={index}
            className='relative group'>
            <li
              key={index}
              className='relative polygon-box py-2 px-3 sm:py-2 sm:px-4 cursor-pointer overflow-hidden font-medium  text-base  bg-indigo-600 text-white z-10 transition-all group-hover:-translate-x-[3px] group-hover:-translate-y-[3px] '>
              <Link
                href={link.href}
                className=' text-xl sm:text-2xl'>
                {link.icon}
              </Link>
            </li>
            <div className=' back-div absolute inset-0 z-1 translate-x-0.5 translate-y-0.5 bg-neutral-950'></div>
          </div>
        ))}
      </ul>
    </div>
  );
}
