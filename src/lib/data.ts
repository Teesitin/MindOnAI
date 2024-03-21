// File: src/lib/data.ts
export const questions = new Map<number, string>([
    [1, "AI systems should make important decisions in healthcare."],
    [2, "Humans will always be necessary to oversee AI decisions."],
    [3, "AI can unbiasedly perform tasks better than humans."],
    [4, "Privacy concerns are secondary to the benefits AI can offer."],
    [5, "AI will significantly reduce employment opportunities."],
    [6, "Education systems should include AI literacy as a core subject."],
    [7, "AI technology will lead to greater inequalities in society."],
    [8, "Autonomous vehicles pose no significant ethical concerns."],
    [9, "AI should be regulated internationally, not just nationally."],
    [10, "AI can fully replicate human creativity in art and music."]
]);

export const answerOptions = new Map<string, number>([
    ['Strongly Agree', 2],
    ['Agree', 1],
    ['Unsure', 0],
    ['Disagree', -1],
    ['Strongly Disagree', -2]
]);