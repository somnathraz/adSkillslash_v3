import React, { useEffect, useState, useRef } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { motion, useScroll } from "framer-motion";

const WhyUs = ({ redirectDs, home, redirectDa }) => {
  const certRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: certRef.current,
  });

  const imageSrc = [
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Certificate+Of+Internship.webp",
    // Add other image URLs as needed
    "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/project-experience.webp",
    redirectDa
      ? "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/microsoft-data-analytics.webp"
      : "https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/microsft-data-science.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateState, setAnimateState] = useState(true);

  useEffect(() => {
    let intervalId;

    if (animateState) {
      intervalId = setInterval(() => {
        // Increment index to change the image
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageSrc.length);
      }, 3500);
    } else {
      clearInterval(intervalId);
    }

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex, imageSrc]);

  return (
    <div className="py-14 flex flex-col gap-11 max-sm:hidden min-[1600px]:px-[150px] max-[741px]:mt-[70px] ">
      <h2 className="px-28 max-[1281px]:px-20 max-[1024px]:px-10 max-sm:px-5 text-3xl max-sm:text-2xl">
        Why Choose Us?
      </h2>
      <div className="px-28 max-[1281px]:px-20 max-[1024px]:px-10 bg-gradient-to-t from-[#f3f1fffe] from-8 0% to-white w-full to-20% flex flex-col h-max">
        <div className="bg-black h-[330px] max-[1281px]:h-[305px]  rounded grid grid-cols-[48%,48.5%] min-[1600px]:grid-cols-[48%,45%] min-[1600px]:gap-24 max-[1281px]:grid-cols-[43%,53%] gap-10 pl-16 relative max-[1281px]:pl-10">
          <div className="absolute bottom-0 h-[190px] bg-gradient-to-t from-[#000000] from-10% to-transparent w-[55%] to-70% z-20 max-[1281px]:w-[56%] max-[1024px]:hidden"></div>
          <div className="relative overflow-x-scroll hideScroll w-[87vw]">
            {/* <div className="absolute top-[-96px] left-5 z-0 h-[800px]">
              <hr className=" w-[1px] bg-white z-[0] h-[800px]" />
            </div> */}
            <div className="absolute top-[0px] h-[666px] left-5 z-10">
              <motion.svg
                preserveAspectRatio="xMidYMax meet"
                className="h-[100%] w-[1px]"
                viewBox="0 0 1 666"
              >
                <motion.path
                  id="animatedPath1"
                  fill="none"
                  d="M 0 0 V 667"
                  stroke="white"
                  strokeWidth="4"
                  className="z-10"
                />
                <motion.path
                  id="animatedPath1"
                  fill="none"
                  d="M 0 0 V 667"
                  stroke="#f1830"
                  strokeWidth="4"
                  className="z-10"
                  pathLength={1}
                  style={{ pathLength: scrollYProgress }}
                />
              </motion.svg>
            </div>
            <motion.div className="relative h-[130px]">
              <div className="flex gap-10 mt-8 z-10 relative">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1]">
                  <h3 className="text-white text-[28px] font-bold max-[1281px]:text-[24px]">
                    <span className="text-[#f18350]">Triple</span> Certification
                  </h3>
                  <li>Microsoft course completion certificate</li>
                  <li>Project experience certificate</li>
                  <li>Internship certificate</li>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative ">
              <div className="flex gap-10 mt-8 z-10 relative">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1]">
                  <h3 className="text-white text-[28px] font-bold max-[1281px]:text-[24px]">
                    <span className="text-[#f18350]">Live</span> Doubt Sessions
                  </h3>
                  <li>Live interactive sessions</li>
                  <li>Unlimited doubt sessions</li>
                  <li>Weekly sessions</li>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative ">
              <div className="flex gap-10  z-10 relative mt-[50px]">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1] flex flex-col gap-2">
                  <h3 className="text-white text-[28px] font-bold max-[1281px]:text-[24px]">
                    <span className="text-[#f18350]"> Live </span>Project
                    Session
                  </h3>
                  <li> Interactive sessions</li>
                  <li> Multi-domain projects</li>
                  <li>Weekly sessions</li>
                </div>
              </div>
            </motion.div>
            <motion.div className="relative h-[160px] ">
              <div className="flex gap-10 mt-8 z-10 relative">
                <div className="flex h-max items-center">
                  <div className="border-[1px] border-white bg-black rounded-full h-[40px] w-[40px] flex items-center justify-center ">
                    <FaRegCirclePlay className="text-white text-3xl" />
                  </div>
                  <div className="flex text-white gap-2 h-max items-center">
                    <hr className="bg-white w-[30px] ml-2" />
                    <span>::</span>
                  </div>
                </div>
                <div className="text-[#e1e1e1] max-[1281px]:w-[40%] max-[1024px]:w-[80%]">
                  <h3 className="text-white text-[28px] font-bold max-[1281px]:text-[24px]">
                    <span className="text-[#f18350]"> Career </span>
                    Support
                  </h3>
                  <li>
                    Live resume & LinkedIn profile building session with expert
                  </li>
                  <li>Multiple mock interviews sessions with mentors</li>
                  <li>Job opening & job application support</li>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[390px] max-[1281px]:h-[330px] mt-[-60px] max-[1281px]:mt-[-25px] max-[1024px]:hidden">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/why-choose-us.webp"
              alt="why choose"
              fill
            />
          </div>
        </div>
        {(redirectDs || home) && (
          <div
            className="flex flex-col relative px-28 max-sm:px-5 h-[550px] max-[901px]:h-[900px] max-[1281px]:px-0  items-center gap-10 pb-[60px]  pt-10 "
            ref={certRef}
          >
            <div className="absolute top-[0px] h-[666px] max-[801px]:h-[1000px] left-[80px] max-[1281px]:left-[58px] z-10">
              <motion.svg
                preserveAspectRatio="xMidYMax meet"
                className="h-[870px] w-[650px] max-sm:hidden max-[1281px]:hidden"
              >
                <motion.path
                  id="animatedPath1"
                  fill="none"
                  d="M 5 0 V 600  Q 5 605, 20 605 H 520 Q 540 605, 540 615 V 630"
                  stroke="black"
                  strokeWidth="2"
                  className="z-10"
                />
                <motion.path
                  id="animatedPath1"
                  fill="none"
                  d="M 5 0 V 600  Q 5 605, 20 605 H 520 Q 540 605, 540 615 V 630"
                  stroke="#f18350"
                  strokeWidth="2"
                  className="z-10"
                  pathLength={1}
                  style={{ pathLength: scrollYProgress }}
                />
                <circle
                  cx="540"
                  cy="640"
                  r="10"
                  fill="none"
                  stroke="black"
                  strokeWidth={1}
                />
                <motion.circle
                  cx="540"
                  cy="640"
                  r="10"
                  fill="none"
                  stroke="#f18350"
                  strokeWidth={1}
                  pathLength={1}
                  className="z-10"
                  style={{ pathLength: scrollYProgress }}
                />
              </motion.svg>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <h3 className="text-4xl text-[#4f419a] font-bold">
                Triple Certification
              </h3>
              <div className="grid grid-cols-3 gap-3 max-[961px]:grid-cols-2">
                <div className="bg-white shadow rounded-lg px-7 py-4 flex flex-col gap-3">
                  <div className="relative w-full h-[180px]  ">
                    <Image src={imageSrc[2]} fill alt="certificate image" />
                  </div>
                  <h3 className="font-bold">Microsoft Certificate</h3>
                  <p>
                    Enhance your resume and LinkedIn profile with the
                    certificate from global leader in this technology.
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg px-7 py-4 flex flex-col gap-3">
                  <div className="relative w-full h-[180px]  ">
                    <Image src={imageSrc[1]} fill alt="certificate image" />
                  </div>
                  <h3 className="font-bold">Project Experience Certificate</h3>
                  <p>
                    Micro validation of your internship experience from
                    Skill-AI, showcase the hiring manager the list of real-life
                    projects you
                  </p>
                </div>
                <div className="bg-white shadow rounded-lg px-7 py-4 flex flex-col gap-3">
                  <div className="relative w-full h-[180px]  ">
                    <Image src={imageSrc[0]} fill alt="certificate image" />
                  </div>
                  <h3 className="font-bold"> Internship Certificate</h3>
                  <p>
                    Showcase experience to recruiters with internship
                    certificate from Skill-AI. Stand out of the crowd with
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full h-[220px] flex gap-2"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhyUs;
