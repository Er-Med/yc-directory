import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";

export default function FixedSection() {
  return (
    <div className='max-w-[90%]  lg:fixed lg:max-w-[41%] 2xl:max-w-[30%] h-screen flex items-center'>
      <div className='fixed-box flex flex-col justify-between h-full '>
        <section className='mb-24'>
          <h1 className={` font-extrabold text-6xl mb-2`}>Ermili Mohamed</h1>
          <h2 className='font-semibold text-5xl text-[--primary-color] mb-3'>
            Frontend Developer
          </h2>
          <p className='text-[--text  -color] w-[90%] lg:w-[80%]'>
            I build <span className='font-semibold'>pixel-perfect</span>,{" "}
            <span className='font-semibold'>engaging</span>, and{" "}
            <span className='font-semibold'>accessible</span> digital
            experiences.
          </p>
          <div className='mt-28'>
            <NavLinks />
          </div>
        </section>
        <section>
          <SocialMediaLinks />
        </section>
      </div>
    </div>
  );
}
