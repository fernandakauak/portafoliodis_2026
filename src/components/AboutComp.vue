<script></script>

<template>
    <section>
        <h1>¡Hola! Me llamo Fernanda y este es mi portafolio</h1>
        <p>Me he dedicado al diseño gráfico, específicamente el diseño web, material de difusión y asesoría en rubros de cultura, PyMEs, tecnología, banca y seguros, además de proyectos multidisciplinarios con desarrolladores back-end, investigadores y administradores de proyecto.</p>
        <p>Tengo estudios en marketing digital, gestión de proyectos y actualmente me estoy especializando en el área de desarrollo front-end para la creación de aplicaciones digitales.</p>
    </section>
    
    <article class="conocimiento">
        <h2>Conocimiento Web</h2>
        <div class="estadistica">
            <div class="pcnt90">HTML</div>
        </div>
        <div class="estadistica">
            <div class="pcnt95">CSS3</div>
        </div>
        <div class="estadistica">
            <div class="pcnt70">JavaScript</div>
        </div>
        <div class="estadistica">
            <div class="pcnt70">VueJS</div>
        </div>
        <div class="estadistica">
            <div class="pcnt90">Diseño Responsivo</div>
        </div>
        <div class="estadistica">
            <div class="pcnt90">Bootstrap</div>
        </div>
        <div class="estadistica">
            <div class="pcnt80">Wordpress</div>
        </div>
        <p>Manejo de FTP</p>
        <div class="estadistica">
            <div class="pcnt90">Git</div>
        </div>
    </article>

    <article class="conocimiento">
        <h2>Conocimiento Software</h2>
        <p>Illustrator</p>
        <p>Photoshop</p>
        <p>InDesign</p>
        <p>Visual Studio Code</p>
        <p>Figma</p>
        <p>Microsoft Office</p>
        <p>Xampp</p>
    </article>

    <aside>
        <h2>¿Quieres conversar?</h2>
        <h3>Puedes leer mi CV <a href="">aquí</a> y ver mi Github <a href="">acá</a>.</h3>
    </aside>

</template>

<style scope>
    .conocimiento {
        background-color: rgb(139, 90, 137);
        width: 48%;
        margin: 1%;
    }

    .conocimiento .estadistica {
        width: 100%;
        background-color: rgb(32, 20, 95);
        border: 1px solid  rgb(15, 8, 48);
    }

    .estadistica .pcnt95, .estadistica .pcnt90, .estadistica .pcnt80, .estadistica .pcnt70 {
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

    .pcnt70 {
        width: 70%;
    }
</style>