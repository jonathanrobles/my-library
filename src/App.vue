<script setup>
import { RouterLink, RouterView } from 'vue-router'
import test from './components/test.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
