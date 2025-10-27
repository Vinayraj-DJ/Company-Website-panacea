import React from "react";
import styles from "./ServicesSection.module.css";

const SERVICES = [
  { image: "/images/services/app-dev.jpg", title: "App Development" },
  { image: "/images/services/web-dev.jpg", title: "Web Development" },
  { image: "/images/services/ui-ux.jpg", title: "UI/UX Designing" },
  { image: "/images/services/software-dev.jpg", title: "Software Development" },
  { image: "/images/services/digital-mkt.jpg", title: "Digital Marketing" },
  { image: "/images/services/wordpress.jpg", title: "Word Press" },
  { image: "/images/services/graphic.jpg", title: "Graphic Designing" },
  { image: "/images/services/ai-video.jpg", title: "AI Video Generation" },
];

const ServicesSection = () => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Services <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>
          At <strong>Panacea</strong>, we build powerful, scalable, and
          user-friendly software solutions that help businesses innovate, grow,
          and thrive in the digital age. From idea to execution, our products
          are designed to deliver real impact.
        </p>
      </div>

      {/* Grid of services */}
      <div className={styles.grid}>
        {SERVICES.map((s, idx) => (
          <div
            key={s.title}
            className={`${styles.card} ${styles[`card${idx + 1}`]}`}
          >
            <div className={styles.imageWrap}>
              <img src={s.image} alt={s.title} className={styles.img} />
            </div>
            <div className={styles.caption}>{s.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
