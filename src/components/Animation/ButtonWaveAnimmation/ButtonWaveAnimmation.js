import { useState } from "react";
import styles from "./ButtonWaveAnimation.module.css";

const ButtonWaveAnimation = () => {
  return (
    <div className={styles.playButton}>
      <div className={styles.playIcon} />
      <div className={styles.waves} />
    </div>
  );
};

export default ButtonWaveAnimation;
