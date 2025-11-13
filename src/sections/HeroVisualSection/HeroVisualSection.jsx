import React from "react";
import PropTypes from "prop-types";
import styles from "./HeroVisualSection.module.css";

const HeroVisualSection = ({
  headingLeft = "From",
  highlight1 = "Movies",
  highlight2 = "Concerts",
  headingRight = "— book it in seconds!",
  posterSrc = "/images/products/f1.png",

  // default image paths (change if your files are named differently)
  phoneBack = "/images/products/pho3.png",   // ~284x530
  phoneMiddle = "/images/products/pho2.png", // ~144x369
  phoneFront = "/images/products/pho1.png", // ~136x382
}) => {
  return (
    <section className={styles.heroWrap}>
      <div className={styles.container}>
        <h1 className={styles.headline}>
          <span className={styles.textNormal}>{headingLeft} </span>
          <span className={styles.highlight}>{highlight1}</span>
          <span className={styles.textNormal}> to </span>
          <span className={styles.highlight}>{highlight2}</span>
          <span className={styles.textNormal}> {headingRight}</span>
        </h1>

        <div className={styles.visuals}>
          <div className={styles.left}>
            <div className={styles.posterBox}>
              <img src={posterSrc} alt="Poster" className={styles.poster} />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.creamCard}>
              <div className={styles.orangePanel} />
              <div className={styles.phonesShadow} />

              <div className={styles.phones}>
                {/* Back (big tall phone) */}
                <img src={phoneBack} alt="Phone Back" className={styles.phoneBack} />

                {/* Middle (left / purple UI phone) */}
                <img src={phoneMiddle} alt="Phone Middle" className={styles.phoneMiddle} />

                {/* Front (right / waterfall phone) */}
                <img src={phoneFront} alt="Phone Front" className={styles.phoneFront} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroVisualSection.propTypes = {
  posterSrc: PropTypes.string,
  phoneBack: PropTypes.string,
  phoneMiddle: PropTypes.string,
  phoneFront: PropTypes.string,
};

export default HeroVisualSection;
