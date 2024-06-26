// src/stores/answersStore.ts
import { writable, derived } from 'svelte/store';
import { questions } from '$lib/data';

interface Answer {
    questionIndex: number;
    response?: number;
    grade?: 'yes' | 'no' | 'unanswer';
}


export let userAnswers = writable<Answer[]>([]);

let totalImpacts = derived(userAnswers, ($userAnswers) => {
    let totalOptimistImpact = 0;
    let totalInnovatorImpact = 0;

    $userAnswers.forEach(({ questionIndex, response }) => {
        const question = questions.find(q => q.index === questionIndex);
        if (!question) return;
        if (!response) return;

        totalOptimistImpact += response * question.optimist;
        totalInnovatorImpact += response * question.innovator;
    });

    totalOptimistImpact = Math.min(100, Math.max(-100, totalOptimistImpact));
    totalInnovatorImpact = Math.min(100, Math.max(-100, totalInnovatorImpact));

    console.log(totalOptimistImpact +"," + totalInnovatorImpact);

    return {
        totalOptimistImpact,
        totalInnovatorImpact,
    };
});


export function answerQuestion(questionIndex: number, response: number) {
    userAnswers.update(answers => {
        const index = answers.findIndex(answer => answer.questionIndex === questionIndex);
        if (index > -1) {
            answers[index].response = response;
        } else {
            answers.push({ questionIndex, response, grade:"unanswer" });
        }
        console.log(answers);

        return answers;
    });
}

export function updateAnswerGrade(questionIndex: number, grade: 'yes' | 'no' | 'unanswer') {
    userAnswers.update(answers => {
        const index = answers.findIndex(answer => answer.questionIndex === questionIndex);
        if (index > -1) {
            answers[index].grade = grade;
        } else {
            answers.push({questionIndex, grade});
        }
        return answers;
    });
}

export function resetAnswers() {
    userAnswers.set([]);
}

export { totalImpacts };

export const RandomUsers = writable<{ totalOptimistImpact: number; totalInnovatorImpact: number; }[]>([]);

export function makeRandomUser() {
    const userAnswers = questions.map(question => ({
        questionIndex: question.index,
        response: Math.floor(Math.random() * 5) - 2,
    }));

    let totalOptimistImpact = 0;
    let totalInnovatorImpact = 0;

    userAnswers.forEach(({ questionIndex, response }) => {
        const question = questions.find(q => q.index === questionIndex);
        if (!question) return;

        totalOptimistImpact += response * question.optimist;
        totalInnovatorImpact += response * question.innovator;
    });

    totalOptimistImpact = Math.min(100, Math.max(-100, totalOptimistImpact));
    totalInnovatorImpact = Math.min(100, Math.max(-100, totalInnovatorImpact));


    return {
        totalOptimistImpact,
        totalInnovatorImpact,
    };
}

export function generateRandomUsers(users: number) {
    const newRandomUsers = Array.from({ length: users }, makeRandomUser);

    console.log(newRandomUsers);

    RandomUsers.set(newRandomUsers);
}

generateRandomUsers(1);

export function simulateRandomUserResponses() {
    const randomAnswers = questions.map(question => ({
        questionIndex: question.index,
        response: Math.floor(Math.random() * 5) - 2, // Random response between -2 and 2
        grade: "unanswer" // Defaulting grade to "unanswer", modify as needed
    }));

    userAnswers.set(randomAnswers); // Directly updates the userAnswers store
}