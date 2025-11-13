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

// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./DigitalMarketingSection.module.css";

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
//     title: "Search Engine Optimization",
//     image: "/images/services/seo.png",
//     description:
//       "Empower your business with technology-driven innovation and smarter workflows for long-term growth.",
//   },
//   {
//     title: "Social Media Marketing",
//     image: "/images/services/social-media.png",
//     description:
//       "Empower your business with technology-driven innovation and smarter workflows for long-term growth.",
//   },
//   {
//     title: "Content Marketing",
//     image: "/images/services/content.png",
//     description:
//       "Empower your business with technology-driven innovation and smarter workflows for long-term growth.",
//   },
//   {
//     title: "Email Marketing",
//     image: "/images/services/email.png",
//     description:
//       "Empower your business with technology-driven innovation and smarter workflows for long-term growth.",
//   },
//   {
//     title: "Inbound Marketing",
//     image: "/images/services/inbound.png",
//     description:
//       "Empower your business with technology-driven innovation and smarter workflows for long-term growth.",
//   },
//   {
//     title: "Pay Per Click (PPC)",
//     image: "/images/services/ppc.png",
//     description:
//       "Empower your business with technology-driven innovation and smarter workflows for long-term growth.",
//   },
// ];

// export default function DigitalMarketingSection({
//   title = "Digital Marketing Services",
//   basePath = "/services/digital-marketing",
// }) {
//   const description = (
//     <>
//       Digital Marketing is the process of promoting products, services, or
//       brands using digital channels and technologies to reach and engage
//       customers. It combines creativity, data, and technology to attract the
//       right audience, build relationships, and drive sales through online
//       platforms such as search engines, social media, email, and websites.
//       Unlike traditional marketing, digital marketing allows for precise
//       targeting, real-time performance tracking, and measurable results.
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
//       {/* Hero with overlay socials (same as Services page) */}
//       <div className={styles.hero}>
//         <HeroTitleChip
//           imageSrc="/images/services/digital-marketing.png"
//           alt="image not found"
//           title={"Digital Marketing\nServices"}
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

//       {/* Aligned grid of clickable cards */}
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
// import styles from "./DigitalMarketingSection.module.css";

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
//     title: "Search Engine Optimization",
//     image: "/images/services/seo.png",
//     description:
//       "SEO improves visibility on search engines by optimizing technical setup, content, and links.",
//   },
//   {
//     title: "Social Media Marketing",
//     image: "/images/services/social-media.png",
//     description:
//       "Build brand awareness and engagement across social platforms with targeted content and ads.",
//   },
//   {
//     title: "Content Marketing",
//     image: "/images/services/content.png",
//     description:
//       "Deliver helpful, relevant content to attract, engage, and convert your ideal customers.",
//   },
//   {
//     title: "Email Marketing",
//     image: "/images/services/email.png",
//     description:
//       "Drive retention and conversions with segmented, automated and measurable email campaigns.",
//   },
//   {
//     title: "Inbound Marketing",
//     image: "/images/services/inbound.png",
//     description:
//       "Attract customers organically through helpful content, lead magnets and nurturing flows.",
//   },
//   {
//     title: "Pay Per Click (PPC)",
//     image: "/images/services/ppc.png",
//     description:
//       "Get predictable traffic and conversions with targeted paid ads and continuous optimization.",
//   },
// ];

// export default function DigitalMarketingSection({
//   title = "Digital Marketing Services",
//   basePath = "/services/digital-marketing",
// }) {
//   const description = (
//     <>
//       Digital Marketing is the process of promoting products, services, or
//       brands using digital channels and technologies to reach and engage
//       customers. It combines creativity, data, and technology to attract the
//       right audience, build relationships, and drive sales through online
//       platforms such as search engines, social media, email, and websites.
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
//       <div className={styles.hero}>
//         <HeroTitleChip
//           imageSrc="/images/services/digital-marketing.png"
//           alt="image not found"
//           title={"Digital Marketing\nServices"}
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

//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

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

//               {/* <-- Overlay MUST be inside imageWrap */}
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
import styles from "./DigitalMarketingSection.module.css";

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
    title: "Search Engine Optimization",
    image: "/images/services/seo.png",
    description:
      "SEO (Search Engine Optimization) is the practice of optimizing websites and online content to improve their visibility in organic (non-paid) search engine results like Google, Bing, and Yahoo. The main goal of SEO is to attract more relevant traffic, enhance user experience, and increase the chances of converting visitors.",
  },
  {
    title: "Social Media Marketing",
    image: "/images/services/social-media.png",
    description:
      "Social Media Marketing (SMM) is the practice of promoting products, services, or brands on social media platforms to connect with a target audience, build brand awareness, drive traffic, and generate leads or sales. It leverages platforms like Facebook, Instagram, LinkedIn, X (Twitter), TikTok and YouTube.",
  },
  {
    title: "Content Marketing",
    image: "/images/services/content.png",
    description:
      "Content Marketing is a strategic marketing approach focused on creating, publishing, and distributing valuable, relevant, and consistent content to attract, engage, and retain a clearly defined audience. Unlike traditional advertising, which directly promotes products.",
  },
  {
    title: "Email Marketing",
    image: "/images/services/email.png",
    description:
      "Email Marketing is a digital marketing strategy that involves sending targeted emails to a group of subscribers or potential customers to promote products, services, or content, build relationships, and drive conversions. It is one of the most cost-effective marketing channel.",
  },
  {
    title: "Inbound Marketing",
    image: "/images/services/inbound.png",
    description:
      "EInbound Marketing is a marketing strategy focused on attracting customers by providing valuable, relevant, and helpful content, rather than interrupting them with traditional ads. The goal is to draw potential customers naturally to your brand through content that educates, entertains, or solves their problems.",
  },
  {
    title: "Pay Per Click (PPC)",
    image: "/images/services/ppc.png",
    description:
      "Pay-Per-Click (PPC) Advertising is a digital marketing model where businesses pay a fee each time their ad is clicked. Instead of trying to attract organic traffic through SEO, PPC allows brands to buy visits to their website by displaying ads on search engines, social media platforms, or other websites.",
  },
];

export default function DigitalMarketingSection({
  title = "Digital Marketing Services",
  basePath = "/services/digital-marketing",
}) {
  const description = (
    <>
      Digital Marketing is the process of promoting products, services, or brands using
      digital channels and technologies to reach and engage customers. It combines
      creativity, data, and technology to attract the right audience, build relationships,
      and drive sales through online platforms such as search engines, social media,
      email, and websites.
    </>
  );

  // Create URL slugs for each card
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

  // ✅ Disable stagger effect on mobile
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
          imageSrc="/images/services/digital-marketing.png"
          alt="Digital Marketing"
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

      {/* Section Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          {title} <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>{description}</p>
      </div>

      {/* Grid of Cards with hover overlay + stagger effect */}
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

                {/* ✅ Hover overlay active */}
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

