const Skill = () => {
  return (
    <div className="w-9/12 mx-auto pt-5 pb-10">
      
      <h1 className="text-center mb-10 text-4xl uppercase font-medium"> <span className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">My Skill</span> </h1>
      <div className="md:flex gap-10">
        <div className="md:w-[50%]">
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>HTML</span>
                <span>90%</span>
            </h1>
            <progress
              className="progress progress-warning bg-white"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>CSS3</span>
                <span>95%</span>
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="95"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>Tailwind CSS</span>
                <span>97%</span>
                
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="97"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>Bootstrap Css</span>
                <span>94%</span>
                
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="94"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>JavaScript</span>
                <span>80%</span>
                
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="80"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="md:w-[50%]">
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>React JS</span>
                <span>75%</span>
                
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>Express JS</span>
                <span>71%</span>
                
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="71"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>Firebase</span>
                <span>97%</span>
                
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="97"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>MongoDB</span>
                <span>90%</span>
                
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className = "pb-5">
            <h1 className="text-xl font-medium flex justify-between">
                <span>Node js</span>
                <span>60%</span>
                </h1>
            <progress
              className="progress progress-warning bg-white"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
