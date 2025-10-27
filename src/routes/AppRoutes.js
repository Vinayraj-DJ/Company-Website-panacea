import { Routes, Route } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import HomePage from "../pages/HomePage/HomePage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import ServicesPage from "../pages/ServicesPage/ServicesPage";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
import TesimonialsPage from "../pages/TestimonialsPage/TestimonialsPage";
import { SlOptions } from "react-icons/sl";
import SpotlightPage from "../pages/SpotlightPage/SpotlightPage";
import ApplicationDevelopmentSection from "../pages/ServicesPage/ApplicationDevelopment/ApplicationDevelopmentSection";
import DigitalMarketingSection from "../pages/ServicesPage/DigitalMarketingSection/DigitalMarketingSection";
import WebDevelopmentSection from "../pages/ServicesPage/WebDevelopmentSection/WebDevelopmentSection";

import MobileAppSection from "../pages/ServicesPage/MobileAppSection/MobileAppSection";

import WebsiteDesigningSection from "../pages/ServicesPage/WebsiteDesigningSection/WebsiteDesigningSection";

import CMSEcommerceSection from "../pages/ServicesPage/CMSEcommerceSection/CMSEcommerceSection";
import CloudDevOpsSection from "../pages/ServicesPage/CloudDevOpsSection/CloudDevOpsSection";
import TestingAutomationSection from "../pages/ServicesPage/TestingAutomationSection/TestingAutomationSection";
import FelxableImage from "../pages/ServicesPage/WebDevelopmentSection/FelxibleImage/FelxibleImage";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      
        <Route
          path="/services/application-development"
          element={<ApplicationDevelopmentSection />}
        />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketingSection />}
        />
        <Route
          path="/services/web-development"
          element={<WebDevelopmentSection />}
        />
        <Route
          path="/services/mobile-application"
          element={<MobileAppSection />}
        />
        <Route
          path="/services/website-designing"
          element={<WebsiteDesigningSection />}
        />
        <Route
          path="/services/cms-ecommerce"
          element={<CMSEcommerceSection />}
        />
        <Route
          path="/services/clouds-and-devops"
          element={<CloudDevOpsSection />}
        />
        <Route
          path="/services/testing-automation"
          element={<TestingAutomationSection />}
        />

<Route
          path="/services/website-designing/flexible-images"
          element={<FelxableImage />}
        />

        <Route path="/aboutuspage" element={<AboutUsPage />} />
        <Route path="/testimonials" element={<TesimonialsPage />} />
        <Route path="/spotlight" element={<SpotlightPage />} />

        {/* Add more if needed */}
      </Route>

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;






// // src/routes/AppRoutes.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
// import HomePage from "../pages/HomePage/HomePage";
// import ProductsPage from "../pages/ProductsPage/ProductsPage";
// import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
// import ServicesPage from "../pages/ServicesPage/ServicesPage";
// import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";
// import TesimonialsPage from "../pages/TestimonialsPage/TestimonialsPage";
// import SpotlightPage from "../pages/SpotlightPage/SpotlightPage";

// // Services sub-pages (detail sections)
// import ApplicationDevelopmentSection from "../pages/ServicesPage/ApplicationDevelopment/ApplicationDevelopmentSection";
// import DigitalMarketingSection from "../pages/ServicesPage/DigitalMarketingSection/DigitalMarketingSection";
// import WebDevelopmentSection from "../pages/ServicesPage/WebDevelopmentSection/WebDevelopmentSection";
// import MobileAppSection from "../pages/ServicesPage/MobileAppSection/MobileAppSection";
// import WebsiteDesigningSection from "../pages/ServicesPage/WebsiteDesigningSection/WebsiteDesigningSection";
// import CMSEcommerceSection from "../pages/ServicesPage/CMSEcommerceSection/CMSEcommerceSection";
// import CloudDevOpsSection from "../pages/ServicesPage/CloudDevOpsSection/CloudDevOpsSection";
// import TestingAutomationSection from "../pages/ServicesPage/TestingAutomationSection/TestingAutomationSection";

// function AppRoutes() {
//   return (
//     <Routes>
//       {/* All app pages share the dashboard layout */}
//       <Route path="/" element={<DashboardLayout />}>
//         {/* Home */}
//         <Route index element={<HomePage />} />

//         {/* Top-level pages */}
//         <Route path="products" element={<ProductsPage />} />
//         <Route path="projects" element={<ProjectsPage />} />
//         <Route path="aboutuspage" element={<AboutUsPage />} />
//         <Route path="testimonials" element={<TesimonialsPage />} />
//         <Route path="spotlight" element={<SpotlightPage />} />

//         {/* Services hub + nested service detail pages */}
//         <Route path="services">
//           <Route index element={<ServicesPage />} />
//           <Route path="application-development" element={<ApplicationDevelopmentSection />} />
//           <Route path="digital-marketing" element={<DigitalMarketingSection />} />
//           <Route path="web-development" element={<WebDevelopmentSection />} />
//           <Route path="mobile-application" element={<MobileAppSection />} />
//           <Route path="website-designing" element={<WebsiteDesigningSection />} />
//           <Route path="cms-ecommerce" element={<CMSEcommerceSection />} />
//           <Route path="clouds-and-devops" element={<CloudDevOpsSection />} />
//           <Route path="testing-automation" element={<TestingAutomationSection />} />
//         </Route>
//       </Route>

//       {/* Fallback */}
//       <Route path="*" element={<div style={{ padding: 24 }}>404 Not Found</div>} />
//     </Routes>
//   );
// }

// export default AppRoutes;
