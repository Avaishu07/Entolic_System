import styles from './AboutPage.module.css';
import {
  Users,
  Target,
  Sparkles,
  Globe2
} from 'lucide-react';

function AboutPage() {
  const highlights = [
    {
      icon: Users,
      label: 'Cross-functional squads',
      text: 'Engineers, designers, and strategists working as one team.'
    },
    {
      icon: Target,
      label: 'Outcome-first mindset',
      text: 'We anchor every engagement to measurable business impact.'
    },
    {
      icon: Sparkles,
      label: 'Product craftsmanship',
      text: 'Pixel-perfect experiences backed by solid engineering.'
    },
    {
      icon: Globe2,
      label: 'Global delivery',
      text: 'Remote-native teams serving clients across time zones.'
    }
  ];

  const values = [
    {
      title: 'Build with intent',
      text: 'We don’t ship features for the sake of it. Every release is tied to a clear hypothesis and outcome.'
    },
    {
      title: 'Own the delivery',
      text: 'From discovery to production, we stay accountable for quality, timelines, and reliability.'
    },
    {
      title: 'Stay curious',
      text: 'We continuously explore new tools, stacks, and patterns to keep your products ahead of the curve.'
    }
  ];

  const pillars = [
    {
      title: 'Engineering Excellence',
      text: 'Modern architectures, clean code practices, and rigorous reviews on every project.'
    },
    {
      title: 'Design as a Differentiator',
      text: 'Interfaces that are not only beautiful, but intuitive, accessible, and conversion-focused.'
    },
    {
      title: 'Partnership, Not Vendor',
      text: 'We plug into your team, share context, and make decisions as if the product was our own.'
    }
  ];

  return (
    <main className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>About · Entolic Systems</p>
            <h1 className={styles.heroHeading}>
              Innovating the Infinite, One Product at a Time.
            </h1>
            <p className={styles.heroSubtitle}>
              Entolic Systems is a product engineering studio focused on helping startups
              and enterprises design, build, and scale digital products that actually ship.
            </p>

            <div className={styles.heroHighlights}>
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className={styles.heroHighlight}>
                    <div className={styles.heroHighlightIconWrapper}>
                      <Icon className={styles.heroHighlightIcon} />
                    </div>
                    <div className={styles.heroHighlightText}>
                      <h3>{item.label}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Story + Values */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyCard}>
              <p className={styles.eyebrow}>Who We Are</p>
              <h2 className={styles.sectionHeading}>
                A team of builders obsessed with real-world impact.
              </h2>
              <p className={styles.storyText}>
                Entolic Systems is a software development company committed to{' '}
                <span className={styles.highlight}>innovating the infinite</span>. We
                specialize in creating cutting-edge digital solutions for startups and
                enterprises, combining technical excellence with product thinking to ship
                products that make a real impact in the market.
              </p>
              <p className={styles.storyText}>
                Whether it&apos;s a greenfield MVP or modernizing a legacy platform, we
                plug in as an extension of your team—bringing strategy, UX, and engineering
                together under one roof.
              </p>
            </div>

            <div className={styles.valuesCard}>
              <p className={styles.eyebrow}>What Drives Us</p>
              <ul className={styles.valuesList}>
                {values.map((value) => (
                  <li key={value.title} className={styles.valueItem}>
                    <h3 className={styles.valueTitle}>{value.title}</h3>
                    <p className={styles.valueText}>{value.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>How We Work</p>
            <h2 className={styles.sectionHeading}>Our Delivery Pillars</h2>
            <p className={styles.sectionSubtitle}>
              The principles that shape every engagement—from first workshop to production launch.
            </p>
          </div>

          <div className={styles.pillarsGrid}>
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.pillarCard}>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default AboutPage;
