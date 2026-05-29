/* ---------------------------------------------------- */
/* Components Props types                               */
/* ---------------------------------------------------- */

/**
 * Props for the Score component
 * @property score  value of 100
 * @property type   score type
 * @property percentage of how higher the user is compared to others
 */
export type ScoreProps = {
  score: number;
  type: string;
  percentage: number;
};
