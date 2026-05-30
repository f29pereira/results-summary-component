import styles from "./Score.module.css";
import type { ScoreProps } from "@/app/type";

/**
 * Renders the score result of 100, score type and description with score percentage
 *
 * Props are defined in {@link ScoreProps}.
 */
export default function Score({ score, type, percentage }: ScoreProps) {
  return (
    <div className={styles.mainCont}>
      <h1 className={`bold-text ${styles.title}`}>Your Result</h1>

      {/*Score of 100*/}
      <div className={`flex-center`}>
        <div
          className={`flex-col-center ${styles.circle}`}
          aria-label={`You scored ${score} of 100`}
        >
          <span className={`bold-text ${styles.scoreValue}`} aria-hidden="true">
            {score}
          </span>
          <span className={`light-text ${styles.scoreText}`} aria-hidden="true">
            of 100
          </span>
        </div>
      </div>

      {/*Type*/}
      <span className={`bold-text ${styles.type}`}>{type}</span>

      {/*Description*/}
      <p className={`lighter-text ${styles.description}`}>
        You scored higher than {percentage}% of the people who have taken these
        tests.
      </p>
    </div>
  );
}
