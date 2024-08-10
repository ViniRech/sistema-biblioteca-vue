<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';

const searchType = ref(['Termo Livre', 'Título', 'Autor', 'Série', 'Gênero', 'Editora']);

</script>

<template>
  
  <Header />
  <main class="box-collection">
    <section class="box-consultation">
      <h3>Consulta ao acervo</h3>

      <div>
        <input type="text" name="search" id="search">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
          </svg>
        </button>
      </div>
      
      <select name="searchType" id="searchType">
        <option v-for="(type, index) in searchType" :key="index" :value="index">{{ type }}</option>
      </select>
    </section>
  </main>
  
</template>

<style scoped>

  .box-collection {
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: url(./img/books.png);
    background-size: cover;
    padding: 5rem 4rem;
  }

  .box-consultation {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 1rem;
    justify-items: start;
    background-color: var(--vt-c-white);
    padding: 2rem 3rem;
    min-width: 70vw;
    border: none;
    border-radius: 10px;
  }

  .box-consultation div input {
    padding: .5rem;
    border: 2px solid var(--vt-c-black);
    border-radius: 6px;
    width: 70vw;
  }

  .box-consultation div input {
    border-color: var(--vt-c-light-blue);
  }

  .box-consultation div button {
    padding: .7rem;
    border: none;
    border-radius: 50%;
    background-color: var(--vt-c-light-blue);
    color: var(--vt-c-white);
    width: 2.5rem;
    margin-left: .5rem;
  }
</style>
