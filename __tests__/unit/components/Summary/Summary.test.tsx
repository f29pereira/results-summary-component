import { render } from "@testing-library/react";
import Summary from "@/app/components/Summary/Summary";
import { expectSummaryVisible } from "../../../helpers/resultsSummary.helpers";

/**
 * Unit testing for the component: Summary
 */
describe("Summary component", () => {
  beforeEach(() => {
    render(<Summary />);
  });

  test("renders the title, skills list and continue link", () => {
    expectSummaryVisible();
  });
});
