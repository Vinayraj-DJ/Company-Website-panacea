
// ChildCareManagement.jsx
import React from "react";

import FooterSection from "../../../sections/HomePageSection/FooterSection/FooterSection";
import HeroTitleChip from "../../../components/common/HeroTitleChip";
import SectionIntro from "../../../components/common/SectionIntro";

import styles from "./TicketBookingAPP.module.css";
import HightLightSection from "../../../sections/AboutUs/HightLightSection/HightLightSection";

// import SmartScalableSection from "../../../sections/Products/SmartScalableSection";
import JoinOurServiceSection from "../../../sections/Services/JoinOurServiceSection";
import TravelInfoSection from "../../../sections/TravelInfoSection/TravelInfoSection";
import FitnessJourneySection from "../../../sections/FitnessJourneySection/FitnessJourneySection";
// import EventHeroSection from "../../../sections/HeroVisualSection/HeroVisualSection";
import HeroVisualSection from "../../../sections/HeroVisualSection/HeroVisualSection";
import PeopleGridSection from "../../../sections/PeopleGridSection/PeopleGridSection";
const SOCIALS = {
  linkedin: "https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in",
  facebook: "https://www.facebook.com/your-handle",
};

const TicketBookingApp = () => {

const peopleItems = [
  // top row: positions 1..7
  { id: "t1", src: null, pos: 1 },                 // top row, 1st = empty
  { id: "t2", src: "/images/products/people/1.png", pos: 2 }, // top row, 2nd = image
  { id: "t3", src: "/imagesproducts//people/2.png", pos: 3 },
  { id: "t4", src: "/images/products/people/3.png", pos: 4 },
  { id: "t5", src: "/images/products/people/4.png", pos: 5 },
  { id: "t6", src: null, pos: 6 },                  // top row, 6th = empty (as requested)
  { id: "t7", src: "/images/products/people/5.png", pos: 7 }, // top row, 7th = image (you asked 'second one is up 7 position')

  // bottom row: positions 8..14
  { id: "b1", src: "/images/products/people/6.png", pos: 8 }, // bottom row, 8th = image
  { id: "b2", src: "/images/products/people/7.png", pos: 9 },
  { id: "b3", src: "/images/products/people/8.png", pos: 10 },
  { id: "b4", src: "/images/products/people/9.png", pos: 11 },
  { id: "b5", pos: 12 },
  { id: "b6", src: "/images/products/people/11.png", pos: 13 },
  { id: "b7", src: "/images/products/people/12.png", pos: 14 },
];


  return (
    
    <section className={styles.page}>
      <div className={styles.hero}>
        <HeroTitleChip
          imageSrc="/images/products/TBA.png"
          alt="TicketBookingApp "
          title={"TicketBookingApp"}
          
        />

        <div className={styles.heroSocialIcons}>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.linkedin}`}
          >
            <span className={styles.text}>in</span>
          </a>
          <a
            href={SOCIALS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.social} ${styles.facebook}`}
          >
            <span className={styles.text}>F</span>
          </a>
        </div>
      </div>
<SectionIntro
        title="Ticket Booking App"
        paragraphs={[
          "Our Ticket Booking App offers users a quick, easy, and secure way to book tickets for movies, events, concerts, travel, and more. With an intuitive interface, real-time seat availability, and multiple payment options, it ensures a smooth and convenient booking experience from start to finish.",
        ]}
      />

      <PeopleGridSection
  heroSrc="/images/products/hero-ticket.png"
  titleLeft="Book. Click. Go."
  titleHighlight="ticket"
  titleRight="to anywhere!"
  items={peopleItems}
/>




      <HeroVisualSection />

           
      <div>
      <SectionIntro
        title="Key Freatures"/>
      <FitnessJourneySection
        headingLines={[""]}
        highlightWord=""
        topRightText=""
       features={[
  "Easy Ticket Search & Booking",
  "Smart Filters & Categories",
  "Real-Time Availability",
  "Instant e-Ticket Generation",
  "QR Code / Barcode Tickets",
]}

        mainImageSrc="/images/products/ticket1.png"
        sideImageSrc="/images/products/ticket2.png"
      />
      </div>

      





      <JoinOurServiceSection
  imageSrc="/images/products/TBA1.png"
  imageAlt="Our team"
  title="Why Choose our Ticket Booking app ?"
  paragraphs={[
    "Our ticket booking app is designed to make your booking experience fast, simple, and stress-free. With real-time seat availability, secure payments, and instant e-tickets, you can book your favorite movies, events, or travel tickets in just a few taps. The app ensures smooth navigation, smart search options, and personalized suggestions — making every booking effortless and enjoyable.",
    "Skip the queues and enjoy seamless bookings from the comfort of your phone! Our app combines speed, reliability, and convenience with features like interactive seat selection, instant confirmation, exclusive offers, and multiple payment options."
  ]}
  showButton={false}
/>

<TravelInfoSection
  leftImage="/images/products/family.png"
  rightImage="/images/products/tickets.png"
  title="Live seat and ticket status updates."
  highlight1="Live"
  highlight2="status"
  textColor="#222222"
  colorPrimary="#0077cc"   /* blue for first highlight */
  colorSecondary="#ff8c00" /* orange for second highlight */
  reverse={false}
/>


<JoinOurServiceSection
  imageSrc="/images/products/TBA2.png"
  imageAlt="Our team"
  title="Seamless Booking Experience"
  paragraphs={[
    "Our app offers a hassle-free ticketing process with real-time updates, smart filters, and instant confirmations. From selecting seats to making secure payments, every step is designed for speed and simplicity — ensuring you never miss your favorite event or show",
    "Enjoy complete peace of mind with our end-to-end encrypted payment system and verified event listings. We prioritize your safety and privacy while delivering a smooth, reliable experience you can trust every time you book."
  ]}
  showButton={false}
/>

      
      <HightLightSection
        title="PRODUCTS & PLATFORMS"
        lead="Use our products that are&nbsp; well made<br/>and built"
        cards={[
          { value: "100 +", text: "Professionals in Global Network" },
          { value: "10 +", text: "Users that are using our products" },
          { value: "10 +", text: "Professionals in Global Network" },
          { value: "10 +", text: "Professionals in Global Network" },
        ]}
        columns={4}
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

export default TicketBookingApp;
