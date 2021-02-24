import styles from "../styles/components/ChallengeBox.module.css";

export default function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.container}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>Levante e faça 30 polichinelos.</p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailed}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceeded}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalise um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
