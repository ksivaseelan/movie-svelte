<script context="module">
    export const load = async ({ page }) => ({
        props: {
            current: page.path,
        },
    });
</script>

<script>
    import { page } from "$app/stores";

    export let current;
    console.log($page.path);
</script>

<div class="flex justify-center gap-96 bg-opacity-0">
    <a
        class:text-orange={current === "/"}
        class="p-2 text-3xl text-gray-light"
        href="/"
    >
        Home
    </a>
    <a
        class:text-orange={current === "/searchMovies"}
        class=" p-2 text-3xl text-gray-light"
        href="/searchMovies"
    >
        Search
    </a>
    <a
        class:text-orange={current === "/popularMovies"}
        class="p-2 text-3xl text-gray-light"
        href="/popularMovies"
    >
        Popular
    </a>
</div>
