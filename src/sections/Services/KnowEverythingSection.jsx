// src/sections/KnowEverythingSection/KnowEverythingSection.jsx
import React, { useState, useRef } from "react";
import styles from "./KnowEverythingSection.module.css";
import Button from "../../components/Button/Button";
import { FiX } from "react-icons/fi";

const KnowEverythingSection = () => {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const showToast = (
    message = "Thanks — we will contact you shortly.",
    ms = 4000
  ) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(message);
    timerRef.current = setTimeout(() => {
      setToast(null);
      timerRef.current = null;
    }, ms);
  };

  const hideToast = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setToast(null);
  };

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
      <div className={styles.container}>
        {/* Left: copy + desktop CTA */}
        <div className={styles.content}>
          <h2 className={styles.title}>KNOW EVERYTHING</h2>

          <p className={styles.text}>
            At Panacea, we believe that our service is not just a transaction —
            it's a relationship built on trust, quality, and results. Every
            interaction with our clients reflects our dedication to solving
            problems, creating value, and delivering beyond expectations.
          </p>

          <p className={styles.text}>
            Our clients value us because we don’t offer one-size-fits-all
            answers. We co-create strategies, we adapt with agility, and we stay
            accountable from start to finish. From consultation to execution,
            our focus remains on building long-term relationships that foster
            mutual growth and success.
          </p>

          <p className={styles.text}>
            When brands trust Panacea, they’re investing in more than a service
            — they’re gaining a strategic partner committed to elevating their
            journey and standing by them every step of the way.
          </p>

          {/* Desktop CTA (hidden on mobile) */}
          <div className={`${styles.cta} ${styles.desktopOnly}`}>
            <Button
              label="Call us"
              padding="12px 28px"
              fontSize="16px"
              backgroundColor="#4070B1"
              borderRadius="12px"
              onClick={() =>
                showToast("Thanks! Our team will call you shortly.")
              }
            />
          </div>
        </div>

        {/* Right: image + mobile CTA (below image) */}
        <div className={styles.imageWrap}>
          <img
            src="/images/joinourservice.png"
            alt="Team collaborating"
            className={styles.image}
          />

          {/* Mobile CTA - shown only on mobile and placed right under the image */}
          <div className={`${styles.cta} ${styles.mobileOnly}`}>
            <Button
              label="Call us"
              padding="12px 28px"
              fontSize="16px"
              backgroundColor="#4070B1"
              borderRadius="12px"
              onClick={() =>
                showToast("Thanks! Our team will call you shortly.")
              }
            />
          </div>
        </div>
      </div>

      {/* Toast (module-scoped classes) - appears at TOP center */}
      {toast && (
        <div className={styles.toastContainer} role="status" aria-live="polite">
          <div className={styles.toast} role="alert">
            <span className={styles.toastMessage}>{toast}</span>
            <button
              className={styles.toastClose}
              onClick={hideToast}
              aria-label="Close notification"
            >
              <FiX />
            </button>
            <div className={styles.toastTimer} />
          </div>
        </div>
      )}
    </section>
  );
};

export default KnowEverythingSection;
