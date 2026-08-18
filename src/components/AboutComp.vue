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
            <img src="../assets/img/avatar.png" alt="Foto Fernanda">
            <div class="texto_saludo">
                <h1>¡Hola! <br>
                Me llamo Fernanda y este es mi portafolio</h1>
                <div class="presentacion">
                    <p>Soy diseñadora gráfica y me he dedicado al diseño web, material de difusión y asesoría en rubros de cultura, PyMEs, tecnología, banca y seguros, además de proyectos multidisciplinarios con desarrolladores back-end, investigadores y administradores de proyecto.</p>
                    <p>También tengo estudios en marketing digital, gestión de proyectos y actualmente me estoy especializando en el desarrollo front-end para la creación de aplicaciones digitales.</p>
                    <p>Para más información puedes leer <a href="fernanda-kauak_cv2026.pdf" target="_blank">mi CV</a> y ver mi <a href="http://www.github.com/fernandakauak" target="_blank">cuenta en Github</a>.</p>
                </div>
            </div>
        </article>

        <h1>Conocimientos</h1>

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
    </section>
</template>

<style scope>
    section.about {
        background-image: url("../assets/img/bg-header.jpg");
        background-color: midnightblue;
        background-blend-mode: color-burn;
    }

    .saludo {
        display: flex;
        gap: 1%;
        padding: 2%;
    }
    
    .saludo img {
        border-radius: 180px;
        width: 340px;
        height: 340px;
    }

    .saludo h1, .about h1 {
        width: 80%;
        background-color: white;
        border-radius: 50px;
        padding: 2%;
        margin: 1% auto 4%;
        color: midnightblue;
    }

    .saludo h1 {
        width: 96%;
    }

    .about h1 {
        width: 50%;
    }

    .saludo a {
        padding: 5px;
        background-color: white;
        color: midnightblue;
        text-decoration: none;
        cursor: pointer;
        font-weight: bold;
    }

    .presentacion {
        width: 90%;
        background-color: blue;
        color: white;
        padding: 2%;
        margin: auto;
        border: 10px dashed white;
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
        font-size: 18px;
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

    @media (max-width: 1024px) {

    }

    @media (max-width: 768px) {
        .saludo img {
            width: 250px;
            height: 250px;
            margin: auto;
        }

        .saludo {
            display: flex;
            flex-wrap: wrap;
        }

        .saludo .texto_saludo {
            width: 96%;
            margin: auto;
        }

        .texto_saludo h1 {
            width: 80%;
        }

        .about h1 {
            width: 94%;
            margin: 1%;
        }
    }

    @media (max-width: 480px) {
        .about h1 {
            width: 90%;
        }
        
        .saludo {
            display: flex;
            flex-wrap: wrap;
            width: 96%;
        }

        .saludo img {
            border-radius: 500px;
            width: 65%;
            height: 65%;
            margin: auto;
        }

        .datos {
            display: flex;
            flex-wrap: wrap;
        }

        .conocimiento {
            width: 94%;
            margin: 3%;
        }
    }
</style>