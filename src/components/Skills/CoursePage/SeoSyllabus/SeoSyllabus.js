import React, { useState } from "react";
import styles from "./SeoSyllabus.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineTool } from "react-icons/ai";
import { BiCheck, BiTimeFive } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import Form from "../../Global/Form/Form";

function DataScienceSyllabus({
  seoSyllabus,
  syllabusDesc,
  heading,
  hour,
  title,
  redirectDs,
  redirectFs,
}) {
  const [popups, setPopups] = useState(false);

  const popupShow = () => {
    setPopups(true);
  };
  const [state, setState] = useState(seoSyllabus);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.Module0.open = !faq.Module0.open;
        } else {
          faq.Module0.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <section className={styles.Syllabus}>
      <div className={styles.syllabusLeft}>
        <div className={styles.Syllabusbutton}>
          <div>
            <h2>{heading}</h2>
          </div>
          <div></div>
        </div>
        <p>{syllabusDesc}</p>
        <ul>
          {state.map((syllabusData, i) => {
            const { Module0 } = syllabusData;

            return (
              <li className={styles.pointA} key={Module0.title}>
                <div className={styles.FaqWrapper} key={Module0.title}>
                  {/* {Module0.open ? ( */}

                  <div
                    className={styles.ques}
                    style={{ borderBottom: "0" }}
                    onClick={() => {
                      let id = i;
                      handleChange(id);
                    }}
                  >
                    <div className={styles.headWrap}>
                      <div>
                        <h3>{Module0.title}</h3>
                        <p className={styles.sTitle}>{Module0.title1}</p>
                      </div>
                    </div>
                    <span>
                      {Module0.open ? (
                        <MdKeyboardArrowUp className="icon" />
                      ) : (
                        <MdKeyboardArrowDown className="icon" />
                      )}
                    </span>
                  </div>
                  {Module0.content.length === 0 ? (
                    ""
                  ) : (
                    <div
                      className={styles.ans}
                      style={
                        Module0.open ? { padding: "10px" } : { padding: "0px" }
                      }
                    >
                      {Module0.open ? (
                        <div>
                          <p>{Module0.desc}</p>

                          {Module0.content.map((content, i) => {
                            return (
                              <div key={content.chap.title}>
                                <ul
                                  className={styles.syllabusHead}
                                  key={content.chap.title}
                                >
                                  <h4 className={styles.chapHead}>
                                    {content.chap.title}
                                  </h4>
                                  {content.chap.desc.map((desc, i) => {
                                    return (
                                      <div key={desc}>
                                        {desc === "" ? (
                                          ""
                                        ) : (
                                          <li key={i} className={styles.points}>
                                            {" "}
                                            <BiCheck
                                              className={styles.check}
                                            />{" "}
                                            {desc}
                                          </li>
                                        )}
                                      </div>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className={styles.syllabusRight}>
          <h5 className={styles.rightHeading}>
            {title} <span>Curriculum</span>
          </h5>
          <p className={styles.rightDesc}>
            {title} Syllabus are curated by leading faculties and industry
            leaders.
          </p>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DataScienceSyllabus;
