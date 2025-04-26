import { FaArrowUp } from "react-icons/fa6";
import About from "./Components/About";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Register from "./Components/Register";
import { useEffect, useRef } from "react";

export default function App() {
  const scrollUpRef = useRef(null);

  useEffect(() => {
    function showScrollUp() {
      if (window.scrollY > 100) {
        scrollUpRef.current.classList.remove("-bottom-100");
        scrollUpRef.current.classList.add("bottom-6");
      } else {
        scrollUpRef.current.classList.remove("bottom-6");
        scrollUpRef.current.classList.add("-bottom-100");
      }
    }

    window.addEventListener("scroll", showScrollUp);

    return () => window.removeEventListener("scroll", showScrollUp);
  }, []);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <FAQs />
        <Register />
        <a
          ref={scrollUpRef}
          href="#"
          className="fixed right-6 -bottom-100 w-10 h-10 bg-yellow rounded-full z-55 grid place-content-center transition-all duration-200"
        >
          <FaArrowUp className="text-very-dark-blood-red" />
        </a>
      </main>
      <Footer />
    </>
  );
}
