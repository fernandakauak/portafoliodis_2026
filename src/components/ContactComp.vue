<script>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';
</script>

<template>
    <section class="contacto">
        <h1 class="titulo">¡Conversemos!</h1>
        <h2>Puedes encontrar más de mi trabajo en 
            <br>
            <a href="http://www.github.com/fernandakauak">Github</a> <br>
            y también contactarme en 
            <br>
            <a href="">Linkedin</a>
        </h2>
        <h1 class="buendia">¡Que tengas un buen día!</h1>
        <img src="../assets/img/iso-sheep.png" alt="">
    </section>
</template>

<style scope>
    .contacto {
        background-image: url("../assets/img/bg-header.jpg");
        background-color: midnightblue;
        background-blend-mode: color-burn;
        width: 100%;
        color: lightgray;
        padding: 2%;
        margin: 2% auto;
    }

    .contacto h1.titulo {
        width: 40%;
        background-color: white;
        border-radius: 50px;
        padding: 2%;
        margin: 1% auto;
        color: midnightblue;
    }

    .contacto h1.buendia {
        width: 40%;
        color: white;
        margin: 1% auto;
    }

    .contacto h2 {
        font-size: 24px;
        line-height: 200%;
        margin-bottom: 2%;
    }

    .contacto a {
        color: midnightblue;
        text-decoration: none;
        cursor: pointer;
        text-transform: uppercase;
        padding: 1%;
        background-color: lightblue;
        border-radius: 50px;
    }



    @media (max-width: 480px) {
        .contacto {
            width: 92%;
        }
        .contacto h1.titulo {
            width: 65%;
        }

        .contacto h2 {
            width: 90%;
            margin: 1% auto 2%;
        }

        .contacto h1.buendia {
            width: 70%;
        }
    }
</style>