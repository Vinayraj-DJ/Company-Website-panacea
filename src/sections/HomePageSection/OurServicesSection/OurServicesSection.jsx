import React from "react";
import styles from "./OurServicesSection.module.css";

// Service data
const serviceData = [
  { title: "App Development", img: "/images/services/app-ribbon.png" },
  { title: "Web Development", img: "/images/services/web-ribbon.png" },
  { title: "UI/UX Designing", img: "/images/services/uiux-ribbon.png" },
  { title: "S/W development", img: "/images/services/sw-ribbon.png" },
  { title: "Digital marketing", img: "/images/services/digital-ribbon.png" },
  { title: "Cloud Services", img: "/images/services/wp-ribbon.png" },
];

const OurServicesSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.bgWrapper}>
        <img
          src="/images/ourservicesimage.png"
          alt="Our Services Background"
          className={styles.bgImage}
        />
        <div className={styles.textBox}>
          <h2 className={styles.heading}>OUR SERVICES</h2>
          <p className={styles.description}>
            We provide innovative, tailor-made solutions to meet your business
            needs. Our team delivers high-quality services with a focus on
            efficiency and results. Client satisfaction is our priority as we
            ensure timely, reliable, and scalable services.
          </p>
        </div>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.cards}>
          {serviceData.map((s) => (
            <img
              key={s.title}
              src={s.img}
              alt={s.title}
              className={styles.cardImage} // Use CSS class instead of inline styles
              loading="lazy"
            />
          ))}
        </div>

        <div className={styles.link}>
          <a href="/services">Go to Services Page &gt;&gt;</a>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;
