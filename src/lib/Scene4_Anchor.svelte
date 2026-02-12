<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let petals = [];

    onMount(() => {
        const updatePetals = () => {
            const isMobile = window.innerWidth < 768;
            const count = isMobile ? 25 : 50; // More count since they are small
            const baseSize = isMobile ? 8 : 12; // Very small like confetti/blossoms

            petals = [];
            for (let i = 0; i < count; i++) {
                petals.push({
                    x: Math.random() * 100,
                    y: Math.random() * 120 - 20,
                    rotation: Math.random() * 360,
                    duration: 15 + Math.random() * 15, // Slower fall for smaller items
                    delay: Math.random() * 5,
                    size: baseSize + Math.random() * (isMobile ? 10 : 20),
                });
            }
        };

        updatePetals();
        window.addEventListener("resize", updatePetals);

        return () => window.removeEventListener("resize", updatePetals);
    });
</script>

<section
    class="min-h-screen w-full flex items-center justify-center relative overflow-hidden starry-gradient px-6"
>
    <!-- Floating Lotus Petals -->
    {#each petals as petal}
        <div
            class="lotus-petal"
            style="left: {petal.x}%; top: {petal.y}%; width: {petal.size}px; height: {petal.size}px; animation-duration: {petal.duration}s; animation-delay: {petal.delay}s; --rotation: {petal.rotation}deg;"
        ></div>
    {/each}

    <div
        class="z-10 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-12 px-6"
    >
        <!-- Text Side -->
        <div class="flex-1 text-center md:text-right">
            <h3
                class="text-3xl md:text-5xl lg:text-6xl font-heading leading-relaxed text-ivory drop-shadow-2xl"
            >
                "And maybe…<br />
                the greatest hug is the one that stays in the heart,<br />
                like my Vinland in heart of mine."
            </h3>
        </div>

        <!-- Card Side -->
        <div class="flex-1 flex justify-center md:justify-start">
            <div
                class="bg-white/10 backdrop-blur-md p-4 pb-8 rounded-2xl border border-ivory/20 shadow-2xl max-w-xs w-full transform hover:scale-105 transition-all duration-500 group"
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
                        <source src="/yellow.mp4" type="video/mp4" />
                    </video>
                </div>
                <p
                    class="text-xl md:text-2xl font-heading text-ivory mt-6 tracking-wide italic opacity-90 text-center"
                >
                    "All I want is you"
                </p>
            </div>
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

    /* Lotus Petal Styles */
    /* Lotus Petal Styles */
    .lotus-petal {
        position: absolute;
        background: radial-gradient(
            ellipse at center,
            rgba(252, 232, 200, 0.9) 0%,
            rgba(247, 216, 216, 0.8) 40%,
            rgba(230, 212, 163, 0.6) 80%,
            transparent 100%
        );
        border-radius: 50% 50% 50% 0;
        transform: rotate(var(--rotation));
        opacity: 0;
        animation: floatPetal linear infinite;
        pointer-events: none;
        box-shadow: 0 0 15px rgba(252, 232, 200, 0.3); /* Add glow */
    }

    @keyframes floatPetal {
        0% {
            transform: translateY(110vh) rotate(var(--rotation)) scale(0.6);
            opacity: 0;
        }
        10% {
            opacity: 1; /* Make them fully visible quickly */
        }
        90% {
            opacity: 0.9;
        }
        100% {
            transform: translateY(-30vh) rotate(calc(var(--rotation) + 360deg))
                scale(1.3);
            opacity: 0;
        }
    }
</style>
