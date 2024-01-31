import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineClear } from "react-icons/md";

const DetailTable = ({
  offerPrice,
  hrs,
  otherHr,
  liveHr,
  redirectDs,
  redirectFs,
}) => {
  const [ref, inView] = useInView();
  return (
    inView && (
      <div
        className="px-40 py-10 flex flex-col gap-5 max-[1281px]:px-24 relative max-sm:px-5 max-sm:overflow-scroll bg-[#111621]"
        ref={ref}
      >
        <h2 className="text-white font-bold text-4xl text-center max-sm:text-2xl">
          Skillslash Bootcamp
        </h2>
        <div className="border-[1px] border-[#ffffff] rounded-lg gridBox grid  grid-cols-[35%,16%,16%,16%] max-[1281px]:gird-cols-[35%,17%,17%,19%]  gap-[44px] px-5 py-5 justify-center max-sm:w-max max-sm:overflow-scroll">
          <div
            className={`flex flex-col ${
              redirectDs ? "gap-[13px]" : "gap-[14px]"
            } max-sm:gap-3 mt-14 ml-5`}
          >
            <p className="text-white">Lesson</p>
            <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">In-depth Lesson</p>
            <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectFs && (
              <>
                <p className="text-white">FAANG Trainers</p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}
            <p className="text-white">Live Doubt Clearing</p>
            <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">Live Projects</p>
            <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectDs && (
              <>
                <p className="text-white">Microsoft Course Certificate</p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white">Project Experience Certificate</p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white">Internship Certificate</p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white">Final Year Project Assistance</p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}

            <p className="text-white">Career Support</p>
            <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">Average Pricing</p>
          </div>
          <div className="flex flex-col gap-[15px] max-sm:gap-[15px] items-center ">
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/Skillslash-New-Logo-(white)1.webp"
              width={40}
              height={40}
              alt="skillslash-logo"
            />
            <p className="text-white mt-2">Recorded</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">{hrs} Hrs</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">
              <FaCircleCheck className="text-[#12c168] " />
            </p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectFs && (
              <>
                <p className="text-white">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}
            <p className="text-white">{redirectDs ? "30" : "15"}</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectDs && (
              <>
                <p className="text-white max-sm:py-2">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}

            <p className="text-white max-sm:py-2">
              <FaCircleCheck className="text-[#12c168] " />
            </p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white max-sm:py-2">{offerPrice}</p>
          </div>
          <div className="flex flex-col gap-[15px] max-sm:gap-[15px] items-center">
            <p className="mb-[25px] max-sm:mb-[5px] text-white text-center">
              Others-Recorded
            </p>
            <p className="text-white">Recorded</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">{otherHr} Hrs</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectFs && (
              <>
                <p className="text-white">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}
            <p className="text-white">
              <MdOutlineClear className="text-[#646464] " />
            </p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">
              <MdOutlineClear className="text-[#646464] " />
            </p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectDs && (
              <>
                <p className="text-white max-sm:py-2">
                  <MdOutlineClear className="text-[#646464] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <MdOutlineClear className="text-[#646464] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <MdOutlineClear className="text-[#646464] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <MdOutlineClear className="text-[#646464] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}

            <p className="text-white max-sm:py-2">
              <MdOutlineClear className="text-[#646464] " />
            </p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white max-sm:py-2">500-6,500</p>
          </div>
          <div className="flex flex-col gap-[15px] max-sm:gap-[15px] items-center">
            <p className="mb-[25px] max-sm:mb-[5px] text-white text-center">
              Others-Live classes
            </p>
            <p className="text-white">Live</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">{liveHr} Hrs</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectFs && (
              <>
                <p className="text-white">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}
            <p className="text-white">
              <FaCircleCheck className="text-[#12c168] " />
            </p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white">{redirectDs ? "30" : "15"}</p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            {redirectDs && (
              <>
                <p className="text-white max-sm:py-2">
                  <FaCircleCheck className="text-[#12c168] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <MdOutlineClear className="text-[#646464] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <MdOutlineClear className="text-[#646464] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
                <p className="text-white max-sm:py-2">
                  <MdOutlineClear className="text-[#646464] " />
                </p>
                <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
              </>
            )}

            <p className="text-white max-sm:py-2">
              <FaCircleCheck className="text-[#12c168] " />
            </p>
            <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
            <p className="text-white max-sm:py-2">80,000-5,00,000</p>
          </div>
        </div>
        {/* <div className="border-[1px] border-[#ffffff] rounded-lg grid  grid-cols-[16%,16%,16%,16%,16%,16%,16%,16%,16%,16%]  gap-10 px-14 py-10 justify-center overflow-scroll">
        <div className="flex flex-col gap-3 mt-14 ml-5">
          <p className="text-white">Recorded</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Others-Recorded</p>
          <hr className="w-[60%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">Others-Live</p>
        </div>
        <div className="flex flex-col gap-[15px] items-center ">
          <p className="text-white">Lesson</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
        </div>
        <div className="flex flex-col gap-[15px] items-center">
          <p className="mb-[20px] text-white">In-depth Lesson</p>
          <p className="text-white">Recorded</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Live Doubt Clearing</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Live Projects</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Course Completion Certificate</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Project Experience Certificate</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Internship Certificate</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Final Year Project Assistance</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Resume Building Session</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
        <div className="flex flex-col gap-[15px]  items-center">
          <p className="mb-[20px] text-white">Average Pricing</p>
          <p className="text-white">Live</p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <MdOutlineClear className="text-[#646464] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">
            <FaCircleCheck className="text-[#12c168] " />
          </p>
          <hr className="w-[48%] bg-[#646464] text-[#646464] border-[#646464]" />
          <p className="text-white">80,000-5,00,000</p>
        </div>
      </div> */}
      </div>
    )
  );
};

export default DetailTable;
