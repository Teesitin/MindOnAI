import { writable, derived } from 'svelte/store';

interface AnswerDetail {
    impact: number;
    optimistWeight: number;
    innovatorWeight: number;
}

interface AnswerMap {
    [questionIndex: number]: AnswerDetail;
}

const answerMap = writable<AnswerMap>({});

const totalScores = derived(answerMap, ($answerMap) => {
    let totalOptimist = 0;
    let totalInnovator = 0;

    Object.values($answerMap).forEach(answerDetail => {
        totalOptimist += answerDetail.impact * answerDetail.optimistWeight;
        totalInnovator += answerDetail.impact * answerDetail.innovatorWeight;
    });

    console.log(totalOptimist +" and " +totalInnovator);

    return {
        totalOptimist,
        totalInnovator,
    };
});

const createAnswerStore = () => {
    return {
        // Providing a direct reference for subscribing to current scores
        currentScores: totalScores,
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
        // Adjust or remove as necessary, based on your requirements
        setTotalScores: (totalOptimist: number, totalInnovator: number) => {
            // This functionality may need reevaluation based on the new structure
        }
    };
};

export const answerStore = createAnswerStore();
