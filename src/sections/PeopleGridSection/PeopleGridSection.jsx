import React from "react";
import PropTypes from "prop-types";
import styles from "./PeopleGridSection.module.css";

/**
 * PeopleGridSection
 *
 * Props:
 * - heroSrc: URL for top hero image
 * - titleLeft, titleHighlight, titleRight: heading parts
 * - items: array of { id, src, alt, bg } where bg is optional background color for the square
 * - showDecor: whether to show decorative squares
 *
 * Usage:
 * <PeopleGridSection
 *   heroSrc="/images/hero-ticket.jpg"
 *   titleLeft="Book. Click. Go."
 *   titleHighlight="ticket"
 *   titleRight="to anywhere!"
 *   items={[ {id:1, src:'/images/people/1.png', alt:'person 1', bg:'#f6d6b6'}, ... ]}
 * />
 */

export default function PeopleGridSection({
  heroSrc = "/images/hero-ticket.jpg",
  titleLeft = "Book. Click. Go.",
  titleHighlight = "ticket",
  titleRight = "to anywhere!",
  items = [],
  showDecor = true,
}) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* hero image */}
        <div className={styles.heroWrap}>
          <img src={heroSrc} alt="hero" className={styles.heroImage} />
        </div>

        {/* heading */}
        <div className={styles.headingWrap}>
          <h2 className={styles.heading}>
            <span className={styles.leftText}>{titleLeft} </span>
            <span className={styles.highlight}>{titleHighlight}</span>
            <span className={styles.leftText}> {titleRight}</span>
          </h2>
        </div>

        {/* grid + decorative squares */}
        <div className={styles.gridArea}>
          {showDecor && (
            <>
              <div className={styles.decorTopLeft} aria-hidden>
                <div className={styles.decorSquare} style={{ background: "#E3C5F5" }}>
                  {/* pin SVG */}
                  <svg width="36" height="44" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.decorIcon}>
                    <path d="M12 0C8.1 0 5 3.1 5 7c0 5.7 7 13 7 13s7-7.3 7-13c0-3.9-3.1-7-7-7z" fill="#621392"/>
                    <circle cx="12" cy="7" r="2.5" fill="#fff"/>
                  </svg>
                </div>
              </div>

              <div className={styles.decorRight} aria-hidden>
                <div className={styles.decorSquare} style={{ background: "#FFF0DE" }}>
                  {/* clock SVG */}
                  <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.decorIcon}>
                    <circle cx="12" cy="12" r="10" fill="#D9B26D"/>
                    <path d="M12 6v7l4 2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </>
          )}

          <ul className={styles.peopleGrid}>
            {items && items.length ? (
              items.map((it) => (
                <li key={it.id} className={styles.personItem}>
                  <div
                    className={styles.personBox}
                    style={{ background: it.bg || "transparent" }}
                  >
                    <img src={it.src} alt={it.alt || "person"} className={styles.personImg} />
                  </div>
                </li>
              ))
            ) : (
              // placeholder demo items when none provided
              <>
                {Array.from({ length: 12 }).map((_, i) => (
                  <li key={i} className={styles.personItem}>
                    <div className={styles.personBox} style={{ background: i % 2 ? "#FDECEC" : "#E8F5FF" }}>
                      <img src={`/images/people/placeholder-${(i%6)+1}.png`} alt={`demo ${i+1}`} className={styles.personImg} />
                    </div>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

PeopleGridSection.propTypes = {
  heroSrc: PropTypes.string,
  titleLeft: PropTypes.string,
  titleHighlight: PropTypes.string,
  titleRight: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    bg: PropTypes.string,
  })),
  showDecor: PropTypes.bool,
};
