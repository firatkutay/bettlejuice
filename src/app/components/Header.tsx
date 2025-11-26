import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                DevCraft
            </Link>
            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>
                    Home
                </Link>
                <Link href="/articles" className={styles.navLink}>
                    Articles
                </Link>
                <Link href="/about" className={styles.navLink}>
                    About
                </Link>
            </nav>
        </header>
    );
}
