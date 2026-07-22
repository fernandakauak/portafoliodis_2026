<script></script>

<template>
    <section>
        <h1>¡Hola! Me llamo Fernanda y este es mi portafolio</h1>
        <p>Me he dedicado al diseño gráfico, específicamente el diseño web, material de difusión y asesoría en rubros de cultura, PyMEs, tecnología, banca y seguros, además de proyectos multidisciplinarios con desarrolladores back-end, investigadores y administradores de proyecto.</p>
        <p>Tengo estudios en marketing digital, gestión de proyectos y actualmente me estoy especializando en el área de desarrollo front-end para la creación de aplicaciones digitales.</p>
    </section>
    
    <section class="datos">
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
            <div class="estadistica">
                <div class="pcnt75">Git</div>
            </div>
        </article>

        <article class="conocimiento">
            <h2>Conocimiento Software</h2>
            <div class="estadistica">
                <div class="pcnt95">Illustrator</div>
            </div>
            <div class="estadistica">
                <div class="pcnt90">Photoshop</div>
            </div>
            <div class="estadistica">
                <div class="pcnt90">InDesign</div>
            </div>
            <div class="estadistica">
                <div class="pcnt90">Visual Studio Code</div>
            </div>
            <div class="estadistica">
                <div class="pcnt75">Figma</div>
            </div>
            <div class="estadistica">
                <div class="pcnt90">Microsoft Office</div>
            </div>
        </article>
    </section>

    <aside>
        <h2>¿Quieres conversar?</h2>
        <h3>Puedes leer mi CV <a href="">aquí</a> y ver mi Github <a href="">acá</a>.</h3>
    </aside>

</template>

<style scope>
    .datos {
        display: flex;
    }

    .conocimiento {
        width: 48%;
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

    .estadistica .pcnt95, .estadistica .pcnt90, .estadistica .pcnt80, .estadistica .pcnt75, .estadistica .pcnt70 {
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

    .pcnt75 {
        width: 75%;
    }    

    .pcnt70 {
        width: 70%;
    }
</style>