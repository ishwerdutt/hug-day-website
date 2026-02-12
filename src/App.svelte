<script>
  import AudioPlayer from "./lib/AudioPlayer.svelte";
  import EasterEgg from "./lib/EasterEgg.svelte";
  import Scene1 from "./lib/Scene1_Welcome.svelte";
  import Scene2 from "./lib/Scene2_BeHereNow.svelte";
  import Scene3 from "./lib/Scene3_Meaning.svelte";
  import Scene4 from "./lib/Scene4_Anchor.svelte";
  import Scene5 from "./lib/Scene5_TheAsk.svelte";
  import Scene6 from "./lib/Scene6_Close.svelte";
</script>

<main
  class="relative bg-twilight min-h-screen text-ivory antialiased selection:bg-gold selection:text-twilight"
>
  <AudioPlayer />
  <EasterEgg />

  <div class="scroller">
    <Scene1 />
    <Scene2 />
    <Scene3 />
    <Scene4 />
    <Scene5 />
    <Scene6 />
  </div>
</main>

<style>
  /* Global smooth scrolling is handled in app.css, but we can add specific snap here if desired. 
     For now, sticking to smooth continuous flow as requested ("smooth easing... feels like camera dolly"). */
</style>
