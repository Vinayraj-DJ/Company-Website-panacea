import React from "react";
import styles from "./ProductsSection.module.css";

const PRODUCTS = [
  { image: "/images/products/childcaree.jpg", title: "Child Care Management" },
  { image: "/images/products/influencerimage.jpg", title: "Influencer App" },
  { image: "/images/products/mutualfund.jpg", title: "Mutual Funds" },
  { image: "/images/products/adminpanal.jpg", title: "Stox11" },
  { image: "/images/products/childcaree.jpg", title: "Admin Panels" },
  { image: "/images/brainbuzz.png", title: "Brain Buzz" },
  { image: "/images/omrsheet.png", title: "OMR sheet Customisation" },
  {
    image: "/images/hyderabadpartyrentals.png",
    title: "Hyderabad Party Rentals",
  },
];

const ProductsSection = () => {
  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Products <span className={styles.line}></span>
        </h2>
        <p className={styles.description}>
          At <strong>Panacea</strong>, we build powerful, scalable, and
          user-friendly software solutions that help businesses innovate, grow,
          and thrive in the digital age. From idea to execution, our products
          are designed to deliver real impact.
        </p>
      </div>

      {/* Grid of products */}
      <div className={styles.grid}>
        {PRODUCTS.map((p, idx) => (
          <div
            key={p.title}
            className={`${styles.card} ${styles[`card${idx + 1}`]}`}
          >
            <div className={styles.imageWrap}>
              <img src={p.image} alt={p.title} className={styles.img} />
            </div>
            <div className={styles.caption}>{p.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
