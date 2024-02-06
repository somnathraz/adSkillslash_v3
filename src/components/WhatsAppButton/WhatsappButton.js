import React from "react";
import styles from "./WhatsAppButtons.module.css";
import { FaWhatsapp } from "react-icons/fa";
const WhatsappButton = () => {
  return (
    <div>
      <div className={styles.btnWhatsappPulse} id="DABCADS-WA">
        <a href="https://wa.me/+918391911911?text=ChatWithUs" id="DABCADS-WA">
          <FaWhatsapp className="text-4xl text-white" id="DABCADS-WA" />
        </a>
      </div>
    </div>
  );
};

export default WhatsappButton;
