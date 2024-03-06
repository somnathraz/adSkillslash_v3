import React, { useState } from "react";
import styles from "./BottomPrice.module.css";
import Link from "next/link";

const BottomPrice = ({ offerPrice, actualPrice, link, checkoutLink }) => {
  const [idBtnO, setIdBtnO] = useState("program-slo");
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <p className={styles.ofPr}>{offerPrice}</p>
        <p className={styles.acPr}>{actualPrice}</p>
      </div>
      <div className={styles.right} id={idBtnO}>
        <Link href={checkoutLink} id={idBtnO}>
          <button id={idBtnO}>Buy Now</button>
        </Link>
      </div>
      <p className={styles.refund}>15-Days Money-Back Guarantee</p>
    </div>
  );
};

export default BottomPrice;
