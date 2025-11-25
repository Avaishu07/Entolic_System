import styles from './LegalPages.module.css';

function TermsPage() {
  return (
    <main className={styles.legalPage}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroInner}>
            <p className={styles.heroEyebrow}>Legal · Terms &amp; Conditions</p>
            <h1 className={styles.heroHeading}>Terms &amp; Conditions</h1>
            <p className={styles.heroSubtitle}>
              These sample terms outline the basic rules for using the Entolic Systems
              website and engaging with our services.
            </p>
            <div className={styles.metaRow}>
              <span>Last updated: 01 November 2025</span>
              <span>·</span>
              <span>Draft template – replace with final legal text</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.contentInner}>
            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>1. Acceptance of terms</h2>
              <p>
                By accessing or using this website, you agree to be bound by these
                placeholder terms and any additional conditions referenced here. If you do
                not agree, please discontinue use of the site.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>2. Use of the website</h2>
              <p className={styles.sectionDescription}>
                You agree to use this website only for lawful purposes and in line with any
                applicable policies we publish.
              </p>
              <ul>
                <li>No attempt to interfere with or disrupt the website or infrastructure.</li>
                <li>No unauthorized access to systems, data, or accounts.</li>
                <li>No use of the website to transmit harmful or illegal content.</li>
              </ul>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>3. Proposals and services</h2>
              <p>
                Any proposals, estimates, or statements of work shared by Entolic Systems
                are for discussion purposes until formally signed. Final commercial and
                legal terms must be captured in a separate agreement.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>4. Intellectual property</h2>
              <p>
                Unless stated otherwise in a signed contract, this website and all
                associated content, branding, and assets remain the property of Entolic
                Systems or its licensors and are protected by applicable IP laws.
              </p>
            </div>

            <div className={styles.sectionBlock}>
              <h2 className={styles.sectionTitle}>5. Limitation of liability</h2>
              <p>
                This is placeholder wording. In a real policy, this section would limit our
                liability for certain types of damages and clarify the extent of our
                responsibilities.
              </p>
            </div>

            <p className={styles.backNote}>
              This page contains dummy text. Please consult with your legal advisor to
              replace it with the correct terms and conditions for your organisation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default TermsPage;
