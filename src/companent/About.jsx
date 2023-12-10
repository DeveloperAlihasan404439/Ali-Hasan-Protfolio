const About = () => {
  return (
    <section className="py-6  ">
        <h1 className="text-center mb-10 text-4xl uppercase font-medium"> <span className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">About Me</span> </h1>
      <div className="grid w-10/12 grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">

        <div className="py-6 md:py-0 px-2">
          <h1 className="text-2xl font-bold">Crafting Dynamic Experiences: MERN Stack Developer</h1>
          <p className="pt-2 pb-4">Hello! I am a dedicated MERN stack developer, skilled in MongoDB, Express.js, React.js, and Node.js. My expertise lies in crafting seamless web applications, merging intuitive front-end design with secure, efficient back-end solutions. With a passion for clean code and continual learning, I ensure cutting-edge, scalable projects. I thrive on collaborative teamwork, problem-solving, and embracing the latest tech trends. Explore my portfolio to witness my commitment to creating innovative, user-centric solutions. Let is team up and bring your ideas to life</p>
          
        </div>
        <div className="px-5">
            <h1 className="text-2xl font-bold">Name : Ali Hasan</h1>
            <p className="text-xl font-medium">Email : <span className="text-lg text-[#E17F13]">alihasan404439@gmail.com</span></p>
            <p className="text-xl font-medium">Age : 21 year</p>
            <p className="text-xl font-medium">From : Rangpur, Bangladesh</p>
        </div>
      </div>
    </section>
  );
};

export default About;
