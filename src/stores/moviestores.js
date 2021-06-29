import { writable } from 'svelte/store';

export const popularMovies = writable([])

const fetchPopularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=70ba738298e901b70e308750acbe2fae`;
    const res = await fetch(url);
    const data = await res.json();
    const loadedMovies = data.results.map((data) => {
        return {
            title: data.title,
            date: data.release_date,
            image: data.poster_path,
            summary: data.overview,
            rating: data.vote_average,
            count: data.vote_count

        };
    });
    popularMovies.set(loadedMovies);
};
fetchPopularMovies();

