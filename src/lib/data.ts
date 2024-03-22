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

export interface Quadrant {
    name: string;
    description: string;
    support: string;
    optimistRange: [number, number];
    innovatorRange: [number, number];
}

export const questions: Question[] = [
    { index: 1, question: "AI systems should make important decisions in healthcare.", optimist: 4, innovator: 5 },
    { index: 2, question: "Humans will always be necessary to oversee AI decisions.", optimist: -3, innovator: -2 },
    { index: 3, question: "AI can unbiasedly perform tasks better than humans.", optimist: 3, innovator: 4 },
    { index: 4, question: "Privacy concerns are secondary to the benefits AI can offer.", optimist: 2, innovator: -4 },
    { index: 5, question: "AI will significantly reduce employment opportunities.", optimist: -4, innovator: -3 },
    { index: 6, question: "Education systems should include AI literacy as a core subject.", optimist: 5, innovator: 4 },
    { index: 7, question: "AI technology will lead to greater inequalities in society.", optimist: -5, innovator: -4 },
    { index: 8, question: "Autonomous vehicles pose no significant ethical concerns.", optimist: 3, innovator: 5 },
    { index: 9, question: "AI should be regulated internationally, not just nationally.", optimist: 1, innovator: 3 },
    { index: 10, question: "AI can fully replicate human creativity in art and music.", optimist: 4, innovator: 5 },
    { index: 11, question: "AI-driven personal assistants will improve quality of life.", optimist: 5, innovator: 4 },
    { index: 12, question: "Widespread use of AI in law enforcement poses risks to personal freedoms.", optimist: -4, innovator: 2 },
    { index: 13, question: "AI will enable more effective and personalized learning experiences.", optimist: 5, innovator: 5 },
    { index: 14, question: "The rise of AI will necessitate a universal basic income.", optimist: -2, innovator: 3 },
    { index: 15, question: "AI will lead to new forms of art and expression previously unimaginable.", optimist: 4, innovator: 5 },
    { index: 16, question: "Dependency on AI will weaken human cognitive abilities.", optimist: -3, innovator: -2 },
    { index: 17, question: "AI in agriculture will lead to more sustainable farming practices.", optimist: 5, innovator: 4 },
    { index: 18, question: "The use of AI in medicine will raise ethical concerns about patient consent.", optimist: -1, innovator: 3 },
    { index: 19, question: "AI will significantly improve the efficiency of logistics and supply chains.", optimist: 5, innovator: 5 },
    { index: 20, question: "Bias in AI algorithms will exacerbate social inequalities.", optimist: -5, innovator: -3 },
    { index: 21, question: "AI-enhanced cybersecurity will be critical in defending against complex cyber threats.", optimist: 5, innovator: 5 },
    { index: 22, question: "Overreliance on AI in decision-making processes will diminish human expertise.", optimist: -3, innovator: -1 },
    { index: 23, question: "AI-generated fake news and media will become a major challenge for societies.", optimist: -4, innovator: 2 },
    { index: 24, question: "AI will democratize access to education globally.", optimist: 5, innovator: 4 },
    { index: 25, question: "The development of sentient AI poses existential risks to humanity.", optimist: -5, innovator: -3 },
    { index: 26, question: "AI will revolutionize healthcare by predicting diseases before they occur.", optimist: 5, innovator: 5 },
    { index: 27, question: "Public trust in AI systems is critical for widespread adoption.", optimist: 3, innovator: 2 },
    { index: 28, question: "AI in entertainment will create hyper-personalized content.", optimist: 4, innovator: 5 },
    { index: 29, question: "The environmental impact of training large AI models is a significant concern.", optimist: -3, innovator: -1 },
    { index: 30, question: "Robotic automation will drastically reduce human labor in manufacturing.", optimist: -2, innovator: 4 },
    { index: 31, question: "AI will enhance our personal lives, but should not be trusted to automate critical job functions.", optimist: 4, innovator: -3 },
    { index: 32, question: "AI-driven social media can improve our connectivity, yet the risks of manipulation are too high for it to guide public opinion.", optimist: 3, innovator: -4 },
    { index: 33, question: "While AI's influence on societal values is concerning, it should not hinder the development of innovative technology.", optimist: -4, innovator: 3 },
    { index: 34, question: "Despite potential job displacement concerns, AI's role in driving industrial innovation cannot be ignored.", optimist: -3, innovator: 4 },
    { index: 35, question: "AI will enhance our personal lives, but should not be trusted to automate critical job functions.", optimist: 4, innovator: -3 },
    { index: 36, question: "AI-driven social media can improve our connectivity, yet the risks of manipulation are too high for it to guide public opinion.", optimist: 3, innovator: -4 },
    { index: 37, question: "AI-powered virtual assistants can simplify daily tasks, but their decisions should be supervised by humans.", optimist: 5, innovator: -2 },
    { index: 38, question: "AI can streamline business processes, but it must not compromise human creativity and intuition.", optimist: 2, innovator: -5 },
    { index: 39, question: "AI can assist in medical diagnoses, yet ultimate decision-making should remain with trained professionals.", optimist: 1, innovator: -4 },
    { index: 40, question: "While AI's influence on societal values is concerning, it should not hinder the development of innovative technology.", optimist: -4, innovator: 3 },
    { index: 41, question: "Despite potential job displacement concerns, AI's role in driving industrial innovation cannot be ignored.", optimist: -3, innovator: 4 },
    { index: 42, question: "AI's impact on privacy is worrying, but it can lead to breakthroughs in data security technology.", optimist: -2, innovator: 5 },
    { index: 43, question: "Concerns about AI bias are valid, but they can drive advancements in fairness-aware algorithms.", optimist: -5, innovator: 2 },
    { index: 44, question: "While AI may raise ethical dilemmas, it can spur innovation in ethical frameworks and guidelines.", optimist: -1, innovator: 4 },
    { index: 45, question: "AI-driven medical diagnosis can improve healthcare accessibility, but we must address privacy concerns in patient data handling.", optimist: 4, innovator: -2 },
    { index: 46, question: "While AI can optimize energy consumption, we need strict regulations to prevent misuse and environmental damage.", optimist: 3, innovator: -4 },
    { index: 47, question: "AI-guided decision-making in finance can enhance efficiency, but safeguards are necessary to prevent algorithmic bias.", optimist: 4, innovator: -3 },
    { index: 48, question: "The use of AI in scientific research holds promise, but ethical oversight is essential to prevent misuse or manipulation of findings.", optimist: 3, innovator: -5 },
    { index: 49, question: "AI has the potential to revolutionize education, but we must ensure it doesn't replace human interaction in learning.", optimist: 3, innovator: -3 },
    { index: 50, question: "AI will further decreaase birth rates.", optimist: -4, innovator: 0 },
];

export const answerOptions: Answer[] = [
    { answer: "Strongly Agree", impact: 2 },
    { answer: "Agree", impact: 1 },
    { answer: "Unsure", impact: 0 },
    { answer: "Disagree", impact: -1 },
    { answer: "Strongly Disagree", impact: -2 }
];

export const quadrants: Quadrant[] = [
    {
        name: 'Prudent Pessimist',
        description: 'Concerned about AI risks, supports restrictions and careful examination of AI applications.',
        optimistRange: [-100, -51],
        innovatorRange: [51, 100],
        support: 'Low Optimism, High Innovator'
    },
    {
        name: 'Moderate Monitor',
        description: 'Supports AI growth with moderate oversight, aims for a balanced development path.',
        optimistRange: [-100, -51],
        innovatorRange: [-50, 50],
        support: 'Moderate Optimism, Moderate Innovator'
    },
    {
        name: 'Vigilant Critic',
        description: 'Skeptical of AI\'s promise, favors rigorous evaluation and reflection before adoption if any.',
        optimistRange: [-100, -51],
        innovatorRange: [-100, -51],
        support: 'Low Optimism, Low Innovator'
    },
    {
        name: 'Cautious Regulator',
        description: 'Advocates for strict regulation, cautious about the potential consequences of AI.',
        optimistRange: [-50, 50],
        innovatorRange: [51, 100],
        support: 'Moderate Optimism, High Innovator'
    },
    {
        name: 'Centrist',
        description: 'Holds a central view on AI, neither too optimistic nor too innovative, prefers a steady approach.',
        optimistRange: [-50, 50],
        innovatorRange: [-50, 50],
        support: 'Moderate Optimism, Moderate Innovator'
    },
    {
        name: 'Tempered Enthusiast',
        description: 'Generally positive about AI, but advocates for a tempered approach to innovation.',
        optimistRange: [-50, 50],
        innovatorRange: [-100, -51],
        support: 'Moderate Optimism, Low Innovator'
    },
    {
        name: 'Ethical Guardian',
        description: 'Values ethical considerations in AI development, supports thoughtful regulation.',
        optimistRange: [51, 100],
        innovatorRange: [51, 100],
        support: 'High Optimism, High Innovator'
    },
    {
        name: 'Progressive Optimist',
        description: 'Sees the benefits of AI, believes in progressive policies to guide its development.',
        optimistRange: [51, 100],
        innovatorRange: [-50, 50],
        support: 'High Optimism, Moderate Innovator'
    },
    {
        name: 'AI Enthusiast',
        description: 'Highly optimistic about AI, favors rapid innovation with minimal regulatory interference.',
        optimistRange: [51, 100],
        innovatorRange: [-100, -51],
        support: 'High Optimism, Low Innovator'
    }
];
