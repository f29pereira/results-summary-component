import { screen } from "@testing-library/react";
import {
  SCORE_PROPS,
  SCORE_CONTENT,
} from "../constants/resultsSummary.constants";

/**
 * Expects the visibility of the following elements, in the Result component:
 * - main title
 * - user score
 * - of 100 text
 * - user score type
 * - description with user percentage
 */
export const expectSummaryVisible = () => {
  const title = screen.getByRole("heading", {
    level: 1,
    name: SCORE_CONTENT.title,
  });

  const scoreContainer = screen.getByTestId("score");
  const scoreValue = SCORE_PROPS.score.toString();
  const scoreText = screen.getByText(SCORE_CONTENT.scoreText);

  const type = screen.getByText(SCORE_PROPS.type);

  const description = screen.getByText(SCORE_CONTENT.description);

  expect(title).toBeVisible();
  expect(scoreContainer).toBeVisible();
  expect(scoreContainer).toHaveTextContent(scoreValue);
  expect(scoreText).toBeVisible();
  expect(type).toBeVisible();
  expect(description).toBeVisible();
};
