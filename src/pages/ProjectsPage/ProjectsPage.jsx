import React from "react";
import styles from "./ProjectsPage.module.css";
import Stox11Project from "../../sections/ProjectsSection/Stox11Project";
import FooterSection from "../../sections/HomePageSection/FooterSection/FooterSection";

const ProjectsPage = () => {
  return (
    <>
      <Stox11Project />
      <FooterSection />
    </>
  );
};

export default ProjectsPage;
