import React, { useEffect, useRef, useState } from "react";
import styles from "./ProductHoverTopbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import productImage from "../../assets/images/topbarproducthoverimage.png";

const allProducts = [
  {
    title: "Child Care Management",
    desc: "Child care management helps to track each and every detail of your child.",
  },
  {
    title: "Influencer App",
    desc: "Where an influencer can meet and interact with the venue owners.",
  },
  {
    title: "Mutual Funds",
    desc: "An easy platform to manage and track mutual fund investments.",
  },
  {
    title: "Stox11",
    desc: "A fantasy stock trading app where you can simulate investments.",
  },
  {
    title: "Admin Panels",
    desc: "Custom admin dashboards to manage and control your applications.",
  },
  {
    title: "Brain Buzz",
    desc: "An interactive quiz and knowledge-sharing platform.",
  },
  {
    title: "OMR sheet Customisation",
    desc: "Customised OMR sheet design and scanning solutions.",
  },
  {
    title: "Hyderabad Party Rentals",
    desc: "A rental solution for parties and events in Hyderabad.",
  },
];

const ProductHoverTopbar = () => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const panelRefs = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ensure ref array length
  panelRefs.current = allProducts.map(
    (_, i) => panelRefs.current[i] ?? React.createRef()
  );

  const toggle = (idx) => {
    setOpen((prev) => (prev === idx ? null : idx));
  };

  // For accessibility add keyboard support
  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  // DESKTOP: image + grid right
  if (!isMobile) {
    return (
      <div className={styles.container}>
        <h3 className={styles.heading}>Explore Products</h3>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img src={productImage} alt="Product showcase" />
          </div>

          <div className={styles.productList}>
            {allProducts.map((p, idx) => (
              <div className={styles.productItem} key={p.title}>
                <h4 className={styles.productTitle}>
                  <span>{p.title}</span>
                  <span className={styles.productArrow}>→</span>
                </h4>
                <p className={styles.productDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // MOBILE: accordion, hide image
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Explore Products</h3>

      <div className={styles.mobileWrap}>
        <ul className={styles.accordion} role="list">
          {allProducts.map((p, idx) => {
            const opened = open === idx;
            return (
              <li
                className={`${styles.accItem} ${
                  opened ? styles.accItemOpen : ""
                }`}
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
                    className={`${styles.chev} ${
                      opened ? styles.chevOpen : ""
                    }`}
                    aria-hidden
                  />
                </button>

                <div
                  id={`prd-panel-${idx}`}
                  ref={(el) => (panelRefs.current[idx] = el)}
                  className={styles.accPanel}
                  style={
                    opened && panelRefs.current[idx]
                      ? { maxHeight: panelRefs.current[idx].scrollHeight + 24 }
                      : { maxHeight: 0 }
                  }
                >
                  <p className={styles.accBody}>{p.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.viewAllRowMobile}>
          <button
            className={styles.viewAllBtnMobile}
            onClick={() => (window.location.href = "/products")}
          >
            View all products →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHoverTopbar;
