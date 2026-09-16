import { Suspense, lazy } from "react";
import {
  aboutData,
  contactData,
  heroData,
  projectsData,
  resumeData,
  servicesData,
  socialData,
} from "../data";
import Hero from "../components/Hero/Hero";

const About = lazy(() => import("../components/About/About"));
const TechnicalSkill = lazy(
  () => import("../components/TechnicalSkill/TechnicalSkill"),
);
const PortfolioSection = lazy(
  () => import("../components/Portfolio/PortfolioSection"),
);
const Contact = lazy(() => import("../components/Contact/Contact"));
const CreationSection = lazy(
  () => import("../components/Creation/CreationSection"),
);

const Home = () => {
  return (
    <>
      <Hero data={heroData} socialData={socialData} />
      <Suspense fallback={null}>
        <About data={aboutData} />
      </Suspense>
      <Suspense fallback={null}>
        <TechnicalSkill data={servicesData} />
      </Suspense>
      <Suspense fallback={null}>
        <PortfolioSection data={resumeData} />
      </Suspense>
      <Suspense fallback={null}>
        <CreationSection data={projectsData} />
      </Suspense>
      <Suspense fallback={null}>
        <Contact
          data={contactData}
          socialData={socialData}
        />
      </Suspense>
    </>
  );
};

export default Home;
