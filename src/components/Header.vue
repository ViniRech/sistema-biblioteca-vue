<script setup></script>

<template>
    <header>
        <h1>NOME BIBLIOTECA</h1>
        <router-link to="/" exact>
            <button class="btn-login">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <p>LOGIN</p>
            </button>
        </router-link>
    </header>
</template>

<style scoped>
    header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
     
        padding: 3rem 5rem;
        width: 100vw;
    
        background-color: var(--vt-c-dark-blue);
    }

    header h1 {
        color: var(--vt-c-white);
    }

    header a {
        display: flex;
        justify-content: center;
    }

    .btn-login {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: .5rem;
        align-items: center;
        padding: .5rem 2rem;
        border: none;
        border-radius: 10px;
        background-color: var(--vt-c-white);
        color: var(--vt-c-light-blue);
    }

    .btn-login:hover {
        background-color: var(--vt-c-gray);
    }

    .btn-login p {
        font-size: 1.5rem;
        color: var(--vt-c-black);
    }
</style>