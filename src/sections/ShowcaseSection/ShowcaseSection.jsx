import React from "react";
import PropTypes from "prop-types";
import styles from "./ShowcaseSection.module.css";

/**
 * ShowcaseSection
 *
 * Props:
 * - heading: string with optional "\n" to create stacked lines
 * - highlightSpans: array of substrings in heading to render with .highlight class (optional)
 * - mainImage: url for center phone image
 * - floats: array of { id, src, size, left, top } positions are CSS values (eg "20%", "120px")
 * - caption: optional paragraph under heading
 */
export default function ShowcaseSection({
  heading = "Shop Smart. Grow Fast.\nEmpowering businesses",
  highlightSpans = ["Empowering businesses", "digital shopping"],
  mainImage = "/images/phone-mockup.png",
  floats = [
    { id: "f1", src: "/images/circle1.png", size: 115, left: "8%", top: "15%" },
    { id: "f2", src: "/images/circle2.png", size: 115, left: "80%", top: "12%" },
    { id: "f3", src: "/images/circle3.png", size: 115, left: "18%", top: "55%" },
  ],
  caption = "",
}) {
  // split heading lines
  const lines = heading.split("\n");

  // helper to render line with highlight spans
  const renderLine = (line, key) => {
    if (!highlightSpans || highlightSpans.length === 0) return <div key={key}>{line}</div>;
    // replace first occurrence of any highlight substring with span
    let replaced = line;
    highlightSpans.forEach((s) => {
      if (replaced.includes(s)) {
        replaced = replaced.replace(s, `__HIGHLIGHT_START__${s}__HIGHLIGHT_END__`);
      }
    });
    const parts = replaced.split(/(__HIGHLIGHT_START__|__HIGHLIGHT_END__)/).filter(Boolean);
    return (
      <div key={key} className={styles.headingLine}>
        {parts.map((p, i) =>
          p === "__HIGHLIGHT_START__" || p === "__HIGHLIGHT_END__" ? null : p.startsWith(highlightSpans[0]) || highlightSpans.some(h => p === h) ? (
            <span key={i} className={styles.highlight}>{p}</span>
          ) : (
            <span key={i}>{p}</span>
          )
        )}
      </div>
    );
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* floating decorative images */}
        {floats.map((f) => (
          <img
            key={f.id}
            src={f.src}
            alt=""
            className={styles.floating}
            style={{
              width: `${f.size}px`,
              height: `${f.size}px`,
              left: f.left,
              top: f.top,
            }}
            aria-hidden
          />
        ))}

        {/* heading + caption on top-right */}
        <div className={styles.headerArea}>
          <div className={styles.heading}>
            {lines.map((ln, idx) => (
              <div key={idx} className={styles.headingLine}>
                {/* support highlights by simple substring span for first matching highlight */}
                {highlightSpans.length ? (
                  // simple inline highlight rendering
                  ln.split(new RegExp(`(${highlightSpans.join("|")})`, "g")).map((part, i) =>
                    highlightSpans.includes(part) ? <span key={i} className={styles.highlight}>{part}</span> : <span key={i}>{part}</span>
                  )
                ) : (
                  ln
                )}
              </div>
            ))}
          </div>

          {caption ? <p className={styles.caption}>{caption}</p> : null}
        </div>

        {/* center phone image */}
        <div className={styles.centerImageWrap}>
          <img src={mainImage} alt="showcase" className={styles.centerImage} />
        </div>
      </div>
    </section>
  );
}

ShowcaseSection.propTypes = {
  heading: PropTypes.string,
  highlightSpans: PropTypes.arrayOf(PropTypes.string),
  mainImage: PropTypes.string,
  floats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      size: PropTypes.number,
      left: PropTypes.string,
      top: PropTypes.string,
    })
  ),
  caption: PropTypes.string,
};
