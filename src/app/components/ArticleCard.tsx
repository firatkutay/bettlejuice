import Link from 'next/link';
import styles from './ArticleCard.module.css';

interface ArticleCardProps {
    title: string;
    description: string;
    slug: string;
}

export default function ArticleCard({ title, description, slug }: ArticleCardProps) {
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={`/articles/${slug}`} className={styles.link}>
                Read Article &rarr;
            </Link>
        </div>
    );
}
