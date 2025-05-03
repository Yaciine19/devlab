import { Dialog, DialogPanel } from "@headlessui/react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Program", href: "#program" },
  { name: "FQAs", href: "#faqs" },
];

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    function showBackgroundHeader() {
      if (window.scrollY > 100) {
        headerRef.current.classList.remove("bg-transparent");
        headerRef.current.classList.add("bg-very-dark-blood-red");
      } else {
        headerRef.current.classList.remove("bg-very-dark-blood-red");
        headerRef.current.classList.add("bg-transparent");
      }
    }

    window.addEventListener("scroll", showBackgroundHeader);

    return () => window.removeEventListener("scroll", showBackgroundHeader);
  }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      ref={headerRef}
      className="fixed bg-transparent inset-x-0 top-0 z-50 transition-colors duration-200"
    >
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#">
            <img src="/logo_vertical.svg" alt="DevLab Logo" className="w-30 md:w-40" />
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
              className="text-md/6 font-semibold text-white hover:text-yellow transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#register"
            className="text-md/6 font-semibold text-white hover:text-yellow transition-colors duration-200 group"
          >
            Register{" "}
            <FaArrowRight className="ml-1 text-white inline group-hover:transform group-hover:translate-x-[3px] transition group-hover:text-yellow duration-200" />
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-very-dark-blood-red px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img src="/logo_vertical.svg" alt="DevLab Logo" className="w-30 md:w-40" />
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
              <div className="space-y-5 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-lg/7 font-medium text-white hover:bg-yellow hover:text-black transition-colors duration-200 ease-in-out"
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
  );
}
