export interface Question {
    subject: string;
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
    // Healthcare
    { index: 101, question: "AI systems should make important decisions in healthcare.", optimist: 2, innovator: 5, subject: "Healthcare" },
    { index: 102, question: "The use of AI in medicine will raise ethical concerns about patient consent.", optimist: -2, innovator: 2, subject: "Healthcare" },
    { index: 103, question: "AI will revolutionize healthcare by predicting diseases before they occur.", optimist: 5, innovator: 4, subject: "Healthcare" },

    { index: 104, question: "AI-driven medical diagnosis can improve healthcare accessibility, but we must address privacy concerns in patient data handling.", optimist: 1, innovator: -3, subject: "Healthcare" },
    { index: 105, question: "AI should prioritize patient privacy over accuracy.", optimist: -3, innovator: 4, subject: "Healthcare" },
    { index: 106, question: "Innovations in AI healthcare must be accessible to all, not just the wealthy.", optimist: 5, innovator: -1, subject: "Healthcare" },
    { index: 107, question: "Governments must oversee the application of AI in healthcare, while simultaneously making it easy to use in hospitals.", optimist: 5, innovator: -4, subject: "Healthcare" },

    // Education
    { index: 201, question: "Education systems should include AI literacy as a core subject.", optimist: 3, innovator: 3, subject: "Education" },
    { index: 202, question: "AI will democratize access to education globally.", optimist: 4, innovator: 3, subject: "Education" },
    { index: 203, question: "AI will enable more effective and personalized learning experiences.", optimist: 2, innovator: 4, subject: "Education" },

    { index: 204, question: "AI has the potential to revolutionize education, but we must ensure it doesn't replace human interaction in learning.", optimist: 5, innovator: -5, subject: "Education" },
    { index: 205, question: "Dependency on AI will weaken human cognitive abilities.", optimist: -3, innovator: 0, subject: "Education" },
    { index: 206, question: "AI's role in education should primarily support teachers, not replace them.", optimist: 4, innovator: -3, subject: "Education" },
    { index: 207, question: "Investing in AI for personalized learning is crucial, even if it leads to short-term inequalities.", optimist: -5, innovator: 5, subject: "Education" },
    { index: 208, question: "A teacher should be entitled to incorporate AI into their teaching practices, even if it raises privacy issues.", optimist: 0, innovator: 5, subject: "Education" },

    // Ethics and Morality
    { index: 301, question: "AI can fully replicate human creativity in art and music.", optimist: 4, innovator: 5, subject: "Ethics" },
    { index: 302, question: "AI-driven personal assistants will improve quality of life.", optimist: 5, innovator: 4, subject: "Ethics" },
    { index: 303, question: "Overreliance on AI in decision-making processes will diminish human expertise.", optimist: -3, innovator: -1, subject: "Ethics" },
    { index: 304, question: "AI in entertainment will create hyper-personalized content.", optimist: 4, innovator: 5, subject: "Ethics" },
    { index: 305, question: "It is unethical to create AI that mimics human emotions.", optimist: -1, innovator: -5, subject: "Ethics" },
    { index: 306, question: "The advantages of AI outweigh privacy concerns.", optimist: 4, innovator: 4, subject: "Ethics" },


    { index: 307, question: "The rise of AI will necessitate a universal basic income.", optimist: -5, innovator: 5, subject: "Ethics" },
    { index: 308, question: "The ethical implications of AI should be considered more important than its innovation.", optimist: 2, innovator: -5, subject: "Ethics" },
    { index: 309, question: "AI should always reflect human ethical standards, even at the cost of efficiency.", optimist: 5, innovator: -5, subject: "Ethics" },
    

    // Society
    { index: 401, question: "AI technology will lead to greater inequalities in society.", optimist: -5, innovator: -4, subject: "Society" },
    { index: 402, question: "Bias in AI algorithms will exacerbate social inequalities.", optimist: -5, innovator: -3, subject: "Society" },
    { index: 403, question: "The environmental impact of training large AI models is a significant concern.", optimist: -5, innovator: -4, subject: "Society" },
    { index: 404, question: "AI can bridge the gap between different social classes by providing equal access to information and resources.", optimist: 5, innovator: 4, subject: "Society" },
    { index: 405, question: "AI-generated fake news and media will become a major challenge for societies.", optimist: -4, innovator: -1, subject: "Society" },

    { index: 406, question: "AI will further decrease birth rates.", optimist: -1, innovator: -4, subject: "Society" },
    { index: 407, question: "AI's impact on reducing societal inequalities is more crucial than advancing technology.", optimist: 5, innovator: -5, subject: "Society" },
    { index: 408, question: "Social advancements through AI should not compromise community values.", optimist: 4, innovator: -3, subject: "Society" },
    { index: 409, question: "Innovative AI solutions should be pursued even if they disrupt societal norms.", optimist: 0, innovator: 5, subject: "Society" },
    

    // Technology
    { index: 501, question: "AI can unbiasedly perform tasks better than humans.", optimist: 3, innovator: 4, subject: "Technology" },
    { index: 502, question: "Autonomous vehicles pose no significant ethical concerns.", optimist: 3, innovator: 5, subject: "Technology" },
    { index: 503, question: "AI in agriculture will lead to more sustainable farming practices.", optimist: 5, innovator: 4, subject: "Technology" },
    { index: 504, question: "AI-enhanced cybersecurity will be critical in defending against complex cyber threats.", optimist: 5, innovator: 5, subject: "Technology" },
    { index: 505, question: "Public trust in AI systems is critical for widespread adoption.", optimist: -2, innovator: -3, subject: "Technology" },
    { index: 506, question: "Robotic automation will drastically reduce human labor in manufacturing.", optimist: -2, innovator: -2, subject: "Technology" },

    { index: 507, question: "Technological breakthroughs in AI are more important than their usability.", optimist: 1, innovator: 5, subject: "Technology" },
    { index: 508, question: "AI technology must be developed with a focus on sustainability and environmental impact.", optimist: 5, innovator: -5, subject: "Technology" },
    

    // Judicial
    { index: 601, question: "AI-processed video evidence should be considered valid in court to ensure justice.", optimist: 4, innovator: 5, subject: "Judicial" },
    { index: 602, question: "Audio evidence enhanced by AI, even without video, should be admissible in court.", optimist: 2, innovator: 2, subject: "Judicial" },
    { index: 603, question: "AI systems could serve as unbiased jurors or witnesses, improving the fairness of trials.", optimist: 5, innovator: 4, subject: "Judicial" },
    { index: 604, question: "AI judges could be more impartial than human judges, enhancing the justice system.", optimist: 5, innovator: 5, subject: "Judicial" },
    { index: 606, question: "AI should be regulated internationally, not just nationally.", optimist: -2, innovator: -4, subject: "Judicial" },
    { index: 607, question: "Legal frameworks for AI need to evolve as quickly as the technology itself.", optimist: -2, innovator: -5, subject: "Judicial" },

    { index: 608, question: "If AI achieves sentience, it should be granted legal rights and held accountable under law, including facing severe penalties.", optimist: 5, innovator: -5, subject: "Judicial" },
    { index: 609, question: "The rapid implementation of AI in legal processes is essential, despite ethical concerns.", optimist: -3, innovator: 5, subject: "Judicial" },
    
    // Business and Jobs
    { index: 801, question: "AI will significantly reduce employment opportunities.", optimist: -4, innovator: -3, subject: "Business" },
    { index: 802, question: "AI technologies should be used to monitor employee productivity in the workplace.", optimist: 1, innovator: 3, subject: "Business" },
    { index: 803, question: "A company should have the right to monitor employee productivity with AI systems.", optimist: 3, innovator: 5, subject: "Business" },
    { index: 804, question: "In business, the ethical use of AI should take precedence over competitive advantage.", optimist: -1, innovator: -3, subject: "Business" },
    { index: 805, question: "Embracing AI in business requires a bold approach, prioritizing innovation over tradition.", optimist: 4, innovator: 5, subject: "Business" },

    { index: 806, question: "A company should receive full credit for any successes achieved through its AI systems.", optimist: 0, innovator: 4, subject: "Business" },
    { index: 807, question: "A company must be held fully accountable for any damages caused by its AI systems.", optimist: 0, innovator: -4, subject: "Business" },
];
  
export const Subjects = [
    { name: "Healthcare", color: "#bfdbfe" }, // blue
    { name: "Education", color: "#ffeda6" },  // yellow
    { name: "Ethics", color: "#fecaca" },     // red
    { name: "Society", color: "#bbf7d0" },    // green
    { name: "Technology", color: "#c7d2fe" }, // indigo
    { name: "Judicial", color: "#e9d5ff" },   // purple
    { name: "Business", color: "#ffedd5" }    // orange
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