import styles from './LegalPages.module.css';

function CookiePolicyPage() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Legal · Cookie Policy</p>
            <h1 className={styles.heroHeading}>Cookie Policy</h1>
            <p className={styles.heroSubtitle}>
              This sample cookie policy explains how Entolic Systems may use cookies and
              similar technologies on this website.
            </p>
            <div className={styles.metaRow}>
              <span>Last updated: 01 November 2025</span>
              <span>·</span>
              <span>Placeholder copy for demonstration</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentInner}>
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>1. What are cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit a
                website. They help remember your preferences and improve your browsing
                experience.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>2. How we may use cookies</h2>
              <p className={styles.sectionDescription}>
                On this website, cookies may be used for basic functionality and
                analytics.
              </p>
              <ul>
                <li>Remembering basic settings such as preferred language or region.</li>
                <li>Understanding how visitors navigate the site to improve content.</li>
                <li>Keeping sessions active during form submissions or logins.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>3. Managing cookies</h2>
              <p>
                Most browsers allow you to manage or disable cookies through their settings.
                If you choose to block certain cookies, parts of the website may not work as
                expected.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>4. Updates to this policy</h2>
              <p>
                This cookie policy is a placeholder. In a final version, we would describe
                how and when the policy will be updated and where changes will be
                communicated.
              </p>
            </div>

            <p className={styles.backNote}>
              All content on this page is dummy text. Replace it with your official cookie
              policy before launch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CookiePolicyPage;
