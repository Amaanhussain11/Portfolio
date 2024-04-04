import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center pt-10"
    >
      <form
        action="https://getform.io/f/zbxmdxga"
        method="POST"
        className="flex flex-col items-center max-w-[600px] w-full"
      >
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline text-gray-300 border-b-4 border-pink-600 ">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            // Submit the form below OR drop me an Email:
            amaanhussain983@gmail.com
          </p>
        </div>
        <div className=" flex flex-col w-full">
          <input className="bg-[#ccd6f6] p-2" name="name" placeholder="Name"></input>

          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            name="email"
            placeholder="Email"
          ></input>
          <textarea className=" p-2 bg-[#ccd6f6]" placeholder="Message" name="messege" rows="10"></textarea>
          <button type="submit" className="text-white border-2 hover:bg-pink-600 hover:border-pink-600  px-4 py-3 my-8 mx-auto flex items-center">Let's collaborate</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
