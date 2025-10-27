// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./CloudDevOpsSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "DevOps",                   image: "/images/cloud-devops/devops.jpg" },
//   { title: "AWS",                      image: "/images/cloud-devops/aws.jpg" },
//   { title: "Windows Azure",            image: "/images/cloud-devops/azure.jpg" },
//   { title: "Cloud Consulting Services",image: "/images/cloud-devops/consulting.jpg" },
// ];

// const CloudDevOpsSection = ({
//   title = "Cloud & DevOps",
//   description = (
//     <>
//       Cloud and DevOps are transforming the way businesses build, deploy, and manage applications.
//       Cloud computing provides scalable, on-demand access to computing resources, enabling companies
//       to reduce infrastructure costs and improve flexibility. DevOps, on the other hand, bridges the
//       gap between development and operations through automation, continuous integration, and
//       continuous delivery (CI/CD) practices.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/clouds-and-devops",
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
//       {/* Hero with social chips */}
//       <HeroWithSocials
//         imageSrc="/images/cloud-devops/hero.jpg"
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

//       {/* Cards */}
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

// export default CloudDevOpsSection;




import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./CloudDevOpsSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  { title: "DevOps",                    image: "/images/cloud-devops/devops.jpg" },
  { title: "AWS",                       image: "/images/cloud-devops/aws.jpg" },
  { title: "Windows Azure",             image: "/images/cloud-devops/azure.jpg" },
  { title: "Cloud Consulting Services", image: "/images/cloud-devops/consulting.jpg" },
];

export default function CloudDevOpsSection({
  title = "Cloud & DevOps",
  basePath = "/services/clouds-and-devops",
}) {
  const description = (
    <>
      Cloud and DevOps are transforming the way businesses build, deploy, and manage
      applications. Cloud computing provides scalable, on-demand access to computing
      resources, enabling companies to reduce infrastructure costs and improve flexibility.
      DevOps, on the other hand, bridges the gap between development and operations through
      automation, continuous integration, and continuous delivery (CI/CD) practices.
    </>
  );

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
      {/* Hero (same structure as Application page) */}
      <div className={styles.hero}>
         <HeroTitleChip
  imageSrc=""
  alt="Cloud & DevOps"
  title={"Cloud & DevOps"}
/>

        {/* Same round social chips */}
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

      {/* Header (identical to Application page) */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Grid of clickable cards (no stagger; same as Application) */}
      <div className={styles.grid}>
        {cards.map((s, idx) => (
          <Link key={idx} to={s.to} className={styles.card}>
            <div className={styles.imageWrap}>
              <img src={s.image} alt={s.title} className={styles.img} loading="lazy" />
            </div>
            <div className={styles.caption}>{s.title}</div>
          </Link>
        ))}
      </div>

      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
