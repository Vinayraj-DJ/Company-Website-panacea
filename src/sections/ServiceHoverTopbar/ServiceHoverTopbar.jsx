// import React, { useEffect, useRef, useState } from "react";
// import styles from "./ServiceHoverTopbar.module.css";
// import { FiChevronDown } from "react-icons/fi";
// import servicesImg from "../../assets/images/topbarserviceshoverimage.png";

// // const services = [
// //   { title: "Software Development", desc: "We focus on building customized, scalable solutions." },
// //   { title: "UI / UX Designing", desc: "We design both mobile applications and websites." },
// //   { title: "Mobile App Development", desc: "We create responsive apps tailored to your business needs." },
// //   { title: "Digital Marketing", desc: "We enhance brand visibility through strategic online campaigns." },
// //   { title: "Website Development", desc: "We create user-friendly and easy-to-use websites." }
// // ];



// const services = [
//   { title: "Application Development", desc: "We focus on building customized, scalable solutions" },
//   { title: "Digital Marketing",       desc: "We enhance brand visibility through strategic online campaigns" },
//   { title: "Clouds & Deveops",        desc: "We Design both mobile Application and Websites" },
//   { title: "Website Development",     desc: "We create responsive websites that are tailored to your business needs." },
//   { title: "Mobile Application",      desc: "We Design both mobile Application and Websites" },
//   { title: "Testing Automation",      desc: "We Design both mobile Application and Websites" },
//   { title: "CMS & E-Commerce",        desc: "We create user friendly and ease to use websites" },
//   { title: "Website Designing",       desc: "We create user friendly and ease to use websites" }
// ];


// const ServiceHoverTopbar = () => {
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
//   panelRefs.current = services.map((_, i) => panelRefs.current[i] ?? React.createRef());

//   const toggle = (idx) => {
//     setOpen((prev) => (prev === idx ? null : idx));
//   };

//   const onKeyToggle = (e, idx) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       toggle(idx);
//     }
//   };

//   if (!isMobile) {
//     // DESKTOP / TABLET: image-left + responsive grid on right
//     return (
//       <div className={styles.container}>
//         <h3 className={styles.heading}>Explore Services</h3>

//         <div className={styles.content}>
//           <div className={styles.imageWrapper}>
//             <img src={servicesImg} alt="Services showcase" />
//           </div>

//           <div className={styles.serviceGrid}>
//             {services.map((s) => (
//               <div className={styles.serviceItem} key={s.title}>
//                 <h4 className={styles.serviceTitle}>
//                   <span>{s.title}</span>
//                   <span className={styles.serviceArrow}>→</span>
//                 </h4>
//                 <p className={styles.serviceDesc}>{s.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // MOBILE: accordion, hide image visually (still available above accordion if you want)
//   return (
//     <div className={styles.container}>
//       <h3 className={styles.heading}>Explore Services</h3>

//       <div className={styles.mobileWrap}>
//         <div className={styles.imageWrapperMobile} aria-hidden>
//           <img src={servicesImg} alt="Service" />
//         </div>

//         <ul className={styles.accordion} role="list">
//           {services.map((s, idx) => {
//             const opened = open === idx;
//             return (
//               <li className={`${styles.accItem} ${opened ? styles.accItemOpen : ""}`} key={s.title}>
//                 <button
//                   type="button"
//                   className={`${styles.accHeader} ${opened ? styles.open : ""}`}
//                   onClick={() => toggle(idx)}
//                   onKeyDown={(e) => onKeyToggle(e, idx)}
//                   aria-expanded={opened}
//                   aria-controls={`svc-panel-${idx}`}
//                 >
//                   <span className={styles.accTitle}>{s.title}</span>
//                   <FiChevronDown className={`${styles.chev} ${opened ? styles.chevOpen : ""}`} aria-hidden />
//                 </button>

//                 <div
//                   id={`svc-panel-${idx}`}
//                   ref={(el) => (panelRefs.current[idx] = el)}
//                   className={styles.accPanel}
//                   style={opened && panelRefs.current[idx] ? { maxHeight: panelRefs.current[idx].scrollHeight + 24 } : { maxHeight: 0 }}
//                   role="region"
//                 >
//                   <p className={styles.accBody}>{s.desc}</p>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>

//         <div className={styles.viewAllRowMobile}>
//           <button className={styles.viewAllBtnMobile} onClick={() => (window.location.href = "/services")}>
//             View all services →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceHoverTopbar;



// ServiceHoverTopbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ServiceHoverTopbar.module.css";
import { FiChevronDown } from "react-icons/fi";
import servicesImg from "../../assets/images/topbarserviceshoverimage.png";

const services = [
  { title: "Application Development", path: "/services/application-development", desc: "We focus on building customized, scalable solutions" },
  { title: "Digital Marketing",       path: "/services/digital-marketing",       desc: "We enhance brand visibility through strategic online campaigns" },
  { title: "Clouds & DevOps",         path: "/services/clouds-and-devops",       desc: "We design both mobile applications and websites" },
  { title: "Website Development",     path: "/services/website-development",     desc: "We create responsive websites tailored to your business needs." },
  { title: "Mobile Application",      path: "/services/mobile-application",      desc: "We design both mobile applications and websites" },
  { title: "Testing Automation",      path: "/services/testing-automation",      desc: "We design both mobile applications and websites" },
  { title: "CMS & E-Commerce",        path: "/services/cms-ecommerce",           desc: "We create user friendly and easy to use websites" },
  { title: "Website Designing",       path: "/services/website-designing",       desc: "We create user friendly and easy to use websites" }
];



const ServiceHoverTopbar = () => {
  const [open, setOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const panelRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    handler(mq);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  panelRefs.current = services.map((_, i) => panelRefs.current[i] ?? React.createRef());

  const toggle = (idx) => setOpen((prev) => (prev === idx ? null : idx));
  const onKeyToggle = (e, idx) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  if (!isMobile) {
    // DESKTOP/TABLET
    return (
      <div className={styles.container}>
        <h3 className={styles.heading}>Explore Services</h3>

        <div className={styles.content}>
          <Link to="/services" className={styles.imageWrapper} aria-label="View all services">
            <img src={servicesImg} alt="Services showcase" />
          </Link>

          <div className={styles.serviceGrid}>
            {services.map((s) => (
              <Link to={s.path} className={`${styles.serviceItem} ${styles.serviceLink}`} key={s.title}>
                <h4 className={styles.serviceTitle}>
                  <span>{s.title}</span>
                  <span className={styles.serviceArrow}>→</span>
                </h4>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.viewAllRowDesktop}>
          {/* <button className={styles.viewAllBtnDesktop} onClick={() => navigate("/services")}>
            View all services →
          </button> */}
        </div>
      </div>
    );
  }

  // MOBILE
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Explore Services</h3>

      <div className={styles.mobileWrap}>
        <div className={styles.imageWrapperMobile} aria-hidden>
          <img src={servicesImg} alt="Service" />
        </div>

        <ul className={styles.accordion} role="list">
          {services.map((s, idx) => {
            const opened = open === idx;
            return (
              <li className={`${styles.accItem} ${opened ? styles.accItemOpen : ""}`} key={s.title}>
                <button
                  type="button"
                  className={`${styles.accHeader} ${opened ? styles.open : ""}`}
                  onClick={() => toggle(idx)}
                  onKeyDown={(e) => onKeyToggle(e, idx)}
                  aria-expanded={opened}
                  aria-controls={`svc-panel-${idx}`}
                >
                  <span className={styles.accTitle}>{s.title}</span>
                  <FiChevronDown className={`${styles.chev} ${opened ? styles.chevOpen : ""}`} aria-hidden />
                </button>

                <div
                  id={`svc-panel-${idx}`}
                  ref={(el) => (panelRefs.current[idx] = el)}
                  className={styles.accPanel}
                  style={opened && panelRefs.current[idx] ? { maxHeight: panelRefs.current[idx].scrollHeight + 24 } : { maxHeight: 0 }}
                  role="region"
                >
                  <p className={styles.accBody}>{s.desc}</p>
                  <Link to={s.path} className={styles.accCta}>
                    View details →
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        <div className={styles.viewAllRowMobile}>
          <button className={styles.viewAllBtnMobile} onClick={() => navigate("/services")}>
            View all services →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHoverTopbar;
