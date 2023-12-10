import './Contact.css'
const Contact = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center gap-8 py-16 rounded-lg">
      <div className="md:w-[50%]">
        <img src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D" alt="" className=" w-full rounded" />
      </div>
      <form className="md:w-[50%]">
        <div className="container pb-5">
          <input required="" type="text" name="text" className="input" placeholder='enter your name'/>
          <label className="label">User Name</label>
        </div>
        <div className="container pb-5">
          <input required="" type="email" name="text" className="input" placeholder='enter your email'/>
          <label className="label">Email</label>
        </div>
        <div className="container">
          <textarea
            id="message"
            cols="30"
            rows="5"
            className="input h-full"
            placeholder='enter your message'
          ></textarea>
          <label className="label">Message</label>
        </div>
        <button
              className=" px-8 py-2 border border-[#E17F13] cssbuttons-io mt-5"
            >
              <span>Contact US</span>
            </button>
      </form>
    </div>
  );
};

export default Contact;
