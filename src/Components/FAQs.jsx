import FAQItem from "./FAQItem";

function Header() {
  return (
    <div className="text-center font-poppins mb-10">
      <span className="text-cyan">HakLab Hakathon</span>
      <h1 className="text-white text-2xl sm:text-4xl font-bold mt-5 px-4">
        Frequently Asked Questions
      </h1>
    </div>
  );
}

function Accordion() {
  const faqs = [
    {
      question: "What is DevLab Hackathon?",
      answer:
        "DevLab Hackathon is a competitive event where participants collaborate to create innovative solutions to real-world problems using technology within a limited timeframe.",
    },
    {
      question: "Who can participate?",
      answer:
        "The hackathon is open to university students including developers, designers, and innovators of all skill levels. Whether you're a beginner or an experienced professional, you're welcome to join!",
    },  
    {
      question: "Do I need a team to participate?",
      answer:
        "Yes, participation is only allowed in teams. Each team must have a minimum of 3 and a maximum of 6 members.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, charger, and any other devices you'll need. We'll provide food, drinks, and a comfortable workspace for all participants.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation in the DevLab Hackathon is completely free of charge. We aim to make innovation and collaboration accessible to all university students.",
    }    
  ];
  return (
    <div className="font-poppins">
      <div className=" px-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

export default function FAQs() {
  return (
    <section id="faqs" className="bg-gradient-to-b from-black to-[#000E41] flex flex-col items-center justify-center min-h-screen py-20">
      <Header />
      <Accordion />
    </section>
  );
}
