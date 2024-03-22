<script lang="ts">
    import { totalImpacts } from '$lib/answerStore';

    let dotX: number, dotY: number;

    totalImpacts.subscribe(($totalImpacts) => {
        const centerX = 384;
        const centerY = 384;

        dotX = centerX + ($totalImpacts.totalOptimistImpact * 2);
        dotY = centerY - ($totalImpacts.totalInnovatorImpact * 2);
    });
</script>

<div class="text-center mx-2 md:max-w-3xl md:mx-auto relative">
    <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto">
    <svg class="absolute top-0 left-0 w-full h-auto max-w-[calc(100vw - 4rem)] max-h-[calc(100vw - 4rem)]" viewBox="0 0 768 768">
        {#if dotX && dotY}
            <circle cx={dotX} cy={dotY} r="5" fill="orange" stroke="black" />
        {/if}
    </svg>
</div>
