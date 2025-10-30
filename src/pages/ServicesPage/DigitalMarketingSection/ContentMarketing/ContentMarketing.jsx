import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./ContentMarketing.module.css";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function ContentMarketing() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/CM.png"
          alt="Content Marketing"
          title={"Content\nMarketing"}
        />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Content Marketing Services"
        paragraphs={[
          "We create, publish, and distribute valuable content that attracts, engages, and converts your target audience.",
          "From blogs and web copy to videos, infographics, and case studies, our strategy grows organic visibility, strengthens brand authority, and drives sustained engagement.",
        ]}
      />

      <SplitFeature
        image="/images/services/image 733.png"
        title="Why Choose Content Marketing — And How PanaceaIT Helps"
        body={`High-quality, relevant content builds trust, educates your audience, and positions your brand as an industry leader across the buying journey.`}
        body2={`We combine storytelling, SEO optimization, and data-driven insights to deliver the right message to the right audience at the right time — with measurable impact.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/image 74.png"
        title="About Content Marketing"
        body={`A strategic approach to creating and sharing consistent, valuable information that attracts a clearly defined audience and drives profitable customer action.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Content Marketing"
        items={[
          { title: "Builds Brand Authority", desc: "Consistent, helpful content positions your business as a trusted source." },
          { title: "Boosts SEO & Organic Traffic", desc: "Optimized content enhances rankings and discoverability." },
          { title: "Drives Engagement", desc: "Blogs, videos, and social posts nurture interest and relationships." },
          { title: "Generates Quality Leads", desc: "Valuable information attracts prospects genuinely interested in your solutions." },
        ]}
        illustrationSrc="/images/services/image 75.png"
        illustrationAlt="Content benefits illustration"
        imageLeft={true}
      />

      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="See how our content strategies lifted organic growth and conversions."
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
