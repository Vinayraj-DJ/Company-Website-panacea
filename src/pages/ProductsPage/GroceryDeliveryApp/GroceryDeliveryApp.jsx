
// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../components/common/SectionIntro";

import HeroTitleChip from "../../../components/common/HeroTitleChip";


import styles from "./GroceryDeliveryApp.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";
// import CloudImageComponent from "../../../sections/CloudImageComponent/CloudImageComponent";
import GroceryImageComponent from "../../../sections/CloudImageComponent/GroceryImageComponent";
// import InfoPairsSection from "../../../sections/InfoPairsSection/InfoPairsSection"; 

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const GroceryApp= () => {
  // feature data for the EducationalFeaturesSection
      const items = [
  {
    id: 1,
    // title: "Exclusive discounts and personalized offers",
    bullets: [
      "Exclusive discounts and personalized offers",
      "Exclusive discounts and personalized offers.",
      "Fresh and high-quality products guaranteed for sure.",
      "Time-saving doorstep delivery."
    ],
  },
  {
    id: 2,
    image: "/images/products/grocery-basket.png",
  },
  {
    id: 3,
    image: "/images/products/worker-tablet.png",
  },
  {
    id: 4,
    bullets: [
      "24/7 customer support.",
      "Hassle-free online grocery shopping.",
      "Order History & Reorder Option.",
      "Eco-Friendly Packaging."
    ],
  },
];




  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/GRoapp.png"
          alt="Grocery DeliveryApp"
          title={"Grocery Delivery\nApp"}
          
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
        title="Grocery Delivery App"
        paragraphs={[
          "Our Grocery Delivery App simplifies daily shopping by bringing fresh groceries, essentials, and household items directly to users’ doorsteps. Built with an intuitive design and powerful backend, the platform connects local stores, delivery agents, and customers seamlessly for a smooth shopping experience.."
        ]}
      />

      <GroceryImageComponent/>

      {/* <InfoPairsSection items={items} highlightColor="blue" />; */}


      
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

export default GroceryApp;
