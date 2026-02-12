<script>
    import { onMount } from "svelte";

    let audio;
    let playing = false;
    let volume = 0.3;

    const src = "/kodaline_music.mp4";

    function togglePlay() {
        if (!audio) return;

        if (playing) {
            audio.pause();
            playing = false;
        } else {
            audio
                .play()
                .then(() => {
                    playing = true;
                })
                .catch((e) => {
                    console.log("Play failed:", e);
                    playing = false;
                });
        }
    }

    onMount(() => {
        if (audio) {
            audio.volume = volume;

            // Try to autoplay after a short delay
            setTimeout(() => {
                audio
                    .play()
                    .then(() => {
                        playing = true;
                    })
                    .catch(() => {
                        // Autoplay blocked - user will need to click button
                        playing = false;
                    });
            }, 1000);
        }
    });
</script>

<!-- Floating Music Button -->
<button
    on:click={togglePlay}
    class="fixed bottom-6 right-6 z-50 bg-twilight/80 backdrop-blur-md p-4 rounded-full border-2 border-ivory/30 hover:border-ivory/60 shadow-2xl transition-all duration-300 hover:scale-110 group"
    title={playing ? "Pause Music" : "Play Music"}
>
    {#if playing}
        <!-- Pause Icon -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-ivory"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
    {:else}
        <!-- Play Icon -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-ivory"
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M8 5v14l11-7z" />
        </svg>
    {/if}

    <!-- Pulsing indicator when playing -->
    {#if playing}
        <span class="absolute -top-1 -right-1 flex h-3 w-3">
            <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"
            ></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-gold"
            ></span>
        </span>
    {/if}
</button>

<!-- Hidden audio element -->
<audio bind:this={audio} {src} loop></audio>
