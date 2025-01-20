import { defineStore } from 'pinia';
import axios from 'axios';

export const useGithubStore = defineStore('github', {
  state: () => ({
    profile: null,
    error: null,
    loading: false,
  }),
  actions: {
    async fetchGithubProfile(username) {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        this.profile = response.data;
      } catch (err) {
        this.error = err.response?.data?.message || 'Erro ao buscar dados do GitHub.';
      } finally {
        this.loading = false;
      }
    },
  },
});
