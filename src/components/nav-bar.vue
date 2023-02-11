<template>
    <nav class="navbar navbar-expand-lg bg-light navbar-light px-3 py-3 sticky-top">
        <div class="container-fluid">
            <router-link :to="landingURL" class="navbar-brand">
                <img src="../assets/pokemon_logo.png" alt="pokemonLogo" height="30"/>
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse px-2" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" :href="historyURL">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :href="findpokemonURL">Find Pokemon</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navBar',
    props: {
        landingURL: String,
        historyURL: String,
        findpokemonURL: String
    }
}
</script>

<style scoped>

</style>
