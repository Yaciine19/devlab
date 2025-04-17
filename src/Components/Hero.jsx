import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section id="home" className="bg-[url(/hero.jpg)] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/50 from-10% to-black/80 to-65%"></div>
      <div className="absolute h-30 -bottom-10 bg-gradient-to-b from-black/80 to-dark-blue left-0 right-0"></div>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto md:max-w-[80%] py-15 sm:py-32 md:pt-40">
          <div className="hidden sm:mb-6 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white/50 hover:ring-white/100 transition duration-200">
              To find out more about DevLab and how to join, click to{" "}
              <a href="#about" className="font-semibold text-cyan">
                Read more <FaArrowRight className="inline" />
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl leading-13 sm:leading-20 text-balance sm:text-7xl font-poppins font-bold text-center text-white">
              <span className="text-cyan">DevLab</span>{" "}
              Hackathon 2025: Code Meets <span className="text-cyan">Chemistry</span>
            </h1>
            <p className="mt-8 md:w-[80%] mx-auto text-pretty font-poppins text-gray sm:text-lg">
              This hackathon aims to foster collaboration between the fields of
              computer science and chemistry to create innovative solutions
              addressing challenges faced by laboratories and universities in
              the chemistry domain.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-9 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors duration-200"
              >
                Register Now
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-white hover:text-cyan transition-colors duration-200 group"
              >
                Learn more{" "}
                <FaArrowRight className="ml-1 text-white inline group-hover:transform group-hover:translate-x-[3px] transition group-hover:text-cyan duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
