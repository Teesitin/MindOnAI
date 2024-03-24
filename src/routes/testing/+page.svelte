<script lang="ts">
	import QandA from '$lib/QandA.svelte';
    import { RandomUsers, generateRandomUsers } from '$lib/answerStore';
    import { quadrants, type Quadrant, questions, answerOptions } from '$lib/data';
    import { Button, Heading, P, Popover, Progressbar, Radio } from 'flowbite-svelte';
    import { Range, Label } from 'flowbite-svelte';
	import { writable } from 'svelte/store';
  
    let minmaxValue = 100;
    let tempProgressValue = 100;


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
    const previousAnswers = writable({});

    // Reactive update of quadrant counts
    $: {
        quadrantCounts = quadrants.reduce((acc:any, quadrant) => {
            acc[quadrant.name] = $RandomUsers.filter(user => getQuadrant(user) === quadrant).length;
            return acc;
        }, {});
    }


function doStuff() {
    generateRandomUsers(minmaxValue);
    tempProgressValue = minmaxValue;
}

const dotPosition = writable({ x: 384, y: 384 });

let totalOptimistImpact = 0;
let totalInnovatorImpact = 0;

// This function is called whenever an answer is selected
function handleAnswerChange(questionIndex: number, selectedImpact: number) {
    previousAnswers.update(current => {
        // Find the question to get the impacts based on the index
        const question = questions.find(q => q.index === questionIndex);

        // Calculate the difference from the previous answer, if any
        const previousImpact = current[questionIndex] || 0;
        const impactDifference = selectedImpact - previousImpact;

        // Update the total impacts
        totalOptimistImpact += question.optimist * impactDifference;
        totalInnovatorImpact += question.innovator * impactDifference;

        // Update the dot position store
        dotPosition.set(calculateDotPosition(totalOptimistImpact, totalInnovatorImpact));

        // Store the new impact as the previous one for the next change
        current[questionIndex] = selectedImpact;
        return current;
    });
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

<div class="max-w-3xl m-auto flex justify-center my-10">
    <Button on:click={doStuff} class="w-64">
        Make {minmaxValue} Users
    </Button>
</div>

<div class="max-w-3xl m-auto">
    <Label>User Amount</Label>
    <Range id="range-minmax" min="1" max="10000" bind:value={minmaxValue} />
    <p>Value: {minmaxValue}</p>
</div>


<div class="m-auto max-w-3xl mt-5">
    {#each quadrants as quadrant}
        <div class="mt-2 flex justify-between">
            <p>{quadrant.quadrant} - {quadrant.name} - {quadrantCounts[quadrant.name]}</p>
            <Progressbar progress={(quadrantCounts[quadrant.name]/tempProgressValue) * 100} class="max-w-96"/>
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


<div class="flex">
    <div class="flex flex-col items-center mx-2 md:max-w-7xl md:mx-auto">
        {#each questions as question}
            <div class="w-full flex bg-gray-50 p-4 m-4 rounded-xl gap-10 justify-between border-2">
                <div class="w-1/2 block md:w-9/12">
                    <div class="text-blue-600 font-semibold">
                        Q{question.index}
                    </div>
                    <div class="mt-4">
                        {question.question}
                    </div>
                    <div class="mt-2 block">
                        <div>Optomistic - {question.optimist}</div>
                        <div>Innovative - {question.innovator}</div>
                    </div>
                </div>
            
                <div class="w-1/2 md:w-3/12">
                    {#each answerOptions as { answer, impact }}
                        <Radio name={`question-${question.index}`}  value={impact} on:change={() => handleAnswerChange(question.index, impact)} class="m-2">
                            {answer} {impact}
                        </Radio>
                    {/each}
                </div>
            </div>
        {/each}
    </div>



    <div class="sticky top-0 h-screen overflow-auto max-w-2xl">
        <div>
            <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto">
            <svg class="absolute top-0 left-0 w-full h-auto max-w-[calc(100vw - 4rem)] max-h-[calc(100vw - 4rem)]" viewBox="0 0 768 768">

                <circle cx={$dotPosition.x} cy={$dotPosition.y} r="5" fill="orange" stroke="black"/>
                <div class="absolute">
                    {$dotPosition.x} , {$dotPosition.y}
                </div>
            </svg>
        </div>

        <div>
            Optomist - {totalOptimistImpact}
            Innovator - {totalInnovatorImpact}
        </div>
    </div>
</div>