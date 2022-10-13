<template>
  <div class="cont full-width column content-center">
    <div class="logo">Aqui va el logo</div>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AuthLayout',
});
</script>
<style lang="scss" scoped>
.cont {
  width: 100%;
  height: 100%;
}
.logo {
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
