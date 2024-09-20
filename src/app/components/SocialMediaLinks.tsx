import Link from "next/link";
import { FaGithubAlt, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import "../styles/styles.scss";

// import * as motion from "framer-motion/client";
const socialLinks = [
  {
    href: "https://instagram.com/yourprofile",
    icon: <FaInstagram />,
  },
  {
    href: "https://linkedin.com/in/yourprofile",
    icon: <FaLinkedinIn />,
  },
  {
    href: "https://github.com/yourusername",
    icon: <FaGithubAlt />,
  },
  {
    href: "#",
    icon: <MdDarkMode />,
  },
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
              className='relative polygon-box p-2 px-4 cursor-pointer overflow-hidden font-medium  text-base  bg-indigo-600 text-white z-10 transition-all group-hover:-translate-x-[3px] group-hover:-translate-y-[3px] '>
              <Link
                href={link.href}
                className=' text-2xl'>
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
