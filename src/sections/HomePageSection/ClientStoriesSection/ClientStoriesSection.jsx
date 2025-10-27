import React from "react";
import ClientStoriesCard from "../../../components/ClientStoriesCard/ClientStoriesCard";
import styles from "./ClientStoriesSection.module.css";

const stories = [
  {
    name: "Varun Kota",
    image: "/images/team1.jpg",
    text: "Panacea helped us streamline our inventory processes, giving our team more time to focus on growth.",
  },
  {
    name: "Tejaswi Velivala",
    image: "/images/tejaswi.png",
    text: "Working with Panacea transformed our daily operations. Their solution improved accuracy  significantly.",
  },
  {
    name: "Darshan Kotla",
    image: "/images/team2.jpg",
    text: "Thanks to Panacea, our business now runs smoother than ever. The efficiency gains have saved us both time and money.",
  },
  // Add more stories if needed
];


const ClientStoriesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>Client Stories</div>
      <div className={styles.scrollContainer}>
        {stories.map((story, idx) => (
          <ClientStoriesCard
            key={idx}
            name={story.name}
            image={story.image}
            text={story.text}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientStoriesSection;
