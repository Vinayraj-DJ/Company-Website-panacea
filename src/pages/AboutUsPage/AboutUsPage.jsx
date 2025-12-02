import React from "react";
import styles from "./AboutUsPage.module.css";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

export default function AboutUs() {
  return (
    <div className={styles.page}>
      
      {/* HERO SECTION */}
      <header className={styles.hero}>
        <img
          className={styles.heroImg}
          src="/images/about-hero.jpg"
          alt="About Hero"
        />
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About Us</h1>

          <nav className={styles.breadcrumbs}>
            <a href="/">Home</a>
            <span className={styles.sep}>|</span>
            <span>About Us</span>
          </nav>
        </div>
      </header>

      {/* MAIN BODY */}
      <section className={styles.aboutSection}>
        <div className={styles.left}>
          <h2 className={styles.heading}>About Us</h2>
          <h3 className={styles.subHeading}>Why Yash Denti Care?</h3>

          <p className={styles.description}>
            At Yash Denti Care, we prioritize delivering the Best Dental Service
            in Hyderabad. Our commitment to excellence is evident in the exceptional
            dental care we provide...
          </p>

          {/* Reusable Info Blocks */}
          <InfoBlock
            title="Renowned Dental Specialists:"
            description="Our dental team in Hyderabad comprises seasoned experts in 
            various dental disciplines. From general dentistry to specialized
            procedures, our specialists possess the expertise and experience 
            to deliver the highest quality of care."
          />

          <InfoBlock
            title="Cutting-Edge Facilities:"
            description="We continuously invest in state-of-the-art dental technology 
            and equipment to ensure our patients receive the most advanced treatment
            in a modern, stress-free environment."
          />

          <InfoBlock
            title="Personalized Patient Care:"
            description="Every patient is unique — and so is their treatment. We offer
            fully customized dental care plans for optimal long-term oral health."
          />
          
          <InfoBlock
            title="Cutting-Edge Facilities:"
            description="We continuously invest in state-of-the-art dental technology 
            and equipment to ensure our patients receive the most advanced treatment
            in a modern, stress-free environment."
          />

          <InfoBlock
            title="Personalized Patient Care:"
            description="Every patient is unique — and so is their treatment. We offer
            fully customized dental care plans for optimal long-term oral health."
          />
        </div>

        {/* Right Side Image */}
        <div className={styles.right}>
          <div className={styles.imgBox}>
            <img src="/images/clinic.jpg" alt="Clinic" />
          </div>

          {/* <div className={styles.experienceCard}>
            <h2>13+</h2>
            <span>Years of Experience</span>
          </div> */}
        </div>
      </section>
    </div>
  );
}











