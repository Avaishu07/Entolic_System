import styles from './IndustriesPage.module.css';
import {
  Building2,
  ShoppingCart,
  HeartPulse,
  GraduationCap,
  Car,
  Wallet,
  ArrowRight,
} from 'lucide-react';

function IndustriesPage() {
  const industries = [
    {
      id: 'real-estate',
      icon: Building2,
      name: 'Real Estate',
      intro: 'Digital transformation for property management and sales.',
      challenges: [
        'Managing high volumes of property leads',
        'Keeping listings accurate and up to date',
        'Enabling remote property discovery and virtual tours',
        'Coordinating brokers, owners, and tenants',
        'Handling documents, agreements, and compliance digitally',
      ],
      solutions: [
        'End-to-end CRM systems for builders and brokers',
        'Property listing portals and internal inventory dashboards',
        '360° virtual tours and AR/VR-enabled walkthroughs',
        'Broker/agent mobile apps with task and lead tracking',
        'Digital contracts, e-sign workflows, and document management',
      ],
      success:
        'Increased lead-to-booking conversion by 45% for a Mumbai-based developer by centralizing leads and digitizing site visit workflows.',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      name: 'E-commerce & Retail',
      intro: 'Modern commerce experiences across web, mobile, and marketplaces.',
      challenges: [
        'Fragmented inventory across online and offline channels',
        'Cart abandonment and poor checkout experience',
        'Slow product discovery and irrelevant recommendations',
        'Scaling during festive and campaign spikes',
        'Integrating payments, logistics, and returns',
      ],
      solutions: [
        'Custom marketplace and D2C storefront development',
        'Optimized checkout flows with multiple payment options',
        'Personalized search and recommendation engines',
        'Auto-scaling cloud infrastructure for peak loads',
        'Integrated order, shipping, and returns management',
      ],
      success:
        'Improved repeat purchase rate by 30% for a Pune-based retailer by rebuilding their storefront and loyalty experience.',
    },
    {
      id: 'edtech',
      icon: GraduationCap,
      name: 'Education & EdTech',
      intro: 'Digital-first learning experiences for institutes and startups.',
      challenges: [
        'Engagement drop-off in online classes',
        'Managing courses, batches, and assessments',
        'Tracking learner progress and outcomes',
        'Supporting hybrid (online + classroom) delivery',
        'Secure content delivery and access control',
      ],
      solutions: [
        'Full-featured LMS platforms for schools and coaching institutes',
        'Live-class, recording, and notes management modules',
        'Assessment engines with auto-grading and analytics',
        'Parent/guardian dashboards and student progress reports',
        'Role-based access control and secure content streaming',
      ],
      success:
        'Enabled a Pune-based coaching brand to scale from 3 to 12 cities with a unified learning platform and analytics.',
    },
    {
      id: 'healthcare',
      icon: HeartPulse,
      name: 'Healthcare',
      intro: 'Patient-centric digital healthcare journeys for Indian hospitals & clinics.',
      challenges: [
        'Long patient wait times and manual appointment flows',
        'Fragmented patient records across departments',
        'Remote consultation and telemedicine workflows',
        'Regulatory and data privacy compliance',
        'Low adoption of digital tools by staff',
      ],
      solutions: [
        'Online appointment booking and queue management systems',
        'Electronic Health Record (EHR) platforms tailored for India',
        'Telemedicine portals and mobile apps with secure video consults',
        'Audit-ready data handling and compliance-by-design architecture',
        'User-friendly dashboards and workflows for doctors and staff',
      ],
      success:
        'Reduced walk-in queue times by 35% for a multi-speciality hospital by digitizing appointments and EMR access.',
    },
    {
      id: 'automotive',
      icon: Car,
      name: 'Automotive',
      intro: 'Digital experiences for dealers, OEMs, and mobility startups.',
      challenges: [
        'Managing leads from portals, walk-ins, and campaigns',
        'Pricing, offers, and stock visibility for dealers',
        'Used vehicle inspection and valuation journeys',
        'Coordinating test drives and service bookings',
        'Building trust with transparent customer communication',
      ],
      solutions: [
        'Dealer CRM dashboards and sales mobile apps',
        'New and used vehicle marketplace platforms',
        'Digital inspection, valuation, and bidding workflows',
        'Test drive scheduling, service booking, and reminders',
        'Customer portals with full vehicle history and offers',
      ],
      success:
        'Increased test-drive-to-sale conversion by 28% for a regional dealer network through a unified lead and booking layer.',
    },
    {
      id: 'fintech',
      icon: Wallet,
      name: 'Finance & FinTech',
      intro: 'Secure, compliant financial products built for Indian markets.',
      challenges: [
        'Complex onboarding and KYC flows',
        'Regulatory compliance across RBI, SEBI, and partners',
        'Fraud detection and risk scoring',
        'Integrating with banks, NBFCs, and payment gateways',
        'Explaining complex products to end customers',
      ],
      solutions: [
        'Digital onboarding and KYC journeys with e-sign and video KYC hooks',
        'Compliance-first architecture with audit trails and reporting',
        'Rule-based and ML-assisted fraud/risk scoring systems',
        'Payment gateway, UPI, and bank/NBFC integrations',
        'Customer-facing apps with clear product storytelling and UX',
      ],
      success:
        'Cut onboarding time from 3 days to 30 minutes for a lending startup with a fully digital KYC and eligibility flow.',
    },
  ];

  const handleScrollToIndustry = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className={styles.industriesPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Industries · Entolic Systems</p>
            <h1 className={styles.heroHeading}>Industry Solutions</h1>
            <p className={styles.heroSubtitle}>
              Specialized technology solutions tailored for different industries across India.
              We understand unique challenges and deliver targeted digital transformation.
            </p>

            <div className={styles.heroCtaRow}>
              <a href="/contact" className={styles.heroPrimaryCta}>
                Discuss your project
                <ArrowRight className={styles.heroCtaIcon} />
              </a>
              <p className={styles.heroFootnote}>
                Product, engineering, and design teams ready to plug into your roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview Grid */}
      <section className={styles.overviewSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Industries Overview</p>
            <h2 className={styles.sectionHeading}>Where We Create Impact</h2>
            <p className={styles.sectionSubtitle}>
              Explore how we partner with businesses across key sectors to design, build, and
              scale digital products that work in the Indian context.
            </p>
          </div>

          <div className={styles.industriesGrid}>
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  type="button"
                  className={styles.industryCard}
                  onClick={() => handleScrollToIndustry(industry.id)}
                >
                  <div className={styles.industryIconWrapper}>
                    <Icon className={styles.industryIcon} />
                  </div>
                  <h3 className={styles.industryTitle}>{industry.name}</h3>
                  <p className={styles.industryIntro}>{industry.intro}</p>
                  <div className={styles.industryMetaRow}>
                    <span className={styles.industryLink}>
                      View details
                      <ArrowRight className={styles.industryLinkIcon} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Industry Blocks */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          {industries.map((industry) => (
            <article
              key={industry.id}
              id={industry.id}
              className={styles.industryDetailBlock}
            >
              <header className={styles.industryDetailHeader}>
                <div className={styles.industryDetailIconWrapper}>
                  <industry.icon className={styles.industryDetailIcon} />
                </div>
                <div>
                  <h2 className={styles.industryDetailTitle}>{industry.name}</h2>
                  <p className={styles.industryDetailIntro}>{industry.intro}</p>
                </div>
              </header>

              <div className={styles.industryDetailGrid}>
                {/* Challenges */}
                <div className={styles.detailColumn}>
                  <h3 className={styles.detailHeading}>Key Challenges</h3>
                  <ul className={styles.detailList}>
                    {industry.challenges.map((item) => (
                      <li key={item} className={styles.detailListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className={styles.detailColumn}>
                  <h3 className={styles.detailHeading}>Our Solutions</h3>
                  <ul className={styles.detailList}>
                    {industry.solutions.map((item) => (
                      <li key={item} className={styles.detailListItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Success + CTA */}
                <div className={styles.detailColumn}>
                  <h3 className={styles.detailHeading}>Success Story</h3>
                  <p className={styles.successText}>{industry.success}</p>
                  <button
                    type="button"
                    className={styles.industryCtaButton}
                    onClick={() => (window.location.href = '/contact')}
                  >
                    Discuss your {industry.name.toLowerCase()} project
                    <ArrowRight className={styles.industryCtaIcon} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Don’t See Your Industry? */}
      <section className={styles.moreIndustriesSection}>
        <div className={styles.container}>
          <div className={styles.moreIndustriesCard}>
            <div>
              <h2 className={styles.moreIndustriesHeading}>Don&apos;t See Your Industry?</h2>
              <p className={styles.moreIndustriesText}>
                We work with businesses across all sectors—from early-stage startups to
                established enterprises. Let&apos;s create a customized solution for your
                specific needs.
              </p>
            </div>
            <a href="/contact" className={styles.moreIndustriesButton}>
              Let&apos;s talk about your industry
              <ArrowRight className={styles.moreIndustriesIcon} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default IndustriesPage;
