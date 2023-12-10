import axios from "axios";
import { useEffect, useState } from "react";
import './Services.css'
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("/services.json").then((res) => setServices(res.data));
  }, []);
  return (
    <div className="w-11/12 mx-auto pb-5">
      
      <h1 className="text-center mb-10 text-4xl uppercase font-medium"> <span className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Services</span> </h1> 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {
            services?.map(service =><div key={service.id} className="card">
                <img src={service.imageUrl} alt="" className="w-[50px] rounded"/>
            <p className="card-title">{service.title}</p>
            <p className="small-desc">
              {service.description}
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default Services;
