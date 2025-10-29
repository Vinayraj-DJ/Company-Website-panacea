import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./CakePhpDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function CakePhpDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/cakephp-dev-hero.png" alt="CakePHP Development" title={"CakePHP\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="CakePHP Development Services"
        paragraphs={[
          "We use CakePHP’s MVC, ORM, and scaffolding to ship secure, reliable applications quickly.",
          "Our CakePHP experts build scalable solutions with authentication, validation, and integrations ready to go."
        ]}
      />

      <SplitFeature
        image="/images/services/cake-art-1.png"
        title="Why CakePHP & How We Help"
        body={`Its structured MVC, code generation, and reusable components accelerate time-to-market.`}
        body2={`We design maintainable CakePHP apps with strong testing, robust security, and smooth CI/CD.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/cake-art-2.png"
        title="About CakePHP Development"
        body={`Built-in validation, ORM, and routing reduce boilerplate and keep your codebase clean and consistent.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of CakePHP"
        items={[
          { title: "Rapid Development", desc: "Bake tools & scaffolding speed up delivery." },
          { title: "Robust Security", desc: "Validation, tamper protection, and SQL injection guards." },
          { title: "Powerful ORM", desc: "Clean database layer and relations management." },
          { title: "Easy Integration", desc: "Works well with third-party tools and APIs." },
        ]}
        illustrationSrc="/images/services/cake-art-3.png"
        illustrationAlt="CakePHP benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="Explore our CakePHP portfolio and success stories." buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
