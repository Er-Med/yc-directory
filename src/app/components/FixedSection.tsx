import NavLinks from "./NavLinks";
import SocialMediaLinks from "./SocialMediaLinks";

export default function FixedSection() {
  return (
    <div className='max-w-full  lg:fixed  lg:h-screen flex items-center'>
      <div className='lg:main-h mt-20 lg:mt-0 flex flex-col lg:justify-between h-full '>
        <section className='mb-6 lg:mb-24'>
          <h1 className={`text-4xl font-bold sm:text-6xl mb-3 `}>
            Ermili Mohamed
          </h1>
          <h2 className='font-semibold text-2xl sm:text-4xl  text-[--primary-color] mb-4 '>
            Frontend Developer
          </h2>
          <p className='max-w-xs '>
            I build <strong>pixel-perfect</strong>, <strong>engaging</strong>,
            and <strong>accessible</strong> digital experiences.
          </p>
          <div className='hidden lg:block lg:mt-28'>
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
