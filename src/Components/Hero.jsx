import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Program", href: "#program" },
  { name: "FQAs", href: "#fqAs" },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[url(/hero.jpg)] bg-no-repeat bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-blue/50 from-10% to-black/80 to-65%"></div>
        
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="text-2xl font-[poppins] text-white hover:text-cyan transition-colors duration-200">
                DevHack
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <LuMenu className="size-6 text-white" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-white hover:text-cyan transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-white hover:text-cyan transition-colors duration-200">
              Register <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-dark-blue px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
              <span className="text-xl font-[poppins] text-white">
                DevHack
              </span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5"
              >
                <IoClose className="size-6 text-white" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-cyan hover:text-black transition-colors duration-200 ease-in-out"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto md:max-w-[80%] py-15 sm:py-32 md:pt-40">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white/50 hover:ring-white/100 transition duration-200">
              Lorem ipsum dolor sit amet consectetur.{" "}
              <a href="#" className="font-semibold text-cyan">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl leading-15 sm:leading-20 text-balance sm:text-7xl font-robot text-center text-white">
              Welcome to <span className="text-cyan">the Hackathon</span> Experience
            </h1>
            <p className="mt-8 md:w-[80%] mx-auto text-pretty text-gray sm:text-xl/8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              eaque, consectetur provident enim quibusdam quam facilis
              doloribus. In ea dolorum veniam explicabo sapiente. Deserunt
              voluptatem sit quibusdam voluptatum illum esse?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-9 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 transition-colors duration-200"
              >
                Register Now
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white hover:text-cyan transition-colors duration-200">
                Learn more <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
