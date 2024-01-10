import { Link } from "react-router-dom";
import about from '../assets/202312173236.png'
const About = () => {
  return (
    <section className="py-6  mt-5">
        <h1 className="text-center mb-10 text-4xl font-medium"> <span className="border-b-2 rounded px-6 py-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300  tracking-[5px]">About Me</span> </h1>
      <div className="md:w-10/12 md:grid grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">

        <div className="py-6 md:py-0 md:px-2 text-center md:text-left">
          <img src={about} alt="" className="h-[450px] w-full rounded-md"/>          
        </div>
        <div className="px-5">
        <h1 className="text-2xl font-bold">MERN Stack Developer</h1>
          <p className="pt-2 pb-4">Hello! I'm a proficient MERN stack developer with expertise in MongoDB, Express.js, React.js, and Node.js. Specializing in crafting seamless web applications, I bring a blend of intuitive front-end design and robust back-end solutions. Let's collaborate to transform your ideas into cutting-edge, scalable projects.</p>
            <h1 className="text-xl font-bold">Name : Ali Hasan</h1>
            <p className="text-lg font-medium">Email : <span className="text-lg text-[#E17F13]">alihasan404439@gmail.com</span></p>
            <p className="text-lg font-medium">Age : 21 year</p>
            <p className="text-lg font-medium">From : Rangpur, Bangladesh</p>
            <div className="mt-10 flex flex-col md:flex-row gap-5">
              <Link to='https://www.linkedin.com/in/ali-hasan-409845256' className="text-center md:text-left mb-10 text-xl font-medium"> <span className="border-b-2 rounded px-7 py-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] tracking-[5px] duration-300" title="ali-hasan-409845256">Linkedin</span></Link>
              <Link to='https://github.com/DeveloperAlihasan404439' className="text-center md:text-left mb-10 text-xl font-medium"> <span className="border-b-2 rounded px-7 py-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] tracking-[5px] duration-300" title="DeveloperAlihasan404439">Github</span></Link>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
