import { screen, within } from "@testing-library/react";
import {
  MOCK_SCORE_PROPS,
  MOCK_SCORE_CONTENT,
  MOCKS_SKILL_PROPS,
  MOCK_SKILL_CONTENT,
  MOCK_SUMMARY_CONTENT,
} from "../fixtures/resultsSummary.fixtures";

/**
 * Expects the visibility of the following elements, in the Score component:
 * - main title
 * - user score
 * - of 100 text
 * - user score type
 * - description with user percentage
 */
export const expectScoreVisible = () => {
  const title = screen.getByRole("heading", {
    level: 1,
    name: MOCK_SCORE_CONTENT.title,
  });

  const scoreContainer = screen.getByTestId("score");
  const scoreValue = MOCK_SCORE_PROPS.score.toString();
  const scoreText = screen.getByText(MOCK_SCORE_CONTENT.scoreText);

  const type = screen.getByText(MOCK_SCORE_PROPS.type);

  const description = screen.getByText(MOCK_SCORE_CONTENT.description);

  expect(title).toBeVisible();
  expect(scoreContainer).toBeVisible();
  expect(scoreContainer).toHaveTextContent(scoreValue);
  expect(scoreText).toBeVisible();
  expect(type).toBeVisible();
  expect(description).toBeVisible();
};

/**
 * Expects the visibility of the following elements, in the Skill component:
 * - icon
 * - name
 * - value of 100
 */
export const expectSkillVisible = () => {
  const name = screen.getByText(MOCKS_SKILL_PROPS.name);

  const icon = screen.getByTestId("skill-icon");

  const scoreContainer = screen.getByTestId("skill-score");
  const scoreValue = MOCKS_SKILL_PROPS.score.toString();

  const scoreText = screen.getByText(MOCK_SKILL_CONTENT.scoreText);

  expect(name).toBeVisible();
  expect(icon).toBeVisible();
  expect(scoreContainer).toBeVisible();
  expect(scoreContainer).toHaveTextContent(scoreValue);
  expect(scoreText).toBeVisible();
};

/**
 * Expects the visibility of the following elements, in the Summary component:
 * - title
 * - skills list
 * - continue link
 */
export const expectSummaryVisible = () => {
  const title = screen.getByRole("heading", {
    level: 2,
    name: MOCK_SUMMARY_CONTENT.title,
  });

  const list = screen.getByRole("list");
  const skills = within(list).getAllByRole("listitem");

  const link = screen.getByRole("link", { name: MOCK_SUMMARY_CONTENT.link });

  expect(title).toBeVisible();
  expect(skills).toHaveLength(4);
  expect(link).toBeVisible();
};
