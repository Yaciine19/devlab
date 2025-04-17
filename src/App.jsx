import About from "./Components/About";
import FAQs from "./Components/Faqs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
import Register from "./Components/Register";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Program />
        <FAQs />
        <Register />
      </main>
      <Footer />
    </>
  );
}
