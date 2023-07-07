import { surpriseMePrompts } from "../constants";

export function getRandomPrompt(prompts) {
  const randomIndex = Math.floor(Math.random * surpriseMePrompts.length);

  const randomPromts = surpriseMePrompts(randomIndex);

  if (randomPromts === prompts) return getRandomPrompt(prompts);

  return randomPromts;
}
