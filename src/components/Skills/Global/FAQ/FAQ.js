import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function FAQ({ FaqData, desc, heading }) {
  const [state, setState] = useState(FaqData);

  const handleChange = (index) => {
    setState(
      state.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };

  return (
    <>
      <section
        className={styles.FAQ}
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className={styles.headWrap}>
          <h2 className="text-4xl font-bold max-sm:text-2xl  max-sm:mb-0">
            {heading}
          </h2>

          <p className={styles.pBot} style={{ display: "none" }}>
            {desc}
          </p>
        </div>
        <ul>
          <div className={styles.quesWrap}>
            {state.map((data, index) => {
              const { id, ques, ans, open, link, linkText, ansAfter, linkURL } =
                data;

              return (
                <li
                  className={styles.FaqWrapper}
                  key={id}
                  style={{
                    listStyle: "none",
                  }}
                >
                  <div
                    key={id}
                    onClick={() => handleChange(index)}
                    itemType="https://schema.org/Question"
                    itemScope
                    itemProp="mainEntity"
                  >
                    <div className={styles.quesO}>
                      <h3 itemProp="name">{ques}</h3>

                      <span>
                        {open ? (
                          <AiOutlineMinus className={styles.icon} />
                        ) : (
                          <AiOutlinePlus className={styles.icon} />
                        )}
                      </span>
                    </div>
                    <div
                      itemType="https://schema.org/Answer"
                      itemScope
                      itemProp="acceptedAnswer"
                    >
                      <div className={open ? styles.ans : styles.ansV}>
                        {link ? (
                          <div itemProp="text">
                            <p>
                              {ans}

                              <a href={linkURL} target="_blank">
                                {linkText}
                              </a>
                              {ansAfter}
                            </p>
                          </div>
                        ) : (
                          <div
                            itemProp="text"
                            className={open ? styles.ans : styles.ansV}
                          >
                            <p>{ans}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </section>
      <div className="h-[10px] min-[500px]:hidden"></div>
    </>
  );
}

export default FAQ;
