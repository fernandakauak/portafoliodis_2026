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
        //return prototipos.find((p)=> p.id === Number(props.id));
    });

    console.log('query:',route.query);
    console.log('params:',route.params);

</script>

<template>
    <section class="fichadetalle">
        <button class="volver" @click="router.back()">Volver</button>
            <div class="info">
                <h1>{{ encargo.nombre }}</h1>
                <h2>Cliente: {{ encargo.cliente }}</h2>
                <p>{{ encargo.informacion }}</p>
            </div>
            
            <!--<div v-else-if="prototipos">
                <div class="info">
                    <h1>{{ encargo.nombre }}</h1>
                    <h2>Cliente: {{ encargo.cliente }}</h2>
                    <p>{{ encargo.informacion }}</p>
                </div>
            </div>-->
            <!--<p v-else>Este elemento no existe en el portafolio.</p>-->
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
        width: 78%;
    }
</style>