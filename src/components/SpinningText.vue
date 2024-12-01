<script setup>
import { ref } from 'vue'
const props = defineProps({
  text: String
})

const isShowing = ref(true)
</script>

<template>
  <transition name="circle">
    <p v-if="isShowing" class="text-circle">{{ text }}</p>
  </transition>
</template>

<style scoped>
.circle-enter-from {
  margin-left: 120px;
  opacity: 0;
}
.circle-enter-to {
  margin-left: 0px;
  opacity: 1;

}
.circle-enter-active {
  transition: all 1s ease;
}

</style>