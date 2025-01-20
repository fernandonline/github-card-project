<script setup>
import { useGithubStore } from '@/stores/index';
import { ref } from 'vue';

const username = ref('');
const GitHub = useGithubStore();

const handleSubmit = async (e) => {
  e.preventDefault();
  if (username.value.trim() === '') {
    alert('Digite um nome de usuário válido!');
    return;
  }
  await GitHub.fetchGithubProfile(username.value);
};
</script>

<template>
  <form class="formulario" @submit="handleSubmit">

    <input
      class="formulario_texto"
      type="text"
      placeholder="Digite seu usuário do GitHub"
      v-model="username"
    />

    <button class="formulario_botao" type="submit">Enviar</button>
  </form>

  <div v-if="GitHub.loading">Carregando...</div>

  <div v-if="GitHub.error" class="error">
    <p>{{ GitHub.error }}</p>
  </div>

  <CardPreTemplate v-show="GitHub.profile"/>

</template>

<style scoped>
.error {
  color: red;
}

.formulario {
  margin-top: 50px;
  margin-bottom: 30px;

  width: 80%;
  background-color: #FFFFFF;
  border-radius: var(--border-radius);
  display: flex;
  overflow: hidden;
}

.formulario_texto {
  flex: 4;
  border: none;
  padding: 0.8em;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
}

.formulario_botao {
  flex: 1;
  border: none;
  background: rgb(85, 122, 255);
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px)
{
  .formulario
  {
      width: 50%;
  }
}

</style>
