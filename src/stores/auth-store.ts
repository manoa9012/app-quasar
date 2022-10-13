import { defineStore } from 'pinia';
import { ResponseLogin } from 'src/models/FormLogin';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    profile: {},
    accessToken: '',
    refreshToken: '',
  }),
  getters: {
    getProfile: (state) => state.profile,
    loggedIn: (state) => state.accessToken != '',
  },
  actions: {
    postLogin(res: ResponseLogin) {
      this.profile = res.user;
      this.accessToken = res.access_token;
      this.refreshToken = res.refresh_token;
    },
  },
});
