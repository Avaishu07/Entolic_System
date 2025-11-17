import styles from './ServicesPage.module.css';
import {
  Code2,
  Cloud,
  Smartphone,
  Palette,
  TestTube,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Gauge
} from 'lucide-react';

function ServicesPage() {
  const services = [
    {
      id: 'custom-development',
      title: 'Custom Product Development',
      icon: Code2,
      shortDesc: 'Transform your ideas into powerful digital products',
      description:
        'We build custom software solutions tailored to your business needs, from initial concept to market-ready products.',
      features: [
        'End-to-end product engineering',
        'Rapid MVP development in 4–8 weeks',
        'Legacy system modernization',
        'Scalable architecture design',
        'Microservices development',
        'API development & integration'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Go', '.NET'],
      badge: 'Flagship Service'
    },
    {
      id: 'mobile-web',
      title: 'Mobile & Web Applications',
      icon: Smartphone,
      shortDesc: 'Engaging experiences across all platforms',
      description:
        'Create stunning, high-performance applications that deliver exceptional user experiences on any device.',
      features: [
        'Native iOS & Android apps',
        'Cross-platform development (React Native, Flutter)',
        'Progressive Web Applications (PWA)',
        'Responsive web design',
        'Real-time applications',
        'E-commerce platforms'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'React', 'Vue.js'],
      badge: 'Experience-Led'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps Solutions',
      icon: Cloud,
      shortDesc: 'Scale seamlessly with modern cloud infrastructure',
      description:
        'Leverage cloud technologies and DevOps practices to accelerate delivery, improve reliability, and reduce costs.',
      features: [
        'Cloud migration & optimization',
        'Multi-cloud strategy & implementation',
        'CI/CD pipeline automation',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Kubernetes)',
        'Monitoring & observability setup'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
      badge: 'Cloud-Native'
    },
    {
      id: 'uiux-design',
      title: 'UI/UX Design Services',
      icon: Palette,
      shortDesc: 'Beautiful interfaces that users love',
      description:
        'Design intuitive, accessible, and visually stunning interfaces that enhance user satisfaction and drive engagement.',
      features: [
        'User research & persona development',
        'Information architecture',
        'Interactive prototyping',
        'Design system creation',
        'Usability testing',
        'Accessibility compliance (WCAG)'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Miro', 'Principle']
    },
    {
      id: 'qa-automation',
      title: 'QA & Test Automation',
      icon: TestTube,
      shortDesc: 'Ensure quality with comprehensive testing',
      description:
        'Implement robust testing strategies that catch bugs early, ensure reliability, and maintain code quality.',
      features: [
        'Automated testing frameworks',
        'Performance & load testing',
        'Security testing & penetration testing',
        'Test strategy & planning',
        'Continuous testing integration',
        'Quality assurance processes'
      ],
      technologies: ['Selenium', 'Cypress', 'Jest', 'JMeter', 'Postman', 'TestRail']
    },
    {
      id: 'consulting',
      title: 'IT Consulting & Architecture',
      icon: Lightbulb,
      shortDesc: 'Strategic guidance for technology decisions',
      description:
        'Get expert advice on technology strategy, architecture decisions, and digital transformation initiatives.',
      features: [
        'Technology stack evaluation',
        'System architecture design',
        'Digital transformation roadmap',
        'Technical debt assessment',
        'Performance optimization',
        'Security architecture review'
      ],
      technologies: ['Enterprise Architecture', 'Solution Design', 'Tech Assessment']
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'We analyze your business goals, technical requirements, and user needs to create a comprehensive project roadmap.',
      icon: Lightbulb
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description:
        'Our designers create intuitive interfaces and interactive prototypes to validate concepts before development.',
      icon: Palette
    },
    {
      number: '03',
      title: 'Development & Testing',
      description:
        'Agile development sprints with continuous testing ensure high-quality, reliable code delivery.',
      icon: Code2
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description:
        'Smooth production deployment followed by ongoing maintenance, monitoring, and optimization.',
      icon: Zap
    }
  ];

  const heroHighlights = [
    {
      icon: Shield,
      title: 'Enterprise-grade delivery',
      description: 'Security, compliance, and reliability baked into every engagement.'
    },
    {
      icon: Gauge,
      title: 'Time-to-market focus',
      description: 'MVPs in weeks, not months, without compromising quality.'
    },
    {
      icon: Users,
      title: 'Dedicated squads',
      description: 'Cross-functional teams aligned to your product vision.'
    },
    {
      icon: TrendingUp,
      title: 'Outcome driven',
      description: 'We measure success by the impact on your business metrics.'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Built-in security best practices and compliance standards.'
    },
    {
      icon: Gauge,
      title: 'High Performance',
      description: 'Optimized for speed, scalability, and reliability.'
    },
    {
      icon: Users,
      title: 'Dedicated Teams',
      description: 'Experienced professionals committed to your success.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Track Record',
      description: 'Successfully delivered 100+ projects across industries.'
    }
  ];

  return (
    <main className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Services · Entolic Systems</p>
            <h1 className={styles.heroHeading}>
              Enterprise IT Solutions &amp; Consulting Services
            </h1>
            <p className={styles.heroSubtitle}>
              Partner with us to build scalable, secure, and innovative technology solutions
              that transform your business and accelerate digital growth.
            </p>

            <div className={styles.heroMetaRow}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                <span>End-to-end product engineering partner</span>
              </div>
              <div className={styles.heroMetaText}>
                From discovery to long-term support, we plug in where your team needs us.
              </div>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Projects Delivered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>Enterprise Clients</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>98%</div>
                <div className={styles.statLabel}>Client Satisfaction</div>
              </div>
            </div>

            <div className={styles.heroHighlights}>
              {heroHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className={styles.heroHighlight}>
                    <div className={styles.heroHighlightIconWrapper}>
                      <Icon className={styles.heroHighlightIcon} />
                    </div>
                    <div className={styles.heroHighlightText}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Our Expertise</p>
            <h2 className={styles.sectionHeading}>Comprehensive IT Services</h2>
            <p className={styles.sectionSubtitle}>
              From strategy to execution, we provide end-to-end technology solutions across
              the full product lifecycle.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.id} className={styles.serviceCard}>
                  <div className={styles.serviceCardHeader}>
                    <div className={styles.serviceIconRow}>
                      <div className={styles.serviceIconWrapper}>
                        <Icon className={styles.serviceIcon} />
                      </div>
                      {service.badge && (
                        <span className={styles.serviceBadge}>{service.badge}</span>
                      )}
                    </div>

                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceShortDesc}>{service.shortDesc}</p>
                  </div>

                  <div className={styles.serviceCardBody}>
                    <p className={styles.serviceDescription}>{service.description}</p>

                    <ul className={styles.featureList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className={styles.feature}>
                          <CheckCircle2 className={styles.checkIcon} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.techStack}>
                      <div className={styles.techLabel}>Tech stack</div>
                      <div className={styles.techTags}>
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className={styles.techTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={styles.serviceCardFooter}>
                    <a href="#contact" className={styles.learnMore}>
                      Discuss this service
                      <ArrowRight className={styles.arrowIcon} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Our Approach</p>
            <h2 className={styles.sectionHeading}>Proven Delivery Process</h2>
            <p className={styles.sectionSubtitle}>
              A structured, transparent delivery model that keeps your team in the loop at
              every milestone.
            </p>
          </div>

          <div className={styles.processGrid}>
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className={styles.processCard}>
                  <div className={styles.processNumber}>{step.number}</div>
                  <div className={styles.processIconWrapper}>
                    <Icon className={styles.processIcon} />
                  </div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDescription}>{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Why Entolic Systems</p>
            <h2 className={styles.sectionHeading}>Built on Excellence &amp; Innovation</h2>
            <p className={styles.sectionSubtitle}>
              We blend deep engineering expertise with product thinking to deliver outcomes
              that matter.
            </p>
          </div>

          <div className={styles.whyGrid}>
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={styles.whyCard}>
                  <div className={styles.whyIconWrapper}>
                    <Icon className={styles.whyIcon} />
                  </div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDescription}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaSubtitle}>
              Let&apos;s explore how our engineering teams can accelerate your roadmap and
              de-risk your next release.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.ctaButtonPrimary}>
                Start your project
                <ArrowRight className={styles.ctaIcon} />
              </a>
              <a href="/case-studies" className={styles.ctaButtonSecondary}>
                View case studies
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesPage;
