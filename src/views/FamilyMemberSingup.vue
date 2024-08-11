<script setup>
import { ref, reactive } from 'vue';

const familyMember = reactive({
    socialName: '',
    cpf: '',
    rg: '',
    birthday: '',
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
                <input type="text" name="cpf" id="cpf" v-model="familyMember.cpf">
            </div>
            <div>
                <label for="rg">RG:</label>
                <input type="text" name="rg" id="rg" v-model="familyMember.rg">
            </div>
            <div>
                <label for="birthday">Data de nascimento:</label>
                <input type="date" name="birthday" id="birthday" v-model="familyMember.birthday">
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
    
</style>