<script>
    import { fade } from "svelte/transition";
    import { onMount } from "svelte";

    // IntersectionObserver logic to trigger only when visible
    let visible = false;
    let section;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) visible = true;
            },
            { threshold: 0.4 },
        );

        if (section) observer.observe(section);
        return () => observer.disconnect();
    });
</script>

<section
    bind:this={section}
    class="min-h-screen w-full flex items-center justify-center text-center px-6 farewell-gradient"
>
    {#if visible}
        <div
            in:fade={{ duration: 3000, delay: 500 }}
            class="max-w-3xl mx-auto w-full"
        >
            <p
                class="text-2xl md:text-4xl lg:text-5xl font-light italic text-ivory/90 mb-8 leading-relaxed drop-shadow-xl"
            >
                "And even when we part…"
            </p>
            <p
                class="text-xl md:text-3xl lg:text-4xl text-ivory/70 leading-relaxed drop-shadow-lg"
            >
                Halfway hugs still remember us.
            </p>
        </div>
    {/if}
</section>

<style>
    .farewell-gradient {
        background: linear-gradient(180deg, #2b2735, #1a1622, #0d0a11);
        animation: farewellFade 30s ease infinite;
    }

    @keyframes farewellFade {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.95;
        }
    }
</style>
