import React from "react";
import styles from "./OurProcessSection.module.css";

/**
 * Props:
 * - heading: string
 * - leadText: string
 * - leftCards: { title: string, bullets: string[], bg?: string }[]
 * - rightCards: { title: string, bullets: string[], bg?: string }[]
 * - centerIcons: string[] // URLs or null (if null, render placeholder)
 * - arrowImages: { top?: string, middle?: string, bottom?: string } // arrow image placeholders
 */
export default function OurProcessSection({
  heading = "OUR PROCESS",
  leadText = "We implement robust backends, analytics, and monetization systems to help clients maximize player retention and revenue.",
  leftCards = [
    {
      title: "UI Design",
      bullets: ["Research & Wireframing", "Visual Design", "Prototyping"],
      bg: "#F8EDE2",
    },
    {
      title: "BackEnd Development",
      bullets: ["Data Base Design", "API Architecture", "Testing", "Deployment"],
      bg: "#DFF6E6",
    },
  ],
  rightCards = [
    {
      title: "Front End Development",
      bullets: [
        "Requirement Analysis",
        "Planning",
        "Making it Responsive",
        "API Integration",
      ],
      bg: "#F0E7FF",
    },
  ],
  centerIcons = [null, null, null], // same number as total cards
  arrowImages = {
    top: "/images/products/arrow1.png",
    middle: "/images/products/arrow2.png",
    bottom: "/images/products/arrow3.png",
  },
}) {
  // merge left and right card backgrounds for icon alignment
  const cardColors = [...leftCards.map((c) => c.bg), ...rightCards.map((c) => c.bg)];

  return (
    <section className={styles.section} aria-label="Our process">
      <div className={styles.inner}>
        {/* Heading */}
        <div className={styles.headerCol}>
          <h2 className={styles.heading}>
            {heading.split(" ").map((w, i) =>
              i === heading.split(" ").length - 1 ? (
                <span key={i} className={styles.headingAccent}>
                  {w}
                </span>
              ) : (
                <span key={i}> {w} </span>
              )
            )}
          </h2>
        </div>

        {/* Lead text */}
        <div className={styles.leadCol}>
          <p className={styles.leadText}>{leadText}</p>
        </div>

        {/* Main Grid */}
        <div className={styles.grid}>
          {/* Left cards */}
          <div className={styles.leftStack}>
            {leftCards.map((card, idx) => (
              <div
                key={idx}
                className={styles.card}
                style={{ background: card.bg || "#fbf7f3" }}
              >
                <div className={styles.whiteBoxTitle}>
                  <span>{card.title}</span>
                </div>
                <ul className={styles.bullets}>
                  {card.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Center column: arrows (images) + icons */}
          <div className={styles.centerColumn}>
            {/* Arrow placeholders (positioned with CSS) */}
            <img
              src={arrowImages.top}
              alt="arrow-top"
              className={`${styles.arrowImage} ${styles.arrowTop}`}
            />
            <img
              src={arrowImages.middle}
              alt="arrow-middle"
              className={`${styles.arrowImage} ${styles.arrowMiddle}`}
            />
            <img
              src={arrowImages.bottom}
              alt="arrow-bottom"
              className={`${styles.arrowImage} ${styles.arrowBottom}`}
            />

            {/* Icons stack (on top of arrows) */}
            <div className={styles.path}>
              {centerIcons.map((icon, i) => (
                <div
                  key={i}
                  className={styles.iconWrap}
                  style={{
                    background: cardColors[i] || "#ffffff",
                  }}
                >
                  {icon ? (
                    <img src={icon} alt={`icon-${i}`} className={styles.iconImg} />
                  ) : (
                    <div className={styles.iconPlaceholder} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right cards */}
          <div className={styles.rightStack}>
            {rightCards.map((card, idx) => (
              <div
                key={idx}
                className={styles.card}
                style={{ background: card.bg || "#f3eefc" }}
              >
                <div className={styles.whiteBoxTitle}>
                  <span>{card.title}</span>
                </div>
                <ul className={styles.bullets}>
                  {card.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
