import styles from "./Result.module.css";
import Score from "../Score/Score";
import Summary from "../Summary/Summary";

/**
 * Renders the score and summary
 */
export default function Result() {
  return (
    <section className={styles.sectionCont}>
      <div className={styles.grid}>
        <Score score={76} type="Great" percentage={65} />
        <Summary />
      </div>
    </section>
  );
}
