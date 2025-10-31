import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./AndroidApp.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin:
    "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const AndroidApp = () => {
  return (
    <section className={styles.page}>
      {/* Hero (only visual difference) */}
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/services/android-hero.png" // replace with your hero image path
          alt="Android App Development"
          title={"Android App\nDevelopment"}
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

      {/* Section intro (content changed) */}
      <SectionIntro
        title="Android App Development Services"
        paragraphs={[
          "Android App Development Services empower businesses to reach a vast audience by creating innovative, scalable, and user-friendly mobile applications for Android devices. With millions of users worldwide, Android offers unmatched market reach and flexibility for businesses of all sizes.",
          "From concept to deployment, Android app development uses powerful tools and technologies such as Kotlin, Java, Android Studio, Firebase, and Jetpack libraries to ensure smooth UX, performance, and reliability across many device types and screen sizes.",
        ]}
      />

      {/* Split feature blocks (content changed, layout same) */}
      <SplitFeature
        image="/images/services/android-feature-1.png"
        title="Why Android App Development is Important and How Panacea Can Help You"
        body={`In today’s mobile-driven world, Android app development is essential for businesses aiming to expand their digital presence and connect with a global audience. A well-designed Android app enhances customer engagement, boosts brand loyalty, and provides seamless access to products and services anytime, anywhere.`}
        body2={`At Panacea IT Services, we combine design thinking with deep technical expertise to deliver powerful, secure Android applications. Our team leverages Kotlin/Java, Android Studio, and modern tooling to build apps that scale and perform.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/android-feature-2.png"
        title="About Android App Development Technologies"
        body={`Android technologies form the backbone of high-performing mobile apps. Core languages like Kotlin and Java, plus frameworks and tools such as Android Jetpack, Firebase, and Material Design enable rich UI, robust backend integration, and excellent device compatibility.`}
        imageLeft={false}
      />

      {/* Feature list (customized for android) */}
      <FeatureList
        title="Key Benefits Of Android App Development"
        items={[
          {
            title: "Wider Market Reach",
            desc:
              "Android powers the majority of smartphones worldwide, allowing businesses to connect with a massive and diverse audience.",
          },
          {
            title: "Open-Source Flexibility",
            desc:
              "Android’s open ecosystem gives developers freedom to customize apps, integrate unique features, and optimize costs.",
          },
          {
            title: "Seamless Integration & Compatibility",
            desc:
              "Android technologies ensure smooth integration across platforms, tools and device sizes for consistent performance.",
          },
          {
            title: "High Scalability & Performance",
            desc:
              "Frameworks such as Android Jetpack and Firebase let apps scale easily while maintaining speed and reliability.",
          },
        ]}
        illustrationSrc="/images/services/android-illustration.png"
        illustrationAlt="Android development illustration"
        imageLeft={true}
      />

      {/* CTA + footer kept same */}
      <CtaPanel
        title="KNOW MORE PROJECTS"
        description="To know more projects and about all the details of the projects, the Technologies that we used to make the project successful in very short span of time please do contact us"
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

export default AndroidApp;