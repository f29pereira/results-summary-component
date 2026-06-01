import type { ScoreProps, SkillProps } from "@/app/type";

/**
 * Score component: props mock
 */
export const MOCK_SCORE_PROPS: ScoreProps = {
  score: 72,
  type: "Great",
  percentage: 65,
};

/**
 * Score component: page content mock
 */
export const MOCK_SCORE_CONTENT = {
  title: "Your Result",
  scoreText: "of 100",
  description: `You scored higher than ${MOCK_SCORE_PROPS.percentage}% of the people who have taken these tests.`,
};

/**
 * Skill component: props mock
 */
export const MOCKS_SKILL_PROPS: SkillProps = {
  color: "danger",
  name: "Reaction",
  score: 80,
};

/**
 * Skill component: page content mock
 */
export const MOCK_SKILL_CONTENT = {
  scoreText: "/ 100",
};

/**
 * Summary component: page content mock
 */
export const MOCK_SUMMARY_CONTENT = {
  title: "Summary",
  link: "Continue",
};
