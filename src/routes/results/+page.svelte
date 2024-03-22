<script lang="ts">
    import { Button, Heading, P } from 'flowbite-svelte';
    import XyPloter from '$lib/XYPloter.svelte';
    import { quadrants, type Quadrant } from '$lib/data';
    import { totalImpacts } from '$lib/answerStore'; // Importing totalImpacts directly

    let scores = { totalOptimist: 0, totalInnovator: 0 };

    totalImpacts.subscribe(({ totalOptimistImpact, totalInnovatorImpact }) => {
        scores.totalOptimist = totalOptimistImpact;
        scores.totalInnovator = totalInnovatorImpact;
    });

    let userQuadrant: Quadrant | undefined;

    $: userQuadrant = quadrants.find(q => 
        scores.totalOptimist >= q.optimistRange[0] &&
        scores.totalOptimist <= q.optimistRange[1] &&
        scores.totalInnovator >= q.innovatorRange[0] &&
        scores.totalInnovator <= q.innovatorRange[1]
    );
</script>

<div class="text-center mt-10 mb-20 mx-2 md:max-w-4xl md:mx-auto">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold">Your AI Perspectives</Heading>
</div>

<div class="text-center mt-10 mx-2 md:max-w-4xl md:mx-auto border-2 rounded-xl bg-gray-50 p-10">
    {#if userQuadrant}
        <Heading tag="h1" class="mb-4 text-blue-500" customSize="text-2xl font-bold">{userQuadrant.name}</Heading>

        <P class="text-center">{userQuadrant.description}</P>
    {/if}
</div>

<XyPloter/>

<div class="text-center mt-0 mx-2 mb-20 md:max-w-4xl md:mx-auto">
    <Heading tag="h2" class="mb-4" customSize="text-2xl font-bold">Coming Soon: See How You Compare</Heading>
    <P>In the near future, we'll be introducing a feature that allows you to anonymously compare your perspectives with those of the broader community. This comparative insight will enable you to understand where you stand in the landscape of AI opinion and see the diversity of thought around these critical issues. Stay tuned for an update where you can gain new perspectives and perhaps even find new allies in your AI views.</P>
</div>
