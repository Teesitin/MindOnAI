<script lang="ts">
    import { Radio, Popover, Button } from 'flowbite-svelte';
    import { answerOptions, questions, type Question } from '$lib/data';
    import { answerQuestion, updateAnswerGrade} from '$lib/answerStore';
    import { QuestionCircleOutline, ThumbsUpSolid, ThumbsDownSolid } from 'flowbite-svelte-icons';


    export let questionIndex: number;
    export let question: string;
    export let index2: number;

    let selectedValue: number | undefined;
    let selectedGrade: 'yes' | 'no' | 'unanswer' | undefined;

    function handleAnswerChange(value: number) {
        selectedValue = value;
        answerQuestion(questionIndex, value);
    }

    function handleGradeChange(grade: 'yes' | 'no' | 'unanswer') {
        selectedGrade = grade;
        updateAnswerGrade(questionIndex, grade);
    }
</script>

<div class="w-full block bg-gray-50 p-4 m-4 rounded-xl border-2">
    <div class="flex gap-10 justify-between">
        <div class="w-1/2 block md:w-9/12">
            <div class="text-blue-600 font-semibold">
                Q{index2 + 1}
            </div>
            <div class="mt-4">
                {question}
            </div>
        </div>

        <div class="w-1/2 md:w-3/12">
            {#each answerOptions as { answer, impact }}
                <Radio name={`question-${questionIndex}`} bind:group={selectedValue} value={impact} on:change={() => handleAnswerChange(impact)} class="m-2">
                    {answer}
                </Radio>
            {/each}
        </div>
    </div>

    <div class="flex justify-end">
        <QuestionCircleOutline class="w-4"/>
    
        <Popover>
            <div class="my-2 text-center">
                How did you like this question?
            </div>
    
            <div class="flex justify-center gap-5">    
                <Button on:click={() => handleGradeChange('yes')} color="alternative" class={selectedGrade === 'yes' ? 'bg-primary-600 hover:bg-primary-600' : ''}>
                    <ThumbsUpSolid class={selectedGrade === 'yes' ? 'text-white' : ''}/>
                </Button>
                
                <Button on:click={() => handleGradeChange('no')} color="alternative" class={selectedGrade === 'no' ? 'bg-primary-600 hover:bg-primary-600' : ''}>
                    <ThumbsDownSolid class={selectedGrade === 'no' ? 'text-white' : ''}/>
                </Button>
            </div>
        </Popover>
    </div>
</div>
