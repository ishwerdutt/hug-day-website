<script>
    import { fade, scale } from "svelte/transition";
    import { elasticOut } from "svelte/easing";
    import { onMount } from "svelte";

    let hugged = false;
    let particles = [];
    let petals = [];

    onMount(() => {
        // Create MANY floating lotus petals - much more visible
        for (let i = 0; i < 25; i++) {
            petals.push({
                x: Math.random() * 100,
                y: Math.random() * 120 - 20, // Start some off screen
                rotation: Math.random() * 360,
                duration: 12 + Math.random() * 8,
                delay: Math.random() * 5,
                size: 60 + Math.random() * 80, // MUCH LARGER
            });
        }
    });

    function handleHug() {
        hugged = true;
        createParticles();
    }

    function createParticles() {
        for (let i = 0; i < 100; i++) {
            particles = [
                ...particles,
                {
                    x: 50 + (Math.random() - 0.5) * 50,
                    y: 50 + (Math.random() - 0.5) * 50,
                    angle: Math.random() * 360,
                    speed: 1 + Math.random() * 4,
                    size: 3 + Math.random() * 8,
                    opacity: 0.8,
                },
            ];
        }
    }
</script>

<section
    class="min-h-screen w-full flex flex-col items-center justify-center text-center relative romantic-gradient transition-all duration-[3000ms] px-6 overflow-hidden {hugged
        ? 'hugged-state'
        : ''}"
>
    <!-- Floating Lotus Petals - MUCH MORE VISIBLE -->
    {#each petals as petal}
        <div
            class="lotus-petal"
            style="left: {petal.x}%; top: {petal.y}%; width: {petal.size}px; height: {petal.size}px; animation-duration: {petal.duration}s; animation-delay: {petal.delay}s; --rotation: {petal.rotation}deg;"
        ></div>
    {/each}

    {#if !hugged}
        <div
            in:fade={{ duration: 1000 }}
            out:fade={{ duration: 500 }}
            class="z-20 max-w-3xl mx-auto w-full"
        >
            <h2
                class="text-3xl md:text-5xl lg:text-6xl font-heading mb-12 px-4 leading-tight text-twilight drop-shadow-lg"
            >
                "Will you let our hugs become forever memories?"
            </h2>

            <button
                on:click={handleHug}
                class="hug-button px-12 py-6 bg-twilight text-ivory rounded-full text-xl md:text-2xl font-bold tracking-wide shadow-2xl mx-auto relative overflow-hidden"
            >
                <span class="relative z-10">Hug Me Now 🤍</span>
                <div class="button-glow"></div>
                <div class="ripple-1"></div>
                <div class="ripple-2"></div>
                <div class="ripple-3"></div>
            </button>

            <p
                class="text-base md:text-xl lg:text-2xl italic text-twilight/90 mt-10 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-sm"
            >
                <span
                    class="text-2xl md:text-3xl text-twilight font-semibold block mb-2"
                    >I am always there,</span
                >
                <span class="text-xl md:text-2xl text-twilight/80 block mb-1"
                    >right there,</span
                >
                <span class="text-lg md:text-xl text-twilight/70"
                    >near to your feet.</span
                >
            </p>
        </div>
    {:else}
        <div
            in:scale={{ duration: 1000, easing: elasticOut }}
            class="z-20 max-w-sm w-full mx-auto px-6"
        >
            <div
                class="rounded-3xl overflow-hidden shadow-2xl border-4 border-gold/30 relative aspect-[9/16]"
            >
                <!-- svelte-ignore a11y-media-has-caption -->
                <video
                    autoplay
                    muted
                    loop
                    playsinline
                    class="w-full h-full object-cover"
                >
                    <source src="/cookie_hug.mp4#t=15" type="video/mp4" />
                </video>

                <!-- Overlay Text -->
                <div class="absolute bottom-12 left-0 right-0 text-center">
                    <p
                        class="text-4xl md:text-6xl lg:text-7xl font-heading text-ivory drop-shadow-xl opacity-90"
                    >
                        Always.
                    </p>
                </div>
            </div>
        </div>

        <!-- Particle Explosion -->
        {#each particles as p}
            <div
                class="absolute bg-gold rounded-full pointer-events-none"
                style="left: 50%; top: 50%; width: {p.size}px; height: {p.size}px; transform: translate(-50%, -50%) rotate({p.angle}deg) translate({p.speed *
                    20}vh) scale(0); opacity: 0; animation: burst 2s ease-out forwards;"
            ></div>
        {/each}
    {/if}
</section>

<style>
    .romantic-gradient {
        background: linear-gradient(135deg, #f7d8d8, #fce8c8, #e6d4a3, #f7d8d8);
        background-size: 300% 300%;
        animation: romanticFlow 20s ease infinite;
    }

    .hugged-state {
        background: linear-gradient(135deg, #fce8c8, #f7d8d8, #e6d4a3);
        animation: celebrateGlow 3s ease;
    }

    @keyframes romanticFlow {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    @keyframes celebrateGlow {
        0% {
            filter: brightness(1);
        }
        50% {
            filter: brightness(1.3);
        }
        100% {
            filter: brightness(1.1);
        }
    }

    @keyframes burst {
        0% {
            transform: translate(-50%, -50%) rotate(var(--angle)) translate(0)
                scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) rotate(var(--angle))
                translate(40vh) scale(0);
            opacity: 0;
        }
    }

    /* ENHANCED Lotus Petal Styles - MUCH MORE VISIBLE */
    .lotus-petal {
        position: absolute;
        background: radial-gradient(
            ellipse at center,
            rgba(252, 232, 200, 0.95) 0%,
            rgba(247, 216, 216, 0.85) 30%,
            rgba(230, 212, 163, 0.6) 70%,
            transparent 100%
        );
        border-radius: 50% 50% 50% 0;
        transform: rotate(var(--rotation));
        opacity: 0;
        animation: floatPetal linear infinite;
        pointer-events: none;
        filter: blur(0.5px);
        box-shadow: 0 0 20px rgba(252, 232, 200, 0.5);
    }

    @keyframes floatPetal {
        0% {
            transform: translateY(110vh) rotate(var(--rotation)) scale(0.6);
            opacity: 0;
        }
        5% {
            opacity: 0.9;
        }
        95% {
            opacity: 0.8;
        }
        100% {
            transform: translateY(-30vh) rotate(calc(var(--rotation) + 360deg))
                scale(1.3);
            opacity: 0;
        }
    }

    /* DRAMATIC Button Styles with Heartbeat */
    .hug-button {
        transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        animation: heartbeat 2s ease-in-out infinite;
    }

    .hug-button:hover {
        transform: scale(1.2) !important;
        box-shadow:
            0 0 80px rgba(255, 249, 243, 1),
            0 0 120px rgba(230, 212, 163, 0.8),
            0 0 160px rgba(252, 232, 200, 0.6);
        animation: heartbeatFast 0.8s ease-in-out infinite;
    }

    @keyframes heartbeat {
        0%,
        100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(255, 249, 243, 0.4);
        }
        10% {
            transform: scale(1.05);
            box-shadow:
                0 0 50px rgba(255, 249, 243, 0.7),
                0 0 80px rgba(230, 212, 163, 0.5);
        }
        20% {
            transform: scale(1);
        }
        30% {
            transform: scale(1.05);
            box-shadow:
                0 0 50px rgba(255, 249, 243, 0.7),
                0 0 80px rgba(230, 212, 163, 0.5);
        }
        40% {
            transform: scale(1);
        }
    }

    @keyframes heartbeatFast {
        0%,
        100% {
            transform: scale(1.2);
        }
        50% {
            transform: scale(1.25);
        }
    }

    .button-glow {
        position: absolute;
        inset: -3px;
        background: linear-gradient(
            45deg,
            transparent,
            rgba(230, 212, 163, 0.6),
            transparent
        );
        border-radius: inherit;
        opacity: 0;
        animation: shimmer 2s linear infinite;
        z-index: 0;
    }

    @keyframes shimmer {
        0% {
            transform: translateX(-100%) rotate(45deg);
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateX(100%) rotate(45deg);
            opacity: 0;
        }
    }

    /* Ripple Effects */
    .ripple-1,
    .ripple-2,
    .ripple-3 {
        position: absolute;
        inset: 0;
        border: 3px solid rgba(230, 212, 163, 0.7);
        border-radius: inherit;
        animation: ripple 3s ease-out infinite;
        pointer-events: none;
    }

    .ripple-2 {
        animation-delay: 1s;
    }

    .ripple-3 {
        animation-delay: 2s;
    }

    @keyframes ripple {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(1.8);
            opacity: 0;
        }
    }
</style>
