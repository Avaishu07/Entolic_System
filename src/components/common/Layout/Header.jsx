import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoWrapper}>
          <img
            src="/logo.png"
            alt="Entolic Systems - Infinite Innovation"
            className={styles.logoImage}
          />
        </Link>

        <div className={styles.navAndCta}>
          <nav>
            <ul className={styles.navList}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/industries"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  Industries
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/case-studies"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/careers"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  Careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? `${styles.navItem} ${styles.active}` : styles.navItem
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <Link to="/contact" className={styles.headerCta}>
            Contact Us
          </Link>
        </div>

        <button className={styles.mobileMenuBtn}>
          <span>☰</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
