// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./ApplicationDevelopmentSection.module.css";
// import ServicesSection from "../../../sections/Services/ServicesSection";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
// // 8 tiles shown in your screenshot
// const ITEMS = [
//   {
//     title: "Full Stack Development",
//     image: "/images/app-dev/full-stack.jpg",
//   },
//   {
//     title: "Digital Transformation",
//     image: "/images/app-dev/digital-transformation.jpg",
//   },
//   {
//     title: "Sales Force Consulting",
//     image: "/images/app-dev/salesforce.jpg",
//   },
//   {
//     title: "Software Development",
//     image: "/images/app-dev/software-development.jpg",
//   },
//   {
//     title: "Custom Application",
//     image: "/images/app-dev/custom-application.jpg",
//   },
//   {
//     title: "BI & Data Analysis",
//     image: "/images/app-dev/bi-data-analysis.jpg",
//   },
//   {
//     title: "Big Data Services",
//     image: "/images/app-dev/big-data.jpg",
//   },
//   {
//     title: "Sap Consulting Services",
//     image: "/images/app-dev/sap.jpg",
//   },
// ];

// const ApplicationDevelopmentSection = ({
//   // fallback copy; override via props if you want
//   title = "Application Development",
//   description = (
//     <>
//       At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly
//       software solutions that help businesses innovate, grow, and thrive in the
//       digital age. From idea to execution, our products are designed to deliver
//       real impact.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/application-development", // auto-generate deep links
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
//     <section className={styles.section}>

// {/* Hero with overlay icons */}
//       <div className={styles.hero}>
//         <img
//           src="/images/servicestopimage.png"
//           alt="Our Services"
//           className={styles.heroImg}
//         />

//         <div className={styles.heroSocialIcons}>
//           {/* <a
//             href={SOCIALS.linkedin}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             className={`${styles.social} ${styles.linkedin}`}
//           >
//             <span className={styles.text}>in</span>
//           </a> */}
//           {/* <a
//             href={SOCIALS.facebook}
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className={`${styles.social} ${styles.facebook}`}
//           >
//             <span className={styles.text}>F</span>
//           </a>  */}
//         </div>
//       </div>
      
//       {/* header */}
//       <div className={styles.headerRow}>
//         <div className={styles.headerText}>
//           <h2 className={styles.title}>
//             {title} <span className={styles.line} />
//           </h2>
//           <p className={styles.description}>{description}</p>
//         </div>

//         {/* social chips (optional) */}
//         <div className={styles.socials}>
//           <a
//             href="https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="LinkedIn"
//             className={`${styles.social} ${styles.linkedin}`}
//           >
//             in
//           </a>
//           <a
//             href="https://www.facebook.com/your-handle"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className={`${styles.social} ${styles.facebook}`}
//           >
//             F
//           </a>
//         </div>
//       </div>

//       {/* grid */}
//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
//           <Link key={`${s.title}-${idx}`} to={s.to} className={styles.card}>
//             <div className={styles.imageWrap}>
//               <img src={s.image} alt={s.title} className={styles.img} />
//             </div>
//             <div className={styles.caption}>{s.title}</div>
//           </Link>
//         ))}
//       </div>
//        {/* Page Sections */}
//       <ServicesSection />
//       <JoinOurServiceSection />
//       <KnowEverythingSection />
//       <FooterSection />
//     </section>
//   );
// };

// export default ApplicationDevelopmentSection;


// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./ApplicationDevelopmentSection.module.css";

// import ServicesSection from "../../../sections/Services/ServicesSection";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const ITEMS = [
//   { title: "Full Stack Development", image: "/images/app-dev/full-stack.jpg" },
//   { title: "Digital Transformation", image: "/images/app-dev/digital-transformation.jpg" },
//   { title: "Sales Force Consulting", image: "/images/app-dev/salesforce.jpg" },
//   { title: "Software Development", image: "/images/app-dev/software-development.jpg" },
//   { title: "Custom Application", image: "/images/app-dev/custom-application.jpg" },
//   { title: "BI & Data Analysis", image: "/images/app-dev/bi-data-analysis.jpg" },
//   { title: "Big Data Services", image: "/images/app-dev/big-data.jpg" },
//   { title: "Sap Consulting Services", image: "/images/app-dev/sap.jpg" },
// ];

// const ApplicationDevelopmentSection = ({
  
//   title = "Application Development",
//   description = (
//     <>
//       At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly
//       software solutions that help businesses innovate, grow, and thrive in the
//       digital age. From idea to execution, our products are designed to deliver
//       real impact.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/application-development",
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
//       <div className={styles.hero}>
//         <img
//           src="/images/servicestopimage.png"
//           alt="Our Services"
//           className={styles.heroImg}
//         />
//         <div className={styles.heroSocialIcons}>
//           {/* Social icons overlay (optional) */}
//         </div>
//       </div>

//       {/* Header (matches ServicesSection styles) */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* Grid of tiles with staggered offsets and caption chip */}
//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
//           <Link
//             key={`${s.title}-${idx}`}
//             to={s.to}
//             className={`${styles.card} ${styles[`card${idx + 1}`]}`}
//           >
//             <div className={styles.imageWrap}>
//               <img src={s.image} alt={s.title} className={styles.img} />
//             </div>
//             <div className={styles.caption}>{s.title}</div>
//           </Link>
//         ))}
//       </div>

//       {/* Reuse your other sections */}
//       <ServicesSection />
//       <JoinOurServiceSection />
//       <KnowEverythingSection />
//       <FooterSection />
//     </section>
//   );
// };

// export default ApplicationDevelopmentSection;




// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./ApplicationDevelopmentSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";

// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin:
//     "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle", // replace
// };

// const ITEMS = [
//   { title: "Full Stack Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Digital Transformation", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sales Force Consulting", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Software Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Custom Application", image: "/images/services/fullstackdevelopment.png" },
//   { title: "BI & Data Analysis", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Big Data Services", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sap Consulting Services", image: "/images/services/fullstackdevelopment.png" },
// ];

// const ApplicationDevelopmentSection = ({
//   title = "Application Development",
//   description = (
//     <>
//       At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly
//       software solutions that help businesses innovate, grow, and thrive in the
//       digital age. From idea to execution, our products are designed to deliver
//       real impact.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/application-development",
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
      
//     >
//       {/* Hero with round social chips */}
//       <div className={styles.heroContainer}>
//         <HeroWithSocials
//           imageSrc="/images/servicestopimage.png"
//           alt="Our Services"
//           height={420}
//           socials={[
//             { label: "LinkedIn", href: SOCIALS.linkedin, kind: "linkedin", text: "in" },
//             { label: "Facebook", href: SOCIALS.facebook, kind: "facebook", text: "F" },
//           ]}
//         />
//       </div>

//       {/* Header (same look as ServicesSection) */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>{description}</p>
//       </div>

//       {/* Grid of tiles with staggered offsets and caption chip */}
//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
//           <Link
//             key={`${s.title}-${idx}`}
//             to={s.to}
//             className={`${styles.card} ${styles[`card${idx + 1}`]}`}
//           >
//             <div className={styles.imageWrap}>
//               <img src={s.image} alt={s.title} className={styles.img} />
//             </div>
//             <div className={styles.caption}>{s.title}</div>
//           </Link>
//         ))}
//       </div>

//       {/* Reuse your other sections */}
   
//       <JoinOurServiceSection />
//       <KnowEverythingSection />
//       <FooterSection />
//     </section>
//   );
// };

// export default ApplicationDevelopmentSection;




// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./ApplicationDevelopmentSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Full Stack Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Digital Transformation", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sales Force Consulting", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Software Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Custom Application", image: "/images/services/fullstackdevelopment.png" },
//   { title: "BI & Data Analysis", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Big Data Services", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sap Consulting Services", image: "/images/services/fullstackdevelopment.png" },
// ];

// const ApplicationDevelopmentSection = ({
//   title = "Application Development",
//   description = (
//     <>
//       At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly
//       software solutions that help businesses innovate, grow, and thrive in the
//       digital age. From idea to execution, our products are designed to deliver
//       real impact.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/application-development",
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
//     <section className={styles.page}>
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

// export default ApplicationDevelopmentSection;




// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./ApplicationDevelopmentSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Full Stack Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Digital Transformation", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sales Force Consulting", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Software Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Custom Application", image: "/images/services/fullstackdevelopment.png" },
//   { title: "BI & Data Analysis", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Big Data Services", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sap Consulting Services", image: "/images/services/fullstackdevelopment.png" },
// ];

// const ApplicationDevelopment = ({
//   title = "Application Development",
//   description = (
//     <>
//       At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly
//       software solutions that help businesses innovate, grow, and thrive in the
//       digital age. From idea to execution, our products are designed to deliver
//       real impact.
//     </>
//   ),
//   items = ITEMS,
//   basePath = "/services/application-development",
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
//     <section className={styles.page}>
//       {/* HERO — identical to the reference */}
//       <HeroWithSocials
//         imageSrc="/images/servicestopimage.png"
//         alt={title}
//         height={420}
//         title={title}        // translucent left title panel
//         titleWidth={320}     // tweak to match composition
//         showFrame            // thin blue outline around hero
//         socials={[
//           { label: "LinkedIn", kind: "linkedin", href: SOCIALS.linkedin, text: "in" },
//           { label: "Facebook", kind: "facebook", href: SOCIALS.facebook, text: "F" },
//         ]}
//       />

//       {/* Header under hero */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line} />
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
// };

// export default ApplicationDevelopment;







// import React, { useMemo } from "react";
// import { Link } from "react-router-dom";
// import styles from "./ApplicationDevelopmentSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Full Stack Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Digital Transformation", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sales Force Consulting", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Software Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Custom Application", image: "/images/services/fullstackdevelopment.png" },
//   { title: "BI & Data Analysis", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Big Data Services", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sap Consulting Services", image: "/images/services/fullstackdevelopment.png" },
// ];

// export default function ApplicationDevelopment({
//   title = "Application Development",
//   basePath = "/services/application-development",
// }) {
//   const computed = useMemo(
//     () =>
//       ITEMS.map((it) => {
//         const slug = it.title.toLowerCase().trim().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
//         return { ...it, to: `${basePath}/${slug}` };
//       }),
//     [basePath]
//   );

//   return (
//     <section className={styles.page}>
//       <HeroWithSocials
//         imageSrc="/images/servicestopimage.png"
//         alt={title}
//         height={420}
//         title={title}
//         titleWidth={320}
//         showFrame
//         socials={[
//           { label: "LinkedIn", kind: "linkedin", href: SOCIALS.linkedin, text: "in" },
//           { label: "Facebook", kind: "facebook", href: SOCIALS.facebook, text: "F" },
//         ]}
//       />

//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line} />
//         </h2>
//         <p className={styles.description}>
//           At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly software solutions that help businesses
//           innovate, grow, and thrive in the digital age. From idea to execution, our products are designed to deliver real impact.
//         </p>
//       </div>

//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
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
// import styles from "./ApplicationDevelopmentSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = {
//   linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   facebook: "https://www.facebook.com/your-handle",
// };

// const ITEMS = [
//   { title: "Full Stack Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Digital Transformation", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sales Force Consulting", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Software Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Custom Application", image: "/images/services/fullstackdevelopment.png" },
//   { title: "BI & Data Analysis", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Big Data Services", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sap Consulting Services", image: "/images/services/fullstackdevelopment.png" },
// ];

// export default function ApplicationDevelopment({
//   title = "Application Development",
//   basePath = "/services/application-development",
// }) {
//   const computed = useMemo(
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
//     <section className={styles.page}>
//       <HeroWithSocials
//   imageSrc="/images/servicestopimage.png"
//   alt={title}
//   height={420}
//   showFrame

//   /* Figma exact placement */
//   title={title}
//   titleWidth={278}
//   titleHeight={161}
//   titleLeft={93}
//   titleTop={179}
//   titleBg="rgba(64, 112, 177, 0.60)"  // #4070B1 at 60%

//   /* Figma typography */
//   titleFontFamily={`"Roboto Serif", serif`}
//   titleFontWeight={500}
//   titleFontSize={24}
//   titleAlign="center"
//   titleChip={true}

//   socials={[
//     { label: "LinkedIn", kind: "linkedin", href: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in", text: "in" },
//     { label: "Facebook", kind: "facebook", href: "https://www.facebook.com/your-handle", text: "F" },
//   ]}
// />


//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line} />
//         </h2>
//         <p className={styles.description}>
//           At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly software solutions that help
//           businesses innovate, grow, and thrive in the digital age. From idea to execution, our products are designed
//           to deliver real impact.
//         </p>
//       </div>

//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
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
// import styles from "./ApplicationDevelopmentSection.module.css";

// import HeroWithSocials from "../../../components/common/HeroWithSocials";
// import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
// import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
// import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";

// const SOCIALS = [
//   {
//     label: "LinkedIn",
//     kind: "linkedin",
//     text: "in",
//     href: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
//   },
//   {
//     label: "Facebook",
//     kind: "facebook",
//     text: "F",
//     href: "https://www.facebook.com/your-handle",
//   },
// ];

// const ITEMS = [
//   { title: "Full Stack Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Digital Transformation", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sales Force Consulting", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Software Development", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Custom Application", image: "/images/services/fullstackdevelopment.png" },
//   { title: "BI & Data Analysis", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Big Data Services", image: "/images/services/fullstackdevelopment.png" },
//   { title: "Sap Consulting Services", image: "/images/services/fullstackdevelopment.png" },
// ];

// export default function ApplicationDevelopment({
//   title = "Application Development",
//   basePath = "/services/application-development",
// }) {
//   const computed = useMemo(
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
//     <section className={styles.page}>
//       {/* Hero (same look as Services page; socials are controlled via :global overrides in this CSS module) */}
//       <div className={styles.heroWrapper}>
//         <HeroWithSocials
//           imageSrc="/images/servicestopimage.png"
//           alt={title}
//           height={420}
//           showFrame
//           title={title}
//           /* Figma-ish placement; tweak if you need pixel-perfect positioning */
//           titleWidth={278}
//           titleHeight={161}
//           titleLeft={93}
//           titleTop={179}
//           titleBg="rgba(64, 112, 177, 0.60)"
//           titleFontFamily={`"Roboto Serif", serif`}
//           titleFontWeight={500}
//           titleFontSize={24}
//           titleAlign="center"
//           titleChip
//           socials={SOCIALS}
//         />
//       </div>

//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           {title} <span className={styles.line} />
//         </h2>
//         <p className={styles.description}>
//           At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly software solutions that help
//           businesses innovate, grow, and thrive in the digital age. From idea to execution, our products are designed to
//           deliver real impact.
//         </p>
//       </div>

//       <div className={styles.grid}>
//         {computed.map((s, idx) => (
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
import styles from "./ApplicationDevelopmentSection.module.css";

import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import KnowEverythingSection from "../../../sections/Services/KnowEverythingSection";
import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import HoverRevealCard from "../../../components/HoverRevealCard/HoverRevealCard";
/** Same overlay chips as your Services page */
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

/** Cards + images (as you requested) */
const ITEMS = [
  { title: "Full Stack Development", image: "/images/services/fullstackdevelopment.png" },
  { title: "Digital Transformation", image: "/images/services/digital-transformation.png" },
  { title: "Sales Force Consulting", image: "/images/services/salesforce.png" },
  { title: "Software Development", image: "/images/services/software-development.png" },
  { title: "Custom Application", image: "/images/services/custom-application.png" },
  { title: "BI & Data Analysis", image: "/images/services/bi-data-analysis.png" },
  { title: "Big Data Services", image: "/images/services/big-data.png" },
  { title: "Sap Consulting Services", image: "/images/services/Rectangle 34624653 (1).png" },
];

export default function ApplicationDevelopmentSection({
  title = "Application Development",
  basePath = "/services/application-development",
}) {
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
    <section className={styles.page}>
      {/* Hero with overlay socials (identical behavior to Services page) */}
      <div className={styles.hero}>
         <HeroTitleChip
  imageSrc="/images/services/applicationDevelopment.png"
  alt="image not found"
  title={"Application\nDevelopment"}
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
        <p className={styles.description}>
          At <strong>Panacea</strong>, we build powerful, scalable, and user-friendly software
          solutions that help businesses innovate, grow, and thrive in the digital age. From idea
          to execution, our products are designed to deliver real impact.
        </p>
      </div>

      {/* Clickable cards → navigate to /services/application-development/<slug> */}
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

      {/* Reuse other sections */}
     
 
      <JoinOurServiceSection />
      <KnowEverythingSection />
      <FooterSection />
    </section>
  );
}
