import { writable, get } from 'svelte/store';

interface AnswerMap {
  [questionIndex: number]: number;
}

const createAnswerStore = () => {
  const { subscribe, set, update } = writable<AnswerMap>({});

  return {
    subscribe,
    updateAnswer: (questionIndex: number, answerWeight: number) =>
      update(answers => {
        const updatedAnswers = { ...answers, [questionIndex]: answerWeight };
        console.log('Current Answers:', updatedAnswers);
        return updatedAnswers;
      }),
    reset: () => set({}),
    getAnswers: () => get({ subscribe })
  };
};

export const answerStore = createAnswerStore();