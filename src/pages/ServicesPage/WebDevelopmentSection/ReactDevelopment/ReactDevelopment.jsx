import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./ReactDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function ReactDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/reactjs-dev-hero.png" alt="React.js Development" title={"React.js\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="React.js Development Services"
        paragraphs={[
          "We craft interactive, component-based web apps with React.js for blazing performance and excellent UX.",
          "Our team uses hooks, state management, SSR/SSG, and design systems to deliver robust front-ends."
        ]}
      />

      <SplitFeature
        image="/images/services/react-art-1.png"
        title="Why Choose React.js & How PanaceaIT Helps"
        body={`Virtual DOM and component reusability enable rapid delivery and smooth UI updates.`}
        body2={`We deliver SPAs and enterprise portals with clean architecture, testing, and accessibility baked in.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/react-art-2.png"
        title="About React.js Development"
        body={`React’s strong ecosystem—routers, query libs, and build tools—keeps apps fast, stable, and maintainable.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of React.js Development"
        items={[
          { title: "High Performance", desc: "Virtual DOM & fine-grained rendering." },
          { title: "Reusable Components", desc: "Design systems & shared UI accelerate delivery." },
          { title: "Scalable Architecture", desc: "SSR/SSG, code-split, and great DX." },
          { title: "Strong Community", desc: "Backed by Facebook and a massive ecosystem." },
        ]}
        illustrationSrc="/images/services/react-art-3.png"
        illustrationAlt="React benefits"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="See how we’ve scaled React apps to millions of users." buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
