<script>
    export let Movies;
    import Card from "$lib/Card.svelte";
    import { flip } from "svelte/animate";
    export let loading = false;
</script>

<div class="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5">
    {#each Movies as movie (movie)}
        <div animate:flip><Card {movie} /></div>
    {/each}
    {#if loading}
        <span>Loading...</span>
    {/if}
</div>
