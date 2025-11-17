import styles from './ServicesSnapshot.module.css';
import { Code2, Cloud, Smartphone, Palette, TestTube, Lightbulb } from 'lucide-react';

function ServicesSnapshot() {
  const services = [
    {
      title: 'Custom Product Development',
      icon: Code2,
      features: [
        'End-to-end product engineering',
        'Rapid MVP development',
        'Legacy system modernization'
      ]
    },
    {
      title: 'Mobile & Web Applications',
      icon: Smartphone,
      features: [
        'Native & cross-platform apps',
        'Progressive web applications',
        'Responsive web design'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      features: [
        'Cloud migration & optimization',
        'CI/CD pipeline setup',
        'Infrastructure as code'
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      features: [
        'User research & testing',
        'Interaction design',
        'Design system creation'
      ]
    },
    {
      title: 'QA & Test Automation',
      icon: TestTube,
      features: [
        'Automated testing frameworks',
        'Performance testing',
        'Quality assurance processes'
      ]
    },
    {
      title: 'Consulting & Architecture',
      icon: Lightbulb,
      features: [
        'Technical strategy planning',
        'System architecture design',
        'Technology evaluation'
      ]
    }
  ];

  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>What we do</p>
          <h2 className={styles.heading}>
            Services built for shipping real products.
          </h2>
          <p className={styles.subtitle}>
            From initial concept to production deployment, we provide comprehensive technology solutions that drive business results and user satisfaction.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>
                  {service.title}
                </h3>
                <ul className={styles.featureList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSnapshot;
