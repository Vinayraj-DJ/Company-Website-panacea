import React from "react";
import styles from "./FooterSection.module.css";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";
import logo from "../../../assets/images/logo.png";

/* Inline Icon Component */
function Icon({ children, className }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      {children}
    </svg>
  );
}

function MailIcon(props) {
  return (
    <Icon {...props}>
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
    </Icon>
  );
}

function PhoneIcon(props) {
  return (
    <Icon {...props}>
      <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.5 2.7.8 4.1.8.7 0 1.3.6 1.3 1.3v3.6c0 .7-.6 1.3-1.3 1.3C9.9 22 2 14.1 2 4.3 2 3.6 2.6 3 3.3 3h3.6c.7 0 1.3.6 1.3 1.3 0 1.4.3 2.8.8 4.1.2.4.1.9-.2 1.2l-2.2 2.2z" />
    </Icon>
  );
}

function MapPinIcon(props) {
  return (
    <Icon {...props}>
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </Icon>
  );
}

/* FooterSection Component */
export default function FooterSection({
  brand = "Portfolio",
  year = new Date().getFullYear(),
  services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Consulting",
  ],
  company = ["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"],
  legal = ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"],
}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.col}>
            <div className={styles.brandRow}>
              <div className={styles.footerLogoBlock}>
                <img
                  src={logo}
                  alt="Panacea logo"
                  className={styles.footerLogo}
                />
                <div className={styles.footerTitleBlock}>
                  <span className={styles.footerTitle}>Panacea</span>
                  <span className={styles.footerSubtitle}>
                    IT Services Pvt.Ltd
                  </span>
                </div>
              </div>
            </div>

            <p className={styles.lead}>
              We create innovative digital solutions that help businesses grow
              and connect with their audiences through modern design and
              cutting-edge technology.
            </p>

            <div className={styles.socialRow}>
              <a className={styles.socialBtn} href="#" aria-label="Facebook">
                <LuFacebook className={styles.socialIcon} />
              </a>
              <a className={styles.socialBtn} href="#" aria-label="Twitter">
                <LuTwitter className={styles.socialIcon} />
              </a>
              <a
                className={styles.socialBtn}
                href="https://instagram.com/panaceaitservices"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <LuInstagram className={styles.socialIcon} />
              </a>
              <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
                <LuLinkedin className={styles.socialIcon} />
              </a>
            </div>
          </div>

          {/* Services and Company side by side */}
          <div className={styles.servicesCompanyRow}>
            {/* Services */}
            <div className={styles.col}>
              <h3 className={styles.heading}>Services</h3>
              <ul className={styles.list}>
                {services.map((s, i) => (
                  <li key={i} className={styles.listItem}>
                    <a href="#" className={styles.link}>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className={styles.col}>
              <h3 className={styles.heading}>Company</h3>
              <ul className={styles.list}>
                {company.map((c, i) => (
                  <li key={i} className={styles.listItem}>
                    <a href="#" className={styles.link}>
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Contact</h3>
            <div className={styles.contactStack}>
              <div className={styles.contactRow}>
                <MailIcon className={styles.iconSmall} />
                <div>
                  <p className={styles.contactMain}>
                    info@panaceaitservices.com
                  </p>
                  <p className={styles.contactSub}>Get in touch</p>
                </div>
              </div>

              <div className={styles.contactRow}>
                <PhoneIcon className={styles.iconSmall} />
                <div>
                  <p className={styles.contactMain}>8686818384 / 9347959536</p>
                  <p className={styles.contactSub}>Call us anytime</p>
                </div>
              </div>

              <div className={styles.contactRow}>
                <MapPinIcon className={styles.iconSmall} />
                <div>
                  <p className={styles.contactMain}>Sanath Nagar</p>
                  <p className={styles.contactSub}>Our headquarters</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {brand}. All rights reserved.
          </p>

          <div className={styles.legalRow}>
            {legal.map((l, i) => (
              <a key={i} href="#" className={styles.legalLink}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
