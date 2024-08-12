<script setup>
import { ref, reactive } from 'vue';

const familyMember = reactive({
    socialName: '',
    cpf: '',
    rg: '',
    dateOfBirth: '',
    email: '',
    userName: '',
    password: '',
});

const confirmPassword = ref('');
</script>

<template>
    <main class="family-member-form">
        <h1>Cadastro do Familiar</h1>
        <form class="form">
            <div>
                <label for="social-name">Nome social:</label>
                <input type="text" name="social-name" id="social-name" v-model="familyMember.socialName">
            </div>
            <div>
                <label for="cpf">CPF:</label>
                <input type="text" name="cpf" id="cpf" placeholder="999.999.999-99" v-model="familyMember.cpf">
            </div>
            <div>
                <label for="rg">RG:</label>
                <input type="text" name="rg" id="rg" v-model="familyMember.rg">
            </div>
            <div>
                <label for="dateOfBirth">Data de nascimento:</label>
                <input type="date" name="dateOfBirth" id="dateOfBirth" v-model="familyMember.dateOfBirth">
            </div>
            <div>
                <label for="email">E-mail:</label>
                <input type="email" name="email" id="email" v-model="familyMember.email">
            </div>
            <div>
                <label for="user-name">Nome de usuário:</label>
                <input type="text" name="user-name" id="user-name" v-model="familyMember.userName">
            </div>
            <div>
                <label for="password">Senha:</label>
                <input type="password" name="password" id="password" v-model="familyMember.password">
            </div>
            <div>
                <label for="confirmPassword">Confirmar senha:</label>
                <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword">
            </div>
        </form>
    </main>
</template>

<style scoped>
    .family-member-form {
        display: grid;
        row-gap: 2rem;
        justify-content: center;
        padding: 5rem 1rem;
    }

    .family-member-form h1 {
        text-align: center;
    }

    .form div {
        display: grid;
        grid-template-columns: 3fr 7fr;
        align-items: center;
        column-gap: 1rem;
        padding: 1rem;
    }

    .form div input {
        padding: .5rem;
        background-color: var(--vt-c-transparent);
        border: 1px solid var(--vt-c-black);
        border-radius: 6px;
        font-size: 1rem;
    }
</style>