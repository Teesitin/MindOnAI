<script lang="ts">
    import { Radio } from 'flowbite-svelte';
    import { answerOptions, questions } from '$lib/data';
    import { answerStore } from '$lib/answerStore';

    export let questionIndex: number;
    export let question: string;

    let selectedValue: number | undefined;

    function updateAnswer(value: number) {
        console.log('Updating answer for question:', questionIndex, 'with value:', value); // Debug log
        selectedValue = value;
        const currentQuestion = questions.find(q => q.index === questionIndex);

        if (currentQuestion) {
            answerStore.updateAnswer(questionIndex, value, currentQuestion.optimist, currentQuestion.innovator);
        } else {
            console.error('Question not found');
        }
    }

</script>

<div class="w-full flex bg-gray-50 p-4 m-4 rounded-xl gap-10 justify-between border-2">
    <div class="w-1/2 block md:w-9/12">
        <div class="text-blue-600 font-semibold">
            Q{questionIndex}
        </div>
        <div class="mt-4">
            {question}
        </div>
    </div>

    <div class="w-1/2  md:w-3/12">
        {#each answerOptions as { answer, impact }}
            <Radio name={`question-${questionIndex}`} bind:group={selectedValue} value={impact} on:change={() => updateAnswer(impact)} class="m-2">
                {answer}
            </Radio>
        {/each}
    </div>
</div>
