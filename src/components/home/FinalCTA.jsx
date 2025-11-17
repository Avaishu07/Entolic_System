import styles from './FinalCTA.module.css';

function FinalCTA() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Let's talk</p>
          <h2 className={styles.heading}>
            Ready to build something real?
          </h2>
          <p className={styles.description}>
            Transform your vision into a production-ready digital product. Our team is ready to help you innovate and scale.
          </p>
          <button className={styles.btn}>
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
