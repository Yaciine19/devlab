export default function Footer() {
  return (
    <footer className="bg-black font-poppins">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              DevLab
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400">
            <li>
              <div className="hover:underline me-4 md:me-6">
              sesc.club@gmail.com
              </div>
            </li>
            <li>
              <div className="hover:underline me-4 md:me-6">
              +213 561 30 90 37
              </div>
            </li>
            <li>
              <a href="https://taplink.cc/sesc" className="hover:underline me-4 md:me-6">
              Social Media
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-400 text-center">
          © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            SESC
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
