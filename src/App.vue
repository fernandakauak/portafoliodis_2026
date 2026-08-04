<script setup>
  import IndexComp from './components/IndexComp.vue';
  import AboutComp from './components/AboutComp.vue';
  import JobComp from './components/JobComp.vue';
  import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <nav>
    <a href="#">Inicio</a>
    <a href="#">Acerca de</a>
    <a href="#">Trabajos</a>
  </nav>
  <IndexComp />
  <AboutComp />
  <JobComp />
  <FooterComp />
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
