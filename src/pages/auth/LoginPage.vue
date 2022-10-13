<template>
  <q-form @submit.prevent="onLogin" class="formauth q-gutter-md" ref="formAuth">
    <q-input
      dense
      outlined
      v-model="name"
      label="Username"
      lazy-rules
      :rules="[rules.requireduser]"
    />

    <q-input
      dense
      outlined
      type="password"
      v-model="password"
      label="Password"
      lazy-rules
      :rules="[rules.requiredpass]"
    />
    <div>
      <q-btn
        rounded
        unelevated
        class="full-width"
        label="Login"
        type="submit"
        color="primary"
      />
    </div>
    <div class="noaccount">
      <p>
        You haven't account?
        <q-btn
          color="primary"
          size="xs"
          unelevated
          rounded
          label="Sign Up"
          to="/register"
        />
      </p>
    </div>
  </q-form>
</template>
<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth-store';
import { api } from 'src/boot/axios';
const router = useRouter();
const store = useAuthStore();
const $q = useQuasar();
const formAuth = ref(null);
const name = ref(null);
const password = ref(null);

const rules = {
  requireduser: (val) => (val !== null && val !== '') || 'Username is required',
  requiredpass: (val) => (val !== null && val !== '') || 'Password is required',
};

const onLogin = async () => {
  api
    .post('/users/employee/login', {
      email: name.value,
      password: password.value,
    })
    .then((res) => {
      store.postLogin(res.data);
      router.push('/app');
    })
    .catch((error) => {
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: error.message,
      });
    });
};
</script>
<style lang="scss" scoped>
.noaccount {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
.formauth {
  width: 100%;
  height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  justify-self: center;
  padding: 0 15px;
}
</style>
