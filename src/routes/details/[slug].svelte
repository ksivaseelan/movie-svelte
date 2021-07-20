<script context="module">
    export async function load({ page, fetch }) {
        let id = page.params.slug;
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=70ba738298e901b70e308750acbe2fae`;
        const res = await fetch(url);
        
        if (res.ok) {
			return {
				props: {
					movie: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
    export let movie;
</script>

test
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
