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
import FullstackDevelopment from "../pages/ServicesPage/ApplicationDevelopment/FullStackDevelopment/FullStackDevelopment";
import DigitalTransformation from "../pages/ServicesPage/ApplicationDevelopment/DigitalTransformation/DigitalTransformation";
import SalesForceConsulting from "../pages/ServicesPage/ApplicationDevelopment/SalesForceConsulting/SalesForceConsulting";
import BIDataAnalytics from "../pages/ServicesPage/ApplicationDevelopment/BIDataAnalytics/BIDataAnalytics";
import SoftwareDevelopment from "../pages/ServicesPage/ApplicationDevelopment/SoftwareDevelopment/SoftwareDevelopment";
import CustomApplication from "../pages/ServicesPage/ApplicationDevelopment/CustomApplication/CustomApplication";
import BigDataServices from "../pages/ServicesPage/ApplicationDevelopment/BigDataServices/BigDataServices";
import SapConsulting from "../pages/ServicesPage/ApplicationDevelopment/SapConsulting/SapConsulting";
import SearchEngineOptimization from "../pages/ServicesPage/DigitalMarketingSection/SearchEngineOptimization/SearchEngineOptimization";
import SocialMediaMarketing from "../pages/ServicesPage/DigitalMarketingSection/SocialMediaMarketing/SocialMediaMarketing";
import EmailMarketing from "../pages/ServicesPage/DigitalMarketingSection/EmailMarketing/EmailMarketing";
import PPCMarketing from "../pages/ServicesPage/DigitalMarketingSection/PPCMarketing/PPCMarketing";
import ContentMarketing from "../pages/ServicesPage/DigitalMarketingSection/ContentMarketing/ContentMarketing";
import PhpDevelopment from "../pages/ServicesPage/WebDevelopmentSection/PhpDevelopment/PhpDevelopment";
import NodeDevelopment from "../pages/ServicesPage/WebDevelopmentSection/NodeDevelopment/NodeDevelopment";
import AngularDevelopment from "../pages/ServicesPage/WebDevelopmentSection/AngularDevelopment/AngularDevelopment";
import ReactDevelopment from "../pages/ServicesPage/WebDevelopmentSection/ReactDevelopment/ReactDevelopment";
import LaravelDevelopment from "../pages/ServicesPage/WebDevelopmentSection/LaravelDevelopment/LaravelDevelopment";
import CodeIgniterDevelopment from "../pages/ServicesPage/WebDevelopmentSection/CodeIgniterDevelopment/CodeIgniterDevelopment";
import CakePhpDevelopment from "../pages/ServicesPage/WebDevelopmentSection/CakePhpDevelopment/CakePhpDevelopment";
import QualityEngineering from "../pages/TestimonialsPage/QualityEngineering/QualityEngineering";
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
          path="/services/website-development"
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
        <Route
          path="/services/application-development/full-stack-development"
          element={<FullstackDevelopment />}
        />

        <Route
          path="/services/application-development/digital-transformation"
          element={<DigitalTransformation />}
        />

        <Route
          path="/services/application-development/sales-force-consulting"
          element={<SalesForceConsulting />}
        />
        <Route
          path="/services/application-development/bi-and-data-analysis"
          element={<BIDataAnalytics />}
        />

        <Route
          path="/services/application-development/software-development"
          element={<SoftwareDevelopment />}
        />

        <Route
          path="/services/application-development/custom-application"
          element={<CustomApplication />}
        />

        <Route
          path="/services/application-development/big-data-services"
          element={<BigDataServices />}
        />

        <Route
          path="/services/application-development/sap-consulting-services"
          element={<SapConsulting />}
        />

        <Route
          path="/services/digital-marketing/search-engine-optimization"
          element={<SearchEngineOptimization />}
        />

        <Route
          path="/services/digital-marketing/social-media-marketing"
          element={<SocialMediaMarketing />}
        />

        <Route
          path="/services/digital-marketing/email-marketing"
          element={<EmailMarketing />}
        />

        {/* <Route
          path="/services/digital-marketing/inbound-marketing"
          element={< />}
        /> */}
        <Route
          path="/services/digital-marketing/content-marketing"
          element={<ContentMarketing />}
        />

        <Route
          path="/services/digital-marketing/pay-per-click-ppc"
          element={<PPCMarketing />}
        />


        <Route
          path="/services/web-development/php-development"
          element={<PhpDevelopment />}
        />
        <Route
          path="/services/web-development/node-js-development"
          element={<NodeDevelopment />}
        />
        <Route
          path="/services/web-development/angular-js-development"
          element={<AngularDevelopment />}
        />
        <Route
          path="/services/web-development/react-js-development"
          element={<ReactDevelopment />}
        />
        <Route
          path="/services/web-development/laravel-development"
          element={<LaravelDevelopment />}
        />
        <Route
          path="/services/web-development/codeigniter-development"
          element={<CodeIgniterDevelopment />}
        />
        <Route
          path="/services/web-development/cakephp-development"
          element={<CakePhpDevelopment />}
        />

        <Route
          path="/services/testing-automation/quality-engineering"
          element={<QualityEngineering />}
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
