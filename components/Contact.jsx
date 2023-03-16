import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";

const Contact = ({ toggleActive }) => {
  const [submitted, setSubmitted] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 3) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      setTimeout(() => {
        setSubmitted(true);
      }, 2000);
    }
    console.log(
      `Fullname: ${fullname}, Email: ${email}, subject: ${subject}, message: ${message} `
    );
  };

  return (
    <section className="flex flex-col justify-center h-screen w-full bg-black">
      <div className="flex flex-col justify-center h-screen w-[90%] m-auto text-center">
        <div className="flex flex-col relative justify-center h-[100%] rounded-md shadow-md md:p-10 lg:p-20 ">
          {submitted ? (
            <div className="flex flex-col justify-center items-center sm:text-3xl">
              <p>
                Thank you for contacting me, <br /> I'll get back to you as soon
                as I can.
              </p>

              <div
                className="border-[#49ff49] border-2 text-[#49ff49] w-40 rounded-md mx-4 mt-8 py-2 text-xs font-bold cursor-pointer text-center"
                onClick={toggleActive}
              >
                Close
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 mx-2  ">
              <header className="sm:flex flex-col justify-start pt-16">
                <h1 className=" text-[3rem] sm:text-6xl sm:pt-6 text-center sm:text-left">
                  Get in touch, <br /> let's{" "}
                  <span className="text-[#49ff49]">talk</span>.
                </h1>
              </header>

              <div className="icons-container inline-flex flex-col sm:mt-10 mb-20">
                <form
                  onSubmit={handleSubmit}
                  className="form text-start px-4 py-6 sm:py-14 rounded-lg p-4 flex flex-col"
                >
                  <p className="text-1xl text-center font-bold">
                    Fill in the details and I'll get back to <br /> you as soon
                    as I can.
                  </p>

                  <label
                    htmlFor="fullname"
                    className="text-gray-500 font-light mt-8 dark:text-gray-50"
                  >
                    Name
                    {fullname.length < 3 ? (
                      <span className="text-red-500">*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                    name="fullname"
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
                  />
                  {errors?.fullname && (
                    <p className="text-red-500">Name cannot be empty.</p>
                  )}

                  <label
                    htmlFor="email"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                  >
                    Email
                    {email.length < 5 ? (
                      <span className="text-red-500">*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
                  />
                  {errors?.email && (
                    <p className="text-red-500">Email cannot be empty.</p>
                  )}

                  <label
                    htmlFor="subject"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                  >
                    Subject
                    {subject.length < 5 ? (
                      <span className="text-red-500">*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
                  />
                  {errors?.subject && (
                    <p className="text-red-500">Subject cannot be empty.</p>
                  )}
                  <label
                    htmlFor="message"
                    className="text-gray-500 font-light mt-4 dark:text-gray-50"
                  >
                    Message
                    {message.length < 5 ? (
                      <span className="text-red-500">*</span>
                    ) : (
                      ""
                    )}
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-white"
                  ></textarea>
                  {errors?.message && (
                    <p className="text-red-500">Message cannot be empty.</p>
                  )}
                  <div className="text-left">
                    {showSuccessMessage && (
                      <p className="text-green-500 font-semibold text-sm my-2">
                        Thank you! Your Message has been delivered.
                      </p>
                    )}
                    {showFailureMessage && (
                      <p className="text-red-500">
                        Oops! Something went wrong, please try again.
                      </p>
                    )}
                  </div>
                  <div className="flex flex-row items-center justify-start gap-8 ">
                    <button
                      type="submit"
                      className=" bg-gradient-to-r from-[#49ff49] to-[#bbfcca] w-40 text-black rounded-md mx-4 mt-8 py-2 text-xs font-bold"
                    >
                      {buttonText}
                    </button>
                    <div
                      className="border-[#49ff49] border-2 text-[#49ff49] w-40 rounded-md mx-4 mt-8 py-2 text-xs font-bold cursor-pointer text-center"
                      onClick={toggleActive}
                    >
                      Back
                    </div>
                  </div>
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
