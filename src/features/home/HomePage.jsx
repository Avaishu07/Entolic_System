import Hero from '../../components/home/Hero';
import ServicesSnapshot from '../../components/home/ServicesSnapshot';
import WhyUs from '../../components/home/WhyUs';
import TechStrip from '../../components/home/TechStrip';
import CaseStudiesPreview from '../../components/home/CaseStudiesPreview';
import FinalCTA from '../../components/home/FinalCTA';

function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSnapshot />
      <WhyUs />
      <TechStrip />
      <CaseStudiesPreview />
      <FinalCTA />
    </>
  );
}

export default HomePage;
