import React from "react";

export default function Contact() {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Contact
        </h1>
      </div>
      <div className="relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <header className="">
            <h1 className="text-gray-50 font-semibold text-2xl">
              Get in touch, let's talk.
            </h1>
            <p className="font-light text-base text-gray-200 mt-2">
              Fill in the details and I'll get back to you as soon as I can.
            </p>
          </header>
          <div className="icons-container inline-flex flex-col my-20">
            <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
              <p className="text-gray-50 font-light text-sm">+91 9987384723</p>
            </div>
            <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
              .... ....
              <p className="text-gray-50 font-light text-sm">
                contact@yourwebsite.com
              </p>
            </div>
            <div className="flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4">
              .... ....
              <form className="form rounded-lg bg-white p-4 flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-600 mx-4">
                  {" "}
                  Your Name
                </label>
                <input
                  type="text"
                  className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                  name="name"
                />
                <label
                  htmlFor="email"
                  className="text-sm text-gray-600 mx-4 mt-4"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
                  name="email"
                />
                <button
                  type="submit"
                  className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
