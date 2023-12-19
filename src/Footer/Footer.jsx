import { FaFacebookF,FaGithub,FaInstagram, FaLinkedinIn,  } from 'react-icons/fa6';
import logo from '../assets/ali-hasan-logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="  border-t-2 mt-4 pt-5 md:pt-0">
      <div className="w-11/12 lg:flex justify-between p-4 mx-auto md:p-8 ">
        <div className='flex justify-center'>
            <img src={logo} alt="" className='w-[150px]'/>
        </div>
        <div>
        <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Skill</li>
          <li>Contact</li>
        </ul>
        </div>
        <div>
        <div className="md:w-[260px]">
            <ul className="wrapper">
              <Link to="https://github.com/DeveloperAlihasan404439" className="icon github">
                <span className="tooltip">Github</span>
                <span>
                  <FaGithub/>
                </span>
              </Link>
              <Link to="https://www.facebook.com/alihasan404439" className="icon facebook">
                <span className="tooltip">Facebook</span>
                <span>
                <FaFacebookF/>
                </span>
              </Link>
              <Link to="https://www.linkedin.com/in/ali-hasan-409845256" className="icon twitter">
                <span className="tooltip">Linkedin</span>
                <span>
                  <FaLinkedinIn/>
                </span>
              </Link>
              <Link to="https://www.instagram.com/alihasan404439" className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span>
                  <FaInstagram/>
                </span>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <p className='text-center pb-5'>Copyright © 2023 - Ali Hasan Protfolio</p>
    </footer>
  );
};

export default Footer;
