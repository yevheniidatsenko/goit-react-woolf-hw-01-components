import styles from './Statistics.module.css';
import getRandomColor from '../Statistics/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map((stat, index) => (
          <li
            key={index}
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{`${stat.percentage}%`}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
