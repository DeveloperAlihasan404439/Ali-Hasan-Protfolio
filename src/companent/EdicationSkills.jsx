import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import programming_hero from "../assets/skill/programming_hero.jpg";
import end from "../assets/skill/end.jpg";
import dpi from "../assets/skill/dpi.jpg";
import front_end from "../assets/skill/front-end.jpg";
import react from "../assets/skill/react.png";
import backend from "../assets/skill/backend.png";
import webdeveloper from "../assets/skill/webdeveloper.jpg";
import mongodb from "../assets/skill/mongodb.png";
import firebase from "../assets/skill/firebase.jpg";
import express from "../assets/skill/express.png";
import "./EdicationSkills.css";
const EdicationSkills = () => {
  return (
    <div>
      <h1 className="text-center mb-10 text-4xl font-medium">
        {" "}
        <span className="border-b-2 rounded px-6 py-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300  tracking-[5px]">
          My Education
        </span>{" "}
      </h1>
        <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2023 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={programming_hero} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">
          Complete Web Development Course With Jhankar Mahbub
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Web Development</h4>
        <p>
          My primary aim in to create powerful and user-friendly web
          applications, Im skilled at collaborating with teams and turning
          client requirements into scalable solutions while staying up-to-date
          with the latest technologies,
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2023"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={dpi} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">
          Diploma In Engineering
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Computer Science
        </h4>
        <p>
          Dinajpur Polytechnic Institute offers a comprehensive Computer Science
          program covering programming, software development, and networking.
          Students gain theoretical understanding alongside practical skills
          through labs and industry-oriented projects. The curriculum includes
          languages like C, C++, Java, and focuses on data structures,
          algorithms, and database management systems
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={react} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">React JS</h3>
        <h4 className="vertical-timeline-element-subtitle">Building Dynamic and Scalable Web Solutions</h4>
        <p>Proficient in React.js, adept at crafting responsive and efficient user interfaces. Skilled in creating modular components, managing state efficiently, and integrating APIs for seamless data flow. Experienced in optimizing performance and ensuring code scalability for robust web applications.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        icon={<img src={front_end} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">Front End Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">
        Versatile Front-End Developer
        </h4>
        <p>Skilled in HTML, CSS, and JavaScript, with expertise in modern front-end frameworks like React.js. Proficient in creating responsive layouts, optimizing UI/UX, and ensuring cross-browser compatibility. Passionate about translating design concepts into seamless, user-centric web experiences while staying updated with emerging front-end technologies.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<img src={backend} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">
          Backend Developer
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Architecting Robust Web Solutions</h4>
        <p>Expertise in backend technologies and frameworks like Node.js, Python/Django, or PHP, proficient in designing and implementing scalable APIs, managing databases, and ensuring system security. Skilled in optimizing server performance and handling data effectively. Committed to building reliable and efficient backend systems that drive seamless user experiences on the web.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<img src={webdeveloper} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">
          Web Development
        </h3>
        <h4 className="vertical-timeline-element-subtitle"> Crafting Innovative Online Solutions</h4>
        <p>Proficient in front-end and back-end technologies, adept at creating responsive and visually captivating websites and web applications. Skilled in HTML, CSS, JavaScript, and various frameworks such as React and Node.js. Experienced in designing intuitive user interfaces and robust server-side functionalities, dedicated to delivering cutting-edge online experiences that meet diverse user needs</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<img src={mongodb} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">
          MongoDB Database
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Harnessing NoSQL Power for Dynamic Data</h4>
        <p>Proficient in MongoDB and NoSQL databases, skilled in leveraging the flexibility and scalability of document-oriented storage. Experienced in designing efficient data models, handling vast amounts of data, and ensuring seamless integration within web applications. Dedicated to optimizing performance and scalability through MongoDB is powerful features, enabling robust and agile data management solutions</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<img src={firebase} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">
          Firebase Authentication
        </h3>
        <h4 className="vertical-timeline-element-subtitle"> Powering Seamless Web and Mobile Experiences</h4>
        <p>Skilled in Firebase and its suite of tools for building high-quality web and mobile applications. Proficient in utilizing Firebase is real-time database, authentication, and hosting services to create responsive and dynamic user experiences. Experienced in leveraging Firebase is robust features to streamline development, enhance app performance, and deliver reliable, scalable solutions tailored to user needs</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<img src={express} alt="" className="images" />}
      >
        <h3 className="vertical-timeline-element-title">
          Express JS
        </h3>
        <h4 className="vertical-timeline-element-subtitle"> Express.js Developer</h4>
        <p>Skilled in Express.js, proficient in leveraging its minimalist yet powerful framework for building fast and scalable web applications and APIs. Experienced in routing, middleware integration, and handling diverse HTTP requests to create efficient server-side solutions. Committed to optimizing performance and delivering seamless user experiences through Express.js versatile features and modular design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<img src={end} alt="" className="images" />}
      >
        <h4 className="vertical-timeline-element-subtitle"> Thank you for visiting my website</h4>
        <p>Thank you for visiting my website! It is been a pleasure crafting this digital space. Explore and discover the essence of my work, expertise, and passion. Feel free to reach love to connect and discuss how we can bring your ideas to life. Your visit is appreciated, and I hope you find inspiration within these digital realms.</p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
  );
};

export default EdicationSkills;
