import styles from './ContactPage.module.css';
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Bot,
  Send,
  ArrowRight,
  Clock,
  Shield
} from 'lucide-react';

function ContactPage() {
  return (
    <main className={styles.contactPage}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>Contact · Entolic Systems</p>
            <h1 className={styles.heroHeading}>
              Let&apos;s Build Your Next Product Together.
            </h1>
            <p className={styles.heroSubtitle}>
              Share your idea, product roadmap, or current challenges. Our team will get
              back within 24 hours with the next best steps.
            </p>

            <div className={styles.heroMetaRow}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot} />
                <span>Average response time · under 24 hours</span>
              </div>
              <div className={styles.heroMetaText}>
                Product-minded engineers, designers, and architects ready to plug into
                your roadmap.
              </div>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statLabel}>Time Zones Covered</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>Support Availability</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Projects Consulted</div>
              </div>
            </div>

            <div className={styles.heroHighlights}>
              <div className={styles.heroHighlight}>
                <div className={styles.heroHighlightIconWrapper}>
                  <Shield className={styles.heroHighlightIcon} />
                </div>
                <div className={styles.heroHighlightText}>
                  <h3>Enterprise-ready</h3>
                  <p>Security, NDAs, and compliance-first engagement.</p>
                </div>
              </div>
              <div className={styles.heroHighlight}>
                <div className={styles.heroHighlightIconWrapper}>
                  <Clock className={styles.heroHighlightIcon} />
                </div>
                <div className={styles.heroHighlightText}>
                  <h3>Fast onboarding</h3>
                  <p>Kickoff in days, not months, once we align.</p>
                </div>
              </div>
              <div className={styles.heroHighlight}>
                <div className={styles.heroHighlightIconWrapper}>
                  <MessageCircle className={styles.heroHighlightIcon} />
                </div>
                <div className={styles.heroHighlightText}>
                  <h3>Clear communication</h3>
                  <p>Dedicated Slack/Teams channels and weekly syncs.</p>
                </div>
              </div>
              <div className={styles.heroHighlight}>
                <div className={styles.heroHighlightIconWrapper}>
                  <Bot className={styles.heroHighlightIcon} />
                </div>
                <div className={styles.heroHighlightText}>
                  <h3>AI-first mindset</h3>
                  <p>We bake AI into workflows where it truly adds value.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Get in touch</p>
            <h2 className={styles.sectionHeading}>Tell us about your project</h2>
            <p className={styles.sectionSubtitle}>
              Fill out the form or use the direct contact details. We&apos;ll review your
              requirements and schedule a discovery call.
            </p>
          </div>

          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formCard}>
              <form
                className={styles.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  // integrate with backend / form tool later
                }}
              >
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Alex Sharma"
                      required
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="email">Work email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="role">Role</label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      placeholder="Founder, Product Lead, CTO…"
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label htmlFor="projectType">Project type</label>
                    <select id="projectType" name="projectType" defaultValue="">
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="new-product">New product build</option>
                      <option value="modernization">Modernize existing system</option>
                      <option value="team-augmentation">Team augmentation</option>
                      <option value="consulting">Architecture / consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {/* <div className={styles.formField}>
                    <label htmlFor="budget">Indicative budget</label>
                    <select id="budget" name="budget" defaultValue="">
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option value="10-25">USD 10k – 25k</option>
                      <option value="25-50">USD 25k – 50k</option>
                      <option value="50-100">USD 50k – 100k</option>
                      <option value="100+">USD 100k+</option>
                    </select>
                  </div> */}
                </div>

                <div className={styles.formField}>
                  <label htmlFor="message">Project details</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share a short brief: current context, goals, timelines, and any links to existing products or documentation."
                    required
                  />
                </div>

                <div className={styles.formFooterRow}>
                  <label className={styles.checkboxLabel}>
                    <input type="checkbox" name="nda" />
                    <span>
                      I&apos;d like to sign an NDA before sharing sensitive information.
                    </span>
                  </label>
                </div>

                <div className={styles.formActions}>
                  <button type="submit" className={styles.submitButton}>
                    Submit inquiry
                    <Send className={styles.submitIcon} />
                  </button>

                  <p className={styles.formSmallText}>
                    By submitting this form you agree to be contacted about your request.
                  </p>
                </div>
              </form>
            </div>

            {/* Contact Info + Map */}
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Direct contact</h3>
              <p className={styles.infoDescription}>
                Prefer email or a quick call? Reach out using the details below and we&apos;ll
                route you to the right squad.
              </p>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Mail className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Email</span>
                    <a href="mailto:info@entolicsystems.com" className={styles.infoValue}>
                      info@entolicsystems.com
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <Phone className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Phone / WhatsApp</span>
                    <a href="tel:+919371865959" className={styles.infoValue}>
                      +91 9371865959
                    </a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconWrapper}>
                    <MapPin className={styles.infoIcon} />
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>Office</span>
                    <a
                      href="https://www.google.com/maps/place/Office+No.+313,+City+Center+Building,+Rajiv+Gandhi+Infotech+Park,+Hinjewadi+Phase+1,+Pune,+MH,+India+-+411057"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.infoValue}
                      style={{ textDecoration: 'none' }}
                    >
                      <address style={{ fontStyle: 'normal' }}>
                        Office No. 313, City Center Building, Rajiv Gandhi Infotech Park,
                        <br />
                        Hinjewadi Phase 1, Pune, MH, India - 411057
                      </address>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.mapCard}>
                <div className={styles.mapHeader}>
                  <span>Office location</span>
                  <a
                    href="https://www.google.com/maps/place/Hinjawadi,+Pune,+Pimpri-Chinchwad,+Maharashtra/@18.599399249999998,73.71721905,15z"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.mapLink}
                  >
                    Open in Maps
                    <ArrowRight className={styles.mapIcon} />
                  </a>
                </div>
                <div className={styles.mapPlaceholder}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30251.49686941739!2d73.71721905!3d18.599399249999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc048041bef%3A0xd0c9eb5ac3c3dee5!2sHinjawadi%2C%20Pune%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1763323192849!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{border: 0, borderRadius: '8px'}}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className={styles.infoFootnote}>
                <span>Working hours</span>
                <p>Mon – Fri · 10:00 – 19:00 IST · Flexible for global time zones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat & AI Chatbot */}
      <section className={styles.chatSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Live chat · AI assistant</p>
            <h2 className={styles.sectionHeading}>Talk to us in real time</h2>
            <p className={styles.sectionSubtitle}>
              Choose between a human-led live chat or an AI assistant for quick answers
              about services, timelines, and capabilities.
            </p>
          </div>

          <div className={styles.chatGrid}>
            <div className={styles.chatCard}>
              <div className={styles.chatIconWrapper}>
                <MessageCircle className={styles.chatIcon} />
              </div>
              <h3 className={styles.chatTitle}>Live project chat</h3>
              <p className={styles.chatDescription}>
                Connect with our team for project scoping, timelines, and engagement
                models. Ideal when you&apos;re ready to discuss specifics.
              </p>
              <ul className={styles.chatList}>
                <li>Human team member within business hours</li>
                <li>Screen-share / demo friendly</li>
                <li>Follow-up summary over email</li>
              </ul>
              <button className={styles.chatButton} type="button">
                Start live chat
                <ArrowRight className={styles.chatButtonIcon} />
              </button>
            </div>

            <div className={styles.chatCard}>
              <div className={styles.chatIconWrapper}>
                <Bot className={styles.chatIcon} />
              </div>
              <h3 className={styles.chatTitle}>AI project assistant</h3>
              <p className={styles.chatDescription}>
                Ask questions about our services, tech stack, or case studies. Great for
                quick discovery before a full consultation.
              </p>
              <ul className={styles.chatList}>
                <li>Instant answers 24/7</li>
                <li>Understands services & capabilities</li>
                <li>Can collect context for the team</li>
              </ul>
              <button className={styles.chatButtonSecondary} type="button">
                Chat with AI assistant
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
