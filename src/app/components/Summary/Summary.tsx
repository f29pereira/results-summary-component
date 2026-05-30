import styles from "./Summary.module.css";
import Skill from "../Skill/Skill";
import { getSkills } from "./Summary.utils";

/**
 * Renders the skills summary and continue link
 */
export default function Summary() {
  const skillsList = getSkills();

  return (
    <div className={styles.mainCont}>
      <h2 className={styles.title}>Summary</h2>

      {/*Skills list*/}
      {skillsList.map((skill, index) => (
        <Skill
          key={index}
          color={skill.color}
          name={skill.name}
          score={skill.score}
        />
      ))}

      {/*Continue link*/}
      <a href="#" className={styles.link}>
        <span className={`bold-text flex-center ${styles.linkText}`}>
          Continue
        </span>
      </a>
    </div>
  );
}
