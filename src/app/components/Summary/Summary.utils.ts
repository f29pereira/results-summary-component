import type { SkillProps } from "@/app/type";

/**
 * Returns the list of skills
 */
export const getSkills = (): SkillProps[] => {
  return [
    {
      color: "danger",
      name: "Reaction",
      score: 80,
    },
    {
      color: "warning",
      name: "Memory",
      score: 92,
    },
    {
      color: "success",
      name: "Verbal",
      score: 61,
    },
    {
      color: "info",
      name: "Visual",
      score: 73,
    },
  ];
};
