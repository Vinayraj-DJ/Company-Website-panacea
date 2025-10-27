import React, { useState, useRef } from "react";
import styles from "./JoinOurServiceSection.module.css";
import Button from "../../components/Button/Button";
import { FiX } from "react-icons/fi";

const JoinOurServiceSection = () => {
  const [toast, setToast] = useState(null);
  const timerRef = useRef(null);

  const showToast = (message, ms = 4000) => {
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
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left image */}
        <div className={styles.imageWrapper}>
          <img
            src="/images/joinourservice.png"
            alt="Join Our Service"
            className={styles.image}
          />
        </div>

        {/* Right content */}
        <div className={styles.content}>
          <h2 className={styles.title}>JOIN OUR SERVICE</h2>

          <p className={styles.text}>
            At Panacea, we believe that our service is not just a transaction —
            it’s a relationship built on trust, quality, and results.
          </p>

          <p className={styles.text}>
            Over the years, brands from diverse industries have chosen Panacea
            as a trusted partner because we understand their goals and deliver
            measurable impact.
          </p>

          <div className={styles.cta}>
            <Button
              label="Connect"
              padding="10px 20px"
              fontSize="16px"
              backgroundColor="#4070B1"
              borderRadius="10px"
              onClick={() =>
                showToast(
                  "Thanks for connecting! We'll get back to you shortly."
                )
              }
            />
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={styles.toastContainer} role="status" aria-live="polite">
          <div className={styles.toast}>
            <span>{toast}</span>
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

export default JoinOurServiceSection;
