<script setup></script>

<template>
    <main class="box-user">
        <h1>Página de Cadastro</h1>
        <h2>Quem é você?</h2>
        <section class="box-select-user">
            <div>
                <router-link to="/signup/family-member" exact>
                    <h3>Familiar</h3>
                    <img src="../img/garoto.png" alt="Familiar"> 
                </router-link>
            </div>
            <div>
                <router-link to="/signup/guardian" exact>
                    <h3>Resposável</h3>
                    <img src="../img/pai-e-filho.png" alt="Responsável">
                </router-link>
            </div>
            <div>
                <h3>Funcionário</h3>
                <img src="../img/bibliotecario.png" alt="Funcionário">
            </div>
        </section>
    </main>
</template>

<style scoped>
    .box-user {
        display: grid;
        grid-template-rows: auto auto auto;
        row-gap: 2rem;
        justify-content: center;
        text-align: center;
        padding: 5rem;
    }

    .box-select-user {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 1rem;
    }

    .box-select-user div {
        background-color: var(--vt-c-gray);
        padding: 1rem 3rem;
        border-radius: 7px;
    }

    .box-select-user div:hover, .box-select-user div:active {
        background-color: var(--vt-c-dark-gray);
    }

    .box-select-user div a {
        color: var(--vt-c-black);
    }

    .box-select-user div img {
        width: 7rem;
    }

    @media (max-width: 670px) {
        .box-select-user {
            grid-template-columns: 1fr;
            row-gap: 1rem;
        }
    }
</style>