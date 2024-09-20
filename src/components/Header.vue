<script setup></script>

<template>
    <header>
        <h1><router-link to="/" exact>BIBLIOTECH</router-link></h1>
    
        <div>
            <router-link class="login" to="/login" exact>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <p>LOGIN</p>
            </router-link>
        </div> 
    </header>
</template>

<style scoped>
    header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        width: 100%;
        padding: 3rem 5rem;
        background-color: var(--vt-c-dark-blue);
    }

    header h1 a {
        font-size: 2rem;
        color: var(--vt-c-white);
        white-space: nowrap;
    }

    header div {
        display: flex;
        justify-content: flex-end;
    }

    .login {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: .5rem;
        align-items: center;
        padding: .5rem 1rem;
        border: none;
        border-radius: 10px;
        background-color: var(--vt-c-white);
        color: var(--vt-c-light-blue);
    }

    .login:hover {
        background-color: var(--vt-c-gray);
    }

    .login:active {
        background-color: var(--vt-c-black);
    }

    .login svg {
        width: 3rem;
    }

    .login p {
        font-size: 1.5rem;
        color: var(--vt-c-black);
    }

    @media (max-width: 623px) {
        header {padding: 1rem 2rem;}
    }

    @media (max-width: 522px) {
        header h1 a {
            font-size: 1.5rem;
        }

        .login svg {
            width: 2rem;   
        } 

        .login p {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        header {
            padding: 1rem;
        }

        header h1 {
            font-size: 1rem;
        }

        .login {
            grid-template-columns: auto;
            padding: .5rem;
            border-radius: 50%;
        }

        .login p {
            display: none;
        }
    }
</style>