/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

/**
 * Props for the Score component
 * @property score      - value of 100
 * @property type       - score type
 * @property percentage - of how higher the user is compared to others
 */
export type ScoreProps = {
  score: number;
  type: string;
  percentage: number;
};

/**
 * Props for the Skill component
 * @property color - type of banner color
 * @property name  - type of banner
 * @property score - value of 100
 */
export type SkillProps = {
  color: BannerColorType;
  name: BannerType;
  score: number;
};

/* ---------------------------------------------------- */
/* Other component related types                        */
/* ---------------------------------------------------- */

/**
 * Type for the type of banner color
 */
export type BannerColorType = "danger" | "warning" | "success" | "info";

/**
 * Type for the type of banner
 */
export type BannerType = "Reaction" | "Memory" | "Verbal" | "Visual";
