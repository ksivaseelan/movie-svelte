<script context="module">
    export async function load({ page, fetch }) {
        let id = page.params.slug;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=70ba738298e901b70e308750acbe2fae`;
        const res = await fetch(url);

        if (res.ok) {
            return {
                props: {
                    movie: await res.json(),
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
    export let movie;
</script>

<div
    id="bg"
    style="background-image: url(https://image.tmdb.org/t/p/original{movie.backdrop_path});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            "
    class="h-screen">
    <div class="bg-black bg-opacity-80">
        <div
            id="text-block"
            class="px-40 flex flex-col justify-center items-center h-screen text-3xl font-bold text-white">
            <h1 class="text-6xl">{movie.title}</h1>
            <br />
            <p>{movie.overview}</p>
            <br />
            <p>
                Release Date:
                {movie.release_date.slice(8, 10)},
                {movie.release_date.slice(5, 7)},
                {movie.release_date.slice(0, 4)}
            </p>
            <p>Runtime: {movie.runtime} mins</p>
            <br />
            <p class="text-7xl">Genres:</p>
            {#each movie.genres as genres}
                <li>{genres.name}</li>
            {/each}
            <br />
            <p>Average Rating: {movie.vote_average}</p>
            <p>Rating count from: {movie.vote_count}</p>
            <br />
            <p>Produced by:</p>
            {#each movie.production_companies as prod}
                <li>{prod.name} from {prod.origin_country}</li>
            {/each}
            <br />
            <a href={movie.homepage}>Go to website</a>
        </div>
    </div>
</div>

<style>
    #text-block {
        mix-blend-mode: difference;
    }
</style>
