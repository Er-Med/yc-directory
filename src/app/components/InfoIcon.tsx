import { BsPatchQuestion } from "react-icons/bs";

interface IconParams {
  name: string;
}

export default function InfoIcon({ name }: IconParams) {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "question":
        return <BsPatchQuestion />;
      default:
        return null;
    }
  };

  return (
    <strong className='inline-flex w-fit items-baseline'>
      <span className='self-center px-[2px]'>{getIcon(name)}</span>
    </strong>
  );
}
