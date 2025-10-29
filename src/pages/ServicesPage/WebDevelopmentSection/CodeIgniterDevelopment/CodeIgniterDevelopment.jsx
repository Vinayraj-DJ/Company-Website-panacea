import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./CodeIgniterDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function CodeIgniterDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/codeigniter-dev-hero.png" alt="CodeIgniter Development" title={"CodeIgniter\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="CodeIgniter Development Services"
        paragraphs={[
          "Build lightweight, high-performance apps quickly with CodeIgniter’s minimal footprint and powerful libraries.",
          "We deliver custom CI apps with clean controllers, models, and views, optimized for speed and reliability."
        ]}
      />

      <SplitFeature
        image="/images/services/ci-art-1.png"
        title="Why CodeIgniter & How We Help"
        body={`Great for rapid, secure development with minimal configuration and small hosting footprints.`}
        body2={`We craft scalable CI applications, enforce best practices, and integrate APIs, caching, and queues.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/ci-art-2.png"
        title="About CodeIgniter Development"
        body={`Its MVC design, helpers, and libraries allow teams to build features fast while keeping code organized.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of CodeIgniter"
        items={[
          { title: "Speed & Efficiency", desc: "Small core, fast execution, and low resource use." },
          { title: "Easy To Customize & Scale", desc: "Modular structure simplifies feature growth." },
          { title: "Built-In Security Tools", desc: "XSS filtering, CSRF protection, and encryption." },
          { title: "Smooth Integrations", desc: "Simple API/DB integrations and third-party services." },
        ]}
        illustrationSrc="/images/services/ci-art-3.png"
        illustrationAlt="CodeIgniter benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="Talk to us about fast CI builds with great ROI." buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
