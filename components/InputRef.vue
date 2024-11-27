<script setup>
import { useGithubStore } from '@/store/index';
import { ref } from 'vue';

const username = ref('');
const githubStore = useGithubStore();

const handleSubmit = async (e) => {
  e.preventDefault(); // Previne o comportamento padrão do formulário
  if (username.value.trim() === '') {
    alert('Digite um nome de usuário válido!');
    return;
  }
  await githubStore.fetchGithubProfile(username.value);
};
</script>

<template>
  <form class="formulario" @submit="handleSubmit">
    <input
      class="formulario_texto"
      type="text"
      placeholder="Digite seu nome de usuário do GitHub"
      v-model="username"
    />
    <button class="formulario_botao" type="submit">Enviar</button>
  </form>

  <div v-if="githubStore.loading">Carregando...</div>

  <div v-if="githubStore.error" class="error">
    <p>{{ githubStore.error }}</p>
  </div>

  <div v-if="githubStore.profile" class="card">
    <div class="card-header">
      <img :src="githubStore.profile.avatar_url" alt="Foto do perfil" class="profile-image" />
    </div>
    <div class="card-content">
      <h2 class="username">{{ githubStore.profile.name || githubStore.profile.login }}</h2>
      <p class="bio">{{ githubStore.profile.bio }}</p>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}

.card {
  width: 240px;
  height: 340px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.card-header {
  width: 100%;
  height: 50%; /* Metade da altura do card */
  background: #f4f4f4;
  position: relative;
}

.profile-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  padding: 1em;
  text-align: center;
  flex: 1;
}

.username {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.bio {
  font-size: 0.9em;
  color: #666;
}

.card-footer {
  padding: 0.8em;
  text-align: center;
  border-top: 1px solid #eee;
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

  .card {
    width: 260px;
    height: 380px;
  }

  .username {
    font-size: 1.4em;
  }

  .bio {
    font-size: 1em;
  }
}

</style>
