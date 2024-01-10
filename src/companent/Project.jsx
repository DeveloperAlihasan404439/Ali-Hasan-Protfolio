import { Link } from "react-router-dom";
import bodypulse from "../assets/projact/bodypulse_.png";
import careerpulse from "../assets/projact/carer pulse.png";
import eventmenagement from "../assets/projact/event-menagement.png";
import brand_shop from "../assets/projact/brand-shop.png";
import commint from "../assets/projact/commint-calcaral.png";
import donatoin from "../assets/projact/donation.png";
const Project = () => {
  return (
    <div className="w-11/12 mx-auto py-5 md:py-10">
      <h1 className="text-center mb-10 text-4xl  font-medium">
        {" "}
        <span className="border-b-2 rounded px-6 py-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300  tracking-[5px]">
          My Projact
        </span>{" "}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="max-w-xl rounded-md shadow-md border border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#644A2E] duration-300 ">
          <img
            src={bodypulse}
            alt=""
            className="w-full rounded-t-md h-72 "
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">
                Body Pulse
              </h2>
              <div className="flex justify-between items-center text-xl font-medium gap-5">
                <Link to="https://bodypulse-assignament-12.surge.sh"> <button className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Live Link</button> </Link>
                <Link to="https://github.com/DeveloperAlihasan404439/Body-pulse-client-site"> <button className="border-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Github Link</button> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl rounded-md shadow-md border border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#644A2E] duration-300 ">
          <img
            src={careerpulse}
            alt=""
            className=" w-full rounded-t-md h-72 "
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">
                Career Pulse
              </h2>
              <div className="flex justify-between items-center text-xl font-medium gap-5">
                <Link to="https://authfirebaseassignament11.web.app"> <button className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Live Link</button> </Link>
                <Link to="https://github.com/DeveloperAlihasan404439/careee-pulse-client-site"> <button className="border-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Github Link</button> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl rounded-md shadow-md border border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#644A2E] duration-300 ">
          <img
            src={eventmenagement}
            alt=""
            className="-full rounded-t-md h-72 "
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">
                Event Menagement
              </h2>
              <div className="flex justify-between items-center text-xl font-medium gap-5">
                <Link to ="https://event-menagement-surge.surge.sh/"> <button className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Live Link</button> </Link>
                <Link to ="https://github.com/DeveloperAlihasan404439/event-management"> <button className="border-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Github Link</button> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl rounded-md shadow-md border border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#644A2E] duration-300 ">
          <img
            src={brand_shop}
            alt=""
            className="w-full rounded-t-md h-72 "
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">
                Brand Shop
              </h2>
              <div className="flex justify-between items-center text-xl font-medium gap-5">
                <Link to="https://brand-shop-fccb4.web.app"> <button className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Live Link</button> </Link>
                <Link to="https://github.com/DeveloperAlihasan404439/brand-shiop-10"> <button className="border-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Github Link</button> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl rounded-md shadow-md border border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#644A2E] duration-300 ">
          <img
            src={commint}
            alt=""
            className=" w-full rounded-t-md h-72 "
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">
                Communit Cultural
              </h2>
              <div className="flex justify-between items-center text-xl font-medium gap-5">
                <Link to="https://communitd-cultural.surge.sh"> <button className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Live Link</button> </Link>
                <Link to="https://github.com/DeveloperAlihasan404439/Communitd-and-Cultural-Cliend"> <button className="border-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Github Link</button> </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-xl rounded-md shadow-md border border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#644A2E] duration-300 ">
          <img
            src={donatoin}
            alt=""
            className="-full rounded-t-md h-72 "
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracki">
                Donation
              </h2>
              <div className="flex justify-between items-center text-xl font-medium gap-5">
                <Link to ="https://donation-projact.surge.sh"> <button className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Live Link</button> </Link>
                <Link to ="https://github.com/DeveloperAlihasan404439/donation-projact"> <button className="border-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">Github Link</button> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
