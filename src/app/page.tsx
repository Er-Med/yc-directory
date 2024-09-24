import About from "./components/About";
import Container from "./components/Container";
import FixedSection from "./components/FixedSection";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <div className=''>
      <main>
        <Container>
          <div className='grid grid-cols-12 lg:gap-8 '>
            <div className='col-span-full lg:col-span-5 bordeer boreder-gray-300  px-2 h-full relative'>
              <FixedSection />
            </div>
            <div className='col-span-full lg:col-span-7 bordeer bordeer-gray-100'>
              <section className='bordesr bosrder-red-400 lg:ps-32 pb-[--main-padding]'>
                <About />
                <Experience />
                <Projects />
              </section>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
