<script setup>
import { RouterView } from 'vue-router'
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