<script setup></script>
<template>
    <footer class="footer">
        <section class="footer-description">
            <h1><router-link to="/" exact>BIBLIOTECH</router-link></h1>
            <p>
                Nosso objetivo é facilitar a conexão entre pessoas e conhecimento, 
                trazendo a biblioteca para a palma da mão.
            </p>
        </section>

        <section class="footer-links">
            <div>
                <h4>A Biblioteca</h4>
                <ul>
                    <li>Sobre nós</li>
                    <li>Nossa equipe</li>
                    <li>Participação</li>
                    <li>Colaboradores</li>
                </ul>
            </div>
            <div>
                <h4>A ONG</h4>
                <ul>
                    <li>Sobre a ONG</li>
                    <li>Projetos</li>
                    <li>Site oficial</li>
                </ul>
            </div>
            <div>
                <h4>Os Livros</h4>
                <ul>
                    <li>Histórico</li>
                    <li>Doação</li>
                    <li>Locais físicos</li>
                    <li>Acervo</li>
                </ul>
            </div>
        </section>
    </footer>
</template>

<style scoped>
    .footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        background-color: var(--vt-c-dark-blue);
        color: var(--vt-c-white);
        padding: 3rem;
    }

    .footer-description {
        display: grid;
        row-gap: 1rem;
        width: 70%;
        text-align: justify;
    }

    .footer-description h1 a {
        color: var(--vt-c-white);
    }

    .footer-links {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        text-align: left;
    }

    .footer-links div h4 {
        padding-bottom: .8rem;
    }

    .footer-links div ul li {
        padding: .2rem 0
    }

    @media (max-width: 775px) {
        .footer {
            display: grid;
            grid-template-columns: 1fr;
            justify-content: center;
            row-gap: 2rem;
        }

        .footer-description {
            width: 100%;
        }

        .footer-description h1 {
            text-align: center;
        }
    }

    @media (max-width: 450px) {
        .footer {
            padding: 2rem;
        }

        .footer-links {
            grid-template-columns: 1fr 1fr;
            padding-left: .5rem;
            row-gap: 2rem;
            column-gap: 1rem;
        }
    }
</style>