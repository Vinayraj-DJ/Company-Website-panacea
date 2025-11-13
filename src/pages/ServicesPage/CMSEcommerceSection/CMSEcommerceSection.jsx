// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./CMSEcommerceSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// // ================= ITEMS MATCHING SCREENSHOT =================
// const ITEMS = [
//   { title: "WordPress Development",        image: "/images/cms/wordpress.jpg" },
//   { title: "BigCommerce Development",      image: "/images/cms/bigcommerce.jpg" },
//   { title: "Shopify Development",          image: "/images/cms/shopify.jpg" },
//   { title: "WooCommerce Development",      image: "/images/cms/woocommerce.jpg" },
// ];

// const CMSEcommerceSection = ({
//   title = "CMS & E-Commerce Development Services",
//   description = (
//     <>
//       CMS & E-commerce Development involves creating customized platforms that allow 
//       businesses to manage content and sell products online efficiently. A Content 
//       Management System (CMS) like WordPress, Joomla, or Drupal enables users to 
//       easily update website content, blogs, images, and multimedia without technical 
//       knowledge, ensuring the website remains fresh and engaging. E-commerce development, 
//       on the other hand, focuses on building online stores with secure payment gateways, 
//       product catalogs, inventory management, shopping carts, and customer accounts, 
//       providing a seamless shopping experience for users.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/cms-ecommerce",
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
//       {/* HERO */}
//       <HeroWithSocials
//         imageSrc="/images/cms/cms-hero.jpg"
//         alt={title}
//         height={420}
//         socials={[
//           { kind: "linkedin", href: SOCIALS.linkedin, text: "in" },
//           { kind: "facebook", href: SOCIALS.facebook, text: "F" },
//         ]}
//       />

//       {/* HEADER BLOCK */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* GRID OF CARDS */}
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

//       {/* PRIMARY SECTIONS BELOW */}
//       <JoinOurServiceSection />
//       <KnowEverythingSection />
//       <FooterSection />
//     </section>
//   );
// };

// export default CMSEcommerceSection;




// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./CMSEcommerceSection.module.css";

// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
// import HeroTitleChip from "../../../components/common/HeroTitleChip";
// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "WordPress Development",   image: "/images/services/cms/wordpress.png" },
//   { title: "BigCommerce Development", image: "/images/services/cms/bigcommerce.png" },
//   { title: "Shopify Development",     image: "/images/services/cms/shopify.png" },
//   { title: "WooCommerce Development", image: "/images/services/cms/woocommerce.png" },
// ];

// export default function CMSEcommerceSection({
//   title = "CMS & E-Commerce Development Services",
//   basePath = "/services/cms-ecommerce",
// }) {
//   const description = (
//     <>
//       CMS & E-commerce Development involves creating customized platforms that allow
//       businesses to manage content and sell products online efficiently. A Content
//       Management System (CMS) like WordPress, Joomla, or Drupal enables users to easily
//       update website content, blogs, images, and multimedia without technical knowledge.
//       E-commerce development focuses on building online stores with secure payment
//       gateways, product catalogs, inventory management, shopping carts, and customer
//       accounts, providing a seamless shopping experience for users.
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
//       {/* Hero (same pattern as Application page) */}
//       <div className={styles.hero}>
//       <HeroTitleChip
//   imageSrc="/images/services/cms-ecommerce.png"
//   alt="image not found"
//   title={"CMS & E-Commerce\nDevelopment Service"}
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

//       {/* Aligned grid of clickable cards (no stagger) */}
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



import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./CMSEcommerceSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ITEMS = [
  {
    title: "WordPress Development",
    image: "/images/services/cms/wordpress.png",
    description:
      "WordPress Development involves creating dynamic, scalable, and feature-rich websites using the WordPress platform, one of the most popular CMS systems worldwide. It allows businesses to build custom websites, blogs, e-commerce stores, and corporate portals with ease, combining flexibility and functionality.",
  },
  {
    title: "BigCommerce Development",
    image: "/images/services/cms/bigcommerce.png",
    description:
      "BigCommerce Development focuses on building robust, scalable, and fully-featured e-commerce websites using the BigCommerce platform, a leading cloud-based solution for online businesses. It enables companies to create custom online stores with advanced features.",
  },
  {
    title: "Shopify Development",
    image: "/images/services/cms/shopify.png",
    description:
      "Shopify Development involves creating custom, scalable, and fully-functional online stores using the Shopify platform, one of the most popular e-commerce solutions globally. It enables businesses to build responsive, secure, and user-friendly e-commerce websites",
  },
  {
    title: "WooCommerce Development",
    image: "/images/services/cms/woocommerce.png",
    description:
      "WooCommerce Development focuses on building powerful and customizable e-commerce websites using WooCommerce, the leading WordPress plugin for online stores. It allows businesses to sell products and services seamlessly by integrating features such as secure payment gateways, inventory management, shopping .",
  },
];

export default function CMSEcommerceSection({
  title = "CMS & E-Commerce Development Services",
  basePath = "/services/cms-ecommerce",
}) {
  const description = (
    <>
      CMS & E-commerce Development involves creating customized platforms that allow
      businesses to manage content and sell products online efficiently. A Content
      Management System (CMS) like WordPress, Joomla, or Drupal enables users to easily
      update website content, blogs, images, and multimedia without technical knowledge.
      E-commerce development focuses on building online stores with secure payment
      gateways, product catalogs, inventory management, shopping carts, and customer
      accounts, providing a seamless shopping experience for users.
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

  // simple screen width check: offsets only apply when window.innerWidth > 768
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
      {/* Hero */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/cms-ecommerce.png"
          alt="CMS & E-Commerce"
          title={"CMS & E-Commerce\nDevelopment Service"}
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

      {/* Grid with alternating up/down offset on non-mobile */}
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
                <img src={s.image} alt={s.title} className={styles.img} loading="lazy" />

                {/* ✅ Hover overlay enabled */}
                <div className={styles.overlay}>
                  <div className={styles.overlayText}>{s.description}</div>
                </div>
              </div>

              <div className={styles.caption}>{s.title}</div>
            </Link>
          );
        })}
      </div>

      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
