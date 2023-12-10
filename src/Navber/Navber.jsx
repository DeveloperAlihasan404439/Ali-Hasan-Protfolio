import { NavLink } from "react-router-dom";
import logo from "../assets/ali-hasan-logo.png";
import { IoMdMenu } from "react-icons/io";
import "./Navber.css";
const Navber = () => {
  const navber = (
    <>
      <NavLink>Home</NavLink>
      <NavLink>Services</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Projects</NavLink>
      <NavLink>Skill</NavLink>
      <NavLink>Contact</NavLink>
      <NavLink to="https://drive.google.com/file/d/125ZZ5dx_Oz4RqkutuUOMfiBe6xfv6UJu/view?usp=sharing"
              >
        <button className="resume px-5 py-1">
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
          <span className="circle4"></span>
          <span className="circle5"></span>
          <span className="text"> Resume</span>
        </button>
      </NavLink>
    </>
  );
  return (
    <div className="border-b border-gray-600/60 bg-[#04050D]/60 shadow">
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
                <IoMdMenu/>
                </label>
              </div>
              <div className="drawer-side mt-12">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu p-4 w-[70%] md:w-[30%] flex-col gap-2 min-h-full bg-black text-white text-sm">
                  {navber}
                </ul>
              </div>
            </div>
          </div>
          <img src={logo} alt="" className="w-[70px] h-[30px] md:w-[100px]" />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-5 items-center text-lg">{navber}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
