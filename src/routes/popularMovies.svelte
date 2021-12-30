<script context="module">
    export async function load({ fetch }) {
        const url =
            `https://api.themoviedb.org/3/movie/popular?api_key=70ba738298e901b70e308750acbe2fae` +
            "&page=1";
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
        console.log(data);
        if (res.ok) {
            return {
                props: {
                    Movies: await load,
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
    export let Movies;
    let page = 1;
    import MoviePage from "$lib/moviePage.svelte";

    function nextPage() {
        page++;
        loadpage();
    }

    function prevPage() {
        page--;
        loadpage();
    }

    async function loadpage() {
        const url =
            `https://api.themoviedb.org/3/movie/popular?api_key=70ba738298e901b70e308750acbe2fae` +
            "&page=" +
            page;
        const res = await fetch(url);
        const data = await res.json();
        Movies = await data.results.map((data) => {
            return {
                title: data.original_title,
                image: data.poster_path,
                date: data.release_date,
                count: data.vote_count,
                rating: data.vote_average,
                id: data.id,
            };
        });
    }
</script>

<MoviePage {Movies} />
<div class="btn-group w-screen flex justify-center ">
    <button on:click={prevPage} class="btn">Previous Page</button>
    {#if page >= 2}
        <button on:click={prevPage} class="btn">{page - 1}</button>
    {/if}
    <button class="btn btn-active">{page}</button>
    <button on:click={nextPage} class="btn">{page + 1}</button>
    <button on:click={nextPage} class="btn">Next Page</button>
</div>
