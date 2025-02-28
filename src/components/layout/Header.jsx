import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-[#74C69D] text-white py-4 px-6 sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.webp" alt="Logo" className="h-10 w-10" />
          <span className="text-2xl font-bold text-white">ٍStart</span>
        </div>
        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-emerald-300 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-emerald-300 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-emerald-300 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-emerald-300 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;