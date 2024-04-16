<script>
    import { Heading, P, Button } from 'flowbite-svelte';
    import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>
  
<div class="max-w-7xl text-center mt-20 m-auto">
    <Heading tag="h1" class="mb-4" customSize="text-4xl font-extrabold  md:text-5xl lg:text-6xl">Mind On AI</Heading>
    
    <P class="mb-6 text-center text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Where do you stand on AI?</P>
    
    <Button href="/ai-test">
        Take The Test
        <ArrowRightOutline class="w-3.5 h-3.5 ms-2"/>
    </Button>

    <div class="text-center mx-2 md:max-w-3xl md:mx-auto relative">
        <img src="/Ai-Test.png" alt="ai-xy-plot" class="w-full h-auto">
    </div>
    
</div>