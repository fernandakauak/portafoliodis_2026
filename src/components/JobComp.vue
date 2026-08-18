<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    import { trabajos  } from '../assets/data_site.json';

    function detalle(id) {
        router.push({ name: 'detalle', params: {id} });
    }
</script>

<template>
    <section class="registro">
        <h1>Encargos y Proyectos</h1>
        <div class="folio-info">
            <p>He estado en varios tipos de ambientes por lo cual he desarrollado soluciones para las distintas necesidades de cada uno. Aquí presento tanto encargos realizados para terceros como proyectos personales.</p>
        </div>
    
        <h2>Trabajos</h2>
        <article class="portafolio">
            <div class="trabajo" v-for="folio in trabajos" :key="folio.id">
                <img v-bind:src="folio.avatar" alt="{{ folio.nombre }}">
                <h3>{{ folio.nombre }}</h3>
                <button @click.prevent="detalle(folio.id)">Ver</button>
            </div>
        </article>


    </section>
</template>

<style scoped>
    .registro { 
        background-image: url("../assets/img/bg-header.jpg");
        background-color: midnightblue;
        background-blend-mode: screen;
    }

    .registro h1, .registro h2, .registro h3 {
        width: 30%;
        background-color: midnightblue;
        border-radius: 50px;
        padding: 2%;
        margin: 1% auto 4%;
        color: white;
    }

    .registro h1 {
        margin: 1% auto 1%;
    }

    .registro h2 {
        padding: 1%;
        width: 20%;
        margin: 4% auto 1%;
    }

    .registro h3 {
        margin: 0 auto;
        width: 80%;
        background-color: mediumblue;
        color: white;
        padding: 2%;
        font-size: 22px;
        text-transform: uppercase;
    }

    .portafolio {
        width: 98%;
        padding: 2% 1%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1%;
    }

    .folio-info {
        width: 80%;
        font-size: 20px;
        background-color: mediumblue;
        color: white;
        padding: 2%;
        margin: auto;
        border: 10px dashed white;
    }

    .trabajo {
        width: 22%;
        margin: 1%;
    }

    .trabajo img {
        border-radius: 100px;
        border: 10px solid mediumblue;
    }

    .trabajo button {
        background-color: white;
        color: midnightblue;
        padding: 2%;
        width: 30%;
        margin: 1% auto;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        border: 1px solid midnightblue;
    }

    .trabajo button:hover {
        color: white;
        background-color: midnightblue;
    }


    @media (max-width: 1024px) {
        .registro h1 {
            width: 55%;
        }
    }

    @media (max-width: 768px) {
        .trabajo {
            width: 30%;
        }

        .registro h1 {
            margin: 1% auto 1%;
            width: 55%;
        }
    }

    @media (max-width: 480px) {
        .registro h1 {
            width: 90%;
        }

        .registro h2 {
            width: 50%;
        }

        .trabajo {
            width: 100%;
        }
    }
</style>