<script lang="ts">
    import { questions } from '$lib/data';
    import { answerStore } from '$lib/answerStore';
    import { Heading, P } from 'flowbite-svelte';
	import { onDestroy, onMount } from 'svelte';

    let scores: { totalOptimist: any; totalInnovator: any; };
    
    answerStore.subscribe(value => {
        scores = value;
    });

    const imageWidth = 768;
    const imageHeight = 768;

    // Map the scores from range -150 to 150 to the image dimensions
    $: scaleX = (imageWidth / 2) / 150;
    $: scaleY = (imageHeight / 2) / 150;

    $: dotX = (scores.totalInnovator * scaleX) + (imageWidth / 2);
    $: dotY = (imageHeight / 2) - (scores.totalOptimist * scaleY);



    let displayedImageWidth: number;
    let displayedImageHeight: number;

    // Bind this function to the image element to update displayed dimensions
    function setDisplayedDimensions(node: HTMLImageElement) {
        displayedImageWidth = node.offsetWidth;
        displayedImageHeight = node.offsetHeight;

        // Call this to update dot position after getting the actual dimensions
        updateDotPosition();
    }

    // Function to update the dot position
    function updateDotPosition() {
        if (displayedImageWidth && displayedImageHeight) {
            const scaleX = displayedImageWidth / 2 / 150;
            const scaleY = displayedImageHeight / 2 / 150;

            dotX = (scores.totalInnovator * scaleX) + (displayedImageWidth / 2);
            dotY = (displayedImageHeight / 2) - (scores.totalOptimist * scaleY);
        }
    }

    // Reactive statement to update dot position whenever scores change
    $: if (scores && displayedImageWidth && displayedImageHeight) {
        updateDotPosition();
    }

    
    onMount(() => {
        const handleResize = () => {
            const imageElement = document.querySelector('img[alt="ai-xy-plot"]') as HTMLImageElement;
            if (imageElement) {
                setDisplayedDimensions(imageElement);
            }
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        onDestroy(() => {
            window.removeEventListener('resize', handleResize);
        });
    });
</script>

<div class="text-center mx-2 md:max-w-3xl md:mx-auto relative">
    <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto" use:setDisplayedDimensions>
    <svg class="absolute top-0 left-0" width={displayedImageWidth} height={displayedImageHeight}>
        <!-- The dot representing the current scores -->
        {#if displayedImageWidth && displayedImageHeight}
            <circle cx={dotX} cy={dotY} r="5" fill="blue" />
        {/if}
    </svg>
</div>
