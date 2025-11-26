import styles from './page.module.css';

export default function About() {
    return (
        <main className={styles.container}>
            <h1 className={styles.title}>About DevCraft</h1>
            <div className={styles.content}>
                <p>
                    Welcome to DevCraft, your premium destination for high-quality software development content.
                    Our mission is to provide developers with the insights, tutorials, and resources they need
                    to excel in their careers.
                </p>
                <p>
                    Whether you are a seasoned veteran or just starting out, we believe that continuous learning
                    is the key to success in the fast-paced world of technology. We cover a wide range of topics,
                    from web development and system design to coding best practices and career advice.
                </p>
                <p>
                    Our content is crafted with care, focusing on clarity, depth, and practical application.
                    We hope you find our articles helpful and inspiring.
                </p>
            </div>
        </main>
    );
}
