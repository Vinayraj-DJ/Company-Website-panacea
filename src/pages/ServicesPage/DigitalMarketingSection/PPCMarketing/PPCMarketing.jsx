import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./PPCMarketing.module.css";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function PPCMarketing() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/PPCM.png"
          alt="Pay Per Click Marketing"
          title={"Pay Per Click\nMarketing"}
        />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Pay Per Click Marketing Services"
        paragraphs={[
          "PPC delivers instant visibility and targeted traffic by showing ads when users actively search or browse relevant content.",
          "We build and manage high-performance campaigns across Google Ads, Bing Ads, Facebook, LinkedIn, and more — with rigorous optimization to maximize ROI.",
        ]}
      />

      <SplitFeature
        image="/images/services/image 70.png"
        title="Why Choose PPC — And How PanaceaIT Helps"
        body={`PPC provides immediate results with precise audience targeting. Place your brand at the top of search results and reach intent-driven prospects across social platforms.`}
        body2={`Our certified team handles keyword research, ad creation, bidding, and performance optimization to convert clicks into customers efficiently.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/image 71.png"
        title="About Pay Per Click Marketing"
        body={`With PPC, you pay only when someone clicks your ad. Campaigns are tuned for qualified traffic, brand visibility, and measurable growth using data-driven placements.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of PPC"
        items={[
          { title: "Instant Visibility & Results", desc: "Appear immediately on search engines and social platforms for rapid reach." },
          { title: "Highly Targeted Advertising", desc: "Target by keyword, location, audience, interests, and devices." },
          { title: "Cost-Effective Control", desc: "Pay only for clicks; allocate budget to best-performing segments." },
          { title: "Measurable Performance", desc: "Track every impression, click, and conversion for crystal-clear ROI." },
        ]}
        illustrationSrc="/images/services/image 72.png"
        illustrationAlt="PPC benefits illustration"
        imageLeft={true}
      />

      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="Curious how our PPC optimizations improved ROI? Let’s talk."
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
      />

      <FooterSection
        brand="Panacea IT Services"
        year={new Date().getFullYear()}
        services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]}
        company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]}
        legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}
      />
    </section>
  );
}
