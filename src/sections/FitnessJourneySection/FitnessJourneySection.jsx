// import React from "react";
// import styles from "./FitnessJourneySection.module.css";

// const FitnessJourneySection = () => {
//   const features = [
//     "💪 Personalized Workout Plans",
//     "🥗 Diet & Nutrition Tracking",
//     "⏱️ Activity & Step Tracking",
//     "🎯 Goal Setting & Progress Reports",
//     "🤖 AI-Based Recommendations",
//   ];

//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <header className={styles.header}>
//           <h2 className={styles.heading}>
//             Transform Your <span className={styles.highlight}>Fitness</span> Journey
//             <br />
//             Anytime, Anywhere
//           </h2>

//           <p className={styles.topRightText}>
//             Stay fit, stay motivated with our all-in-one Fitness App designed to
//             track workouts, meals, and progress effortlessly.
//           </p>
//         </header>

//         <div className={styles.content}>
//           <div className={styles.leftImageWrap}>
//             <img
//               src="/images/products/f1.png"
//               alt="Fitness"
//               className={styles.mainImage}
//             />
//           </div>

//           <aside className={styles.featuresCard}>
//             <h3 className={styles.featuresTitle}>Key Features</h3>

//             <ul className={styles.featureList}>
//               {features.map((f, i) => (
//                 <li key={i}>{f}</li>
//               ))}
//             </ul>

//             <img
//               src="/images/products/f2.png"
//               alt="trainer"
//               className={styles.sideImage}
//             />
//           </aside>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FitnessJourneySection;




// FitnessJourneySection.jsx
import React from "react";
import PropTypes from "prop-types";
import styles from "./FitnessJourneySection.module.css";

const DEFAULT_HEADING = ["Transform Your Fitness Journey", "Anytime, Anywhere"];
const DEFAULT_FEATURES = [
  "💪 Personalized Workout Plans",
  "🥗 Diet & Nutrition Tracking",
  "⏱️ Activity & Step Tracking",
  "🎯 Goal Setting & Progress Reports",
  "🤖 AI-Based Recommendations",
];

const FitnessJourneySection = ({
  headingLines = DEFAULT_HEADING,
  highlightWord = "Fitness",
  topRightText = "Stay fit, stay motivated with our all-in-one Fitness App designed to track workouts, meals, and progress effortlessly.",
  features = DEFAULT_FEATURES,
  mainImageSrc = "/images/products/f1.png",
  mainImageAlt = "Fitness Image",
  sideImageSrc = "/images/products/f2.png",
  sideImageAlt = "Trainer Image",
}) => {
  // Ensure we always have arrays before calling map
  const safeHeading = Array.isArray(headingLines) ? headingLines : DEFAULT_HEADING;
  const safeFeatures = Array.isArray(features) ? features : DEFAULT_FEATURES;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.heading}>
            {safeHeading.map((line, index) => (
              <React.Fragment key={index}>
                {index === 0 ? (
                  // Highlight the word only when present
                  line.split(new RegExp(`(${highlightWord})`, "i")).map((part, i) =>
                    part.toLowerCase() === highlightWord.toLowerCase() ? (
                      <span key={i} className={styles.highlight}>
                        {part}
                      </span>
                    ) : (
                      <React.Fragment key={i}>{part}</React.Fragment>
                    )
                  )
                ) : (
                  line
                )}
                <br />
              </React.Fragment>
            ))}
          </h2>

          <p className={styles.topRightText}>{topRightText}</p>
        </header>

        <div className={styles.content}>
          <div className={styles.leftImageWrap}>
            <img src={mainImageSrc} alt={mainImageAlt} className={styles.mainImage} />
          </div>

          <aside className={styles.featuresCard}>
            <h3 className={styles.featuresTitle}>Key Features</h3>

            <ul className={styles.featureList}>
              {safeFeatures.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <img src={sideImageSrc} alt={sideImageAlt} className={styles.sideImage} />
          </aside>
        </div>
      </div>
    </section>
  );
};

FitnessJourneySection.propTypes = {
  headingLines: PropTypes.arrayOf(PropTypes.string),
  highlightWord: PropTypes.string,
  topRightText: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  mainImageSrc: PropTypes.string,
  mainImageAlt: PropTypes.string,
  sideImageSrc: PropTypes.string,
  sideImageAlt: PropTypes.string,
};

export default FitnessJourneySection;
