import { useState } from 'react';
import styles from './CareersPage.module.css';

const openings = [
  {
    id: 'SWE-001',
    title: 'Full-Stack Engineer (React + Node)',
    location: 'Pune · Hybrid',
    type: 'Full-time',
    experience: '3–5 years',
    tags: ['Product Engineering', 'Cloud', 'Microservices'],
    overview:
      'You will join a cross-functional squad working on modern, cloud-native products for international clients.',
    summary:
      'Work with a product-focused squad to design, build, and ship full-stack features across React, Node, and cloud-native services.',
    responsibilities: [
      'Build new product features in React and Node.js with clean, testable code',
      'Collaborate with designers, PMs, and QA to refine requirements and UX flows',
      'Review pull requests and help maintain a clean, modular codebase',
      'Own services in production — monitoring, debugging, and performance tuning',
    ],
    requirements: [
      '3–5 years of experience with modern JavaScript/TypeScript',
      'Strong experience in React plus at least one backend framework (Node/Express/Nest)',
      'Good understanding of REST APIs, Git, and basic CI/CD pipelines',
      'Comfortable working with SQL/NoSQL databases and cloud platforms (AWS/Azure/GCP)',
    ],
    niceToHave: [
      'Experience with microservices, message queues, or event-driven systems',
      'Exposure to testing frameworks like Jest, React Testing Library, or Cypress',
    ],
    benefits: [
      'Hybrid work setup with flexible hours',
      'Learning budget for courses, books, and certifications',
      'Opportunities to work directly with founders and product leaders',
    ],
  },
  {
    id: 'UX-002',
    title: 'Product Designer – SaaS',
    location: 'Remote · India',
    type: 'Full-time',
    experience: '2–4 years',
    tags: ['UX/UI', 'Design Systems', 'Prototyping'],
    overview:
      'You will design end-to-end product experiences for B2B and SaaS products with close collaboration with product and engineering.',
    summary:
      'Lead UX and UI for web applications, from discovery workshops through final handoff to engineering.',
    responsibilities: [
      'Run discovery sessions and translate business goals into user journeys, flows, and wireframes',
      'Design high-fidelity UI screens and interactive prototypes in Figma',
      'Maintain and evolve a shared design system with reusable components and tokens',
      'Collaborate with developers to ensure smooth design handoff and implementation',
    ],
    requirements: [
      '2–4 years designing web or SaaS products',
      'Strong portfolio demonstrating UX process and visual design craft',
      'Hands-on experience with Figma (or similar) and design systems',
      'Ability to work with constraints and ship incremental improvements',
    ],
    niceToHave: [
      'Experience with user interviews and usability testing',
      'Basic familiarity with HTML/CSS to communicate effectively with engineers',
    ],
    benefits: [
      'Fully remote within India',
      'Involvement from discovery to launch for key product initiatives',
      'Design critiques and mentorship from senior designers',
    ],
  },
  {
    id: 'DEVOPS-003',
    title: 'DevOps & Cloud Engineer',
    location: 'Pune · On-site',
    type: 'Full-time',
    experience: '3+ years',
    tags: ['AWS', 'CI/CD', 'Kubernetes'],
    overview:
      'You will help our teams ship reliably by owning CI/CD, observability, and cloud infrastructure for multiple projects.',
    summary:
      'Own CI/CD, observability, and cloud infrastructure for multiple customer projects.',
    responsibilities: [
      'Design and maintain CI/CD pipelines for Node/React and backend services',
      'Provision and manage cloud infrastructure using IaC tools (Terraform/CloudFormation)',
      'Set up logging, monitoring, and alerting for production workloads',
      'Collaborate with engineers to improve deployment reliability and performance',
    ],
    requirements: [
      '3+ years of experience with AWS/Azure/GCP and Linux-based systems',
      'Hands-on with Docker, Kubernetes, and at least one IaC tool',
      'Good understanding of networking, security groups, and basic SRE practices',
    ],
    niceToHave: [
      'Experience with Prometheus, Grafana, ELK, or similar observability stacks',
      'Exposure to security best practices and hardening cloud workloads',
    ],
    benefits: [
      'On-site role with close collaboration with engineering and leadership',
      'Opportunity to define DevOps standards and tooling across the company',
      'Support for certifications in cloud platforms and Kubernetes',
    ],
  },
];

function CareersPage() {
  const [activeJobId, setActiveJobId] = useState(null);

  const toggleJobDetails = (id) => {
    setActiveJobId((prev) => (prev === id ? null : id));
  };

  return (
    <main className={styles.careersPage}>
      <div className="page-container">
        <section className={styles.section}>
          <p className={styles.eyebrow}>Careers · Entolic Systems</p>
          <h1 className={styles.heading}>Build the future of digital innovation with us</h1>
          <p className={styles.description}>
            Join a team that blends engineering, design, and strategy to build products that
            actually ship. We&apos;re always looking for curious, product-minded people who love
            solving real problems.
          </p>
        </section>

        <section className={styles.openingsSection}>
          <h2 className={styles.openingsHeading}>Current openings</h2>
          <div className={styles.openingsGrid}>
            {openings.map((job, index) => (
              <article
                key={job.id}
                className={styles.jobCard}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <header className={styles.jobHeader}>
                  <span className={styles.jobId}>{job.id}</span>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                </header>
                <div className={styles.jobMetaRow}>
                  <span className={styles.jobPill}>{job.location}</span>
                  <span className={styles.jobPill}>{job.type}</span>
                  <span className={styles.jobPill}>{job.experience}</span>
                </div>
                <div className={styles.jobTagsRow}>
                  {job.tags.map((tag) => (
                    <span key={tag} className={styles.jobTag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className={styles.jobButton}
                  onClick={() => toggleJobDetails(job.id)}
                >
                  {activeJobId === job.id ? 'Hide role details' : 'View role details'}
                </button>

                {activeJobId === job.id && (
                  <div className={styles.jobDetails}>
                    {job.overview && (
                      <p className={styles.jobSummary}>{job.overview}</p>
                    )}

                    {job.summary && (
                      <p className={styles.jobSummary}>{job.summary}</p>
                    )}

                    {job.responsibilities?.length > 0 && (
                      <div className={styles.jobDetailsBlock}>
                        <h4>What you&apos;ll do</h4>
                        <ul>
                          {job.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.requirements?.length > 0 && (
                      <div className={styles.jobDetailsBlock}>
                        <h4>What we&apos;re looking for</h4>
                        <ul>
                          {job.requirements.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.niceToHave?.length > 0 && (
                      <div className={styles.jobDetailsBlock}>
                        <h4>Nice to have</h4>
                        <ul>
                          {job.niceToHave.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {job.benefits?.length > 0 && (
                      <div className={styles.jobDetailsBlock}>
                        <h4>What you get</h4>
                        <ul>
                          {job.benefits.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default CareersPage;
