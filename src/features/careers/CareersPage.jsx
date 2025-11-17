import styles from './CareersPage.module.css';

function CareersPage() {
  return (
    <main className={styles.careersPage}>
      <div className="page-container">
        <section className={styles.section}>
          <h1 className={styles.heading}>Careers</h1>
          <p className={styles.description}>
            Join our team of talented engineers, designers, and innovators at Entolic Systems.
            We're always looking for passionate individuals who want to build exceptional
            digital products and grow their careers in a dynamic, collaborative environment.
          </p>
        </section>
      </div>
    </main>
  );
}

export default CareersPage;
