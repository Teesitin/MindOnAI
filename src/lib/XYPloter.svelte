<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    import { answerStore } from '$lib/answerStore';

    let scores = { totalOptimist: 150, totalInnovator: 150 };
    answerStore.currentScores.subscribe(value => {
        scores = value || scores;
        // Use the safe function to ensure this runs only in the browser.
        safelyUpdateDotPosition();
    });

    let dotX: number, dotY: number;
    let imageElement: HTMLImageElement;

    function updateDotPosition() {
        if (!imageElement) return;
        
        // Ensure this logic runs after the browser has had a chance to paint.
        const imageWidth = imageElement.offsetWidth;
        const imageHeight = imageElement.offsetHeight;

        const scaleFactor = imageWidth / 768; // Assuming 768 is the original design width.
        dotX = (imageWidth / 2) + (scores.totalOptimist * 1.30 * scaleFactor);
        dotY = (imageHeight / 2) - (scores.totalInnovator * 1.30 * scaleFactor);
    }

    function safelyUpdateDotPosition() {
        if (typeof window !== "undefined") {
            requestAnimationFrame(updateDotPosition);
        } else {
            console.log("requestAnimationFrame is not available in the current environment.");
        }
    }

    onMount(() => {
        // Use the safe function to ensure resize updates only occur in the browser.
        const handleResize = () => safelyUpdateDotPosition();

        window.addEventListener('resize', handleResize);

        onDestroy(() => {
            window.removeEventListener('resize', handleResize);
        });
    });
</script>



<div class="text-center mx-2 md:max-w-3xl md:mx-auto relative">
    <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto" bind:this={imageElement}>

    <svg class="absolute top-0 left-0" style="width: 100%; height: 100%;">
        <circle cx={dotX} cy={dotY} r="5" fill="orange" stroke="black" />
    </svg>
</div>