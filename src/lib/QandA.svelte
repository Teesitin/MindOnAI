<script lang="ts">
    import { Radio } from 'flowbite-svelte';
    import { answerOptions } from '$lib/data'; // Adjust the path as necessary
    import { answerStore } from '$lib/answerStore';

    export let questionIndex: number;
    export let question: string;

    let selectedValue: number | undefined;

    // Updated function to use the store
    function updateAnswer(value: number) {
        selectedValue = value;
        answerStore.updateAnswer(questionIndex, selectedValue);
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
