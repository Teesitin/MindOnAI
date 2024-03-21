export interface Question {
    index: number;
    question: string;
    optimist: number;
    innovator: number;
}

export interface Answer {
    answer: string;
    impact: number;
}

export const questions: Question[] = [
    { index: 1, question: "AI systems should make important decisions in healthcare.", optimist: 4, innovator: 5 }, // High impact on healthcare innovation, slightly optimistic about its benefits
    { index: 2, question: "Humans will always be necessary to oversee AI decisions.", optimist: -3, innovator: -2 }, // Acknowledges human oversight, slight pessimism about full autonomy
    { index: 3, question: "AI can unbiasedly perform tasks better than humans.", optimist: 3, innovator: 4 }, // Positive view on AI efficiency, but cautious optimism
    { index: 4, question: "Privacy concerns are secondary to the benefits AI can offer.", optimist: 2, innovator: -4 }, // Benefits acknowledged, but significant concerns about privacy
    { index: 5, question: "AI will significantly reduce employment opportunities.", optimist: -4, innovator: -3 }, // Pessimistic view on job displacement, negative impact on innovation due to social unrest
    { index: 6, question: "Education systems should include AI literacy as a core subject.", optimist: 5, innovator: 4 }, // Strongly positive about AI education, innovation in learning
    { index: 7, question: "AI technology will lead to greater inequalities in society.", optimist: -5, innovator: -4 }, // Concerns about societal impact, least optimistic
    { index: 8, question: "Autonomous vehicles pose no significant ethical concerns.", optimist: 3, innovator: 5 }, // Positive on innovation, moderate on optimism due to ethical considerations
    { index: 9, question: "AI should be regulated internationally, not just nationally.", optimist: 1, innovator: 3 }, // Sees regulation as necessary, positive but cautious on global innovation
    { index: 10, question: "AI can fully replicate human creativity in art and music.", optimist: 4, innovator: 5 } // Optimistic about creative potential, high innovation score
];

export const answerOptions: Answer[] = [
    { answer: "Strongly Agree", impact: 2 },
    { answer: "Agree", impact: 1 },
    { answer: "Unsure", impact: 0 },
    { answer: "Disagree", impact: -1 },
    { answer: "Strongly Disagree", impact: -2 }
];