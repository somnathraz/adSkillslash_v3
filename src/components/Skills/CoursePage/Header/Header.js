import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Popup from "../../Global/Popup/Popup";
import Form from "../../Global/Form/Form";
import {
  MdOutlineVideocam,
  MdLiveTv,
  MdOutlineWorkHistory,
  MdLockOpen,
} from "react-icons/md";
import ButtonWaveAnimation from "@/components/Animation/ButtonWaveAnimmation/ButtonWaveAnimmation";
import { PiCertificateBold } from "react-icons/pi";
import VideoPlaylist from "../../Global/VideoPlaylist/VideoPlaylist";
import { ratingData } from "@/components/VideoTestimonial/ratingData";

const Header = ({
  title,
  desc,
  imgSrc,
  hrs,
  certification,
  offerPrice,
  actualPrice,
  discount,
  link,
  checkoutLink,
  changeHeading,
  redirectDs,
  redirectFs,
  redirectDa,
  newDataScience,
}) => {
  const [show, setShow] = useState(false);
  const showVideo = (data) => {
    setShow(data);
  };
  const [idBtnO, setIdBtnO] = useState("program-slo");
  const [idBtnV, setIdBtnV] = useState("program-dv");
  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setPopups(true);
  };
  return (
    <div className="grid grid-cols-[60%,39%] max-[741px]:flex max-[741px]:flex-col max-[901px]:grid-cols-[55%,44%] max-sm:flex max-sm:flex-col gap-5 max-sm:mb-[10px] bg-[#111621] w-full mt-[40px] max-sm:mt-[60px] max-sm:pt-4 min-[1600px]:mt-[70px] px-28 max-[1024px]:px-10 min-[1600px]:px-48 max-sm:px-0 py-[60px] min-[1600px]:py-[90px] pb-[70px] max-sm:pb-[30px] max-sm:py-4 relative">
      <Popup trigger={popups} setTrigger={setPopups} className="popupModal">
        <div className="RightPopup">
          {changeHeading ? (
            <h5>Download Program Handbook</h5>
          ) : (
            <h5>
              Get a chance to understand this course in detail from our
              counsellors
            </h5>
          )}
          <p>Fill the below Details to get started</p>
          <Form
            popup={true}
            setTrigger={setPopups}
            redirectDs={redirectDs}
            redirectFs={redirectFs}
            redirectDa={redirectDa}
          />
        </div>
      </Popup>

      {show && (
        <VideoPlaylist
          setShow={showVideo}
          show={show}
          redirectDs={redirectDs}
          redirectFs={redirectFs}
          redirectDa={redirectDa}
        />
      )}

      {/* <div className="absolute gradient top-0 left-0 h-full w-[60%] max-sm:w-full z-0"></div> */}
      <div className="flex flex-col gap-4 relative z-[1] max-sm:px-5">
        <div className=" hidden gap-3 text-[#F18350] font-bold items-center max-sm:mb-[-8px] max-sm:gap-1 ">
          <p className="text-[#F18350] font-semibold min-[1600px]:text-[20px] max-sm:text-[15px] max-sm:font-medium">
            Self-Paced
          </p>
          <MdKeyboardArrowRight className="text-white min-[1600px]:text-[20px]" />
          <p className="text-[#F18350] font-semibold max-sm:text-[15px] min-[1600px]:text-[20px] max-sm:font-medium">
            Bootcamp
          </p>
        </div>
        {redirectDs && (
          <div className=" mt-4  w-max rounded flex items-center gap-2">
            <p className="text-white font-medium">Powered by</p>
            <div className="bg-white px-3 py-[3px] rounded-[4px]">
              <Image
                src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/Home/coursesection/microsoft.webp"
                alt="PoweredByMicrosoft"
                width={90}
                height={19}
                priority
              />
            </div>
          </div>
        )}
        {redirectFs && (
          <div className="relative w-[348px] max-sm:w-[310px] h-[32px] max-sm:h-[29px] mt-3 max-sm:mt-12 ">
            {/* <Image src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/Homepage/powered-by-microsoft-(White).png" alt="PoweredByMicrosoft" width={200} height={22}/> */}
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Header/FAANG+Software+Developer+as+Trainers.webp"
              alt="FAANG Operators"
              fill
              priority
            />
          </div>
        )}
        <h1 className="text-5xl max-[901px]:text-2xl text-white font-bold leading-[58px] max-[1281px]:text-3xl   max-sm:text-4xl max-sm:leading-[40px] max-[361px]:text-3xl">
          {title}
        </h1>
        <div className="flex gap-5 items-center min-[642px]:hidden max-sm:w-[90%] max-sm:mb-4 max-sm:mt-4">
          {ratingData.map((imgData, i) => {
            return (
              <div
                key={imgData.src}
                className={`${i === 0 ? "w-[23%]" : "w-[30%]"}`}
              >
                <Image
                  src={imgData.src}
                  width={imgData.width}
                  height={imgData.height}
                  alt="rating background"
                />
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-3 gap-2 min-[1600px]:gap-0 border-[1px] mt-3 w-[75%] min-[1600px]:w-[60%] max-sm:w-[97%] rounded items-center px-4 py-1 justify-center max-sm:py-1 max-sm:px-2 max-sm:hidden">
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/googlereview-new.webp"
            alt="Goole_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/Header/switch-up.webp"
            alt="switchup_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/NewDatascience/course-report.webp"
            alt="CR_RReviews"
            width={150}
            height={23}
            priority
            className="mx-auto"
          />
        </div>
        <p className="text-[#cccccc] w-[91%] min-[1600px]:w-[75%] text-[17px] max-sm:text-[16px] max-[1281px]:text-[16px] leading-[28px] max-sm:leading-[24px] font-light mt-2 max-sm:mt-2 min-[1600px]:text-[20px] max-sm:hidden">
          {desc}
        </p>
        <div className="flex  gap-3  max-[642px]:w-[80%]">
          <button
            className="w-full min-[642px]:w-max px-3 bg-[#f18350] text-[15px] text-white rounded py-2 font-medium  flex justify-center items-center max-sm:text-[12px] max-sm:px-2"
            id="clck-free-counselling"
            onClick={() => popupShow()}
          >
            Free Counselling
          </button>
          <button
            className="w-full min-[642px]:w-max text-[15px] px-3 border-[1px] bg-transparent border-solid border-[#fff] text-white rounded py-2 font-medium  flex justify-center items-center 
          max-sm:text-[12px] max-sm:px-2"
            onClick={() => showVideo(true)}
            id="clck-watch-demo"
          >
            Watch Demo{" "}
            <FaYoutube className="text-[#FF0000] text-[24px] max-sm:text-[16px]" />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-7 relative w-full items-end justify-end">
        <div className="bg-white top-0 px-11 max-[1024px]:px-5 py-3 max-sm:px-0 rounded shadow flex flex-col w-full z-[1] max-sm:hidden absolute mt-28 max-[741px]:w-[52%] max-[741px]:top-0 max-[741px]:right-[-15px]">
          <div className="relative w-full  max-sm:w-[313px] h-[290px] max-[1281px]:h-[200px] max-sm:h-[220px] top-[-120px] max-sm:top-[-100px]  min-[1600px]:h-[320px] max-sm:left-7 max-sm:flex max-sm:justify-center">
            <div onClick={() => showVideo(true)} id={idBtnV}>
              <Image
                src={imgSrc}
                alt="headerImg"
                fill
                priority
                quality={40}
                id={idBtnV}
              />
              {/* <MdOutlinePlayCircleOutline
                className="absolute z-10 text-7xl text-white left-[42%] top-[41%] cursor-pointer "
                id={idBtnV}
              /> */}
              <ButtonWaveAnimation
                className="absolute z-10 text-7xl text-white left-[42%] top-[41%] cursor-pointer "
                id={idBtnV}
              />
            </div>
          </div>
          <div className="flex gap-2 w-full items-center mt-[-100px] max-sm:mt-[120px] max-sm:px-4">
            <p className="text-[#000000] flex gap-4 text-2xl font-bold items-center mr-3 mb-2">
              {offerPrice}
              {/* {newDataScience && (
                <span className="line-through text-lg font-normal text-[#646464]">
                  {actualPrice}
                </span>
              )} */}
            </p>
            {/* <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/discount.png"
              alt="discount"
              width={20}
              height={20}
              priority
              style={{ height: "20px" }}
            />
            <p className="text-[#f18350] font-bold">({discount} Off)</p> */}
          </div>

          <div className="flex flex-col gap-5 max-sm:px-4">
            {newDataScience ? (
              <Link href={checkoutLink}>
                <button
                  className="w-full px-4 bg-[#f18350] text-white rounded py-3 font-bold text-xl flex justify-center items-center"
                  id={idBtnO}
                >
                  Buy Now
                </button>
              </Link>
            ) : (
              <button
                className="w-full px-4 bg-[#f18350] text-white rounded py-3 font-bold text-xl flex justify-center items-center"
                id={idBtnO}
                onClick={() => popupShow()}
              >
                Free Counselling
              </button>
            )}
          </div>
          <div className="flex flex-col gap-2 py-4">
            <h3 className="text-xl font-bold px-5 py-1">Course Content</h3>
            <hr />
            <div className="flex flex-col gap-2 px-7 max-[741px]:px-3">
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdOutlineVideocam className="text-xl" />
                  Learning Mode
                </span>
                <span>
                  <b>Blended</b>
                </span>
              </p>
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdLiveTv className="text-xl" />
                  1:1 Doubt Session
                </span>
                <span>
                  <b>Daily</b>
                </span>
              </p>
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdLiveTv className="text-xl" />
                  Live Project Sessions
                </span>
                <span>
                  <b>Weekly</b>
                </span>
              </p>
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdOutlineWorkHistory className="text-xl" />
                  Career Support
                </span>
                <span>
                  <b>Included</b>
                </span>
              </p>
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <MdLockOpen className="text-xl" />
                  Course Access
                </span>
                <span>
                  <b>Lifetime</b>
                </span>
              </p>
              <hr />
              <p className="flex gap-2 items-center justify-between py-2">
                <span className="flex gap-2 items-center">
                  <PiCertificateBold className="text-xl" />
                  Certifications
                </span>
                <span>
                  <b>{certification}</b>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
