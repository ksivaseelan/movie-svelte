<script>
    import { onMount } from "svelte";

    export let id;

    let movie = [];
    onMount(async () => {
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=70ba738298e901b70e308750acbe2fae`;
        const res = await fetch(url);
        movie = await res.json();
    });
    console.log(movie.title);
</script>

<div
    style="background-image: url(https://image.tmdb.org/t/p/original{movie.backdrop_path});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;"
    class="h-screen"
>
    <div class="h-screen text-xl text-white backdrop-blur">
        <h1>Title: {movie.title}</h1>
        <p>Summary: {movie.overview}</p>
        <p>Genres:</p>
        <p>{movie.genres}</p>
        <img
            src="https://image.tmdb.org/t/p/w500/{movie.poster_path}"
            alt="Poster not found"
        />
    </div>
</div>
