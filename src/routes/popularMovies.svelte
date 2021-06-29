<script>
    import { popularMovies } from "../stores/moviestores";
</script>

<div class="bg-black px-6 pt-3">
    <h1 class="text-4xl font-bold text-cyan-light">Popular Movies</h1>
</div>

<div class="grid md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5">
    {#each $popularMovies as movie}
        <div class="group m-6 relative h-500 w-600">
            <img
                class="group-hover:opacity-10"
                src="https://image.tmdb.org/t/p/original/{movie.image}"
                alt="Movie poster not found"
            />
            <div class=" p-6 absolute inset-x-0 bottom-0 text-white">
                <h4
                    class="group-hover:block hidden text-lg font-bold text-gray-light"
                >
                    {movie.title}
                </h4>
                <br />
                <p
                    class="group-hover:block hidden font-semibold text-gray-light"
                >
                    {movie.rating} out of {movie.count}
                </p>
                <br />
                <p
                    class="group-hover:block hidden font-semibold text-gray-light"
                >
                    Release date: {movie.date}
                </p>
            </div>
        </div>
    {/each}
</div>
