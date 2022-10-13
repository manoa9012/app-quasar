<template>
  <div>{{ title }}</div>
</template>
<script setup>
import { ref } from 'vue';
const title = ref('Profile');
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
