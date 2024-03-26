<script lang="ts">
    import QandA from "$lib/QandA.svelte";
    import { questions } from '$lib/data'; // Adjust the path as necessary
	import { Button, Heading, P } from "flowbite-svelte";
    import { userAnswers } from '$lib/answerStore'
</script>

<div class="text-center mt-10 mx-2 md:max-w-4xl md:mx-auto">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold">Understanding Your AI Perspectives</Heading>
    
    <P class="mb-6 text-center text-sm dark:text-gray-400">This survey consists of a series of statements about artificial intelligence and its impact on various aspects of life and society. As you navigate through these questions, consider your immediate reactions and feelings towards each statement. There's no right or wrong answer; we're interested in your honest opinions and perspectives.</P>
    <P class="mb-6 text-center text-sm dark:text-gray-400">Please select the option that best aligns with your viewpoint for each statement, ranging from "Strongly Agree" to "Strongly Disagree". Your responses will help us understand general sentiments about AI and its future role.</P>
</div>

<div class="flex flex-col items-center mx-2 md:max-w-4xl md:mx-auto">
    {#each questions as { index, question }}
        <QandA questionIndex={index} question={question}/>
    {/each}
</div>

<div class="max-w-3xl m-auto flex flex-col items-center mb-20 mt-10">


    {#if $userAnswers.length !== questions.length}
        {$userAnswers.length} / {questions.length} Questions
    {:else}
        <Button href="/results">
            Complete
        </Button>
    {/if}
</div>