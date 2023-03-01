import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

const Contact = ({ toggleActive }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");

    let data = {
      name,
      email,
      message,
    };
    console.log(data);

    fetch("/api/form", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        if (res.status === 200) {
          console.log("Response succeeded!");
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSubmitted(true);
          }, 1500);
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  };

  return (
    <section className="flex flex-col justify-center h-screen w-full bg-black">
      <div className="flex flex-col justify-center h-screen w-[90%] m-auto text-center">
        <div className="flex flex-col relative justify-center h-[100%] rounded-md shadow-md md:p-10 lg:p-20 ">
          <div className="flex justify-end">
            <AiOutlineClose
              size={25}
              className="cursor-pointer hover:scale-125 ease-in duration-200"
              onClick={toggleActive}
            />
          </div>
          {submitted ? (
            <div className="flex flex-col justify-center items-center sm:text-3xl">
              <p>
                Thank you for contacting me, <br /> I'll get back to you as soon
                as I can.
              </p>

              <button className="bg-gradient-to-r from-[#49ff49] to-[#bbfcca] w-40 text-black rounded-md mx-4 mt-8 py-2 text-xs font-bold">
                Close
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 mx-2  ">
              <header className="md:flex flex-col justify-start pt-20">
                <h1 className="pt-6 text-[1.7rem] sm:text-6xl text-center md:text-left">
                  Get in touch, <br /> let's{" "}
                  <span className="text-[#49ff49]">talk</span>.
                </h1>
                <p className="font-light text-base text-white pt-10 md:text-left">
                  Fill in the details and I'll get back to you as soon as I can.
                </p>
              </header>

              <div className="icons-container inline-flex flex-col mt-10 mb-20">
                <form
                  onSubmit={handleSubmit}
                  className="form text-start px-4 py-14 rounded-lg p-4 flex flex-col"
                >
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-400 mx-4 font-bold"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    required
                    className="font-light text-black rounded-md border focus:outline-none py-2 pl-2 mt-2 px-1 mx-4 focus:ring-4 focus:border-none ring-[#49ff49]"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-400 mx-4 mt-4 font-bold"
                  >
                    Your Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    required
                    className="font-light text-black rounded-md border focus:outline-none py-2 pl-2 mt-2 px-1 mx-4 focus:ring-4 focus:border-none ring-[#49ff49]"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="message"
                    className="text-sm text-gray-400 mx-4 mt-4 font-bold"
                  >
                    Email me
                  </label>
                  <textarea
                    spellCheck="false"
                    placeholder="Message..."
                    required
                    type="text"
                    name="message"
                    value={message}
                    className="font-light text-black rounded-md border focus:outline-none py-2 mt-2 pl-2 mx-4 focus:ring-4 focus:border-none ring-[#49ff49] max-h-24"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />

                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#49ff49] to-[#bbfcca] w-40 text-black rounded-md mx-4 mt-8 py-2 text-xs font-bold shadow-none"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
