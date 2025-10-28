import React from 'react'
  import CtaPanel from '../../../../components/CtaPanel/CtaPanel';
  import FooterSection from '../../../../sections/HomePageSection/FooterSection/FooterSection';
const FelxableImage = () => {
  return (
    <section>

    

<CtaPanel
  title="KNOW MORE PROJECTS"
  description="To know more projects and about all the details of the projects, the Technologies that we used to make the project successful in very short span of time please do contact us"
  buttonLabel="Call us"
  href="/contact"            // or omit href and pass onClick={() => ...}
  align="center"             // or "left"
  maxWidth={794}
/>


 <FooterSection
        brand="Panacea IT Services"
        year={new Date().getFullYear()}
        services={[
          "Software Development",
          "Mobile Apps",
          "UI/UX Design",
          "Digital Marketing",
          "SEO Optimization",
          "Consulting",
        ]}
        company={[
          "About Us",
          "Our Team",
          "Careers",
          "Portfolio",
          "Blog",
          "Contact",
        ]}
        legal={["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"]}
      />

    </section>
  )
}

export default FelxableImage
