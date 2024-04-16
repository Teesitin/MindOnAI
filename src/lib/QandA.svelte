<script lang="ts">
    import { Radio, Popover, Button } from 'flowbite-svelte';
    import { answerOptions, questions, type Question, Subjects } from '$lib/data';
    import { answerQuestion, updateAnswerGrade} from '$lib/answerStore';
    import { QuestionCircleOutline, ThumbsUpSolid, ThumbsDownSolid , RedoOutline} from 'flowbite-svelte-icons';


    export let question: Question;
    export let index2: number;

    let selectedValue: number | undefined;
    let selectedGrade: 'yes' | 'no' | 'unanswer' | undefined;
    let subjectColor = Subjects.find(sub => sub.name === question.subject)?.color || 'gray-100'; 
    $: borderClass = 'border-2 border-' +subjectColor;


    function handleAnswerChange(value: number) {
        selectedValue = value;
        answerQuestion(question.index, value);
    }

    function handleGradeChange(grade: 'yes' | 'no' | 'unanswer') {
        if (grade == selectedGrade)
            {
                selectedGrade = "unanswer";
                updateAnswerGrade(question.index, "unanswer");
                return;
            }

        selectedGrade = grade;
        updateAnswerGrade(question.index, grade);
    }
</script>

<div style="border-color: {subjectColor};" class="w-full block bg-gray-50 p-4 m-4 rounded-xl border-2">
    <div class="flex gap-10 justify-between">
        <div class="w-1/2 block md:w-9/12">
            <div class="text-blue-600 font-semibold">
                Q{index2 + 1}
            </div>
            <div class="mt-4">
                {question.question}
            </div>
        </div>

        <div class="w-1/2 md:w-3/12">
            {#each answerOptions as { answer, impact }}
                <Radio name={`question-${index2}`} bind:group={selectedValue} value={impact} on:change={() => handleAnswerChange(impact)} class="m-2">
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
    
            <div class="flex justify-center gap-5 mb-2">    
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
