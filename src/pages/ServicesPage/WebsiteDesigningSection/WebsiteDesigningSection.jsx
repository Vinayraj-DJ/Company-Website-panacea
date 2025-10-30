// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./WebsiteDesigningSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Flexible Images",           image: "/images/website-designing/flexible-images.jpg" },
//   { title: "Media Queries",             image: "/images/website-designing/media-queries.jpg" },
//   { title: "Improve User Experience",   image: "/images/website-designing/user-experience.jpg" },
//   { title: "Impact On SEO Ranking",     image: "/images/website-designing/seo-impact.jpg" },
// ];

// const WebsiteDesigningSection = ({
//   title = "Website Designing Services",
//   description = (
//     <>
//       At Panacea IT Services, we specialize in delivering professional, visually stunning, and highly
//       functional website designing services that help businesses establish a strong digital presence
//       and engage their audience effectively. Our expert team of designers and developers combines
//       creativity, technology, and strategic thinking to craft websites that are not only aesthetically
//       appealing but also optimized for user experience (UX), responsiveness, and search engine
//       visibility. At Panacea IT Services, we are committed to transforming ideas into digital realities
//       that not only impress visitors but also convert them into loyal customers, helping your business
//       grow and succeed in the competitive online marketplace.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/website-designing",
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
//       {/* Hero reused everywhere for consistent look */}
//       <HeroWithSocials
//         imageSrc="/images/servicestopimage.png"
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

// export default WebsiteDesigningSection;



import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./WebsiteDesigningSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  { title: "Flexible Images",         image: "/images/services/website-designing/flexible-images.png" },
  { title: "Media Queries",           image: "/images/services/website-designing/media-queries.png" },
  { title: "Improve User Experience", image: "/images/services/website-designing/user-experience.png" },
  { title: "Impact On SEO Ranking",   image: "/images/services/website-designing/seo-impact.png" },
];

export default function WebsiteDesigningSection({
  title = "Website Designing Services",
  basePath = "/services/website-designing",
}) {
  const description = (
    <>
      We deliver visually engaging, performant, and responsive website designs optimized
      for UX and search. Our approach blends aesthetics, accessibility, and speed so your
      audience enjoys a seamless experience across devices.
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
      {/* Hero with overlay socials */}
      <div className={styles.hero}>
         <HeroTitleChip
  imageSrc="/images/services/website-designing.png"
  alt="image not found"
  title={"Website Designing\nServices"}
/>
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

      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Grid of clickable cards */}
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
