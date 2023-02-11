<template>
    <nav class="navbar navbar-expand-lg bg-light navbar-light px-3 py-3 sticky-top">
      <div class="container-fluid">
          <router-link to="/" class="navbar-brand">
              <img src="./assets/pokemon_logo.png" alt="pokemonLogo" height="30"/>
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse px-2" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/history" class="nav-link">History</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/findpokemon" class="nav-link">Find Pokemon</router-link>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  
  <router-view/>
</template>

<style>
#app {
  font-family: 'Itim', cursive;
}

</style>
