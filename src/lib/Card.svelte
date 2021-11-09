<script>
    export let movie;
    import Stretch from "$lib/Stretch.svelte";
</script>

<a sveltekit:prefetch href="/details/{movie.id}">
    <div class="group m-6 relative h-500 w-600">
        {#await movie}
            <Stretch size="60" color="#FF3E00" unit="px" duration="1s" />
        {:then}
            <img
                class="group-hover:opacity-10"
                src="https://image.tmdb.org/t/p/w500/{movie.image}"
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
        {/await}
    </div>
</a>
