<script>
    import debounce from "just-debounce-it";
    import { writable } from "svelte/store";

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

    console.log($searchedMovies);
</script>

<div
    class="navbar shadow-lg bg-black text-neutral-content rounded-box px-4 pt-4">
    <div class="px-2 mx-2 navbar-start">
        <span class="text-xl font-bold"> Svelte Films</span>
    </div>
    <div class="hidden px-2 mx-2 navbar-center lg:flex">
        <div class="flex items-stretch  text-3xl text-gray-light">
            <a class="btn btn-ghost btn-sm rounded-btn" href="/popularMovies">
                Popular
            </a>
            <a
                class="btn btn-ghost btn-sm rounded-btn"
                href="/nowPlayingMovies">
                Now Playing
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href="/topRatedMovies">
                Top Rated
            </a>
            <a class="btn btn-ghost btn-sm rounded-btn" href="/upcomingMovies">
                Upcoming
            </a>
        </div>
    </div>
    <div class="navbar-end">
        <input
            type="text"
            class="input bg-black input-bordered text-white border-4"
            on:input={handleInput}
            value={query} />
        <style>
            ::placeholder {
                color: white;
                opacity: 1;
            }
        </style>
    </div>
    <button class="btn btn-square btn-ghost">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current">
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    </button>
</div>
