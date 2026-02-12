<script>
    import { onMount } from "svelte";

    let particles = [];

    onMount(() => {
        // Create warm floating particles
        for (let i = 0; i < 30; i++) {
            particles.push({
                x: Math.random() * 100,
                y: Math.random() * 100,
                duration: 8 + Math.random() * 12,
                delay: Math.random() * 10,
                size: 3 + Math.random() * 5,
            });
        }
    });
</script>

<section
    id="scene-2"
    class="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden sunset-gradient px-6 py-12"
>
    <!-- Floating Particles -->
    {#each particles as p}
        <div
            class="absolute bg-amber/40 rounded-full blur-sm animate-drift z-10"
            style="left: {p.x}%; top: {p.y}%; width: {p.size}px; height: {p.size}px; animation-duration: {p.duration}s; animation-delay: {p.delay}s;"
        ></div>
    {/each}

    <div class="relative z-20 text-center max-w-4xl mx-auto w-full space-y-8">
        <h2
            class="text-4xl md:text-6xl lg:text-7xl font-heading mb-6 drop-shadow-2xl text-twilight leading-tight"
        >
            Where warmth begins…
        </h2>

        <!-- Video Box -->
        <div class="mx-auto max-w-2xl w-full">
            <div
                class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-ivory/30"
            >
                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full aspect-video object-cover"
                >
                    <source src="/whatsapp_video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>

        <p
            class="text-xl md:text-3xl lg:text-4xl font-light opacity-95 drop-shadow-lg text-twilight/90 mt-8"
        >
            And every moment softens the world.
        </p>
    </div>
</section>

<style>
    .sunset-gradient {
        background: linear-gradient(135deg, #f7d8d8, #fce8c8, #e6d4a3, #f7d8d8);
        background-size: 300% 300%;
        animation: sunsetFlow 20s ease infinite;
    }

    @keyframes sunsetFlow {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    @keyframes drift {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        20% {
            opacity: 0.6;
        }
        80% {
            opacity: 0.4;
        }
        100% {
            transform: translateY(-120vh) translateX(40px);
            opacity: 0;
        }
    }

    .animate-drift {
        animation-name: drift;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
</style>
