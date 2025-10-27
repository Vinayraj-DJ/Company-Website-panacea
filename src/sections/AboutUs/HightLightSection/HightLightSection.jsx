// src/sections/HightLightSection/HightLightSection.jsx
import React from "react";
import styles from "./HightLightSection.module.css";

const CARDS = [
  { value: "100 +", text: "Users that are using our services" },
  { value: "50 +", text: "Employee that are well experienced" },
  { value: "10 +", text: "Reputed Companies using our products" },
  { value: "10 +", text: "Professionals in Global Network" },
];

const HightLightSection = () => {
  return (
    <section
      className={styles.section}
     
    >
      <div className={styles.header}>
        <h2 className={styles.title}>
          Redefining solutions with purpose and passion.
        </h2>

        <div className={styles.leadWrap}>
          <p className={styles.lead}>
            Use our products that are&nbsp; well made
            <br />
            and built
          </p>
        </div>
      </div>

      {/* Top two images (keeps your existing layout) */}
      <div className={styles.imagesRow}>
        <img
          src="/images/hightlight1.png"
          alt="Team working"
          className={styles.image}
        />
        <img
          src="/images/hightlight2.png"
          alt="Collaboration"
          className={styles.image}
        />
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        {CARDS.map((c) => (
          <div key={c.text} className={styles.card}>
            <div className={styles.value}>{c.value}</div>
            <p className={styles.caption}>{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HightLightSection;
