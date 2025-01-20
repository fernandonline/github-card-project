<script setup>
    import { useGithubStore } from '@/stores/index';

    const GitHub = useGithubStore();
</script>

<template>
    <div v-if="GitHub.profile" class="card">

        <div class="card-front-header">
            <img :src="GitHub.profile.avatar_url" alt="Foto do perfil" class="profile-avatar" />
        </div>

        <div class="card-front-content">

            <h2 class="username">{{ GitHub.profile.name }}</h2>
            <span class="username_login">{{ GitHub.profile.login }}</span>
            <span class="bio">{{ GitHub.profile.bio }}</span>

        </div>
    </div>

</template>

<style scoped>
.card {
    width: 240px;
    height: 340px;
    background: #000000;
    color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    font-family: 'Poppins', sans-serif;
    padding: 10px;
}

.card-front-header {
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: -10px;
}

.profile-avatar {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
}

.card-front-content {
  padding: 1em;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.username {
  font-size: 1em;
  font-weight: 600;
}

.username_login {
    font-size: 0.8em;
    margin-bottom: 10px;
    font-weight: 200;
}

.bio {
  font-size: 0.8em;
  text-align: j;
}

@media (min-width: 768px)
{
  .card {
    width: 260px;
    height: 380px;
  }

  .profile-avatar {
    width: 160px;
    height: 160px;
  }

  .username {
    font-size: 1.2em;
  }

  .bio {
    font-size: 0.9em;
    text-align: justify;
  }
}

</style>
