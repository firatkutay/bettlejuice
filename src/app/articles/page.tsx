import ArticleCard from '../components/ArticleCard';
import styles from './page.module.css';

export default function Articles() {
    const articles = [
        {
            title: "The Future of Web Development",
            description: "Exploring the latest trends and technologies shaping the web.",
            slug: "future-web",
        },
        {
            title: "Clean Code Principles",
            description: "How to write code that is easy to understand and maintain.",
            slug: "clean-code",
        },
        {
            title: "System Design 101",
            description: "A beginner's guide to designing scalable software systems.",
            slug: "system-design",
        },
        {
            title: "Understanding React Server Components",
            description: "A deep dive into the new paradigm of React rendering.",
            slug: "react-server-components",
        },
        {
            title: "CSS Grid vs Flexbox",
            description: "When to use which layout model for modern web design.",
            slug: "css-grid-vs-flexbox",
        },
        {
            title: "The Art of Debugging",
            description: "Strategies and tools for finding and fixing bugs efficiently.",
            slug: "art-of-debugging",
        },
    ];

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Articles</h1>
            <div className={styles.grid}>
                {articles.map((article) => (
                    <ArticleCard key={article.slug} {...article} />
                ))}
            </div>
        </main>
    );
}
