import React, { useState } from "react";
import {
  MdOutlineVideocam,
  MdLiveTv,
  MdOutlineWorkHistory,
  MdLockOpen,
} from "react-icons/md";
import styles from "../../BottomPrice/BottomPrice.module.css";
import Form from "../../Global/Form/Form";
import Popup from "../../Global/Popup/Popup";
import { PiCertificateBold, PiMedal } from "react-icons/pi";

const SkillsContent = ({
  hrs,
  certification,
  offerPrice,
  actualPrice,
  changeHeading,
  redirectDs,
  redirectFs,
  redirectDa,
  newDataScience,
}) => {
  const [idBtnO, setIdBtnO] = useState("program-slo");
  const [popups, setPopups] = useState(false);
  const popupShow = (demoClass, changeText) => {
    setPopups(true);
  };
  return (
    <div className="flex flex-col min-[642px]:hidden ">
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
      <div className="flex flex-col gap-[2px] py-4 px-5 bg-[#fff9f7] mx-4 max-sm:bg-white max-sm:border-[0px] rounded-2xl border-[1px] border-solid border-[#f18350]">
        <h3 className="text-xl max-sm:text-[28px] font-bold text-left py-1 w-max max-sm:mb-4">
          Course Content
        </h3>
        {/* <hr className="border-b-4 border-b-[#f18350] rounded-2xl w-[130px]" /> */}
        <div className="flex flex-col gap-2 px-7 max-[741px]:px-3 max-sm:px-0">
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdOutlineVideocam className="text-2xl text-[#4f419a]" />
              Course Mode
            </span>
            <span>
              <b>Blended</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdLiveTv className="text-2xl text-[#4f419a]" />
              Live Doubt Session
            </span>
            <span>
              <b>Daily</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdLiveTv className="text-2xl text-[#4f419a]" />
              Live Project Sessions
            </span>
            <span>
              <b>Weekly</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdOutlineWorkHistory className="text-2xl text-[#4f419a]" />
              Career Support
            </span>
            <span>
              <b>Included</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <MdLockOpen className="text-2xl text-[#4f419a]" />
              Course Access
            </span>
            <span>
              <b>Lifetime</b>
            </span>
          </p>
          <hr />
          <p className="flex gap-2 items-center justify-between py-2">
            <span className="flex gap-2 items-center">
              <PiCertificateBold className="text-2xl text-[#4f419a]" />
              Certifications
            </span>
            <span>
              <b>{certification}</b>
            </span>
          </p>
        </div>
      </div>
      {/* {newDataScience ? (
        ""
      ) : (
        
      )} */}
    </div>
  );
};

export default SkillsContent;
