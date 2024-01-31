import React from "react";
import styles from "./Cta.module.css";
import { IoMdCall } from "react-icons/io";
import Image from "next/image";

const CTA = ({ redirectDSA }) => {
  return (
    <div className={styles.CtaWrapper}>
      <div className={styles.firstCta}>
        <Image
          src="  https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/Skillslash+New+Logo+(white)+3.webp"
          alt="Getting confused ask directly to a expert"
          style={{ objectFit: "contain" }}
          width={137}
          height={200}
          loading="lazy"
        />
      </div>
      <div className={styles.leftCta}>
        <h4 style={{ color: "white" }}>
          Lost in the Learning Maze? Let's Chat!
        </h4>
        <p className={styles.pTop}>
          Having difficulties? Connect with our counselor to discover more about
          this course.
        </p>
        <a href="tel:+91-8391-911-911">
          <button>
            <Image
              src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/New_skillslash/CoursePage/icon/chat-gif.gif"
              width={30}
              height={30}
            />
            Chat With Us
          </button>
        </a>
      </div>
      <div className={styles.rightCta}>
        <div className={styles.imgwrap}>
          <Image
            src="https://skillslash-cdn.s3.ap-south-1.amazonaws.com/static/web/New-UI/200_finance+%5BConverted%5D-01-011+1.webp"
            alt="Getting confused ask directly to a expert"
            style={{ objectFit: "contain" }}
            width={235}
            height={250}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
