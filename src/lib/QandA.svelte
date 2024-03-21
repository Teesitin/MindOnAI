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

<div class="w-full flex bg-gray-50 p-4 m-4 rounded-xl gap-10 justify-between">
    <div class="w-9/12 block">
        <div>
            Q{questionIndex}
        </div>
        <div class="mt-4">
            {question}
        </div>
    </div>

    <div class="w-3/12">
        {#each Array.from(answerOptions.entries()) as [text, value]}
            <Radio name={`question-${questionIndex}`} bind:group={selectedValue} value={value} on:change={() => updateAnswer(value)} class="m-2">
                {text}
            </Radio>
        {/each}
    </div>
</div>
