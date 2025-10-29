import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./AngularDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function AngularDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/angularjs-dev-hero.png" alt="Angular.js Development" title={"Angular.js\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Angular.js Development Services"
        paragraphs={[
          "We use Angular’s robust MVC, data binding, and CLI tooling to build feature-rich SPAs and enterprise apps.",
          "Our Angular experts deliver secure, scalable, and maintainable front-ends with great performance."
        ]}
      />

      <SplitFeature
        image="/images/services/angular-art-1.png"
        title="Why Angular.js & How We Help"
        body={`Angular’s modular architecture and powerful tooling speed up delivery while keeping codebases clean.`}
        body2={`We implement smart state, lazy loading, and strong typing for stability and long-term maintainability.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/angular-art-2.png"
        title="About Angular.js Development"
        body={`Two-way data binding and DI make Angular a great fit for complex forms, dashboards, and enterprise UX.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Angular.js"
        items={[
          { title: "High Performance", desc: "Ahead-of-time compilation & optimized builds." },
          { title: "Two-Way Binding", desc: "Faster data sync between UI and models." },
          { title: "Reusable Modules", desc: "Component-driven architecture and clear DI." },
          { title: "Excellent UX", desc: "Smooth navigation & rich interactive interfaces." },
        ]}
        illustrationSrc="/images/services/angular-art-3.png"
        illustrationAlt="Angular benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="Let’s talk about your Angular roadmap." buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
