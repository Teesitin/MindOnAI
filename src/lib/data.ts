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
    quadrant: number;
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
    { index: 50, question: "AI will further decrease birth rates.", optimist: -4, innovator: 0 },
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
        quadrant: 1,
        name: 'Supporting Pessimist',
        description: 'Supporting Pessimists are cautiously optimistic about the potential benefits of AI but remain skeptical about its broader impacts. They are innovators at heart, seeking to push the boundaries of technology while being acutely aware of its limitations and potential pitfalls.',
        optimistRange: [-100, -51],
        innovatorRange: [51, 100],
        support: 'Low Optimism, High Innovation'
    },
    {
        quadrant: 2,
        name: 'Neutral Innovator',
        description: 'Neutral Innovators maintain a balanced perspective on AI, recognizing both its transformative potential and the challenges it poses. They are enthusiastic about exploring new technological frontiers but remain grounded in their expectations about the pace and scope of change.',
        optimistRange: [-50, 50],
        innovatorRange: [51, 100],
        support: 'Moderate Optimism, High Innovation'
    },
    {
        quadrant: 3,
        name: 'Free Spirit Optimist',
        description: 'Free Spirit Optimists are fervent believers in the power of AI to revolutionize society positively. They see AI as a catalyst for unprecedented innovation and progress across all sectors, from healthcare to education.',
        optimistRange: [51, 100],
        innovatorRange: [51, 100],
        support: 'High Optimism, High Innovation'
    },
    {
        quadrant: 4,
        name: 'Pure Pessimist',
        description: 'Pure Pessimists are deeply concerned about the risks and ethical dilemmas posed by AI. They question the wisdom of pursuing advanced AI technologies, fearing negative consequences for society, employment, and privacy.',
        optimistRange: [-100, -51],
        innovatorRange: [-50, 50],
        support: 'Moderate Optimism, Moderate Innovation'
    },
    {
        quadrant: 5,
        name: 'Centrist',
        description: ' Centrists adopt a pragmatic approach to AI, recognizing its potential benefits and challenges. They advocate for a balanced development strategy that considers ethical, social, and economic implications.',
        optimistRange: [-50, 50],
        innovatorRange: [-50, 50],
        support: 'Moderate Optimism, Moderate Innovation'
    },
    {
        quadrant: 6,
        name: 'Nonchalant Optimist',
        description: 'Nonchalant Optimists are confident in the positive impact of AI on society. While they may not be at the forefront of innovation, they enthusiastically support the integration of AI into various aspects of daily life.',
        optimistRange: [51, 100],
        innovatorRange: [-50, 50],
        support: 'High Optimism, Moderate Innovation'
    },
    {
        quadrant: 7,
        name: 'Extremely Critical',
        description: 'Extremely Critical individuals are highly skeptical of AI\'s benefits, focusing instead on the potential for misuse, ethical concerns, and unintended consequences. They view AI with significant caution and advocate for a restrained approach to its development.',
        optimistRange: [-100, -51],
        innovatorRange: [-100, -51],
        support: 'Low Optimism, Low Innovation'
    },
    {
        quadrant: 8,
        name: 'Tempered Regulator',
        description: 'Tempered Regulators believe in the potential of AI but stress the importance of governance, ethical standards, and public accountability. They are wary of unchecked innovation and prioritize the establishment of robust regulatory frameworks.',
        optimistRange: [-50, 50],
        innovatorRange: [-100, -51],
        support: 'Moderate Optimism, Low Innovation'
    },
    {
        quadrant: 9,
        name: 'Ethical Guardian',
        description: 'Ethical Guardians are deeply committed to ensuring that AI development is guided by strong moral principles and serves the greater good. They are optimistic about AI\'s potential to address significant challenges but insist on ethical considerations being at the forefront of technological innovation.',
        optimistRange: [51, 100],
        innovatorRange: [-100, -51],
        support: 'High Optimism, Low Innovation'
    }
];