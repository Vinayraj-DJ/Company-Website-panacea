// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./DigitalMarketingSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// // Update the images to your actual assets
// const ITEMS = [
//   { title: "Search Engine Optimization", image: "/images/dm/seo.jpg" },
//   { title: "Social Media Marketing",     image: "/images/dm/social-media.jpg" },
//   { title: "Content Marketing",          image: "/images/dm/content.jpg" },
//   { title: "Email Marketing",            image: "/images/dm/email.jpg" },
//   { title: "Inbound Marketing",          image: "/images/dm/inbound.jpg" },
//   { title: "Pay Per Click (PPC)",        image: "/images/dm/ppc.jpg" },
// ];

// const DigitalMarketingSection = ({
//   title = "Digital Marketing Services",
//   description = (
//     <>
//       Digital Marketing is the process of promoting products, services, or brands using
//       digital channels and technologies to reach and engage customers. It combines creativity,
//       data, and technology to attract the right audience, build relationships, and drive sales
//       through online platforms such as search engines, social media, email, and websites. Unlike
//       traditional marketing, digital marketing allows for precise targeting, real-time performance
//       tracking, and measurable results.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/digital-marketing",
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
//       {/* Hero with round social chips */}
//       <div className={styles.heroContainer}>
//         <HeroWithSocials
//           imageSrc="/images/servicestopimage.png"
//           alt="Digital Marketing"
//           height={420}
//           socials={[
//             { kind: "linkedin", href: SOCIALS.linkedin, text: "in" },
//             { kind: "facebook", href: SOCIALS.facebook, text: "F" },
//           ]}
//         />
//       </div>

//       {/* Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* Grid */}
//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
//           <Link
//             key={`${s.title}-${idx}`}
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

// export default DigitalMarketingSection;




import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./DigitalMarketingSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  { title: "Search Engine Optimization", image: "/images/dm/seo.jpg" },
  { title: "Social Media Marketing",     image: "/images/dm/social-media.jpg" },
  { title: "Content Marketing",          image: "/images/dm/content.jpg" },
  { title: "Email Marketing",            image: "/images/dm/email.jpg" },
  { title: "Inbound Marketing",          image: "/images/dm/inbound.jpg" },
  { title: "Pay Per Click (PPC)",        image: "/images/dm/ppc.jpg" },
];

export default function DigitalMarketingSection({
  title = "Digital Marketing Services",
  basePath = "/services/digital-marketing",
}) {
  const description = (
    <>
      Digital Marketing is the process of promoting products, services, or brands using digital
      channels and technologies to reach and engage customers. It combines creativity, data, and
      technology to attract the right audience, build relationships, and drive sales through online
      platforms such as search engines, social media, email, and websites. Unlike traditional
      marketing, digital marketing allows for precise targeting, real-time performance tracking,
      and measurable results.
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
      {/* Hero with overlay socials (same as Services page) */}
      <div className={styles.hero}>
         <HeroTitleChip
  imageSrc=""
  alt="image not found"
  title={"Digital Marketing\nServices"}
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

      {/* Aligned grid of clickable cards */}
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
