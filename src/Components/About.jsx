import { useEffect, useState } from "react";

function Header() {
  return (
    <div className="text-center font-poppins">
      <span className="text-cyan">HakLab Hakathon</span>
      <h1 className="text-white text-2xl sm:text-4xl font-bold mt-5">
        About Hakathon
      </h1>
    </div>
  );
}

function TextSection() {
  const paragraphText =
    "Lorem ipsum dolor sit amet consectetur. A mauris leo dictumst at ullamcorper aliquam enim. Purus vulputate habitasse tincidunt eu morbi aenean porta. At dui aliquam bibendum elementum egestas in consectetur. Justo orci enim neque ipsum faucibus tellus eu.";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 w-full px-2 max-w-7xl">
      <div className="space-y-4 p-4">
        <p className="text-white text-justify leading-relaxed">
          {paragraphText}
        </p>
        <p className="text-white text-justify leading-relaxed">
          {paragraphText}
        </p>
      </div>
      <div className="space-y-4 p-4">
        <p className="text-white text-justify leading-relaxed">
          {paragraphText}
        </p>
        <p className="text-white text-justify leading-relaxed">
          {paragraphText}
        </p>
      </div>
    </div>
  );
}

function CountdownTimer() {
  const targetDate = new Date("2025-04-17T19:51:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p className="text-white text-2xl sm:text-5xl font-semibold font-poppins mt-10 sm:mt-20 text-center px-4">The hackathon has started!</p>;
  }

  return (
    <div className="flex justify-around items-center w-full max-w-5xl my-8 p-4">
      <div className="text-center">
        <div
          className="text-white text-4xl sm:text-6xl font-bold mb-2"
        >
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Days</div>
      </div>
      <div className="border-l border-gray-300 h-30 sm:h-36 mx-4"></div>
      <div className="text-center">
        <div
          className="text-white text-4xl sm:text-6xl font-bold mb-2"
        >
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Hours</div>
      </div>
      <div className="border-l border-gray-300 h-30 sm:h-36 mx-4"></div>
      <div className="text-center">
        <div
          className="text-white text-4xl sm:text-6xl font-bold mb-2"
        >
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Minutes</div>
      </div>
      <div className="border-l border-gray-300 h-30 sm:h-36 mx-4"></div>
      <div className="text-center">
        <div
          className="text-white text-4xl sm:text-6xl font-bold mb-2"
        >
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Seconds</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className="bg-gradient-to-b from-[#000E41] from-17% to-black flex flex-col items-center justify-center min-h-screen py-20">
      <Header />
      <TextSection />
      <CountdownTimer />
    </section>
  );
}
