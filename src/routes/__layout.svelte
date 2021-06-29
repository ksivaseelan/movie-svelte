<script>
    import "../app.postcss";
    import Header from "$lib/Header.svelte";
</script>

<div class="bg-black min-h-screen">
    <Header/>
    <slot />
</div>
