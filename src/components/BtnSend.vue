<script setup></script>

<template>
    <button class="btn">ENVIAR</button>
</template>

<style scoped>
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