import React from "react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const About = () => {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "-130px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center justify-center flex-col bg-gradient-to-t from-black "
    >
      <div className="max-w-[1240px] flex justify-center flex-col-reverse mx-10 md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase font-bold tracking-widest">
            Cool, i've got you
            <span className="text-[#49ff49]"> intrigued </span>
          </p>
          <h1 className="pt-10 pb-2 uppercase text-3xl sm:text-4xl">
            My journey
          </h1>
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
          <p className="pt-2 pb-12">
            Why I went with Frontend and not Backend is because Frontend focuses
            on the visual aspects of a website and understanding the needs of
            the end user which I find intriguing. I'm spending my free time to
            learn, build and design. My focus is to become an awesome frontend
            developer and having fun creating and delivering web applications.
          </p>
        </div>

        <div className="flex justify-center" ref={targetRef}>
          <div
            className="pt-10 pl-10 md:pt-[3rem] md:p-0 h-[180px] w-[180px] transform rotate-45 rounded-tl-[80%] rounded-br-[80%] overflow-hidden border-2 border-[#49ff49] shadow-inner shadow-black cursor-pointer bg-white 
        "
          >
            {!inView && (
              <div className="closed">
                <span className="block w-full h-full bg-[#49ff49] absolute top-[18%] rounded-bl-[80%] rounded-br-[70%] shadow-lg shadow-black transition-all ease-in duration-300"></span>
              </div>
            )}
            <div className="flex h-[170px] w-[170px] rounded-full border-4 border-[#49ff49] bg-black shadow-inner shadow-[#49ff49]  transform -rotate-45">
              <span className="absolute bg-white top-[1.8rem] left-[8.6rem] rounded-full h-6 w-6"></span>
              <span className="absolute bg-white bottom-[8rem] left-[6rem] rounded-full h-12 w-12"></span>
              <div className="ball w-fit h-auto m-auto rounded-full bg-[#49ff49] p-2 hover:scale-110 transition-all ease-in duration-300 shadow-inner shadow-black">
                <Image
                  src="/ProfilPic.png"
                  alt="logo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
