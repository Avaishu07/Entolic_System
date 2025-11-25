import styles from './LegalPages.module.css';

function PrivacyPolicyPage() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Legal · Privacy Policy</p>
            <h1 className={styles.heroHeading}>Privacy Policy</h1>
            <p className={styles.heroSubtitle}>
              This is a sample privacy policy for Entolic Systems, describing how we
              collect, use, and protect your information when you use our website and
              services.
            </p>
            <div className={styles.metaRow}>
              <span>Last updated: 01 November 2025</span>
              <span>·</span>
              <span>Applies to all visitors and customers</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentInner}>
            <p className={styles.updatedText}>
              This document is provided as placeholder text. Replace it with your actual
              legal copy before going live.
            </p>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>1. Information we collect</h2>
              <p className={styles.sectionDescription}>
                We may collect and process basic information when you visit our website,
                contact us, or engage with our services.
              </p>
              <ul>
                <li>Contact details such as name, email address, and phone number.</li>
                <li>Company information, role, and project details submitted via forms.</li>
                <li>Usage data such as pages visited, time on site, and interactions.</li>
                <li>Technical data like IP address, browser type, and device information.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>2. How we use your information</h2>
              <p className={styles.sectionDescription}>
                Any information we collect is used solely to provide and improve our
                services.
              </p>
              <ul>
                <li>Responding to your inquiries and project requests.</li>
                <li>Preparing proposals, estimates, or statements of work.</li>
                <li>Improving our website experience and service offerings.</li>
                <li>Sending relevant updates or newsletters when you opt in.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>3. Data sharing & retention</h2>
              <p className={styles.sectionDescription}>
                We do not sell your personal data. Limited sharing may occur with trusted
                vendors who help us operate our services.
              </p>
              <p>
                Data is retained only for as long as necessary for the purposes described
                above, or as required by applicable law. You may request access, updates,
                or deletion of your information at any time using our contact details.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>4. Your rights</h2>
              <p>
                Depending on your region, you may have rights over how your data is used,
                including the right to access, correct, or delete your information. For any
                privacy-related requests, please reach out to us at
                {' '}<strong>info@entolicsystems.com</strong>.
              </p>
            </div>

            <p className={styles.backNote}>
              This is placeholder content. Please ask your legal counsel to provide the
              final privacy policy text tailored to your business.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicyPage;
