import styles from './Hero.module.css';
import { CheckCircle2, Shield } from 'lucide-react';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Animated Tech Background */}
      <div className={styles.techBackground}>
        <div className={styles.gridPattern}></div>
        <div className={styles.particles}>
          {[...Array(20)].map((_, i) => (
            <div key={i} className={styles.particle} style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
        <div className={styles.circuitLines}>
          <svg className={styles.circuit} viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.circuitPath1} d="M 0 400 Q 300 200, 600 400 T 1200 400" fill="none" strokeWidth="1" />
            <path className={styles.circuitPath2} d="M 0 300 Q 400 100, 800 300 T 1200 300" fill="none" strokeWidth="1" />
            <path className={styles.circuitPath3} d="M 100 0 Q 200 400, 300 800" fill="none" strokeWidth="1" />
            <path className={styles.circuitPath4} d="M 900 0 Q 1000 400, 1100 800" fill="none" strokeWidth="1" />
            <circle className={styles.circuitNode1} cx="300" cy="300" r="4" />
            <circle className={styles.circuitNode2} cx="600" cy="400" r="4" />
            <circle className={styles.circuitNode3} cx="900" cy="350" r="4" />
            <circle className={styles.circuitNode4} cx="200" cy="500" r="4" />
          </svg>
        </div>
        <div className={styles.floatingShapes}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.heroInner}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Innovating The Infinite.
            </h1>
            <p className={styles.subtitle}>
              Entolic Systems partners with startups and enterprises to design, build, and scale digital products that actually ship.
            </p>
            <div className={styles.ctaContainer}>
              <button className={styles.btnPrimary}>
                Book a Consultation
              </button>
              <button className={styles.btnSecondary}>
                View Services
              </button>
            </div>
            <div className={styles.socialProof}>
              <CheckCircle2 className={styles.socialProofIcon} />
              <span>Trusted by teams across fintech, SaaS, and e-commerce</span>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualCard}>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>50+</div>
                  <div className={styles.statLabel}>Projects Delivered</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>98%</div>
                  <div className={styles.statLabel}>Client Satisfaction</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>24/7</div>
                  <div className={styles.statLabel}>Support Available</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statValue}>5+</div>
                  <div className={styles.statLabel}>Years Experience</div>
                </div>
              </div>
            </div>

            <div className={styles.visualCard}>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <Shield className={styles.featureIcon} />
                  <span>Cloud-native architecture</span>
                </li>
                <li className={styles.featureItem}>
                  <Shield className={styles.featureIcon} />
                  <span>Enterprise-grade security</span>
                </li>
                <li className={styles.featureItem}>
                  <Shield className={styles.featureIcon} />
                  <span>Scalable solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
