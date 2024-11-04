interface TechProps {
  techsList?: { name: string }[];
}
export default function Tech({ techsList }: TechProps) {
  return (
    <div className='flex gap-2 flex-wrap'>
      {techsList?.map((tech, index) => {
        return (
          <div
            key={index}
            className='tech relative flex text-xs font-medium py-1 px-2 border group-hover:border-[--black-color] border-[--primary-color] bg-[#eef2ff] group-hover:bg-white text-[--primary-color]'>
            {tech.name}
            <span className='tech-span absolute block origin-top-right rotate-45 object-cover group-hover:bg-[--black-color] bg-[--primary-color]'></span>
          </div>
        );
      })}
    </div>
  );
}
