// import React from "react";
// import styles from "./GamingShowcaseSection.module.css";

// /**
//  * Props:
//  * - background: string -> background image URL (for top section)
//  * - phones: string[] -> array of 3 phone images
//  */
// export default function GamingShowcaseSection({
//   background = "/images/background-image.png", // new background
//   phones = [
//     "/images/phone-1.png",
//     "/images/phone-2.png",
//     "/images/phone-3.png",
//   ],
// }) {
//   return (
//     <section className={styles.section}>
//       <div
//         className={styles.bgContainer}
//         style={{ backgroundImage: `url(${background})` }}
//       >
//         <div className={styles.phonesContainer}>
//           {phones.map((src, i) => (
//             <div key={i} className={styles.phoneWrapper}>
//               <img
//                 src={src}
//                 alt={`Phone ${i + 1}`}
//                 className={styles.phoneImage}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import styles from "./GamingShowcaseSection.module.css";

/**
 * Props:
 * - background: string -> path to background image (1440x710)
 * - showcase: string -> path to combined phones image (should be 925x522 ideally)
 */
export default function GamingShowcaseSection({
  background = "/images/background-image.png",
  showcase = "/images/gaming-showcase.png",
}) {
  return (
    <section className={styles.section}>
      <div
        className={styles.bgContainer}
        style={{ backgroundImage: `url(${background})` }}
        aria-hidden={false}
      >
        <div className={styles.showcaseWrapper}>
          <img
            src={showcase}
            alt="Gaming showcase"
            className={styles.showcaseImage}
            loading="lazy"
            width="925"
            height="522"
          />
        </div>
      </div>
    </section>
  );
}
