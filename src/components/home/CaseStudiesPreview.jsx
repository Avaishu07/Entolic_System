import styles from './CaseStudiesPreview.module.css';
import { ArrowRight } from 'lucide-react';

function CaseStudiesPreview() {
  const caseStudies = [
    {
      client: 'FinTech Global',
      industry: 'Financial Services',
      problem: 'Legacy payment system causing slow transaction processing',
      solution: 'Migrated to cloud-native microservices architecture',
      outcome: 'Reduced transaction time by 70% and improved reliability'
    },
    {
      client: 'HealthCare Plus',
      industry: 'Healthcare',
      problem: 'Need for HIPAA-compliant patient management system',
      solution: 'Built secure mobile app with end-to-end encryption',
      outcome: 'Successfully serving 500K+ patients with 99.9% uptime'
    },
    {
      client: 'RetailMax',
      industry: 'E-commerce',
      problem: 'Low customer engagement and conversion rates',
      solution: 'Implemented AI-powered recommendation engine',
      outcome: 'Increased sales by 45% and customer retention by 60%'
    }
  ];

  return (
    <section id="case-studies" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Case studies</p>
          <h2 className={styles.heading}>
            Recent work & impact.
          </h2>
          <p className={styles.subtitle}>
            A snapshot of how we help teams ship faster and safer.
          </p>
        </div>

        <div className={styles.grid}>
          {caseStudies.map((study, index) => (
            <article key={index} className={styles.card}>
              <span className={styles.industry}>
                {study.industry}
              </span>
              <h3 className={styles.client}>
                {study.client}
              </h3>

              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Problem</span>
                  <p className={styles.text}>{study.problem}</p>
                </div>
                <div className={styles.arrow}>↓</div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Solution</span>
                  <p className={styles.text}>{study.solution}</p>
                </div>
                <div className={styles.arrow}>↓</div>
                <div className={styles.detailItem}>
                  <span className={styles.label}>Outcome</span>
                  <p className={styles.text}>{study.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className={styles.viewAllBtn}>
            View all case studies
            <ArrowRight className={styles.btnIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesPreview;
