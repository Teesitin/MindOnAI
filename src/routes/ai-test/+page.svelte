<script lang="ts">
    import { db } from '$lib/firebase';
    import { collection, addDoc } from 'firebase/firestore';
    
    import QandA from "$lib/QandA.svelte";
    import { questions } from '$lib/data';
    import { Button, Heading, P } from "flowbite-svelte";
    import { userAnswers, simulateRandomUserResponses } from '$lib/answerStore';
	import { goto } from "$app/navigation";
    import { get } from 'svelte/store';

    function isFirstQuestionInSection(index: number) {
        return index % 100 === 1;
    }

    async function completeTest() {
        const answers = get(userAnswers);

        try {
            await addDoc(collection(db, "answerSets"), {
                answers: answers,
                timestamp: new Date(),
            });

            console.log("Document successfully written!");
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        goto("/results");
    }

    // simulateRandomUserResponses();

</script>

<div class="text-center mt-10 mx-2 md:max-w-4xl md:mx-auto">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold">Understanding Your AI Perspectives</Heading>
    <P class="mb-6 text-center text-sm dark:text-gray-400">This survey consists of a series of statements about artificial intelligence and its impact on various aspects of life and society. As you navigate through these questions, consider your immediate reactions and feelings towards each statement. There's no right or wrong answer; we're interested in your honest opinions and perspectives.</P>
    <P class="mb-6 text-center text-sm dark:text-gray-400">Please select the option that best aligns with your viewpoint for each statement, ranging from "Strongly Agree" to "Strongly Disagree". Your responses will help us understand general sentiments about AI and its future role.</P>
</div>

<div class="flex flex-col items-center mx-2 md:max-w-4xl md:mx-auto">
    {#each questions as question, index (question.index)}
        {#if isFirstQuestionInSection(question.index)}
            <div class="w-full my-8">
                <Heading tag="h2" class="text-2xl font-bold">{question.subject}</Heading>
            </div>
        {/if}
        <QandA {question} index2={index}/>
    {/each}
</div>

<div class="max-w-3xl m-auto flex flex-col items-center mb-20 mt-10">
    {#if $userAnswers.length !== questions.length}
        <P>{$userAnswers.length} / {questions.length} Questions</P>
    {:else}
        <Button on:click={completeTest}>Complete</Button>
    {/if}
</div>
