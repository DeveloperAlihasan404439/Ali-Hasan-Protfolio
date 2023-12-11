import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useRef } from "react";
import Swal from "sweetalert2";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ec11fpq",
        "template_02ye1ne",
        form.current,
        "2Vuef0aowUUWPb7kJ"
      )
      .then(
        (result) => {
          if(result.text){
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfull contact me",
              showConfirmButton: false,
              background: "#744009",
              color: "white",
              timer: 2000
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <h1 className="text-center mt-14  text-4xl uppercase font-medium">
        {" "}
        <span className="border-b-2 rounded p-2  border-[#E17F13] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#E17F13] duration-300">
          Contact Us
        </span>{" "}
      </h1>
      <div className="md:w-10/12 lg:w-8/12 mx-auto flex justify-between items-center gap-8 py-16 rounded-lg">
        <div className="md:w-[50%] ">
          <img
            src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?size=626&ext=jpg&uid=R116477275&ga=GA1.1.1339526423.1701975357&semt=ais"
            alt=""
            className=" w-full rounded h-[430px]"
          />
        </div>
        <form ref={form} onSubmit={sendEmail} className="md:w-[50%] border rounded p-10 bg-black/60">
          <div className="form-control mt-3">
            <input
              type="text"
              name="from_name"
              className="input input-alt"
              placeholder="Enter Your Name"
              required=""
            />
            <span className="input-border input-border-alt"></span>
          </div>
          <div className="form-control mt-3">
            <input
              type="email"
              name="from_name"
              placeholder="Enter Your Email"
              className="input input-alt"
              required=""
            />
            <span className="input-border input-border-alt"></span>
          </div>
          <div className="form-control mt-3">
            <textarea
              name="message"
              id=""
              cols="15"
              rows="5"
              className="input input-alt h-full hover:border"
              placeholder="Enter Your Message"
            ></textarea>
            <span className="input-border input-border-alt"></span>
          </div>
            <input type="submit" value="Send Message"  className=" px-8 py-2 border border-[#E17F13] hover:bg-[#744009] cssbuttons-io mt-5 uppercase"/>
          
        </form>
      </div>
    </>
  );
};

export default Contact;
