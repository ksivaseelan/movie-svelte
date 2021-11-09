<script context="module">
    export async function load({ fetch }) {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=70ba738298e901b70e308750acbe2fae`;
        const res = await fetch(url);
        const data = await res.json();
        const load = data.results.map((data) => {
            return {
                title: data.original_title,
                image: data.poster_path,
                date: data.release_date,
                count: data.vote_count,
                rating: data.vote_average,
                id: data.id,
            };
        });

        if (res.ok) {
            return {
                props: {
                    popularMovies: await load,
                },
            };
        }

        return {
            status: res.status,
            error: new Error(`Could not load ${url}`),
        };
    }
</script>

<script>
    export let popularMovies;
    import Card from "$lib/Card.svelte";
    import { flip } from "svelte/animate";
</script>

<div class="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5">
    {#each popularMovies as movie (movie)}
        <div animate:flip><Card {movie} /></div>
    {/each}
</div>
