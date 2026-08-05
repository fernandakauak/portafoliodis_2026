<script setup>
  import IndexComp from './components/IndexComp.vue';

</script>

<template>
  <nav>
    <router-link :to="{ name:'inicio' }">Inicio</router-link>
    <router-link :to="{ name:'acercaDe' }">Acerca de</router-link>
    <router-link :to="{ name:'trabajos' }">Trabajos</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
  nav {
    padding: 2%;
    color: white;
  }

  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    margin-left: 1%;
    font-size: 21px;
    border: 1px solid white;
    padding: 1%;
  }

  nav a:hover, nav a.active {
    background-color: white;
    color: blue;
  }
</style>
