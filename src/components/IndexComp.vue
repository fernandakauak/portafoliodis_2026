<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    /*import HeaderComp from './HeaderComp.vue';
    import AboutComp from './AboutComp.vue';
    import JobComp from './JobComp.vue';
    import FooterComp from './FooterComp.vue';
    import DetailComp from './DetailComp.vue';*/
</script>

<template>
    <header>
        <img class="logo" src="../assets/img/logo2026.png" alt="Fernanda Kauak">
    </header>
</template>

<style scoped>
    .logo {
        width: 60%;
        margin: 2% auto;
    }

    header {
        background-image: url("../assets/img/bg-header.jpg");
        background-size: contain;
        width: 100%;
        margin: 0;
    }
</style>

<!--<template>
    <HeaderComp />
    <AboutComp />
    <JobComp />
    <FooterComp />
</template>

<style></style>-->