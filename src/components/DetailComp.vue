<script setup>
    import { computed } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { trabajos } from '../assets/data_site.json';
    const route  = useRoute();
    const router = useRouter();

    const props = defineProps({
        id: String
    });

    const encargo = computed(()=>{
        return trabajos.find((t)=> t.id === Number(props.id));
    });
</script>

<template>
    <section class="fichadetalle">
            <div class="info">
                <button class="volver" @click="router.back()">Volver</button>
                <h1>{{ encargo.nombre }}</h1>
                <h2>Cliente: {{ encargo.cliente }}</h2>
                <p>{{ encargo.informacion }}</p>

                <div class="galeria">
                    <img v-bind:src="encargo.img1" alt="{{ encargo.nombre }}">
                    <img v-bind:src="encargo.img2" alt="{{ encargo.nombre }}">
                    <img v-bind:src="encargo.img3" alt="{{ encargo.nombre }}">
                    <img v-bind:src="encargo.img4" alt="{{ encargo.nombre }}">
                </div>
            </div>
    </section>
</template>

<style scoped>
    .fichadetalle {
        background-image: url("../assets/img/bg-header.jpg");
        background-color: grey;
        background-blend-mode: color-burn;
    }

    .fichadetalle .info {
        background-color: midnightblue;
        padding: 1%;
        width: 88%;
        margin: auto;
        color: white;
    }

    .fichadetalle .info p {
        font-size: 20px;
    }

    .info .galeria {
        width: 100%;
        display: flex;
        flex-wrap: wrap;;
        gap: 2%;
    }

    .info .galeria img {
        width: 48%;
        height: 100%;
        margin-bottom: 2%;
    }

    .fichadetalle button {
        border: none;
        padding: 1% 2%;
        background-color: white;
        margin: auto;
        color: midnightblue;
        font-size: 18px;
        font-weight: bold;
    }
</style>