import Typewriter from "typewriter-effect";
import banner from "../assets/ali2.jpg";
import "./Banner.css";
const pdf ="http://localhost:5173/Md_Ali.pdf"
const Banner = () => {

  const downloadPdf = url =>{
    const fileName = url.split("/").pop("");
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove()
  }
  return (
    <section>
      <div className="w-10/12  md:flex justify-between items-center flex-row-reverse mx-auto sm:py-12 lg:py-10 lg:pt-24 lg:justify-between">
        <div className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={banner}
            alt=""
            className="object-contain border-2 border-dotted rounded-[50%] border-[#E17F13] h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl">
            Hi I Am Ali Hasan
          </h1>
          <p className="mt-6 text-lg flex gap-2">
            I am 
            <Typewriter
              options={{
                strings: ["MERN Stack Developer....","React Developer....","JavaScript Developer....","Web Developer....","Frontend Developer...." ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>
          <p className="mt-2 mb-8 text-lg sm:mb-12">
            Welcome to my portfolio! I am a MERN stack developer
            <br className="hidden md:inline lg:hidden" />
            passionate about creating efficient, scalable, and user-friendly
            applications. Explore my projects and skills below
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button onClick={()=>downloadPdf(pdf)}
              className=" px-8 py-2 border border-[#E17F13] cssbuttons-io"
            >
              <span>Downloade Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
