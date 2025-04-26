export default function Footer() {
  return (
    <footer className="bg-very-dark-blood-red font-poppins">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex justify-center mb-8 sm:mb-0"
          >
            <img src="/logo_vertical.svg" alt="DevLab Logo" className="w-30 md:w-40" />
          </a>
          <ul className="flex flex-col sm:flex-row gap-5 items-center mb-6 text-sm font-medium sm:mb-0 text-gray-200">
            <li>
              <div className="hover:underline">
              sesc.club@gmail.com
              </div>
            </li>
            <li>
              <div className="hover:underline">
              +213 561 30 90 37
              </div>
            </li>
            <li>
              <a href="https://taplink.cc/sesc" className="hover:underline">
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
