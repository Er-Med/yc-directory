"use client";
import Link from "next/link";
import { useState } from "react";
export default function NavLinks() {
  const [activeLink, setActiveLink] = useState("ABOUT");
  const links = ["ABOUT", "SKILLS", "PROJECTS"];

  return (
    <nav>
      <ul className='navigation-list flex flex-col gap-3 w-fit'>
        {links.map((link, index) => (
          <li
            key={index}
            className={activeLink === link ? "item active" : "item"}
            onClick={() => setActiveLink(link)}>
            <span className='me-2'></span>
            <Link
              href={`#${link}`}
              className='link font-semibold'>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
