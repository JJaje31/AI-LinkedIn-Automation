import React,{useState} from "react";
import { NavLink, useLocation } from "react-router";

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  const fullPageText = (pageLoc: string): string =>
    pathname === pageLoc ? "text-gray-300 font-semibold" : "";

  const mobileText = (pageLoc: string): string =>
    pathname === pageLoc ? "bg-gray-700 text-white" : "";

  return (
    <nav className="bg-gradient-to-br from-[#0f0f0f] via-[#181818] to-[#232323] border-b border-gray-700 h-20 flex items-center">
      {/* 🔹 Logo */}
      <div className="flex items-center px-2">
        <NavLink to="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-15 w-auto transition-transform duration-200 hover:scale-110 drop-shadow-lg shadow-neon"
          />
        </NavLink>
      </div>

      {/* 🔹 Desktop Navigation */}
      <div className="flex-1 flex justify-center space-x-10 text-slate-400 hidden md:flex">
        <NavLink to="/" className={`${fullPageText("/")} hover:text-gray-300`}>
          Home
        </NavLink>
        <NavLink
          to="/signIn"
          className={`${fullPageText("/signIn")} hover:text-gray-300`}
        >
          Sign In
        </NavLink>
        <NavLink
          to="/post"
          className={`${fullPageText("/post")} hover:text-gray-300`}
        >
          Post
        </NavLink>
      </div>

      {/* 🔹 Mobile Menu */}
      <div className="flex flex-1 justify-end md:hidden p-5 relative">
        {/* 🟢 Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="hover:text-gray-300 text-slate-400 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-10 w-10 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* 🟢 Mobile Dropdown Menu */}
        {isOpen && (
          <ul className="absolute right-1 top-19 mt-2 w-40 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 ease-in-out">
            <NavLink to="/" className={`${mobileText("/")} block`}>
              <li className="p-3 hover:bg-gray-700 transition-colors">Home</li>
            </NavLink>
            <NavLink to="/signIn" className={`${mobileText("/signIn")} block`}>
              <li className="p-3 hover:bg-gray-700 transition-colors">
                Sign In
              </li>
            </NavLink>
            <NavLink to="/post" className={`${mobileText("/post")} block`}>
              <li className="p-3 hover:bg-gray-700 transition-colors">Post</li>
            </NavLink>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;