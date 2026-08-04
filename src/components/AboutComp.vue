<script>
    import { ref } from 'vue';
    import about from '../assets/data_site.json';

    export default {
        data() {
            return {
                habilidades: about
            };
        },
    };
</script>

<template>
    <section class="about">
        <article class="saludo">
            <img src="../assets/img/avatar.jpg" alt="Foto Fernanda">
            <div>
                <h1>¡Hola! <br>
                Me llamo Fernanda y este es mi portafolio</h1>
                <div class="presentacion">
                    <p>Soy diseñadora gráfica y me he dedicado al diseño web, material de difusión y asesoría en rubros de cultura, PyMEs, tecnología, banca y seguros, además de proyectos multidisciplinarios con desarrolladores back-end, investigadores y administradores de proyecto.</p>
                    <p>También tengo estudios en marketing digital, gestión de proyectos y actualmente me estoy especializando en el desarrollo front-end para la creación de aplicaciones digitales.</p>
                </div>
            </div>
        </article>

        <h2>Conocimientos</h2>

        <div class="datos">
            <article class="conocimiento">
                <h2>Conocimiento Web</h2>
                <div class="estadistica" v-for="web in habilidades.web" :key="web.id">
                    <div :class="web.class" >{{ web.nombre }}</div>
                </div>
            </article>

            <article class="conocimiento">
                <h2>Software</h2>
                <div class="estadistica" v-for="soft in habilidades.software" :key="soft.id">
                    <div :class="soft.class" >{{ soft.nombre }}</div>
                </div>
            </article>
        
            <article class="conocimiento">
                <h2>Otros</h2>
                <div class="estadistica" v-for="otro in habilidades.otros" :key="otro.id">
                    <div :class="otro.class" >{{ otro.nombre }}</div>
                </div>
            </article>
        </div>        

        <aside class="contacto">
            <h1>¿Quieres conversar?</h1>
            <h3>Puedes leer mi CV <a href="">aquí</a> y ver mi Github <a href="">acá</a></h3>
        </aside>
    </section>
</template>

<style scope>
    section.about {
        background-image: url(../assets/img/bg-about.jpg);
        background-size: 100%;
        background-blend-mode: screen;
        background-color: midnightblue;
    }

    .saludo {
        display: flex;
        gap: 5%;
        padding: 2%;
    }
    
    .saludo img {
        border-radius: 180px;
        width: 320px;
        height: 320px;
    }

    .saludo h1 {
        width: 100%;
    }

    .presentacion {
        width: 80%;
        background-color: blue;
        color: lightgray;
        padding: 2%;
        margin: auto;
    }

    .presentacion p {
        font-size: 20px;
    }

    .datos {
        display: flex;
    }

    .conocimiento {
        width: 31%;
        margin: 1%;
    }

    .conocimiento h2 {
        margin: 0;
        padding: 2%;
        border-radius: 20px 20px 0 0;
        background-color: darkblue;
        color: white;
    }

    .conocimiento .estadistica {
        width: 100%;
        background-color: rgb(32, 20, 95);
        border: 1px solid  rgb(15, 8, 48);
    }

    .pcnt95, .pcnt90, .pcnt85, .pcnt80, .pcnt75, .pcnt70 {
        background-color: blue;
        color: white;
        border: 1px solid darkblue;
        padding: 1%;
    }

    .pcnt95 {
        width: 95%;
    }

    .pcnt90 {
        width: 90%;
    }

    .pcnt80 {
        width: 80%;
    }

    .pcnt85 {
        width: 85%;
    }

    .pcnt75 {
        width: 75%;
    }    

    .pcnt70 {
        width: 70%;
    }

    .contacto {
        width: 60%;
        background-color: darkslategrey;
        color: lightgray;
        padding: 2%;
        margin: 2% auto;
    }

    .contacto h1 {
        margin-top: 0;
    }

    .contacto a {
        color: midnightblue;
        text-decoration: none;
        cursor: pointer;
        text-transform: uppercase;
        padding: 1% 2%;
        background-color: lightblue;
        border-radius: 20px;
    }

</style>