// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./TestingAutomationSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Quality Engineering",  image: "/images/testing-automation/quality-engineering.jpg" },
//   { title: "Quality Consulting",   image: "/images/testing-automation/quality-consulting.jpg" },
//   { title: "Quality Assurance",    image: "/images/testing-automation/quality-assurance.jpg" },
// ];

// const TestingAutomationSection = ({
//   title = "Testing Automation",
//   description = (
//     <>
//       Testing automation is the process of using specialized software tools and scripts to
//       automatically execute test cases, compare actual results with expected outcomes, and
//       report defects without human intervention. By integrating automation into CI/CD pipelines,
//       organizations can achieve continuous testing and delivery, leading to higher efficiency
//       and better end-user experiences.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/testing-automation",
// }) => {
//   const computed = useMemo(
//     () =>
//       items.map((it) => {
//         const slug = it.title
//           .toLowerCase()
//           .trim()
//           .replace(/&/g, "and")
//           .replace(/[^a-z0-9]+/g, "-")
//           .replace(/^-+|-+$/g, "");
//         return { ...it, to: `${basePath}/${slug}` };
//       }),
//     [items, basePath]
//   );

//   return (
//     <section
//       className={styles.section}
//       style={{
//         backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Hero */}
//       <HeroWithSocials
//         imageSrc="/images/testing-automation/hero.jpg"
//         alt={title}
//         height={420}
//         socials={[
//           { kind: "linkedin", href: SOCIALS.linkedin, text: "in" },
//           { kind: "facebook", href: SOCIALS.facebook, text: "F" },
//         ]}
//       />

//       {/* Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* Cards grid */}
//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
//           <Link
//             key={idx}
//             to={s.to}
//             className={`${styles.card} ${styles[`card${(idx % 8) + 1}`]}`}
//           >
//             <div className={styles.imageWrap}>
//               <img src={s.image} alt={s.title} className={styles.img} />
//             </div>
//             <div className={styles.caption}>{s.title}</div>
//           </Link>
//         ))}
//       </div>

//       <JoinOurServiceSection />
//       <KnowEverythingSection />
//       <FooterSection />
//     </section>
//   );
// };

// export default TestingAutomationSection;



// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./TestingAutomationSection.module.css";

// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
// import HeroTitleChip from "../../../components/common/HeroTitleChip";
// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Quality Engineering", image: "/images/services/testing-automation/quality-engineering.png" },
//   { title: "Quality Consulting",  image: "/images/services/testing-automation/quality-consulting.png" },
//   { title: "Quality Assurance",   image: "/images/services/testing-automation/quality-assurance.png" },
// ];

// export default function TestingAutomationSection({
//   title = "Testing Automation",
//   basePath = "/services/testing-automation",
// }) {
//   const description = (
//     <>
//       Testing automation is the process of using specialized software tools and scripts to
//       automatically execute test cases, compare actual results with expected outcomes, and
//       report defects without human intervention. By integrating automation into CI/CD pipelines,
//       organizations can achieve continuous testing and delivery, leading to higher efficiency
//       and better end-user experiences.
//     </>
//   );

//   const cards = useMemo(
//     () =>
//       ITEMS.map((it) => {
//         const slug = it.title
//           .toLowerCase()
//           .trim()
//           .replace(/&/g, "and")
//           .replace(/[^a-z0-9]+/g, "-")
//           .replace(/^-+|-+$/g, "");
//         return { ...it, to: `${basePath}/${slug}` };
//       }),
//     [basePath]
//   );

//   return (
//     <section
//       className={styles.page}
//       style={{
//         backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Hero with overlay socials (same pattern as Services page) */}
//       <div className={styles.hero}>
//         <HeroTitleChip
//   imageSrc="/images//services/testing-automation.png"
//   alt="Testing Automation"
//   title={"Testing Automation"}
// />
//         <div className={styles.heroSocialIcons}>
//           <a
//             href={SOCIALS.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             className={`${styles.social} ${styles.linkedin}`}
//           >
//             <span className={styles.text}>in</span>
//           </a>
//           <a
//             href={SOCIALS.facebook}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className={`${styles.social} ${styles.facebook}`}
//           >
//             <span className={styles.text}>F</span>
//           </a>
//         </div>
//       </div>

//       {/* Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* Aligned, clickable cards */}
//       <div className={styles.grid}>
//         {cards.map((s, idx) => (
//           <Link key={idx} to={s.to} className={styles.card}>
//             <div className={styles.imageWrap}>
//               <img src={s.image} alt={s.title} className={styles.img} loading="lazy" />
//             </div>
//             <div className={styles.caption}>{s.title}</div>
//           </Link>
//         ))}
//       </div>

//       <JoinOurServiceSection />
//       <KnowEverythingSection />
//       <FooterSection />
//     </section>
//   );
// }



// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./TestingAutomationSection.module.css";

// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
// import HeroTitleChip from "../../../components/common/HeroTitleChip";

// const SOCIALS = {
//   linkedin:
//     "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   {
//     title: "Quality Engineering",
//     image: "/images/services/testing-automation/quality-engineering.png",
//     description:
//       "End-to-end quality engineering: test strategy, automation frameworks, performance and security testing to ensure resilient releases.",
//   },
//   {
//     title: "Quality Consulting",
//     image: "/images/services/testing-automation/quality-consulting.png",
//     description:
//       "Process and tool consulting to shift left testing, integrate QA into CI/CD pipelines, and improve release predictability.",
//   },
//   {
//     title: "Quality Assurance",
//     image: "/images/services/testing-automation/quality-assurance.png",
//     description:
//       "Manual and automated assurance services, test planning, regression suites and verification for high-quality user experiences.",
//   },
// ];

// export default function TestingAutomationSection({
//   title = "Testing Automation",
//   basePath = "/services/testing-automation",
// }) {
//   const description = (
//     <>
//       Testing automation uses scripts and tools to run repeatable tests, compare actual vs expected outcomes,
//       and report defects automatically. Integrated with CI/CD, it enables continuous testing and faster,
//       more reliable releases.
//     </>
//   );

//   const cards = useMemo(
//     () =>
//       ITEMS.map((it) => {
//         const slug = it.title
//           .toLowerCase()
//           .trim()
//           .replace(/&/g, "and")
//           .replace(/[^a-z0-9]+/g, "-")
//           .replace(/^-+|-+$/g, "");
//         return { ...it, to: `${basePath}/${slug}` };
//       }),
//     [basePath]
//   );

//   return (
//     <section
//       className={styles.page}
//       style={{
//         backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Hero */}
//       <div className={styles.hero}>
//         <HeroTitleChip
//           imageSrc="/images/services/testing-automation.png"
//           alt="Testing Automation"
//           title={"Testing Automation"}
//         />

//         <div className={styles.heroSocialIcons}>
//           <a
//             href={SOCIALS.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             className={`${styles.social} ${styles.linkedin}`}
//           >
//             <span className={styles.text}>in</span>
//           </a>
//           <a
//             href={SOCIALS.facebook}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className={`${styles.social} ${styles.facebook}`}
//           >
//             <span className={styles.text}>F</span>
//           </a>
//         </div>
//       </div>

//       {/* Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* Cards grid */}
//       <div className={styles.grid}>
//         {cards.map((s, idx) => (
//           <Link key={idx} to={s.to} className={styles.card}>
//             <div className={styles.imageWrap}>
//               <img
//                 src={s.image}
//                 alt={s.title}
//                 className={styles.img}
//                 loading="lazy"
//               />

//               {/* overlay inside imageWrap */}
//               <div className={styles.overlay} aria-hidden>
//                 <div className={styles.overlayText}>{s.description}</div>
//               </div>
//             </div>

//             <div className={styles.caption}>{s.title}</div>
//           </Link>
//         ))}
//       </div>

//       <JoinOurServiceSection />
//       <KnowEverythingSection />
//       <FooterSection />
//     </section>
//   );
// }



import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./TestingAutomationSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  {
    title: "Quality Engineering",
    image: "/images/services/testing-automation/quality-engineering.png",
    description:
      "Quality Engineering is a systematic approach focused on ensuring that products, software, or systems are built with quality from the very beginning, rather than just tested for quality at the end. It involves applying engineering principles, data analysis, and automation. The ultimate goal of quality engineering is to deliver faster, safer products.",
  },
  {
    title: "Quality Consulting",
    image: "/images/services/testing-automation/quality-consulting.png",
    description:
      "Quality Consulting is a professional service that helps organizations improve their processes, products, and performance by implementing effective quality management strategies and standards. It provides expert guidance to enhance overall quality, compliance, and customer satisfaction.",
  },
  {
    title: "Quality Assurance",
    image: "/images/services/testing-automation/quality-assurance.png",
    description:
      "Quality Assurance (QA) is a systematic process that ensures a product or service meets specified requirements and maintains a high standard of quality throughout its development and delivery. The main goal of quality assurance is to build confidence in the product’s security and functionality before it reaches end users.",
  },
];


export default function TestingAutomationSection({
  title = "Testing Automation",
  basePath = "/services/testing-automation",
}) {
  const description = (
    <>
      Testing automation uses scripts and tools to run repeatable tests, compare actual vs
      expected outcomes, and report defects automatically. Integrated with CI/CD, it enables
      continuous testing and faster, more reliable releases.
    </>
  );

  // Build links for cards
  const cards = useMemo(
    () =>
      ITEMS.map((it) => {
        const slug = it.title
          .toLowerCase()
          .trim()
          .replace(/&/g, "and")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "");
        return { ...it, to: `${basePath}/${slug}` };
      }),
    [basePath]
  );

  // Disable stagger effect on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  return (
    <section
      className={styles.page}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/testing-automation.png"
          alt="Testing Automation"
          title={"Testing Automation"}
        />

        {/* Social Links */}
        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>

      {/* Section Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Grid with stagger effect + hover overlays */}
      <div className={styles.grid}>
        {cards.map((s, idx) => {
          const offsetY = !isMobile ? (idx % 2 === 0 ? "-25px" : "25px") : "0px";

          return (
            <Link
              key={idx}
              to={s.to}
              className={styles.card}
              style={{
                transform: `translateY(${offsetY})`,
                transition: "transform 0.4s ease",
              }}
            >
              <div className={styles.imageWrap} style={{ position: "relative" }}>
                <img
                  src={s.image}
                  alt={s.title}
                  className={styles.img}
                  loading="lazy"
                />

                {/* ✅ Hover overlay */}
                <div className={styles.overlay}>
                  <div className={styles.overlayText}>{s.description}</div>
                </div>
              </div>

              <div className={styles.caption}>{s.title}</div>
            </Link>
          );
        })}
      </div>

      {/* Footer Sections */}
      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
