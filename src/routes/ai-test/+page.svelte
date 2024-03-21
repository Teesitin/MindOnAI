<script lang="ts">
    import QandA from "$lib/QandA.svelte";
    import { questions } from '$lib/data'; // Adjust the path as necessary
</script>

<div class="max-w-3xl m-auto flex flex-col items-center">
    {#each Array.from(questions.entries()) as [questionIndex, question]}
        <QandA questionIndex={questionIndex} question={question}/>
    {/each}
</div>