<script>
    import { movie } from "../stores/moviestores";
</script>

{#each $movie as movie}
    <template>
        <div class="bg-gray-200">
            <h4>{movie.title}</h4>
            <img src="https://image.tmdb.org/t/p/w300/{movie.image}" alt="" />
            <div class="p-6">
                <p>Release date: {movie.date}</p>
                <p>Synopsis: {movie.summary}</p>
            </div>

            <br />
        </div>
    </template>
{/each}
