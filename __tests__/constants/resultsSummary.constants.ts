import type { ScoreProps } from "@/app/type";

/**
 * Score component: props
 */
export const SCORE_PROPS: ScoreProps = {
  score: 72,
  type: "Great",
  percentage: 65,
};

/**
 * Score component: page content
 */
export const SCORE_CONTENT = {
  title: "Your Result",
  scoreText: "of 100",
  description: `You scored higher than ${SCORE_PROPS.percentage}% of the people who have taken these tests.`,
};
