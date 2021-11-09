<script>
    import Card from "$lib/Card.svelte";
    import { writable } from "svelte/store";
    import debounce from "just-debounce-it";

    let query = "";

    const handleInput = debounce((event) => {
        query = event.target.value;
    }, 1000);

    export const searchedMovies = writable([]);
    $: {
        if (query) {
            const fetchSearchedMovies = async () => {
                const url = `https://api.themoviedb.org/3/search/movie?api_key=70ba738298e901b70e308750acbe2fae&language=en-US&query=${query}&page=1&include_adult=false`;
                const res = await fetch(url);
                const data = await res.json();
                const mappedMovies = data.results.map((data) => {
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
                searchedMovies.set(mappedMovies);
            };
            fetchSearchedMovies();
        }
    }
</script>

<div
    class="relative text-lg bg-transparent text-orange p-6 flex justify-center mb-10"
>
    <div
        id="test"
        class="flex justify-center items-center border-b-2 border-cyan-dark py-2 w-full"
    >
        <input
            on:input={handleInput}
            class="bg-black border-none px-2 focus:outline-none text-gray-light"
            type="text"
            placeholder="Search movies here"
            value={query}
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
        color: #a7a9be;
        opacity: 1;
    }
</style>
