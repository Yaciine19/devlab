function Header() {
  return (
    <div className="text-center font-poppins mb-10">
      <span className="text-cyan">HakLab Hakathon</span>
      <h1 className="text-white text-2xl sm:text-4xl font-bold mt-5">
        Program
      </h1>
    </div>
  );
}

function ProgramContentDayOne() {
  return (
    <ol className="sm:flex font-poppins">
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">08:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Team Check-in & Badge Distribution
          </h3>
          <p className="text-base font-normal text-gray-500">
            Teams arrive and receive their participant badges.
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">10:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Program Overview & Rules Briefing
          </h3>
          <p className="text-base font-normal text-gray-500">
            An introduction to the hackathon’s flow, rules, and expectations to
            ensure clarity and fairness.
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">12:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Chemistry Workshop
          </h3>
          <p className="text-base font-normal text-gray-500">
            A beginner-friendly workshop covering essential chemistry concepts
            to help tech participants understand the challenges.{" "}
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">08:00 PM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Dinner & Networking
          </h3>
          <p className="text-base font-normal text-gray-500">
            A relaxed dinner session encouraging participants to meet, share
            ideas, and build connections.{" "}
          </p>
        </div>
      </li>
    </ol>
  );
}

function ProgramContentDayTwo() {
  return (
    <ol className="sm:flex font-poppins">
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">08:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">Breakfast</h3>
          <p className="text-base font-normal text-gray-500">
            Start the day with a good breakfast and get energized.
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">09:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Opening Ceremony + Keynote Speech
          </h3>
          <p className="text-base font-normal text-gray-500">
            Official opening with a motivational talk by a guest speaker on
            innovation and scientific collaboration.
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">10:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Hacking Starts
          </h3>
          <p className="text-base font-normal text-gray-500">
            The 48-hour coding marathon begins! Teams start working on their
            ideas and solutions.
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">08:00 PM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Dinner & Networking
          </h3>
          <p className="text-base font-normal text-gray-500">
            A relaxed dinner session encouraging participants to meet, share
            ideas, and build connections.{" "}
          </p>
        </div>
      </li>
    </ol>
  );
}

function ProgramContentDayThree() {
  return (
    <ol className="sm:flex font-poppins">
      <li className="relative mb-6 sm:mb-0">
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Recreational Outing
          </h3>
          <p className="text-base font-normal text-gray-500">
            A fun outing to help participants relax, recharge, and enjoy some
            time away from their screens.
          </p>
        </div>
      </li>
    </ol>
  );
}

function ProgramContentDayFour() {
  return (
    <ol className="sm:flex ">
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">09:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Team Presentations
          </h3>
          <p className="text-base font-normal text-gray-500">
            Each team presents their solution (10 min) followed by a short Q&A
            session (5 min) with the judges
          </p>
        </div>
      </li>
      <li className="relative mb-6 sm:mb-0 flex-1">
        <div className="flex items-center">
          <p className="text-cyan mr-2 font-medium">10:00 AM</p>
          <div className="hidden sm:flex flex-1 h-[1.5px] bg-gray-700 mr-2"></div>
        </div>
        <div className="mt-3 sm:pe-8">
          <h3 className="text-lg font-semibold text-white mb-2">
            Closing Ceremony & Winner Announcements
          </h3>
          <p className="text-base font-normal text-gray-500">
            The final event! Winners are announced, prizes awarded, and special
            recognitions given for innovation, collaboration, and audience
            favorite.
          </p>
        </div>
      </li>
    </ol>
  );
}

export default function Program() {
  return (
    <section id="program" className="bg-black flex flex-col items-center justify-center py-5 sm:py-10 px-6 lg:px-12">
      <Header />
      <div className="space-y-10 font-poppins">
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">Day 01 :</h2>
          <ProgramContentDayOne />
        </div>
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">Day 02 :</h2>
          <ProgramContentDayTwo />
        </div>
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">Day 03 :</h2>
          <ProgramContentDayThree />
        </div>
        <div>
          <h2 className="text-white text-2xl font-semibold mb-4">Day 04 :</h2>
          <ProgramContentDayFour />
        </div>
      </div>
    </section>
  );
}
