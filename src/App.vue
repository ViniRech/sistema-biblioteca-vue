<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';

const searchType = ref(['Termo Livre', 'Título', 'Autor', 'Série', 'Gênero', 'Editora']);

</script>

<template>
  
  <Header />
  <main>
    <section>
      <h3>Consulta ao acervo</h3>
      <input type="text" name="search" id="search">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
      </button>
      <select name="searchType" id="searchType">
        <option v-for="(type, index) in searchType" :key="index" :value="index">{{ type }}</option>
      </select>
    </section>
  </main>
  
</template>

<style scoped>

  main {
    display: grid;
    justify-content: center;
    align-items: center;
  }
</style>
