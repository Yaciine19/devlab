import About from "./Components/About";
import FAQs from "./Components/Faqs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Judges from "./Components/Judges";
import Program from "./Components/Program";
import Register from "./Components/Register";
import Sponsors from "./Components/Sponsors";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <Judges />
        <Sponsors />
        <FAQs />
        <Register />
      </main>
      <Footer />
    </>
  );
}
