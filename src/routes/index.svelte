<script>
    import supabase from "$lib/db";

    async function signUp() {
        const {user, error} = await supabase.auth.signUp({
            email: 'ksivaseelan@gmail.com',
            password: 'P@ssw0rd',
        })
        console.log(user, error)
    }
</script>

<button on:click={signUp}>signUp</button>