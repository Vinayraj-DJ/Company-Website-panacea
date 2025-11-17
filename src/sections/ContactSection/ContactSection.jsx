// import React from "react";
// import styles from "./ContactSection.module.css";

// /* Inline SVG icons (inherit parent color) */
// const PhoneIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 1.08 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.07.73 3.03a2 2 0 0 1-.45 2.11L7.91 11.09a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.96.36 1.98.61 3.03.73A2 2 0 0 1 22 16.92z"/>
//   </svg>
// );

// const MailIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11zm1.5 0L12 12l7.5-5.5"/>
//   </svg>
// );

// const PinIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
//   </svg>
// );

// const DirectionsIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M21.71 11.29l-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l9 9a1 1 0 0 0 1.42 0l9-9a1 1 0 0 0 0-1.42zM12 19.07L4.93 12 12 4.93 19.07 12 12 19.07z"/>
//   </svg>
// );

// export default function ContactSection() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.inner}>
//         {/* Left side - form */}
//         <div className={styles.left}>
//           <div className={styles.formCard}>
//             <h2 className={styles.heading}>Please fill in the form Below</h2>

//             <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
//               <div className={styles.row}>
//                 <label className={styles.label}>
//                   Full Name
//                   <input className={styles.input} placeholder="Enter Name" />
//                 </label>
//                 <label className={styles.label}>
//                   E-Mail
//                   <input className={styles.input} placeholder="Enter E-mail" />
//                 </label>
//               </div>

//               <div className={styles.row}>
//                 <label className={styles.label}>
//                   Country
//                   <select className={styles.input}>
//                     <option>India (+91)</option>
//                     <option>United States (+1)</option>
//                   </select>
//                 </label>
//                 <label className={styles.label}>
//                   Contact Number
//                   <input className={styles.input} placeholder="Enter Number" />
//                 </label>
//               </div>

//               <label className={styles.labelFull}>
//                 Interested In
//                 <select className={styles.input}>
//                   <option>Website Development</option>
//                   <option>Mobile App</option>
//                   <option>UI/UX</option>
//                 </select>
//               </label>

//               <label className={styles.labelFull}>
//                 Message
//                 <textarea className={styles.textarea} rows="4" placeholder="Write your message..." />
//               </label>

//               <label className={styles.checkbox}>
//                 <input type="checkbox" />
//                 <span>I agree to the Terms and Conditions of PanaceaIT Services</span>
//               </label>

//               <button type="submit" className={styles.cta}>
//                 Send Your Inquiry
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Right side - Contact info */}
//         <aside className={styles.right}>
//           <div className={styles.infoBlock}>
//             <h3 className={styles.infoTitle}>Get In Touch</h3>
//             <ul className={styles.infoList}>
//               <li><span className={styles.icon}><PhoneIcon /></span>8686818384 / 9347959536</li>
//               <li><span className={styles.icon}><MailIcon /></span>info@panaceaaitservices.com</li>
//             </ul>
//           </div>

//           <div className={styles.infoBlock}>
//             <h4 className={styles.infoTitle}>Come Meet Us</h4>
//             <div className={styles.officeTitle}>
//               <span className={styles.icon}><PinIcon /></span>India-Hyderabad Office
//             </div>
//             <p className={styles.address}>
//               Panaceaitservices Privated Limited, 100Feet Road, Ayyappa Society, Madhapur.
//               Hyderabad-500072, Landmark: Narayana School Beside.
//             </p>
//             <a href="#" className={styles.directions}>
//               <span className={styles.icon}><DirectionsIcon /></span>Get Directions
//             </a>
//           </div>

//           <div className={styles.infoBlock}>
//             <h4 className={styles.infoTitle}>Follow Us On</h4>
//             <div className={styles.socials}>
//               <a href="#" className={styles.socialIcon}>f</a>
//               <a href="#" className={styles.socialIcon}>x</a>
//               <a href="#" className={styles.socialIcon}>in</a>
//               <a href="#" className={styles.socialIcon}>◉</a>
//             </div>
//           </div>
//         </aside>
//       </div>
//     </section>
//   );
// }





// import React from "react";
// import styles from "./ContactSection.module.css";

// /* Inline SVG icons (inherit parent color) */
// const PhoneIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 1.08 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.12 1.05.37 2.07.73 3.03a2 2 0 0 1-.45 2.11L7.91 11.09a16 16 0 0 0 6 6l1.22-1.22a2 2 0 0 1 2.11-.45c.96.36 1.98.61 3.03.73A2 2 0 0 1 22 16.92z"/>
//   </svg>
// );

// const MailIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11zm1.5 0L12 12l7.5-5.5"/>
//   </svg>
// );

// const PinIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
//   </svg>
// );

// const DirectionsIcon = () => (
//   <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
//     <path d="M21.71 11.29l-9-9a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l9 9a1 1 0 0 0 1.42 0l9-9a1 1 0 0 0 0-1.42zM12 19.07L4.93 12 12 4.93 19.07 12 12 19.07z"/>
//   </svg>
// );

// export default function ContactSection() {
//   return (
//     <section className={styles.section}>
//       <div className={styles.inner}>
        
//         {/* LEFT SIDE - FORM */}
//         <div className={styles.left}>
//           <div className={styles.formCard}>
//             <h2 className={styles.heading}>Please fill in the form Below</h2>

//             <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              
//               <div className={styles.row}>
//                 <label className={styles.label}>
//                   Full Name
//                   <input className={styles.input} placeholder="Enter Name" />
//                 </label>

//                 <label className={styles.label}>
//                   E-Mail
//                   <input className={styles.input} placeholder="Enter E-mail" />
//                 </label>
//               </div>

//               <div className={styles.row}>
//                 <label className={styles.label}>
//                   Country
//                   <select className={styles.input}>
//                     <option>India (+91)</option>
//                     <option>United States (+1)</option>
//                   </select>
//                 </label>

//                 <label className={styles.label}>
//                   Contact Number
//                   <input className={styles.input} placeholder="Enter Number" />
//                 </label>
//               </div>

//               <label className={styles.labelFull}>
//                 Interested In
//                 <select className={styles.input}>
//                   <option>Website Development</option>
//                   <option>Mobile App</option>
//                   <option>UI/UX</option>
//                 </select>
//               </label>

//               <label className={styles.labelFull}>
//                 Message
//                 <textarea className={styles.textarea} rows="4" placeholder="Write your message..." />
//               </label>

//               <label className={styles.checkbox}>
//                 <input type="checkbox" />
//                 <span>I agree to the Terms and Conditions of PanaceaIT Services</span>
//               </label>

//               <button type="submit" className={styles.cta}>
//                 Send Your Inquiry
//               </button>

//             </form>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <aside className={styles.right}>
          
//           <div className={styles.infoBlock}>
//             <h3 className={styles.infoTitle}>Get In Touch</h3>
//             <ul className={styles.infoList}>
//               <li><span className={styles.icon}><PhoneIcon /></span>8686818384 / 9347959536</li>
//               <li><span className={styles.icon}><MailIcon /></span>info@panaceaaitservices.com</li>
//             </ul>
//           </div>

//           <div className={styles.infoBlock}>
//             <h4 className={styles.infoTitle}>Come Meet Us</h4>
//             <div className={styles.officeTitle}>
//               <span className={styles.icon}><PinIcon /></span>India-Hyderabad Office
//             </div>

//             <p className={styles.address}>
//               Panaceaitservices Privated Limited, 100Feet Road, Ayyappa Society, Madhapur.
//               Hyderabad-500072, Landmark: Narayana School Beside.
//             </p>

//             <a href="#" className={styles.directions}>
//               <span className={styles.icon}><DirectionsIcon /></span>
//               Get Directions
//             </a>
//           </div>

//           {/* SOCIAL ICONS UPDATED */}
//           <div className={styles.infoBlock}>
//             <h4 className={styles.infoTitle}>Follow Us On</h4>

//             <div className={styles.socials}>

//               <a
//                 href="https://x.com/yourprofile"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.socialIcon}
//               >
//                 <img src="/images/contact/x.svg" alt="X" />
//               </a>

//               <a
//                 href="https://www.linkedin.com/company/panacea-it-services/?originalSubdomain=in"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.socialIcon}
//               >
//                 <img src="/images/contact/linkedin.svg" alt="LinkedIn" />
//               </a>

//               <a
//                 href="https://instagram.com/yourprofile"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.socialIcon}
//               >
//                 <img src="/images/contact/instagram.svg" alt="Instagram" />
//               </a>

//               <a
//                 href="https://www.facebook.com/your-handle"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={styles.socialIcon}
//               >
//                 <img src="/images/contact/facebook.svg" alt="Facebook" />
//               </a>

//             </div>
//           </div>

//         </aside>
//       </div>
//     </section>
//   );
// }





import React from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        
        {/* LEFT SIDE - FORM */}
        <div className={styles.left}>
          <div className={styles.formCard}>
            <h2 className={styles.heading}>Please fill in the form Below</h2>

            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              
              <div className={styles.row}>
                <label className={styles.label}>
                  Full Name
                  <input className={styles.input} placeholder="Enter Name" />
                </label>

                <label className={styles.label}>
                  E-Mail
                  <input className={styles.input} placeholder="Enter E-mail" />
                </label>
              </div>

              <div className={styles.row}>
                <label className={styles.label}>
                  Country
                  <select className={styles.input}>
                    <option>India (+91)</option>
                    <option>United States (+1)</option>
                  </select>
                </label>

                <label className={styles.label}>
                  Contact Number
                  <input className={styles.input} placeholder="Enter Number" />
                </label>
              </div>

              <label className={styles.labelFull}>
                Interested In
                <select className={styles.input}>
                  <option>Website Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX</option>
                </select>
              </label>

              <label className={styles.labelFull}>
                Message
                <textarea className={styles.textarea} rows="4" placeholder="Write your message..." />
              </label>

              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span>I agree to the Terms and Conditions of PanaceaIT Services</span>
              </label>

              <button type="submit" className={styles.cta}>
                Send Your Inquiry
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className={styles.right}>
          
          {/* GET IN TOUCH */}
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Get In Touch</h3>
            <ul className={styles.infoList}>

              <li>
                <img src="/images/contact/phone.svg" className={styles.iconImg} alt="Phone" />
                8686818384 / 9347959536
              </li>

              <li>
                <img src="/images/contact/whatsapp.svg" className={styles.iconImg} alt="WhatsApp" />
                8686818384 / 9347959536
              </li>

              <li>
                <img src="/images/contact/mail.svg" className={styles.iconImg} alt="Mail" />
                info@panaceaaitservices.com
              </li>

            </ul>
          </div>

          {/* LOCATION SECTION */}
          <div className={styles.infoBlock}>
            <h4 className={styles.infoTitle}>Come Meet Us</h4>

            <div className={styles.officeTitle}>
             
              India-Hyderabad Office
            </div>

  
            <p className={styles.address}>
              <div>
              <img src="/images/contact/pin.svg" className={styles.iconImg} alt="Pin" />
               
              Panaceaitservices Privated Limited, 100Feet Road, Ayyappa Society, Madhapur.
              Hyderabad-500072, Landmark: Narayana School Beside.
              </div>
            </p>
           
            

            <a href="#" className={styles.directions}>
              <img src="/images/contact/directions.svg" className={styles.iconImg} alt="Directions" />
              Get Directions
            </a>
          </div>

          {/* SOCIAL ICONS */}
          <div className={styles.infoBlock}>
            <h4 className={styles.infoTitle}>Follow Us On</h4>

            <div className={styles.socials}>

              <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/images/contact/x.svg" alt="X" />
              </a>

              <a href="https://www.linkedin.com/company/107517525/admin/dashboard/"
                target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/images/contact/linkedin.svg" alt="LinkedIn" />
              </a>

              <a href="https://www.instagram.com/panaceaitservices"
                target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/images/contact/instagram.svg" alt="Instagram" />
              </a>

              <a href="https://www.facebook.com/profile.php?id=61578148200915"
                target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                <img src="/images/contact/facebook.svg" alt="Facebook" />
              </a>

            </div>
          </div>

        </aside>
      </div>
    </section>
  );
}
