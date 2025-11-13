
// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";

import HeroTitleChip from "../../../components/common/HeroTitleChip";


import styles from "./ECommerceApp.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import TravelInfoSection from "../../../sections/TravelInfoSection/TravelInfoSection";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const ECommerceApp= () => {
  // feature data for the EducationalFeaturesSection


  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/Ecomm.png"
          alt="E-Commerce App"
          title={"E-Commerce App"}
          
        />

        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>

      <SectionIntro
        title="E-commerce App"
        paragraphs={[
          "Our E-Commerce App is built to deliver a seamless online shopping experience for users and a powerful management system for store owners. With a clean interface, smart filters, and secure checkout, it allows users to browse, shop, and pay effortlessly — anytime, anywhere."
        ]}
      />
  <JoinOurServiceSection
  imageSrc="/images/products/Ecomm1.png"
  imageAlt="Our team"
  title="Why Choose Our E-commerce App"
  paragraphs={[
    "Our E-Commerce App is designed to provide a powerful, secure, and user-friendly shopping experience that meets the needs of modern consumers and businesses alike. With advanced features like real-time order tracking, multiple payment integrations, and smart product recommendations, it helps brands enhance customer satisfaction and boost sales effortlessly.",
    "Built with scalability and performance in mind, our solution ensures fast loading speeds, smooth navigation, and complete data security for users"
  ]}
  showButton={false}
/>

<TravelInfoSection
  leftImage="/images/products/color-bags.png"
  rightImage="/images/products/mockup-bag.png"
  title="With a sleek interface, fast performance, and integration"
  highlight1="sleek interface"
  textColor="#222222"
  colorPrimary="#0077cc"
  colorSecondary="#ff8c00"
  reverse={false}
/>


<JoinOurServiceSection
  imageSrc="/images/products/Ecomm2.png"
  imageAlt="Our team"
  title="How Our E-Commerce App Adds Value"
  paragraphs={[
    "Our E-Commerce App goes beyond just online selling — it helps businesses build stronger customer relationships and brand identity. With detailed analytics, user insights, and automated order management, it empowers businesses to make data-driven decisions that improve performance and profitability.",
    "We focus on delivering an app that’s scalable, customizable, and future-ready, ensuring it grows with your business needs. From small vendors to large enterprises, our solution simplifies operations, enhances engagement, and drives consistent growth in today’s digital marketplace."
  ]}
  showButton={false}
/>

      
      <HightLightSection
        title="PRODUCTS & PLATFORMS"
        lead="Use our products that are&nbsp; well made<br/>and built"
        cards={[
          { value: "100 +", text: "Professionals in Global Network" },
          { value: "10 +", text: "Users that are using our products" },
          { value: "10 +", text: "Professionals in Global Network" },
          { value: "10 +", text: "Professionals in Global Network" },
        ]}
        columns={4}
      />

      <FooterSection
        brand="Panacea IT Services"
        year={new Date().getFullYear()}
        services={[
          "Software Development",
          "Mobile Apps",
          "UI/UX Design",
          "Digital Marketing",
          "SEO Optimization",
          "Consulting",
        ]}
        company={["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />
    </section>
  );
};

export default ECommerceApp;
