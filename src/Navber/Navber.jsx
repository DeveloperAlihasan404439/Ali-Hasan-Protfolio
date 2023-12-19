import logo from "../assets/ali-hasan-logo.png";
import { IoMdMenu } from "react-icons/io";
import Typewriter from "typewriter-effect";
import "./Navber.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import profile from "../assets/ali2.jpg";
import AuthContaxt from "../Auth/AuthContaxt";
const Navber = () => {
  const [show, setShow] = useState(false);
  const {user, loginUser} = AuthContaxt()
  console.log(loginUser);
  useEffect(() => {
    const hendelScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", hendelScroll);
    return () => {
      window.removeEventListener("scroll", hendelScroll);
    };
  }, []);
  return (
    <div
      className={`border-b mb-10 border-gray-600/70 bg-[#04050D]/60 shadow sticky top-0 left-0 ${
        show ? "z-30" : ""
      }`}
    >
      <div className="flex items-center justify-between lg:py-3 text-white md:w-11/12 mx-auto">
        <div className="py-2  flex justify-between items-center w-[92%] mx-auto flex-row-reverse lg:flex-row">
          <div className="block lg:hidden ">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button text-2xl">
                  <IoMdMenu />
                </label>
              </div>
              <div className="drawer-side mt-12">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-[100%] md:w-[60%] flex-col gap-2 min-h-full bg-black text-white text-sm">
                  <li className="flex justify-center items-center w-full">
                    <img
                      src={profile}
                      alt=""
                      className="w-[200px] h-[50%] rounded-[50%]"
                    />
                  </li>
                    <div>
                      <h1 className="text-xl md:text-2xl font-bold leadi text-center">
                        Hi I Am Ali Hasan
                      </h1>
                      <p className="mt-3 text-lg flex gap-2 justify-center md:text-left">
                        I am
                        <Typewriter
                          options={{
                            strings: [
                              "MERN Stack Developer....",
                              "React Developer....",
                              "JavaScript Developer....",
                              "Web Developer....",
                              "Frontend Developer....",
                            ],
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </p>
                    </div>
                  <div className="flex gap-3 flex-wrap text-2xl justify-center items-center">
                  <Link
                    activeClass="active"
                    to="banner"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Services
                  </Link>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    About
                  </Link>
                  <Link
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Projects
                  </Link>
                  <Link
                    activeClass="active"
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Skill
                  </Link>
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Education
                  </Link>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer"
                  >
                    Contact
                  </Link>
                  
                  <Link
                    to="https://drive.google.com/file/d/125ZZ5dx_Oz4RqkutuUOMfiBe6xfv6UJu/view?usp=sharing"
                    title="Show Resume"
                  >
                    <button className="resume px-5 py-1">
                      <span className="circle1"></span>
                      <span className="circle2"></span>
                      <span className="circle3"></span>
                      <span className="circle4"></span>
                      <span className="circle5"></span>
                      <span className="text"> Resume</span>
                    </button>
                  </Link>
                  </div>
                  <li className="grid md:grid-cols-2 gap-5">
                    <a
                      href="tel:+8801783228430"
                      title="+8801783228430"
                      className=" px-4 py-2 border border-[#E17F13] cssbuttons-io"
                    >
                      <span className="flex gap-3 justify-center items-center w-[100%]">
                        Call <BsFillTelephoneOutboundFill />
                      </span>
                    </a>
                    <a
                      href="mailto:example@email.com"
                      title="alihasan404439@gmail.com"
                      className="w-[100%] px-4 py-2 border border-[#E17F13] cssbuttons-io"
                    >
                      <span className="flex gap-3 justify-center items-center w-[100%]">
                        Email <MdEmail />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <img src={logo} alt="" className="w-[70px] h-[30px] md:w-[100px]" />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-3 items-center text-lg">
          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Skill
            </Link>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Projects
            </Link>
            <Link
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Education
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
            <a
              href="tel:+8801783228430"
              title="+8801783228430"
              className="px-4 py-1 border border-[#E17F13] cssbuttons-io"
            >
              <span className="flex gap-3">
                Call <BsFillTelephoneOutboundFill />
              </span>
            </a>
            <a
              href="mailto:example@email.com"
              title="alihasan404439@gmail.com"
              className="px-4 py-1 border border-[#E17F13] w-fit cssbuttons-io"
            >
              <span className="flex gap-3">
                Email <MdEmail />
              </span>
            </a>
            <Link
              to="https://drive.google.com/file/d/125ZZ5dx_Oz4RqkutuUOMfiBe6xfv6UJu/view?usp=sharing"
              title="Show Resume"
            >
              <button className="resume px-5 py-1">
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text"> Resume</span>
              </button>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
