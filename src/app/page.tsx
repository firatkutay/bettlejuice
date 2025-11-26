import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Master the Art of <br /> Software Development
        </h1>
        <p className={styles.subtitle}>
          Deep dives into coding, architecture, and the future of technology.
          Crafted for developers who care about quality.
        </p>
        <Link href="/articles" className={styles.ctaButton}>
          Start Reading
        </Link>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What is Software Development?</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--secondary)', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. It is a blend of art, science, and engineering.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Featured Articles</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>The Future of Web Development</h3>
            <p className={styles.cardDesc}>
              Exploring the latest trends and technologies shaping the web.
            </p>
            <Link href="/articles/future-web" className={styles.cardLink}>
              Read More &rarr;
            </Link>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Clean Code Principles</h3>
            <p className={styles.cardDesc}>
              How to write code that is easy to understand and maintain.
            </p>
            <Link href="/articles/clean-code" className={styles.cardLink}>
              Read More &rarr;
            </Link>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>System Design 101</h3>
            <p className={styles.cardDesc}>
              A beginner's guide to designing scalable software systems.
            </p>
            <Link href="/articles/system-design" className={styles.cardLink}>
              Read More &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
