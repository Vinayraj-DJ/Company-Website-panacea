import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./PhpDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function PhpDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/php1.png"
          alt="PHP Development"
          title={"PHP\nDevelopment"}
        />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="PHP Development Services"
        paragraphs={[
          "PHP Development Services empower businesses to build dynamic, secure, and high-performance web apps tailored to their needs.",
          "We use frameworks like Laravel, CodeIgniter, and CakePHP to deliver scalable, future-ready solutions across CMS, ecommerce, and custom apps."
        ]}
      />

      <SplitFeature
        image="/images/services/php2.png"
        title="Why You Should Embrace PHP And How PanaceaIT Helps"
        body={`PHP remains a reliable, versatile choice for building modern web solutions. Its open-source ecosystem, mature community, and vast library support enable high performance and rapid delivery.`}
        body2={`Our team leverages modern PHP frameworks, best practices, and clean architecture to craft secure, fast, and maintainable applications aligned with your business goals.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/php3.png"
        title="About PHP Development"
        body={`From startups to enterprises, PHP powers content-rich sites, portals, and platforms. Its compatibility with databases and cloud services makes it ideal for long-term growth.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of PHP Development"
        items={[
          { title: "Open-Source & Cost-Effective", desc: "Lower TCO with powerful capabilities and large ecosystem." },
          { title: "High Performance", desc: "Optimized frameworks deliver fast, scalable experiences." },
          { title: "Great Integration", desc: "Works seamlessly with popular DBs, caches, and services." },
          { title: "Scalable & Flexible", desc: "Easily evolve features and scale users without rework." },
        ]}
        illustrationSrc="/images/services/php4.png"
        illustrationAlt="PHP benefits"
        imageLeft={true}
      />

      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="See how we’ve shipped PHP solutions quickly and reliably for different industries."
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
      />

      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
