// import React from "react";
// import styles from "./ProductsSection.module.css";

// // const PRODUCTS = [
// //   { image: "/images/products/childcaree.jpg", title: "Child Care Management" },
// //   { image: "/images/products/influencerimage.jpg", title: "Influencer App" },
// //   { image: "/images/products/mutualfund.jpg", title: "Mutual Funds" },
// //   { image: "/images/products/adminpanal.jpg", title: "Stox11" },
// //   { image: "/images/products/childcaree.jpg", title: "Admin Panels" },
// //   { image: "/images/brainbuzz.png", title: "Brain Buzz" },
// //   { image: "/images/omrsheet.png", title: "OMR sheet Customisation" },
// //   {
// //     image: "/images/hyderabadpartyrentals.png",
// //     title: "Hyderabad Party Rentals",
// //   },
// // ];



// const PRODUCTS = [
//   { image: "/images/products/childcaree.jpg", title: "Child Care Management", path: "/products/child-care-management" },
//   { image: "/images/products/influencerimage.jpg", title: "Influencer App", path: "" },
//   { image: "/images/products/mutualfund.jpg", title: "Mutual Funds", path: "" },
//   { image: "/images/products/adminpanal.jpg", title: "Stox11", path: "" },
//   { image: "/images/products/childcaree.jpg", title: "Admin Panels", path: "" },
//   { image: "/images/brainbuzz.png", title: "Brain Buzz", path: "" },
//   { image: "/images/omrsheet.png", title: "OMR sheet Customisation", path: "" },
//   { image: "/images/hyderabadpartyrentals.png", title: "Hyderabad Party Rentals", path: "" },
// ];
// const ProductsSection = () => {
//   return (
//     <section
//       className={styles.section}
//       style={{
//         backgroundImage: `url(/images/backgroundwhychooseus.jpg)`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Header */}
//       <div className={styles.header}>
//         <h2 className={styles.title}>
//           Products <span className={styles.line}></span>
//         </h2>
//         <p className={styles.description}>
//           At <strong>Panacea</strong>, we build powerful, scalable, and
//           user-friendly software solutions that help businesses innovate, grow,
//           and thrive in the digital age. From idea to execution, our products
//           are designed to deliver real impact.
//         </p>
//       </div>

//       {/* Grid of products */}
//       <div className={styles.grid}>
//         {PRODUCTS.map((p, idx) => (
//           <div
//             key={p.title}
//             className={`${styles.card} ${styles[`card${idx + 1}`]}`}
//           >
//             <div className={styles.imageWrap}>
//               <img src={p.image} alt={p.title} className={styles.img} />
//             </div>
//             <div className={styles.caption}>{p.title}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProductsSection;




import React from "react";
import styles from "./ProductsSection.module.css";
import { useNavigate } from "react-router-dom";

const PRODUCTS = [
  { image: "/images/products/childcaree.jpg", title: "Child Care Management", path: "/products/child-care-management" },
  { image: "/images/products/influencerimage.jpg", title: "Influencer App", path: "/products/influencers-app" },
  { image: "/images/products/mutualfund.jpg", title: "Mutual Funds", path: "/products/mutual-funds" },
  { image: "/images/products/adminpanal.jpg", title: "Stox11", path: "/stox11" },
  { image: "/images/products/childcaree.jpg", title: "Admin Panels", path: "/admin-panels" },
  { image: "/images/brainbuzz.png", title: "Brain Buzz", path: "/brain-buzz" },
  { image: "/images/omrsheet.png", title: "OMR sheet Customisation", path: "/products/omr-customization" },
  { image: "/images/hyderabadpartyrentals.png", title: "Hyderabad Party Rentals", path: "/products/hyderabad-party-rentals" },
];

const ProductsSection = () => {
  const navigate = useNavigate();

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
          and thrive in the digital age.
        </p>
      </div>

      {/* Grid */}
      <div className={styles.grid}>
        {PRODUCTS.map((p, idx) => (
          <div
            key={p.title}
            className={`${styles.card} ${styles[`card${idx + 1}`]}`}
            onClick={() => navigate(p.path)}
            style={{ cursor: "pointer" }}
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
