import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./LaravelDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function LaravelDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/laravel-dev-hero.png" alt="Laravel Development" title={"Laravel\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Laravel Development Services"
        paragraphs={[
          "We deliver secure, elegant, and high-performance Laravel applications using clean architecture and testing.",
          "Built-in features like queues, caching, auth, and Blade enable rapid delivery without compromising quality."
        ]}
      />

      <SplitFeature
        image="/images/services/laravel-art-1.png"
        title="Why Laravel & How We Help"
        body={`Laravel’s expressive syntax and batteries-included approach speed up development while keeping code maintainable.`}
        body2={`We design robust MVC architecture, optimize queries, and ship CI/CD pipelines for cloud-ready Laravel apps.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/laravel-art-2.png"
        title="About Laravel Development"
        body={`From admin portals to multi-tenant SaaS, Laravel’s ecosystem (Horizon, Telescope, Nova) boosts visibility and ops.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Laravel"
        items={[
          { title: "High Performance & Scalability", desc: "Caching, queues, and optimized Eloquent." },
          { title: "Elegant Syntax", desc: "Readable code and rapid onboarding." },
          { title: "Strong Security", desc: "CSRF, XSS, auth scaffolding, and policies." },
          { title: "Organized MVC", desc: "Maintainable structure for long-term growth." },
        ]}
        illustrationSrc="/images/services/laravel-art-3.png"
        illustrationAlt="Laravel benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="We’ve shipped Laravel apps from MVP to enterprise." buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
