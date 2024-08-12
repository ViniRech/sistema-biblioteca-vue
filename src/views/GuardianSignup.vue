<script setup>
import { ref, reactive } from 'vue';

const numberFamilyMember = ref(0);
const confirmPassword = ref('');
const kinshipOptions = ref([
    'Avó(ô)', 'Esposa(o)', 'Filha(o)', 'Irmã(ão)', 'Madastra', 'Mãe', 
    'Padastro', 'Pai', 'Prima(o)', 'Sobrinha(o)', 'Tia(o)',
]);

const familyMember = reactive({
    socialName: '',
    cpf: '',
    rg: '',
    dateOfBirth: '',
    email: '',
});

const guardian = reactive({
    socialName: '',
    cpf: '',
    rg: '',
    dateOfBirth: '',
    email: '',
    kinship: '',
    userName: '',
    password: '',
});


</script>

<template>
    <main class="guardian-form-page">
        <h1>Cadastro do Responsável</h1>

        <section class="number-people">
            <label for="number-people">Você é responsável por quantas pessoas?</label>
            <input type="number" name="number-people" id="number-people" min="1" max="30" v-model="numberFamilyMember">
            <!-- Para criar uma variável para cada membro da família se deve colocar o familyMember dentro de uma array? -->
        </section>

        <section class="form-section">
            <h2>Dados do Familiar X</h2>
            <form class="form">
                <div>
                    <label for="family-member-social-name">Nome social:</label>
                    <input type="text" name="family-member-social-name" id="family-member-social-name" v-model="familyMember.name">
                </div>
                <div>
                    <label for="family-member-cpf">CPF:</label>
                    <input type="text" name="family-member-cpf" id="family-member-cpf" v-model="familyMember.cpf">
                </div>
                <div>
                    <label for="family-member-rg">RG:</label>
                    <input type="text" name="family-member-rg" id="family-member-rg" v-model="familyMember.rg">
                </div>
                <div>
                    <label for="family-member-date-of-birth">Data de nascimento:</label>
                    <input type="date" name="family-member-date-of-birth" id="family-member-date-of-birth" v-model="familyMember.dateOfBirth">
                </div>
                <div>
                    <label for="family-member-email">E-mail:</label>
                    <input type="email" name="family-member-email" id="family-member-email" v-model="familyMember.email">
                </div>
            </form>
        </section>

        <section class="form-section">
            <h2>Seus Dados</h2>
            <form class="form">
                <div>
                    <label for="guardian-social-name">Nome social:</label>
                    <input type="text" name="guardian-social-name" id="guardian-social-name" v-model="guardian.name">
                </div>
                <div>
                    <label for="guardian-cpf">CPF:</label>
                    <input type="text" name="guardian-cpf" id="guardian-cpf" v-model="guardian.cpf">
                </div>
                <div>
                    <label for="guardian-rg">RG:</label>
                    <input type="text" name="guardian-rg" id="guardian-rg" v-model="guardian.rg">
                </div>
                <div>
                    <label for="guardian-date-of-birth">Data de nascimento:</label>
                    <input type="date" name="guardian-date-of-birth" id="guardian-date-of-birth" v-model="guardian.dateOfBirth">
                </div>
                <div>
                    <label for="guardian-email">E-mail:</label>
                    <input type="email" name="guardian-email" id="guardian-email" v-model="guardian.email">
                </div>
                <div>
                    <label for="guardian-kinship">Grau de parentesco:</label>
                    <select name="guardian-kinship" id="guardian-kinship">
                        <option v-for="(kinship, index) in kinshipOptions" :key="index" :value="index">{{ kinship }}</option>
                    </select>
                </div>
                <div>
                    <label for="guardian-user-name">Nome de usuário:</label>
                    <input type="text" name="guardian-user-name" id="guardian-user-name" v-model="guardian.userName">
                </div>
                <div>
                    <label for="guardian-password">Senha:</label>
                    <input type="password" name="guardian-password" id="guardian-password" v-model="guardian.password">
                </div>
                <div>
                    <label for="guardian-confirm-password">Confirmar senha:</label>
                    <input type="password" name="guardian-confirm-password" id="guardian-confirm-password" v-model="confirmPassword">
                </div>
            </form>
        </section>
        
        <button class="btn">ENVIAR</button>
    </main>
</template>

<style scoped>
    .guardian-form-page {
        display: grid;
        row-gap: 2rem;
        justify-content: center;
        justify-items: center;
        padding: 5rem 1rem;
    }

    .guardian-form-page h1 {
        text-align: center;
    }

    .number-people {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        width: 100%;
    }

    .form-section {
        display: grid;
        row-gap: 2rem;
    }

    .form div {
        display: grid;
        grid-template-columns: 3fr 7fr;
        align-items: center;
        column-gap: 1rem;
        padding: 1rem;
    }

    .number-people input, .form div input, .form div select {
        padding: .5rem;
        background-color: var(--vt-c-transparent);
        border: 1px solid var(--vt-c-black);
        border-radius: 6px;
        font-size: 1rem;
    }

    .btn {
        background-color: var(--vt-c-dark-gray);
        border: none;
        border-radius: 6px;
        padding: 1rem 2rem;
        font-size: 1rem
    }

    .btn:hover {
        color: var(--vt-c-white);
        background-color: var(--vt-c-dark-blue);
    }

    .btn:active {
        color: var(--vt-c-white);
        background-color: var(--vt-c-black);
    }
</style>