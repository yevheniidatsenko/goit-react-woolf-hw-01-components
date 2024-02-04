import styles from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.username}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        {Object.entries(stats).map(([label, quantity], index) => (
          <li key={index}>
            <span className={styles.label}>{label}</span>
            <span className={styles.quantity}>{quantity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Profile;
