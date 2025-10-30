// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./WebDevelopmentSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Php Development", image: "/images/web-dev/php.jpg" },
//   { title: "Node.js Development", image: "/images/web-dev/nodejs.jpg" },
//   { title: "Angular js Development", image: "/images/web-dev/angular.jpg" },
//   { title: "React js Development", image: "/images/web-dev/react.jpg" },
//   { title: "Laravel Development", image: "/images/web-dev/laravel.jpg" },
//   { title: "Codeigniter Development", image: "/images/web-dev/codeigniter.jpg" },
//   { title: "Cakephp Development", image: "/images/web-dev/cakephp.jpg" },
// ];

// const WebDevelopmentSection = ({
//   title = "Web Development Services",
//   description = (
//     <>
//       Web Development Services refer to the process of building, creating, and maintaining
//       websites or web applications to provide a seamless digital experience for users.
//       These services encompass everything from designing the front-end user interface
//       to developing back-end server-side logic, database management, and integrating
//       features that enable websites to function efficiently.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/web-development",
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

//       {/* Grid */}
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

// export default WebDevelopmentSection;



import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./WebDevelopmentSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  { title: "Php Development",           image: "/images/services/web-dev/php.png" },
  { title: "Node.js Development",       image: "/images/services/web-dev/nodejs.png" },
  { title: "Angular js Development",    image: "/images/services/web-dev/angular.png" },
  { title: "React js Development",      image: "/images/services/web-dev/react.png" },
  { title: "Laravel Development",       image: "/images/services/web-dev/laravel.png" },
  { title: "Codeigniter Development",   image: "/images/services/web-dev/codeigniter.png" },
  { title: "Cakephp Development",       image: "/images/services/web-dev/cakephp.png" },
];

export default function WebDevelopmentSection({
  title = "Web Development Services",
  basePath = "/services/web-development",
}) {
  const description = (
    <>
      Web Development Services refer to building, creating, and maintaining websites or web
      applications. This covers front-end UI, back-end logic, databases, integrations, and
      performance/SEO optimizations that make sites fast, secure, and effective.
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
          imageSrc="/images/services/web-development.png"
          alt="Web Development Services"
          title={"Web Development\nServices"}
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
