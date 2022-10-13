<template>
  <q-form
    @submit.prevent="onSubmit"
    class="formauth q-gutter-md"
    ref="formAuth"
  >
    <q-input
      dense
      outlined
      v-model="name"
      label="Name"
      lazy-rules
      :rules="[rules.requireduser]"
    />
    <q-input
      dense
      outlined
      v-model="name"
      label="Last Name"
      lazy-rules
      :rules="[rules.requireduser]"
    />
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
        label="Register"
        type="submit"
        color="primary"
      />
    </div>
    <div class="haveaccount">
      <p>
        I already have an account!
        <q-btn
          unelevated
          rounded
          size="xs"
          color="primary"
          label="Sign In"
          to="/"
        />
      </p>
    </div>
  </q-form>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';
export default defineComponent({
  name: 'RegisterPage',

  setup() {
    const $q = useQuasar();
    const formAuth = ref(null);
    const name = ref(null);
    const password = ref(null);
    const accept = ref(false);
    const rules = {
      requireduser: (val) =>
        (val !== null && val !== '') || 'Username is required',
      requiredpass: (val) =>
        (val !== null && val !== '') || 'Password is required',
    };

    const onSubmit = () => {
      if (accept.value == true) {
        $q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first',
        });
      } else {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted',
        });
      }
      formAuth.value.resetValidation();
      onReset();
    };

    const onReset = () => {
      name.value = null;
      password.value = null;
      accept.value = false;
    };

    return {
      name,
      password,
      accept,
      rules,
      formAuth,
      onSubmit,
    };
  },
});
</script>
<style lang="scss" scoped>
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
.haveaccount {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
</style>
