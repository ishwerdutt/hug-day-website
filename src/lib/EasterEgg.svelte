<script>
    import { onMount, onDestroy } from "svelte";

    let typed = "";
    const secret = "hug";
    let found = false;

    onMount(() => {
        console.log(
            "%cSome hugs are invisible… yet still remembered. (xoxo)",
            "color: #F7D8D8; font-size: 14px; font-style: italic;",
        );
        window.addEventListener("keydown", handleKeydown);
    });

    onDestroy(() => {
        window.removeEventListener("keydown", handleKeydown);
    });

    function handleKeydown(e) {
        typed += e.key.toLowerCase();
        if (typed.length > secret.length) {
            typed = typed.slice(-secret.length);
        }
        if (typed === secret) {
            triggerEasterEgg();
            typed = ""; // Reset
        }
    }

    function triggerEasterEgg() {
        found = true;
        setTimeout(() => (found = false), 3000);
    }
</script>

{#if found}
    <div
        class="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center bg-gold/20 backdrop-blur-sm animate-pulse"
    >
        <div
            class="text-4xl md:text-6xl font-heading text-ivory drop-shadow-2xl animate-bounce"
        >
            Found the hidden hug. 🤍
        </div>
    </div>
{/if}
