import { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { BsPerson } from "react-icons/bs";
const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <button onClick={handleNav}>
        {nav ? (
          <AiOutlineClose className="absolute top-4 right-4 z-[99] cursor-pointer md:hidden" />
        ) : (
          <AiOutlineMenu className="absolute top-4 right-4 z-[99] cursor-pointer md:hidden" />
        )}
      </button>

      {nav ? (
        <div className="fixed top-0 pt-40 w-full h-full bg-white flex flex-col items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[70%] flex justify-center mx-auto items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 p-4 mt-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in "
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[70%] flex justify-center mx-auto items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 p-4 mt-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[70%] flex justify-center mx-auto items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 p-4 mt-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="w-[70%] flex justify-center mx-auto items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 p-4 mt-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[70%] flex justify-center mx-auto items-center rounded-full shadow-lg bg-gray-200 shadow-gray-400 p-4 mt-2 cursor-pointer hover:scale-105 transition-all duration-200 ease-in"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-[10]">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-105 transition-all duration-200"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default SideNav;
