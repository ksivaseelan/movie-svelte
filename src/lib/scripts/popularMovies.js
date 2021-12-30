import { writable } from "svelte/store";

let loading = false;
let noMoreData = false;
let page = 1;
let data = [];

const list = writable({
    loading,
    data,
    noMoreData,
});

export default {
    subscribe: list.subscribe,
    async fetchMore() {
        if (loading || noMoreData) return;

        loading = true;

        list.set({ loading, data, noMoreData });

        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=70ba738298e901b70e308750acbe2fae&page=${page++}`);
        const newData = await response.json();

        loading = false;
        noMoreData = newData === 0;
        data.push(...newData);

        list.set({ loading, data, noMoreData });
    }
}