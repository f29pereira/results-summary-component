import styles from "./Skill.module.css";
import type { SkillProps } from "@/app/type";
import { getSkillIcon, getSkillStyles } from "./Skill.util";

/**
 * Renders a skill banner with:
 * - Icon
 * - Name
 * - Value of 100
 *
 * Props are defined in {@link SkillProps}.
 */
export default function Skill({ color, name, score }: SkillProps) {
  const { bannerBg, bannerText } = getSkillStyles(color);
  const svgIcon = getSkillIcon(name);

  return (
    <div className={`${bannerBg} ${styles.mainCont}`}>
      <div className={styles.iconNameCont}>
        {/*Icon*/}
        <div className={`${bannerText} ${styles.icon}`}>{svgIcon}</div>

        {/*Name*/}
        <span className={`bold-text ${bannerText} ${styles.name}`}>{name}</span>
      </div>

      {/*Value of 100*/}
      <span className={`bold-text ${styles.score}`}>
        {score} <span className={styles.scoreText}>/ 100</span>
      </span>
    </div>
  );
}
