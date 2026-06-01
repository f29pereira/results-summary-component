import { render } from "@testing-library/react";
import Score from "@/app/components/Score/Score";
import { MOCK_SCORE_PROPS } from "../../../fixtures/resultsSummary.fixtures";
import { expectSummaryVisible } from "../../../helpers/resultsSummary.helpers";

/**
 * Unit testing for the component: Score
 */
describe("Score component", () => {
  beforeEach(() => {
    render(
      <Score
        score={MOCK_SCORE_PROPS.score}
        type={MOCK_SCORE_PROPS.type}
        percentage={MOCK_SCORE_PROPS.percentage}
      />,
    );
  });

  test("renders the title, score value, of 100 text and description", () => {
    expectSummaryVisible();
  });
});
