import { defineStore } from 'pinia';
import { ResponseLogin } from 'src/models/FormLogin';
import { Profile } from 'src/models/Profile';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    profile: {},
    accessToken: '',
    refreshToken: '',
  }),
  getters: {
    getProfile: (state) => state.profile,
    getName: (state) => (state.profile as Profile).fullname,
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
