<script>
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";

    let visible = false;

    // Use IntersectionObserver to trigger animation when in view
    let section;
    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visible = true;
                        // observer.unobserve(entry.target); // Keep observing? No, run once is better.
                    }
                });
            },
            { threshold: 0.3 },
        );

        if (section) observer.observe(section);
        return () => observer.disconnect();
    });

    const cards = [
        { text: "Hugs that heal your silence", delay: 0 },
        { text: "Hugs that stay even in quiet hours", delay: 1000 },
        { text: "Hugs that hold tomorrow in their warmth", delay: 2000 },
        { text: "Hugs that feel like home", delay: 3000 },
    ];
</script>

<section
    bind:this={section}
    class="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20 relative soft-gradient"
>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">
        {#if visible}
            {#each cards as card, i}
                <div
                    in:fly={{ y: 20, duration: 1500, delay: card.delay }}
                    class="bg-ivory/10 backdrop-blur-md p-10 md:p-12 rounded-2xl shadow-2xl border-2 border-ivory/20 flex items-center justify-center text-center min-h-[16rem] md:min-h-[20rem] hover:bg-ivory/15 hover:border-ivory/30 hover:scale-105 transition-all duration-500"
                >
                    <p
                        class="text-xl md:text-2xl lg:text-3xl font-light italic opacity-95 text-ivory leading-relaxed"
                    >
                        {card.text}
                    </p>
                </div>
            {/each}
        {/if}
    </div>
</section>

<style>
    .soft-gradient {
        background: linear-gradient(45deg, #2b2735, #4a3456, #3d2a47, #2b2735);
        background-size: 400% 400%;
        animation: softPulse 18s ease infinite;
    }

    @keyframes softPulse {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }
</style>
