import React, { useEffect, useState } from "react";
import styles from "./SmartScalableSection.module.css";

const ITEMS = [
  { image: "/images/services/ai-driven.jpg", title: "AI DRIVEN" },
  { image: "/images/services/cloud-tech.jpg", title: "CLOUD TECH" },
  { image: "/images/services/consulting.jpg", title: "CONSULTING" },
  { image: "/images/services/digital.jpg", title: "DIGITAL" },
  { image: "/images/services/ai-driven.jpg", title: "CYBER SECURITY" },
  { image: "/images/services/cloud-tech.jpg", title: "UI/UX DESIGN" },
  { image: "/images/services/consulting.jpg", title: "DATA ANALYTICS" },
  { image: "/images/services/digital.jpg", title: "BLOCKCHAIN SOLUTIONS" },
];

const SmartScalableSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // match mobile breakpoint used in CSS (600px)
    const mq = window.matchMedia("(max-width: 600px)");

    const apply = (e) => setIsMobile(e.matches);
    // initial
    setIsMobile(mq.matches);

    // listen for changes
    if (mq.addEventListener) {
      mq.addEventListener("change", apply);
    } else {
      // fallback for older browsers
      mq.addListener(apply);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", apply);
      } else {
        mq.removeListener(apply);
      }
    };
  }, []);

  // show only first 6 on mobile, otherwise show full list
  const visibleItems = isMobile ? ITEMS.slice(0, 6) : ITEMS;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.heading}>
          Driving the Future with Smart and Scalable Tech Services
        </h3>

        <div className={styles.grid}>
          {visibleItems.map((it, idx) => (
            <div key={`${it.title}-${idx}`} className={styles.card}>
              <div className={styles.imageWrap}>
                <img src={it.image} alt={it.title} className={styles.img} />
                <div className={styles.overlay}></div>
                <div className={styles.label}>{it.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartScalableSection;
