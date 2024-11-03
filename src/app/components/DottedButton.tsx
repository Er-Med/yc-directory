import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface DottedButton {
  content?: string;
  expanded: boolean;
}
const DottedButton = ({ content, expanded }: DottedButton) => {
  return (
    <button className=' border-2  border-black bg-white px-3 py-3 mt-4 font-medium Capitalize text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:animate-bounce shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none text-xl'>
      {content}
      {expanded ? <FaAngleUp /> : <FaAngleDown />}
    </button>
  );
};

export default DottedButton;
