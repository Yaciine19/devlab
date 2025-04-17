import { useEffect, useState } from "react";
import PrizeCard from "./PrizeCard";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 w-full px-2 max-w-7xl">
      <div className="space-y-4 p-4">
        <p className="text-white text-justify leading-relaxed">
          DevLab Hackathon is a unique initiative by the Scientific Club (SESC)
          at the Faculty of Sciences, UFA-Setif-1, dedicated to encouraging
          creativity, innovation, and interdisciplinary collaboration.
        </p>
        <p className="text-white text-justify leading-relaxed">
          During this 48-hour competition, participants will work in teams to
          design and build practical solutions that enhance lab efficiency,
          automate chemical processes, and promote sustainability in chemistry.
          With support from experienced mentors and access to valuable datasets,
          students will get a chance to showcase their skills and make a
          meaningful impact.
        </p>
      </div>
      <div className="space-y-4 p-4">
        <p className="text-white text-justify leading-relaxed">
          Bringing together the fields of computer science and chemistry, this
          hackathon invites university students to tackle real-world challenges
          faced by laboratories and academic institutions.
        </p>
        <p className="text-white text-justify leading-relaxed">
          Whether you&apos;re a developer, a chemistry student, or simply
          passionate about solving problems, DevLab Hackathon is your
          opportunity to innovate, collaborate, and transform ideas into
          reality.
        </p>
      </div>
    </div>
  );
}

function PrizeSection() {
  return (
    <div className="font-poppins mb-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
        Prizes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PrizeCard
          position="1st Place"
          amount="$10,000"
          color="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white"
        />
        <PrizeCard
          position="2nd Place"
          amount="$5,000"
          color="bg-gradient-to-br from-gray-300 to-gray-500 text-white"
        />
      </div>
    </div>
  );
}

function CountdownTimer() {
  const targetDate = new Date("2025-06-01T08:00:00").getTime();
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
    return (
      <p className="text-white text-2xl sm:text-5xl font-semibold font-poppins my-10 sm:my-20 text-center px-4">
        The hackathon has started!
      </p>
    );
  }

  return (
    <div className="flex justify-around items-center w-full max-w-5xl my-8 p-4">
      <div className="text-center">
        <div className="text-white text-4xl sm:text-6xl font-bold mb-2">
          {timeLeft.days.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Days</div>
      </div>
      <div className="border-l border-gray-300 h-30 sm:h-36 mx-4"></div>
      <div className="text-center">
        <div className="text-white text-4xl sm:text-6xl font-bold mb-2">
          {timeLeft.hours.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Hours</div>
      </div>
      <div className="border-l border-gray-300 h-30 sm:h-36 mx-4"></div>
      <div className="text-center">
        <div className="text-white text-4xl sm:text-6xl font-bold mb-2">
          {timeLeft.minutes.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Minutes</div>
      </div>
      <div className="border-l border-gray-300 h-30 sm:h-36 mx-4"></div>
      <div className="text-center">
        <div className="text-white text-4xl sm:text-6xl font-bold mb-2">
          {timeLeft.seconds.toString().padStart(2, "0")}
        </div>
        <div className="text-white text-lg sm:text-xl">Seconds</div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-[#000E41] from-17% to-black flex flex-col items-center justify-center min-h-screen py-20">
      <Header />
      <TextSection />
      <PrizeSection />
      <CountdownTimer />
    </section>
  );
}
