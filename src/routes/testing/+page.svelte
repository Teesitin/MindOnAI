<script lang="ts">
    import { RandomUsers, generateRandomUsers } from '$lib/answerStore';
    import { quadrants, type Quadrant } from '$lib/data';
    import { Button, Heading, P, Popover, Progressbar } from 'flowbite-svelte';

    function calculateDotPosition(optimistImpact: number, innovatorImpact: number) {
        const centerX = 384;
        const centerY = 384;

        const scaleOptimist = 2;
        const scaleInnovator = 2;

        const x = centerX + (optimistImpact * scaleOptimist);
        const y = centerY - (innovatorImpact * scaleInnovator);

        return { x, y };
    }

    let userQuadrant: Quadrant | undefined;

    $: userQuadrant = quadrants.find(q => 
        $RandomUsers[0].totalOptimistImpact >= q.optimistRange[0] &&
        $RandomUsers[0].totalOptimistImpact <= q.optimistRange[1] &&
        $RandomUsers[0].totalInnovatorImpact >= q.innovatorRange[0] &&
        $RandomUsers[0].totalInnovatorImpact <= q.innovatorRange[1]
    );

    function getQuadrant(user: { totalOptimistImpact: number, totalInnovatorImpact: number }): Quadrant | undefined {
        return quadrants.find(q => 
            user.totalOptimistImpact >= q.optimistRange[0] &&
            user.totalOptimistImpact <= q.optimistRange[1] &&
            user.totalInnovatorImpact >= q.innovatorRange[0] &&
            user.totalInnovatorImpact <= q.innovatorRange[1]
        );
    }

    let quadrantCounts = {};

    // Reactive update of quadrant counts
    $: {
        quadrantCounts = quadrants.reduce((acc, quadrant) => {
            acc[quadrant.name] = $RandomUsers.filter(user => getQuadrant(user) === quadrant).length;
            return acc;
        }, {});
    }
</script>

<div class="text-center mt-10 mx-2 md:max-w-4xl md:mx-auto border-2 rounded-xl bg-gray-50 p-10">
    {$RandomUsers[0].totalOptimistImpact}
    {$RandomUsers[0].totalInnovatorImpact}

    {#if userQuadrant}
        <Heading tag="h1" class="mb-4 text-blue-500" customSize="text-2xl font-bold">{userQuadrant.name}</Heading>

        <P class="text-center">{userQuadrant.description}</P>
    {/if}
</div>

<div class="max-w-7xl m-auto flex justify-center mt-10">


    <Button on:click={() => generateRandomUsers(1000)}>
        Make 100 More
    </Button>
</div>


<div class="m-auto max-w-3xl mt-5">
    {#each quadrants as quadrant}
        <div class="mt-2 flex justify-between">
            <p>{quadrant.quadrant} - {quadrant.name} - {quadrantCounts[quadrant.name]}</p>
            <Progressbar progress={quadrantCounts[quadrant.name]} class="max-w-96"/>
        </div>
    {/each}
</div>




<div class="text-center mx-2 md:max-w-3xl md:mx-auto relative">
    <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto">
    <svg class="absolute top-0 left-0 w-full h-auto max-w-[calc(100vw - 4rem)] max-h-[calc(100vw - 4rem)]" viewBox="0 0 768 768">
        {#each $RandomUsers as { totalOptimistImpact, totalInnovatorImpact }, index}
            {@const { x, y } = calculateDotPosition(totalOptimistImpact, totalInnovatorImpact)}

            <circle cx={x} cy={y} r="5" fill={index === 0 ? "white" : "orange"} stroke="black" id="dot-{index}"/>
            <div class="absolute">
                {x}, {y}
            </div>
        {/each}
    </svg>
</div>