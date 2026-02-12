<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let visible = false;
  let showButton = false;

  onMount(() => {
    setTimeout(() => (visible = true), 1000);
    setTimeout(() => (showButton = true), 4000);
  });

  function startJourney() {
    const nextSection = document.getElementById("scene-2");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
</script>

<section
  class="min-h-screen w-full flex flex-col items-center justify-center text-center px-6 relative overflow-hidden animated-gradient"
>
  {#if visible}
    <div in:fade={{ duration: 2000 }} class="z-10 max-w-2xl mx-auto w-full">
      <p
        class="text-2xl md:text-3xl lg:text-4xl font-light italic mb-8 cinematic-text opacity-90 text-ivory"
      >
        "Some embraces hold more than bodies…"
      </p>

      <p
        class="text-3xl md:text-5xl lg:text-6xl font-heading tracking-wider mb-16 cinematic-text text-ivory"
        style="animation-delay: 2s; animation-fill-mode: forwards;"
      >
        They hold souls.
      </p>

      {#if showButton}
        <button
          in:fade={{ duration: 1500 }}
          on:click={startJourney}
          class="border-2 border-ivory/40 px-10 py-4 rounded-full text-sm md:text-base tracking-widest hover:bg-ivory/20 hover:border-ivory hover:shadow-lg hover:shadow-ivory/30 transition-all duration-500 uppercase z-20 text-ivory font-semibold mx-auto"
        >
          Start the Hug Day Journey
        </button>
      {/if}
    </div>
  {/if}
</section>

<style>
  .animated-gradient {
    background: linear-gradient(-45deg, #2b2735, #3d2a47, #2b2735, #4a3456);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
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
</style>
