<script>
    import Card from "$lib/Card.svelte";
    import { writable } from "svelte/store";

    let query;

    export const searchedMovies = writable([]);
    $: {
        if (query) {
            const fetchSearchedMovies = async () => {
                const url = `https://api.themoviedb.org/3/search/movie?api_key=70ba738298e901b70e308750acbe2fae&language=en-US&query=${query}&page=1&include_adult=false`;
                const res = await fetch(url);
                const data = await res.json();
                const loadedMovies = data.results.map((data) => {
                    return {
                        title: data.title,
                        date: data.release_date,
                        image: data.poster_path,
                        summary: data.overview,
                        rating: data.vote_average,
                        count: data.vote_count,
                        id: data.id,
                    };
                });
                searchedMovies.set(loadedMovies);
            };
            fetchSearchedMovies();
        }
    }
</script>

<div class="bg-black px-6 pt-3 flex justify-centercd">
    <h1 class="text-4xl font-bold text-cyan-light">Search Movies</h1>
</div>

<div
    class="relative text-lg bg-transparent text-cyan-light p-6 flex justify-center mb-10"
>
    <div
        id="test"
        class="flex justify-center items-center border-b-2 border-cyan-dark py-2 w-full"
    >
        <input
            class="bg-black border-none px-2 focus:outline-none"
            type="text"
            placeholder="Search movies here"
            bind:value={query}
        />
    </div>
</div>

<div class="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5">
    {#each $searchedMovies as movie}
        <Card {movie} />
    {/each}
</div>

<style>
    ::placeholder {
        color: #c5c6c7;
        opacity: 1;
    }
</style>
