<script>

    import { popularMovies } from "../stores/moviestores";
    import Card from "$lib/Card.svelte";

</script>

<div class="bg-black px-6 pt-3">
    <h1 class="text-4xl font-bold text-cyan-light">Popular Movies</h1>
</div>

<div class="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5">
    {#each $popularMovies as movie}
        <Card {movie} />
    {/each}
</div>
