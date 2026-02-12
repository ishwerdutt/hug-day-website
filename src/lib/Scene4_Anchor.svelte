<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let particles = [];

    onMount(() => {
        // Simple particle generation
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: Math.random() * 100,
                y: Math.random() * 100,
                duration: 5 + Math.random() * 10,
                delay: Math.random() * 5,
                size: 2 + Math.random() * 4,
            });
        }
    });
</script>

<section
    class="min-h-screen w-full flex items-center justify-center relative overflow-hidden starry-gradient px-6"
>
    <!-- Enhanced Particles -->
    {#each particles as p}
        <div
            class="absolute bg-gold/50 rounded-full blur-sm animate-float"
            style="left: {p.x}%; top: {p.y}%; width: {p.size}px; height: {p.size}px; animation-duration: {p.duration}s; animation-delay: {p.delay}s;"
        ></div>
    {/each}

    <div
        class="z-10 text-center max-w-4xl mx-auto w-full flex flex-col items-center gap-12"
    >
        <h3
            class="text-3xl md:text-5xl lg:text-6xl font-heading leading-relaxed text-ivory drop-shadow-2xl px-4"
        >
            "And maybe…<br />
            the greatest hug is the one that stays in the heart."
        </h3>

        <!-- Video Card -->
        <div
            class="bg-white/10 backdrop-blur-md p-4 pb-8 rounded-2xl border border-ivory/20 shadow-2xl max-w-md w-full mx-6 transform hover:scale-105 transition-all duration-500 group"
        >
            <div
                class="rounded-xl overflow-hidden shadow-lg border border-ivory/10 relative"
            >
                <div
                    class="absolute inset-0 bg-twilight/20 z-10 group-hover:bg-transparent transition-colors duration-500"
                ></div>
                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full aspect-[3/4] object-cover"
                >
                    <source src="/all_i_want.mp4" type="video/mp4" />
                </video>
            </div>
            <p
                class="text-xl md:text-2xl font-heading text-ivory mt-6 tracking-wide italic opacity-90"
            >
                "All I want is you"
            </p>
        </div>
    </div>
</section>

<style>
    .starry-gradient {
        background: linear-gradient(135deg, #2b2735, #4a3456, #5d4068, #3d2a47);
        background-size: 400% 400%;
        animation: starryPulse 25s ease infinite;
    }

    @keyframes starryPulse {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
        }
    }

    .animate-float {
        animation-name: float;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
</style>
