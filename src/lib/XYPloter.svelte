<script lang="ts">
    import { questions } from '$lib/data';
    import { answerStore } from '$lib/answerStore';
    import { Heading, P } from 'flowbite-svelte';
	import { onDestroy, onMount } from 'svelte';

    let scores = { totalOptimist: 0, totalInnovator: 0 };
    answerStore.currentScores.subscribe(value => {
        scores = value || scores;
    });

    let dotX = 384;
    let dotY = 384;
</script>

<div class="text-center mx-2 md:max-w-3xl md:mx-auto relative">
    <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto">

    <svg class="absolute top-0 left-0 w-[768px] h-[768px]">
        <circle cx={dotX} cy={dotY} r="5" fill="orange" stroke="black" />
    </svg>
</div>
