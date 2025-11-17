import React, { useMemo, useState } from 'react';
import styles from './CaseStudiesPage.module.css';
import {
  ArrowRight,
  Building2,
  Globe2,
  LineChart,
  Smartphone,
  Cloud,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';

function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'fintech-superapp',
      title: 'Scaling a Fintech Super App for 3M+ Users',
      client: 'Stealth Fintech Startup',
      industry: 'Fintech · B2C',
      location: 'India',
      summary:
        'Re-architected a rapidly growing fintech super app to handle 10x traffic while improving reliability and feature delivery speed.',
      problem:
        'The existing monolith struggled with performance spikes during market hours and slowed down new feature rollouts.',
      approach:
        'Introduced a modular microservices architecture, implemented event-driven flows, and built an internal design system for consistent UX.',
      outcome:
        'Improved checkout speed, reduced downtime during peak trading windows, and enabled parallel product squads to ship faster.',
      beforeSnapshot: 'Slow releases, peak-hour crashes, and an overloaded monolith.',
      afterSnapshot: 'Modular architecture, faster releases, and stable peak trading sessions.',
      services: ['Product Engineering', 'Cloud & DevOps', 'Design System'],
      metrics: [
        { label: 'Release frequency', value: '4x' },
        { label: 'Crash rate', value: '-63%' },
        { label: 'Time-to-market', value: '-45%' }
      ],
      tags: ['Microservices', 'Kubernetes', 'Design System']
    },
    {
      id: 'logistics-platform',
      title: 'Real-time Visibility for a Logistics Network',
      client: 'Logistics Operator',
      industry: 'Logistics · B2B',
      location: 'Middle East',
      summary:
        'Built a real-time shipment tracking platform that unified data from drivers, hubs, and partners into a single pane of glass.',
      problem:
        'Dispatch teams lacked end-to-end visibility, leading to SLA breaches, manual follow-ups, and unhappy enterprise customers.',
      approach:
        'Created a real-time tracking layer, ops dashboard, and exception workflows powered by event streams and geospatial data.',
      outcome:
        'Reduced SLA breaches, improved on-time deliveries, and gave ops leadership accurate, real-time performance insights.',
      beforeSnapshot: 'Siloed tools, manual calls, and reactive operations.',
      afterSnapshot: 'Live shipment view, proactive alerts, and confident SLA management.',
      services: ['Web & Mobile Apps', 'Platform Engineering'],
      metrics: [
        { label: 'On-time delivery', value: '+21%' },
        { label: 'Ops escalations', value: '-38%' },
        { label: 'Manual calls', value: '-55%' }
      ],
      tags: ['Real-time', 'Maps', 'Event Streaming']
    },
    {
      id: 'saas-analytics',
      title: 'Revamping Analytics for a SaaS Product Suite',
      client: 'Enterprise SaaS Company',
      industry: 'SaaS · B2B',
      location: 'North America',
      summary:
        'Redesigned the analytics experience across a suite of SaaS products to make insights discoverable and actionable.',
      problem:
        'Critical usage metrics were buried across multiple reports, and customers struggled to understand the value they were getting.',
      approach:
        'Ran product discovery, defined key success metrics, created a unified analytics UX, and implemented a modern data pipeline.',
      outcome:
        'Improved feature adoption, increased product stickiness, and reduced support tickets related to reporting.',
      beforeSnapshot: 'Fragmented reports and low visibility into product value.',
      afterSnapshot: 'Unified analytics, clearer value stories, and better product decisions.',
      services: ['Product Discovery', 'UX/UI Design', 'Data Engineering'],
      metrics: [
        { label: 'Feature adoption', value: '+30%' },
        { label: 'Churn risk accounts', value: '-17%' },
        { label: 'Support tickets', value: '-25%' }
      ],
      tags: ['Product Analytics', 'UX', 'Data Pipeline']
    }
  ];

  const [industryFilter, setIndustryFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');

  const industryOptions = useMemo(
    () => ['All', ...Array.from(new Set(caseStudies.map((c) => c.industry)))],
    [caseStudies]
  );

  const serviceOptions = useMemo(
    () => [
      'All',
      ...Array.from(
        new Set(
          caseStudies
            .map((c) => c.services)
            .flat()
        )
      )
    ],
    [caseStudies]
  );

  const filteredCaseStudies = useMemo(
    () =>
      caseStudies.filter((study) => {
        const matchIndustry =
          industryFilter === 'All' || study.industry === industryFilter;
        const matchService =
          serviceFilter === 'All' || study.services.includes(serviceFilter);
        return matchIndustry && matchService;
      }),
    [caseStudies, industryFilter, serviceFilter]
  );

  const themes = [
    {
      icon: Smartphone,
      title: 'Product engineering across platforms',
      text: 'From mobile apps to internal tools and platforms, our squads cover the full stack end to end.'
    },
    {
      icon: Cloud,
      title: 'Cloud-native by default',
      text: 'We design for scale, reliability, and observability from day zero—not as an afterthought.'
    },
    {
      icon: Users,
      title: 'Embedded with your team',
      text: 'We work in your rituals, tools, and time zones so collaboration feels like one extended squad.'
    }
  ];

  return (
    <main className={styles.caseStudiesPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <p className={styles.heroEyebrow}>Case Studies · Entolic Systems</p>
              <h1 className={styles.heroHeading}>Real products, real outcomes.</h1>
              <p className={styles.heroSubtitle}>
                A portfolio of how we partner with startups and enterprises to design, build,
                and scale digital products that move the needle on real business metrics.
              </p>

              <div className={styles.heroMetaRow}>
                <div className={styles.heroBadge}>
                  <span className={styles.heroBadgeDot} />
                  <span>Filterable by industry &amp; service type</span>
                </div>
                <div className={styles.heroMetaText}>
                  Before/after views, animated KPIs, and clear, outcome-first stories.
                </div>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Domains Served</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>3M+</div>
                  <div className={styles.statLabel}>End Users Impacted</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>10–120</div>
                  <div className={styles.statLabel}>Week Engagements</div>
                </div>
              </div>
            </div>

            <div className={styles.heroHighlightsColumn}>
              <div className={styles.heroHighlights}>
                <div className={styles.heroHighlight}>
                  <Building2 className={styles.heroHighlightIcon} />
                  <div className={styles.heroHighlightText}>
                    <h3>Startups to enterprises</h3>
                    <p>We adapt our engagement model to fit your stage, stack, and roadmap.</p>
                  </div>
                </div>
                <div className={styles.heroHighlight}>
                  <Globe2 className={styles.heroHighlightIcon} />
                  <div className={styles.heroHighlightText}>
                    <h3>Global delivery</h3>
                    <p>Remote-native teams with experience across India, Europe, and North America.</p>
                  </div>
                </div>
                <div className={styles.heroHighlight}>
                  <LineChart className={styles.heroHighlightIcon} />
                  <div className={styles.heroHighlightText}>
                    <h3>Outcome-first mindset</h3>
                    <p>We anchor success to metrics like activation, retention, and time-to-market.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies + Filters */}
      <section className={styles.studiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Featured Work</p>
            <h2 className={styles.sectionHeading}>Selected Case Studies</h2>
            <p className={styles.sectionSubtitle}>
              Filter by industry and service type to explore the kind of problems we solve
              and the impact we deliver.
            </p>
          </div>

          <div className={styles.studiesLayout}>
            {/* Filter bar */}
            <aside className={styles.filtersPanel}>
              <div className={styles.filterGroup}>
                <span className={styles.filterLabel}>Industry</span>
                <div className={styles.filterChips}>
                  {industryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        option === industryFilter
                          ? `${styles.filterChip} ${styles.filterChipActive}`
                          : styles.filterChip
                      }
                      onClick={() => setIndustryFilter(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.filterGroup}>
                <span className={styles.filterLabel}>Service</span>
                <div className={styles.filterChips}>
                  {serviceOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={
                        option === serviceFilter
                          ? `${styles.filterChip} ${styles.filterChipActive}`
                          : styles.filterChip
                      }
                      onClick={() => setServiceFilter(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Cards */}
            <div className={styles.studiesGrid}>
              {filteredCaseStudies.length === 0 && (
                <div className={styles.emptyState}>
                  <p>No case studies match this combination yet.</p>
                  <span>Try selecting a different industry or service.</span>
                </div>
              )}

              {filteredCaseStudies.map((study) => (
                <article key={study.id} className={styles.studyCard}>
                  <header className={styles.studyHeader}>
                    <div className={styles.studyMetaTop}>
                      <span className={styles.studyIndustry}>{study.industry}</span>
                      <span className={styles.studyLocation}>{study.location}</span>
                    </div>
                    <h3 className={styles.studyTitle}>{study.title}</h3>
                    <p className={styles.studyClient}>{study.client}</p>
                    <p className={styles.studySummary}>{study.summary}</p>
                  </header>

                  <div className={styles.beforeAfter}>
                    <div className={styles.beforeBlock}>
                      <span className={styles.beforeLabel}>Before</span>
                      <p className={styles.beforeText}>{study.beforeSnapshot}</p>
                    </div>
                    <div className={styles.afterBlock}>
                      <span className={styles.afterLabel}>After</span>
                      <p className={styles.afterText}>{study.afterSnapshot}</p>
                    </div>
                  </div>

                  <div className={styles.studyBody}>
                    <div className={styles.studyColumn}>
                      <h4 className={styles.studyLabel}>The Challenge</h4>
                      <p className={styles.studyText}>{study.problem}</p>
                    </div>
                    <div className={styles.studyColumn}>
                      <h4 className={styles.studyLabel}>Our Approach</h4>
                      <p className={styles.studyText}>{study.approach}</p>
                    </div>
                    <div className={styles.studyColumn}>
                      <h4 className={styles.studyLabel}>Impact</h4>
                      <p className={styles.studyText}>{study.outcome}</p>
                    </div>
                  </div>

                  <div className={styles.studyFooter}>
                    <div className={styles.metricsRow}>
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className={styles.metricCard}>
                          <span className={styles.metricValue}>{metric.value}</span>
                          <span className={styles.metricLabel}>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className={styles.studyMetaBottom}>
                      <div className={styles.servicesRow}>
                        <Clock className={styles.servicesIcon} />
                        <span className={styles.servicesLabel}>Services</span>
                        <span className={styles.servicesList}>
                          {study.services.join(' · ')}
                        </span>
                      </div>
                      {study.tags && (
                        <div className={styles.tagsRow}>
                          {study.tags.map((tag) => (
                            <span key={tag} className={styles.tag}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className={styles.studyActions}>
                      <button type="button" className={styles.primaryLink}>
                        Talk through a similar project
                        <ArrowRight className={styles.linkIcon} />
                      </button>
                      <button type="button" className={styles.secondaryLink}>
                        Request detailed deck
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Themes / How we partner */}
      <section className={styles.themesSection}>
        <div className={styles.container}>
          <div className={styles.themesGrid}>
            <div className={styles.themesIntro}>
              <p className={styles.eyebrow}>How We Partner</p>
              <h2 className={styles.sectionHeading}>
                Designed for long-term product journeys.
              </h2>
              <p className={styles.sectionSubtitle}>
                Most engagements start as focused sprints and evolve into multi-year
                partnerships. We plug into your roadmap at the right altitude—from discovery
                and MVP to platform rewrites.
              </p>
              <div className={styles.themesBadge}>
                <Sparkles className={styles.themesBadgeIcon} />
                <span>Discovery sprints · MVPs · Scale-ups · Platform modernization</span>
              </div>
            </div>

            <div className={styles.themesCards}>
              {themes.map((theme) => {
                const Icon = theme.icon;
                return (
                  <article key={theme.title} className={styles.themeCard}>
                    <div className={styles.themeIconWrapper}>
                      <Icon className={styles.themeIcon} />
                    </div>
                    <h3 className={styles.themeTitle}>{theme.title}</h3>
                    <p className={styles.themeText}>{theme.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaHeading}>Have a challenge that looks similar?</h2>
            <p className={styles.ctaSubtitle}>
              Share a brief about your product, current stack, and roadmap. We&apos;ll respond
              with a proposed approach, timelines, and how a squad from Entolic Systems
              would plug in.
            </p>
            <div className={styles.ctaButtons}>
              <a href="/contact" className={styles.ctaButtonPrimary}>
                Schedule a working session
                <ArrowRight className={styles.ctaIcon} />
              </a>
              <a href="/contact?type=rfp" className={styles.ctaButtonSecondary}>
                Send us an RFP / brief
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CaseStudiesPage;
