import React from "react";
import styles from "./BottomPrice.module.css";
import Link from "next/link";

const BottomPrice = ({ offerPrice, actualPrice, link }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <p className={styles.ofPr}>{offerPrice}</p>
        <p className={styles.acPr}>{actualPrice}</p>
      </div>
      <div className={styles.right}>
        <Link href={link}>
          <button>Start Learning</button>
        </Link>
      </div>
      <p className={styles.refund}>15 Days refundable**</p>
    </div>
  );
};

export default BottomPrice;