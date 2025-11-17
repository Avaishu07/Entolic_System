import styles from './WhyUs.module.css';
import { CheckCircle2, Rocket, MessageCircle, Handshake } from 'lucide-react';

function WhyUs() {
  const values = [
    {
      title: 'Delivery you can trust',
      icon: CheckCircle2,
      points: [
        'On-time project completion',
        'Transparent progress tracking',
        'Quality-first approach'
      ]
    },
    {
      title: 'Scalable from day one',
      icon: Rocket,
      points: [
        'Future-proof architecture',
        'Performance optimization',
        'Growth-ready infrastructure'
      ]
    },
    {
      title: 'Clear communication',
      icon: MessageCircle,
      points: [
        'Regular status updates',
        'Dedicated project managers',
        'Collaborative approach'
      ]
    },
    {
      title: 'Long-term partnerships',
      icon: Handshake,
      points: [
        'Ongoing support & maintenance',
        'Strategic technology guidance',
        'Post-launch optimization'
      ]
    }
  ];

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Why Entolic Systems</p>
          <h2 className={styles.heading}>
            Focused on outcomes, not just delivery.
          </h2>
        </div>
        <div className={styles.grid}>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>
                  {value.title}
                </h3>
                <ul className={styles.pointsList}>
                  {value.points.map((point, idx) => (
                    <li key={idx} className={styles.point}>
                      {point}
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

export default WhyUs;
