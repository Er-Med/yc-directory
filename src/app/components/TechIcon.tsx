// import { GrReactjs } from "react-icons/gr";

// interface IconParams {
//   name: string;

// }

// export default function TechIcon({ name }: IconParams) {
//   return (
//     <strong className='inline-flex w-fit items-baseline gap-1'>
//       <span className='self-center'>
//         <GrReactjs />
//       </span>
//       {name}
//     </strong>
//   );
// }

import { GrReactjs } from "react-icons/gr";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaSass } from "react-icons/fa"; // Example: Import more icons
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

interface IconParams {
  name: string;
}

export default function TechIcon({ name }: IconParams) {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "html":
        return <FaHtml5 className='text-[#e54d26] ' />;
      case "css":
        return <FaCss3Alt className='text-[#3d8fc6] ' />;
      case "scss":
        return <FaSass className='text-[#cb6699] text-[1.3rem]' />;
      case "tailwindcss":
        return <RiTailwindCssFill className='text-[#38bdf8] text-[1.3rem]' />;
      case "javascript":
        return <FaJsSquare className='text-[#f0db4f] ' />;
      case "nextjs":
        return <RiNextjsFill className='text-black text-[1.1rem]' />;
      case "reactjs":
        return <GrReactjs className='text-[#61dafb] text-[1.3rem]' />;
      default:
        return null; // Handle unknown technologies
    }
  };

  return (
    <strong className='inline-flex w-fit items-baseline'>
      <span className='self-center px-[2px]'>{getIcon(name)}</span>
      {name}
    </strong>
  );
}
