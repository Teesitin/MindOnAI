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
        const question = questions.find(q => q.index === questionIndex);

        const previousImpact = current[questionIndex] || 0;
        const impactDifference = selectedImpact - previousImpact;

        totalOptimistImpact += question.optimist * impactDifference;
        totalInnovatorImpact += question.innovator * impactDifference;

        dotPosition.set(calculateDotPosition(totalOptimistImpact, totalInnovatorImpact));

        current[questionIndex] = selectedImpact;
        return current;
    });
}


</script>

<div class="text-left mt-10 mx-2 md:max-w-4xl md:mx-auto border-2 rounded-xl bg-gray-50 p-10">
    <div class="mb-6 text-xl font-semibold">
        About Me
    </div>

    <div class="mb-6">
        Who am I, you ask? Just your average Joe who's probably spent way more time programming than is strictly healthy.
        Currently, I'm navigating the exciting world of Computer Engineering at UCF, loving every bit of the challenge.
        For the past five years, I've been diving deep into website creation and backend development, and let's just say, I've become a little too fond of it!
    </div>

    <div>
        One day, seemingly out of nowhere, I had this spark of an idea.
        You see, I've always had a thing for political quizzes and a fascination with AI.
        So, I thought, why not combine the two? Thus began my journey into developing an app that bridges these interests.
        Admittedly, I'm pretty green when it comes to crafting quizzes and tests.
        I'm aware that my questions might cover a wide spectrum of quality, but I'm eager to refine them, learning as I go and letting the data guide me.
    </div>
</div>


<div class="border-t-2 h-1 my-10"/>

<div class="text-left mt-10 mx-2 md:max-w-4xl md:mx-auto border-2 rounded-xl bg-gray-50 p-10">
    <div class="mb-6 text-xl font-semibold">
        The Quadrants
    </div>

    <div class="mb-6">
        Okay. There are nine quadrants:

        <table class="mt-3 ml-3">
            <thead>
                <tr>
                    <th class="w-64">Name</th>
                    <th>Support</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Supporting Pessimist</td>
                    <td>Low Optimism, High Innovation</td>
                </tr>
                <tr>
                    <td>Neutral Innovator</td>
                    <td>Moderate Optimism, High Innovation</td>
                </tr>
                <tr>
                    <td>Free Spirit Optimist</td>
                    <td>High Optimism, High Innovation</td>
                </tr>
                <tr>
                    <td>Pure Pessimist</td>
                    <td>Low Optimism, Moderate Innovation</td>
                </tr>
                <tr>
                    <td>Centrist</td>
                    <td>Moderate Optimism, Moderate Innovation</td>
                </tr>
                <tr>
                    <td>Nonchalant Optimist</td>
                    <td>High Optimism, Moderate Innovation</td>
                </tr>
                <tr>
                    <td>Extremely Critical</td>
                    <td>Low Optimism, Low Innovation</td>
                </tr>
                <tr>
                    <td>Tempered Regulator</td>
                    <td>Moderate Optimism, Low Innovation</td>
                </tr>
                <tr>
                    <td>Ethical Guardian</td>
                    <td>High Optimism, Low Innovation</td>
                </tr>
            </tbody>
        </table>

        <div class="mt-6">
            I'm looking forward to refining and adding more depth to the quadrants for clearer definitions.
            However, for the moment, I'm content with their current state.
            My philosophy for this project embraces a flexible approach to definitions, allowing for a nuanced and open interpretation of each quadrant.
            You will see "open for interpretation" is a common theme.
        </div>

        <div class="mt-6">
            Regarding the fairness and balance of the test, it currently has a pronounced tendency to categorize results as centrist.
            Despite efforts to recalibrate the scoring to encourage more diverse outcomes across the quadrants, the inclusion of a "not sure" option tends to favor centrist results in randomized testing scenarios.
            As a temporary measure, I've implemented a cap of 100 for each axis in the quadrant grading system.
            It's possible for the cumulative scores of the questions to exceed this limit on any given axis, but I don't see this as a drawback.
            In fact, I believe it underscores an important aspect of the test: individuals with extreme views on certain topics have the opportunity to reach these outer bounds through their responses.
        </div>
    </div>

    <div>

    </div>
</div>


<div class="text-left mt-10 mx-2 md:max-w-4xl md:mx-auto border-2 rounded-xl bg-gray-50 p-10">
    <div class="mb-6 text-xl font-semibold">
        Questions, Questions, Questions
    </div>

    <div class="mb-6">
        Please forgive! I be new at this! 
    </div>

    <div class="mb-6">

        My vision for this test hinges on its interpretative nature.
        I aim to encourage users to engage deeply with each question, urging them to choose "Not Sure" if the topic feels unfamiliar.
        Initially, the test was designed with just four response options, excluding uncertainty.
        However, feedback from play-testers, who were sometimes puzzled by the references in the questions, led to the inclusion of a "Not Sure" option.
    </div>

    <div class="mb-6">
        As for the topics covered, I'm generally satisfied.
        They seem to encompass the necessary ground, though I'm not opposed to broadening the range of subjects while possibly reducing the number of questions for each.
        Speaking of which, the current number of questions feels excessive. My target is to streamline the test to fewer than 50 questions, aiming ideally for around 40.
        I believe that anything beyond 60 questions risks diluting the test with redundant content.
    </div>

    <div class="mb-6">
        In terms of tone and brevity, I'm quite pleased with how the questions have been framed.
        The goal is to ensure clarity without overly simplifying the questions, providing enough information for thoughtful consideration without making the answers overly obvious.
    </div>
</div>

<div class="border-t-2 h-1 my-10"/>

<div class="text-left mt-10 mx-2 md:max-w-4xl md:mx-auto border-2 rounded-xl bg-gray-50 p-10">
    <div class="mb-6 text-xl font-semibold">
        A Playground for the Enthused
    </div>

    <div class="">
        Not much in terms of a playground, but it must suffice! A bit brokey though. Play at your own risk!
    </div>
</div>


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
                        <div>Optomistic: {question.optimist}</div>
                        <div>Innovative: {question.innovator}</div>
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
            Optomist: {totalOptimistImpact}
            Innovator: {totalInnovatorImpact}
        </div>
    </div>
</div>