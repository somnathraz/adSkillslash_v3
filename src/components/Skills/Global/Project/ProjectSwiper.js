import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import styles from "./Project.module.css";
import { Pagination, Navigation } from "swiper";
import { SiPowerbi } from "react-icons/si";
import { FaReact, FaDatabase } from "react-icons/fa";
import { AiOutlineRobot, AiOutlineFileExcel } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

const ProjectSwiper = ({ swiperData, redirectFs, redirectDs, redirectBa }) => {
  // const [mobile, setMobile] = useState(false);
  // const [slidesPerView, setSlidesPerView] = useState(3.2);
  // const [spaceBetween, setSpaceBetween] = useState(20);
  // useEffect(() => {
  //   let width = window.innerWidth;

  //   if (width < 1281) {
  //     setSlidesPerView(4);
  //     setSpaceBetween(20);
  //   }
  //   if (width < 801) {
  //     setSlidesPerView(2);
  //     setSpaceBetween(20);
  //   }
  //   if (width < 641) {
  //     setSlidesPerView(1.3);
  //     setSpaceBetween(20);
  //   }
  //   if (width < 481) {
  //     setSlidesPerView(1.1);
  //     setSpaceBetween(10);
  //     setMobile(true);
  //   }
  // });
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Swiper
      spaceBetween={20}
      slidesPerView={redirectDs || redirectBa ? 3.5 : 4}
      loop={true}
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        961: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        801: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        641: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        481: {
          slidesPerView: 2.2,
          spaceBetween: 10,
        },
        200: {
          slidesPerView: 1.1,
          spaceBetween: 10,
        },
      }}
      loopFillGroupWithBlank={true}
      style={{ width: "100%" }}
      grabCursor={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {swiperData.map((data) => {
        return (
          <SwiperSlide className={styles.ReviewBox} key={data.id}>
            <div className={styles.header}>
              <h3>{data.title}</h3>
            </div>
            <div className={styles.body}>
              <div className={styles.desc}>
                <p>{data.desc}</p>
              </div>
              <hr className="w-full text-[#646464]" />
              <p className={styles.tools}>
                Tools:
                {redirectFs ? (
                  <>
                    <FaReact className={styles.react} />
                    <FaDatabase className={styles.mongo} />
                    <FaDatabase className={styles.database} />
                    <FaNodeJs className={styles.node} />
                  </>
                ) : (
                  <>
                    <SiPowerbi className={styles.react} />
                    <FaDatabase className={styles.mongo} />
                    <AiOutlineFileExcel className={styles.database} />
                    <AiOutlineRobot className={styles.node} />
                  </>
                )}
              </p>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  ) : (
    ""
  );
};

export default ProjectSwiper;
