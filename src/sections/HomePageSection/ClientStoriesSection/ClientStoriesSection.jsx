import React from "react";
import ClientStoriesCard from "../../../components/ClientStoriesCard/ClientStoriesCard";
import styles from "./ClientStoriesSection.module.css";

const stories = [
  {
    name: "Kotla Darshan",
    image: "/images/Home/darshan.jpg",
    text: "Panacea helped us streamline our inventory processes, giving our team more time to focus on growth.",
  },
  {
    name: "Varun",
    image:"/images/Home/varun.jpg",
    text: "Working with Panacea transformed our daily operations. Their solution improved accuracy  significantly.",
  },
  {
    name: "Vinay Raj",
    image: "/images/Home/vinayraj.jpg",
    text: "Thanks to Panacea, our business now runs smoother than ever. The efficiency gains have saved us both time and money.",
  },
   {
    name: "Harika",
    image: "/images/Home/harika .jpg",
    text: "Their automation tools reduced manual work dramatically. Our workflow is now faster and error-free.",
  },
  {
    name: "Shiva Kumar",
    image: "/images/Home/shiva.jpg",
    text: "Panacea delivered exactly what we needed — a powerful, user-friendly system that boosted our productivity.",
  },
  {
    name: "Harsha Vardhan",
    image: "/images/Home/harsha.jpg",
    text: "The team understood our challenges clearly and built a seamless solution that improved overall efficiency.",
  },
  {
    name: "Naveen Teja",
    image: "/images/Home/naveen.jpg",
    text: "We experienced a noticeable improvement in our business operations after adopting Panacea’s technology.",
  },
  {
    name: "Akshay Kumar",
    image: "/images/Home/akshay.jpg",
    text: "Reliable, fast, and professional — Panacea’s system helped us cut down operational delays significantly.",
  },
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
