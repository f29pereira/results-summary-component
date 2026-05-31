import { render } from "@testing-library/react";
import Score from "@/app/components/Score/Score";
import { SCORE_PROPS } from "../../../constants/resultsSummary.constants";
import { expectSummaryVisible } from "../../../helpers/resultsSummary.helpers";

/**
 * Unit testing for the component: Score
 */
describe("Score component", () => {
  beforeEach(() => {
    render(
      <Score
        score={SCORE_PROPS.score}
        type={SCORE_PROPS.type}
        percentage={SCORE_PROPS.percentage}
      />,
    );
  });

  test("renders the title, score value, of 100 text and description", () => {
    expectSummaryVisible();
  });
});
