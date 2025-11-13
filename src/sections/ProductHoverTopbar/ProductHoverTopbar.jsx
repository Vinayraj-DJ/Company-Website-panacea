// import React, { useEffect, useRef, useState } from "react";
// import styles from "./ProductHoverTopbar.module.css";
// import { FiChevronDown } from "react-icons/fi";
// import productImage from "../../assets/images/topbarproducthoverimage.png";

// const allProducts = [
//   {
//     title: "Child Care Management",
//     desc: "Child care management helps to track each and every detail of your child.",
//   },
//   {
//     title: "Influencer App",
//     desc: "Where an influencer can meet and interact with the venue owners.",
//   },
//   {
//     title: "Mutual Funds",
//     desc: "An easy platform to manage and track mutual fund investments.",
//   },
//   {
//     title: "Stox11",
//     desc: "A fantasy stock trading app where you can simulate investments.",
//   },
//   {
//     title: "Admin Panels",
//     desc: "Custom admin dashboards to manage and control your applications.",
//   },
//   {
//     title: "Brain Buzz",
//     desc: "An interactive quiz and knowledge-sharing platform.",
//   },
//   {
//     title: "OMR sheet Customisation",
//     desc: "Customised OMR sheet design and scanning solutions.",
//   },
//   {
//     title: "Hyderabad Party Rentals",
//     desc: "A rental solution for parties and events in Hyderabad.",
//   },
// ];

// const ProductHoverTopbar = () => {
//   const [open, setOpen] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);
//   const panelRefs = useRef([]);

//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     const mq = window.matchMedia("(max-width: 768px)");
//     const handler = (e) => setIsMobile(e.matches);
//     handler(mq);
//     mq.addEventListener("change", handler);
//     return () => mq.removeEventListener("change", handler);
//   }, []);

//   // ensure ref array length
//   panelRefs.current = allProducts.map(
//     (_, i) => panelRefs.current[i] ?? React.createRef()
//   );

//   const toggle = (idx) => {
//     setOpen((prev) => (prev === idx ? null : idx));
//   };

//   // For accessibility add keyboard support
//   const onKeyToggle = (e, idx) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       toggle(idx);
//     }
//   };

//   // DESKTOP: image + grid right
//   if (!isMobile) {
//     return (
//       <div className={styles.container}>
//         <h3 className={styles.heading}>Explore Products</h3>
//         <div className={styles.content}>
//           <div className={styles.imageWrapper}>
//             <img src={productImage} alt="Product showcase" />
//           </div>

//           <div className={styles.productList}>
//             {allProducts.map((p, idx) => (
//               <div className={styles.productItem} key={p.title}>
//                 <h4 className={styles.productTitle}>
//                   <span>{p.title}</span>
//                   <span className={styles.productArrow}>→</span>
//                 </h4>
//                 <p className={styles.productDesc}>{p.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // MOBILE: accordion, hide image
//   return (
//     <div className={styles.container}>
//       <h3 className={styles.heading}>Explore Products</h3>

//       <div className={styles.mobileWrap}>
//         <ul className={styles.accordion} role="list">
//           {allProducts.map((p, idx) => {
//             const opened = open === idx;
//             return (
//               <li
//                 className={`${styles.accItem} ${
//                   opened ? styles.accItemOpen : ""
//                 }`}
//                 key={p.title}
//               >
//                 <button
//                   type="button"
//                   className={`${styles.accHeader} ${opened ? styles.open : ""}`}
//                   aria-expanded={opened}
//                   aria-controls={`prd-panel-${idx}`}
//                   onClick={() => toggle(idx)}
//                   onKeyDown={(e) => onKeyToggle(e, idx)}
//                 >
//                   <span className={styles.accTitle}>{p.title}</span>
//                   <FiChevronDown
//                     className={`${styles.chev} ${
//                       opened ? styles.chevOpen : ""
//                     }`}
//                     aria-hidden
//                   />
//                 </button>

//                 <div
//                   id={`prd-panel-${idx}`}
//                   ref={(el) => (panelRefs.current[idx] = el)}
//                   className={styles.accPanel}
//                   style={
//                     opened && panelRefs.current[idx]
//                       ? { maxHeight: panelRefs.current[idx].scrollHeight + 24 }
//                       : { maxHeight: 0 }
//                   }
//                 >
//                   <p className={styles.accBody}>{p.desc}</p>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>

//         <div className={styles.viewAllRowMobile}>
//           <button
//             className={styles.viewAllBtnMobile}
//             onClick={() => (window.location.href = "/products")}
//           >
//             View all products →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductHoverTopbar;




import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductHoverTopbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import productImage from "../../assets/images/topbarproducthoverimage.png";

// Product list with separate paths
const allProducts = [
  { title: "Child Care Management System", path: "/products/child-care-management" },
  { title: "Influencers App", path: "/products/influencers-app" },
  { title: "Mutuals Funds", path: "/products/mutual-funds" },
  { title: "OMR Customization", path: "/products/omr-customization" },
  { title: "School App", path: "/products/school-app" },
  { title: "Hyderabad Party Rentals", path: "/products/hyderabad-party-rentals" },
  { title: "Car Wash App", path: "/products/car-wash-app" },
  { title: "Grocery Delivery", path: "/products/grocery-delivery" },
  { title: "E-Learning App", path: "/products/e-learning-app" },
  { title: "Ott App", path: "/products/ott-app" },
  { title: "E-commerce Website", path: "/products/ecommerce-website" },
  { title: "Gaming App", path: "/products/gaming-app" },
  { title: "Ticket Booking App", path: "/products/ticket-booking-app" },
  { title: "Jewellery Website", path: "/products/jewellery-website" },
  { title: "Fitness App", path: "/products/fitness-app" },
];

// Helper to split array into equal columns
function chunkArray(arr, parts) {
  const out = Array.from({ length: parts }, () => []);
  arr.forEach((item, i) => out[i % parts].push(item));
  return out;
}

export default function ProductHoverTopbar() {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const panelRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);

    handler(mq);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    }
  }, []);

  const columns = chunkArray(allProducts, 3);

  const toggle = (idx) => setOpen((prev) => (prev === idx ? null : idx));
  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  /* ---------------- DESKTOP ---------------- */
  if (!isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <h3 className={styles.heading}>Explore Products</h3>

          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <img src={productImage} alt="Product showcase" />
            </div>

            <div className={styles.productGrid}>
              {columns.map((col, ci) => (
                <ul key={ci} className={styles.colList}>
                  {col.map((p) => (
                    <li key={p.title} className={styles.itemRow}>
                      <a href={p.path} className={styles.itemLink}>
                        <span className={styles.itemText}>{p.title}</span>
                        <span aria-hidden className={styles.itemArrow}>→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ---------------- MOBILE ---------------- */
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h3 className={styles.heading}>Explore Products</h3>

        <div className={styles.mobileWrap}>
          {/* mobile image (matches services topbar style) */}
          <div className={styles.imageWrapperMobile} aria-hidden>
            <img src={productImage} alt="Products" />
          </div>

          <ul className={styles.accordion} role="list">
            {allProducts.map((p, idx) => {
              const opened = open === idx;
              return (
                <li
                  className={`${styles.accItem} ${opened ? styles.accItemOpen : ""}`}
                  key={p.title}
                >
                  <button
                    type="button"
                    className={`${styles.accHeader} ${opened ? styles.open : ""}`}
                    aria-expanded={opened}
                    aria-controls={`prd-panel-${idx}`}
                    onClick={() => toggle(idx)}
                    onKeyDown={(e) => onKeyToggle(e, idx)}
                  >
                    <span className={styles.accTitle}>{p.title}</span>
                    <FiChevronDown
                      className={`${styles.chev} ${opened ? styles.chevOpen : ""}`}
                      aria-hidden
                    />
                  </button>

                  <div
                    id={`prd-panel-${idx}`}
                    ref={(el) => (panelRefs.current[idx] = el)}
                    className={styles.accPanel}
                    style={
                      opened && panelRefs.current[idx]
                        ? { maxHeight: panelRefs.current[idx].scrollHeight + 20 }
                        : { maxHeight: 0 }
                    }
                    role="region"
                  >
                    <p className={styles.accBody}>
                      Learn more about <strong>{p.title}</strong> at:
                      <br />
                      <span className={styles.pathText}>{p.path}</span>
                    </p>
                    <div className={styles.panelFooter}>
                      <a className={styles.visitLink} href={p.path}>
                        Visit →
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.viewAllRowMobile}>
            <a className={styles.viewAllBtnMobile} href="/products">
              View all products →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
