<script setup>
import { RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Menu from '@/layout/Menu.vue'
</script>

<template>
  <Menu /> 
  <main>
    <RouterView />
  </main>
</template>


<style scoped>
main {
  width: 100%;
}
</style>