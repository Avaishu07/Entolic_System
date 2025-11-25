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
      <div className="section-compact section-animated">
        <ServicesSnapshot />
      </div>
      <div className="section-compact section-animated">
        <WhyUs />
      </div>
      <div className="section-compact section-animated">
        <TechStrip />
      </div>
      <div className="section-compact section-animated">
        <CaseStudiesPreview />
      </div>
      <div className="section-compact section-animated">
        <FinalCTA />
      </div>
    </>
  );
}

export default HomePage;
