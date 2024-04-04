import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assests/logo1.png";
import { Link } from "react-scroll";


const Navbar = () => {
  const [nav, setnav] = useState(false);

  const Handleclick = () => {
    setnav(!nav);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div
        className="w-[110px] flex  items-center z-10
      "
      >
        <img src={Logo} alt="Logo" className=""></img>
      </div>

      {/* menu  */}

      <ul className="hidden  md:flex ">
        <li>
          
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li><Link to="about" smooth={true} duration={500}>
            About
          </Link></li>
        <li><Link to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
        {/* <li><Link to="work" smooth={true} duration={500}>
            Work
          </Link></li> */}
        <li><Link to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
      </ul>

      {/* hamburger */}
      <div onClick={Handleclick} className=" flex md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu  */}

      <div
        className={
          !nav
            ? "hidden"
            : " md:hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <ul>
          <li className="py-6 text-4xl"><Link onClick={Handleclick} to="home" smooth={true} duration={500}>
            Home
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={Handleclick}to="about" smooth={true} duration={500}>
            About
          </Link></li>
          <li className="py-6 text-4xl"><Link onClick={Handleclick} to="skills" smooth={true} duration={500}>
            Skills
          </Link></li>
          {/* <li className="py-6 text-4xl">Work</li> */}
          <li className="py-6 text-4xl"><Link onClick={Handleclick} to="contact" smooth={true} duration={500}>
            Contact
          </Link></li>
        </ul>
      </div>

      {/* Social Icons   */}
      <div className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
               href="https://www.linkedin.com/in/amaan-hussain-67407725b/"
              className="flex justify-between items-center w-full text-gray-300 text-xl"
            >
              LinkedIn
              <FaLinkedin size={31} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black">
            <a
               href="https://github.com/Amaanhussain11"
              className="flex justify-between items-center w-full text-gray-300 text-xl"
            >
              Github
              <FaGithub size={31} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
               href="https://mail.google.com/mail/u/"
              className="flex justify-between items-center w-full text-gray-300 text-xl"
            >
              Email
              <HiOutlineMail size={31} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
            <a
               href="/"
              className="flex justify-between items-center w-full text-gray-300 text-xl"
            >
              Resume
              <BsFillPersonLinesFill size={31} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
