import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.container}>
      <img src="https://github.com/diego3g.png" alt="Diego Fernandes" />
      <div>
        <strong>Diego Fernandes</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}

export default Profile;
