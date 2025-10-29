import React from "react";
import CtaPanel from "../../../../components/CtaPanel/CtaPanel";
import FooterSection from "../../../../sections/HomePageSection/FooterSection/FooterSection";
import SectionIntro from "../../../../components/common/SectionIntro";
import SplitFeature from "../../../../components/common/SplitFeature";
import HeroTitleChip from "../../../../components/common/HeroTitleChip";
import styles from "./NodeDevelopment.module.css";
import FeatureList from "../../../../components/FeatureList/FeatureList";

const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

export default function NodeDevelopment() {
  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip imageSrc="/images/services/nodejs-dev-hero.png" alt="Node.js Development" title={"Node.js\nDevelopment"} />
        <div className={styles.heroSocialIcons}>
          <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${styles.social} ${styles.linkedin}`}><span className={styles.text}>in</span></a>
          <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={`${styles.social} ${styles.facebook}`}><span className={styles.text}>F</span></a>
        </div>
      </div>

      <SectionIntro
        title="Node.js Development Services"
        paragraphs={[
          "We build fast, scalable, and real-time web apps using Node.js and modern frameworks like Express, Nest, and Meteor.",
          "Our expertise covers APIs, streaming, chat, dashboards, and high-traffic applications with clean, testable architecture."
        ]}
      />

      <SplitFeature
        image="/images/services/node-art-1.png"
        title="Why Embrace Node.js & How We Help"
        body={`Event-driven I/O and non-blocking runtime make Node.js ideal for real-time systems and high concurrency.`}
        body2={`We architect cloud-ready Node services, microservices, and APIs with robust CI/CD, logging, and monitoring.`}
        imageLeft={true}
      />

      <SplitFeature
        image="/images/services/node-art-2.png"
        title="About Node.js Development"
        body={`Use one language across front-end and back-end, accelerate delivery, and reduce context switching for teams.`}
        imageLeft={false}
      />

      <FeatureList
        title="Key Benefits Of Node.js Development"
        items={[
          { title: "High Performance", desc: "V8 engine & event loop for fast, scalable apps." },
          { title: "Real-Time Capabilities", desc: "Perfect for chats, gaming, and live dashboards." },
          { title: "Scalable Architecture", desc: "Microservices & queues for horizontal growth." },
          { title: "Full-Stack JS", desc: "Shared language reduces hand-offs & accelerates dev." },
        ]}
        illustrationSrc="/images/services/node-art-3.png"
        illustrationAlt="Node.js illustration"
        imageLeft={true}
      />

      <CtaPanel title="KNOW MORE PROJECTS" description="Ask us about low-latency Node services we’ve delivered." buttonLabel="Call us" href="/contact" align="center" maxWidth={794} />
      <FooterSection brand="Panacea IT Services" year={new Date().getFullYear()} services={["Software Development","Mobile Apps","UI/UX Design","Digital Marketing","SEO Optimization","Consulting"]} company={["About Us","Our Team","Careers","Portfolio","Blog","Contact"]} legal={["Privacy Policy","Terms of Service","Cookie Policy","GDPR"]}/>
    </section>
  );
}
