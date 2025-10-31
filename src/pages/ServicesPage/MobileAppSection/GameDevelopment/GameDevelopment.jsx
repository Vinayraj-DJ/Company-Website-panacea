// File: GameDevelopment.jsx
import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import FeatureList from "../../../../components/FeatureList/FeatureList";
import styles from "./GameDevelopment.module.css";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const GameDevelopment = () => {
  return (
    <section className={styles.page}>
      {/* HERO */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/game-hero.png"
          alt="Game Development"
          title={`Game\nDevelopment`}
        />

        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>

      {/* INTRO */}
      <SectionIntro
        title="Game Development Services"
        paragraphs={[
          "Game development combines creativity, storytelling, and engineering to build immersive experiences for players across platforms. From concept design and art to gameplay programming and deployment, modern game development uses engines like Unity and Unreal, languages such as C# and C++, and tools for 2D/3D art and animation.",
          "At Panacea IT Services we design and deliver captivating games for mobile, PC, console, and AR/VR — focusing on performance, player experience, and monetization strategies that align with your business goals.",
        ]}
      />

      {/* WHY + IMAGE */}
      <SplitFeature
        image="/images/services/game-why.png"
        title="Why Game Development Matters And how Panacea can help you"
        body={`In today’s digital landscape, games are powerful engagement tools — for entertainment, education, training, and brand experiences. Well-designed games attract and retain users, build communities, and open revenue channels through in-app purchases, ads, or subscriptions.`}
        body2={`Panacea combines design, engineering, and QA to produce polished game experiences. We handle core gameplay, networking, cross-platform builds, and performance optimization to deliver products players love.`}
        imageLeft={true}
      />

      {/* ABOUT TECHNOLOGIES */}
      <SplitFeature
        image="/images/services/game-about.png"
        title="About Game Development Technologies"
        body={`Core tools such as Unity, Unreal, Godot, and supportive toolchains (Blender, Maya, Photoshop) enable rich visuals and smooth gameplay. Languages like C#, C++, and scripting tools power game logic, while middleware (physics, audio, analytics) accelerates production.`}
        body2={`We architect games for scale and portability — optimizing assets, implementing efficient rendering, and integrating analytics and monetization for sustainable growth.`}
        imageLeft={false}
      />

      {/* BENEFITS */}
      <FeatureList
        title="Key Benefits Of Game Development"
        items={[
          {
            title: "High User Engagement",
            desc:
              "Games provide immersive, interactive experiences that keep users engaged for longer sessions.",
          },
          {
            title: "Creative Brand Promotion",
            desc:
              "Gamified experiences and branded content boost awareness and drive deeper customer interaction.",
          },
          {
            title: "Cross-Platform Reach",
            desc:
              "Modern engines allow deployment to mobile, web, PC, and consoles — extending audience reach.",
          },
          {
            title: "Revenue Generation Opportunities",
            desc:
              "Monetization via IAP, ads, subscriptions, and DLC provides multiple revenue streams for businesses.",
          },
        ]}
        illustrationSrc="/images/services/game-benefits.png"
        illustrationAlt="Game development illustration"
        imageLeft={true}
      />

      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and the technologies we used to make them successful in a very short span of time, please contact us."
        buttonLabel="Call us"
        href="/contact"
        align="center"
        maxWidth={794}
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

export default GameDevelopment;