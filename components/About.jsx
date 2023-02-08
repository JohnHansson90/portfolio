import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center justify-center flex-col bg-gradient-to-t from-black "
    >
      <div className="max-w-[1240px] mx-10 md:grid grid-cols-3 gap-8">
        <div className="col-span-2 ">
          <p className="uppercase font-bold tracking-widest">
            Cool, i've got you
            <span className="text-[#49ff49]"> intrigued </span>
          </p>
          <h1 className="pt-2 pb-8 uppercase">The journey of John</h1>
          <p className="py-2">
            I started out as an electrician in Gothenburg and kept working as
            one for almost 11 years. It was fun in the beginning but I soon
            realized that my body took a toll and I started to think back at the
            time when I was much younger, when tech and gaming was a daily part
            of my life. I always had a big interest for technology and computers
            and I wanted to further develop my understanding of programming so I
            embarked on my journey to become a Frontend Developer for 2 years at
            the polytechnic institute of Handelsakademin in Gothenburg, I
            graduated in June, 2022.
          </p>
          <p className="py-2">
            Why I went with Frontend and not Backend is because Frontend focuses
            on the visual aspects of a website and understanding the needs of
            the end user which I find intriguing. I'm spending my free time to
            learn, build and design. My focus is to become an awesome frontend
            developer and having fun creating and delivering web applications.
          </p>
        </div>
        <div className="w-fit h-auto m-auto shadow-xl rounded-full bg-[#49ff49] flex items-center justify-center p-2 hover:scale-110 ease-in duration-300 ">
          <Image
            src="/../public/assets/ProfilPic.png"
            alt="Profile_pic"
            width="200"
            height="300"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
