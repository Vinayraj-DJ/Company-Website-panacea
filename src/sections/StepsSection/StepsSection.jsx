import React from "react";
import styles from "./StepsSection.module.css";

export default function StepsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>How Mutual Funds Work ?</h2>

        <div className={styles.stepsRow}>
          {/* STEP 1 */}
          <div className={styles.step}>
            <div className={styles.imageWrap}>
              <img
                src="/images/products/steps1.png"
                alt="Step 1 - Learning"
                className={styles.image}
              />
            </div>
            <p className={styles.label}>Step 1 - Learning</p>
          </div>

          {/* ARROW 1 */}
          <div className={styles.arrowWrap}>
            <svg
              className={styles.arrow}
              viewBox="0 0 200 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="20"
                x2="170"
                y2="20"
                stroke="#F2CAF8"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path d="M170 10 L190 20 L170 30" fill="#F2CAF8" />
            </svg>
          </div>

          {/* STEP 2 */}
          <div className={styles.step}>
            <div className={styles.imageWrap}>
              <img
                src="/images/products/steps2.png"
                alt="Step 2 - Planning"
                className={styles.image}
              />
            </div>
            <p className={styles.label}>Step 2 - Planning</p>
          </div>

          {/* ARROW 2 */}
          <div className={styles.arrowWrap}>
            <svg
              className={styles.arrow}
              viewBox="0 0 200 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="20"
                x2="170"
                y2="20"
                stroke="#F2CAF8"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path d="M170 10 L190 20 L170 30" fill="#F2CAF8" />
            </svg>
          </div>

          {/* STEP 3 */}
          <div className={styles.step}>
            <div className={styles.imageWrap}>
              <img
                src="/images/products/steps3.png"
                alt="Step 3 - Investing"
                className={styles.image}
              />
            </div>
            <p className={styles.label}>Step 3 - Investing</p>
          </div>
        </div>
      </div>
    </section>
  );
}
