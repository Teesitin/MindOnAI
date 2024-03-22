<script lang="ts">
    import { questions } from '$lib/data';
    import { answerStore } from '$lib/answerStore';
    import { Heading, P } from 'flowbite-svelte';
	import { onDestroy, onMount } from 'svelte';

    let scores = { totalOptimist: 150, totalInnovator: 150 };
    answerStore.currentScores.subscribe(value => {
        scores = value || scores;
    });

    let dotX = 384 + (scores.totalOptimist * 1.30);
    let dotY = 384 + (scores.totalInnovator * -1.30);
</script>

<div class="text-center mx-2 md:max-w-3xl md:mx-auto relative">
    <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto">

    <svg
      class="absolute top-0 left-0 w-full h-auto max-w-[calc(100vw - 4rem)] max-h-[calc(100vw - 4rem)]"
      viewBox="0 0 768 768"
    >
        <circle cx={dotX} cy={dotY} r="5" fill="orange" stroke="black" />
    </svg>
</div>
