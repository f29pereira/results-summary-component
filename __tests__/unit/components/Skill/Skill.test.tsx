import { render } from "@testing-library/react";
import Skill from "@/app/components/Skill/Skill";
import { MOCKS_SKILL_PROPS } from "../../../fixtures/resultsSummary.fixtures";
import { expectSkillVisible } from "../../../helpers/resultsSummary.helpers";

/**
 * Unit testing for the component: Skill
 */
describe("Skill component", () => {
  beforeEach(() => {
    render(
      <Skill
        color={MOCKS_SKILL_PROPS.color}
        name={MOCKS_SKILL_PROPS.name}
        score={MOCKS_SKILL_PROPS.score}
      />,
    );
  });

  test("renders the icon, name and value of 100", () => {
    expectSkillVisible();
  });
});
