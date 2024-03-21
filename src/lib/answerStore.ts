import { writable, derived } from 'svelte/store';
import { questions } from './data';

interface AnswerDetail {
    impact: number;
    optimistWeight: number;
    innovatorWeight: number;
}

interface AnswerMap {
    [questionIndex: number]: AnswerDetail;
}

const answerMap = writable<AnswerMap>({});
    // Create a derived store to calculate the total scores based on the answerMap
    const totalScores = derived(answerMap, ($answerMap) => {
    let totalOptimist = 0;
    let totalInnovator = 0;

    Object.values($answerMap).forEach(answerDetail => {
        totalOptimist += answerDetail.impact * answerDetail.optimistWeight;
        totalInnovator += answerDetail.impact * answerDetail.innovatorWeight;
    });

    return {
        totalOptimist,
        totalInnovator,
    };
});

// The original answer store functions
const createAnswerStore = () => {
    return {
        subscribe: totalScores.subscribe, // You subscribe to the totalScores now
        updateAnswer: (questionIndex: number, answerImpact: number, optimistWeight: number, innovatorWeight: number) =>
        answerMap.update(answers => {
            const updatedAnswers = {
            ...answers,
            [questionIndex]: {
                impact: answerImpact,
                optimistWeight: optimistWeight,
                innovatorWeight: innovatorWeight,
            },
            };
            return updatedAnswers;
        }),
        reset: () => answerMap.set({}),
    };
};

export const answerStore = createAnswerStore();