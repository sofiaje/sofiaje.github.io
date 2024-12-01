<script setup>
import { ref, onMounted } from 'vue'


const listItem = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, corporis?",
  "Lorem ipsum dolor sit amet.",
  "Lorem, ipsum.",
  "Lorem ipsum dolor sit amet consectetur adipisicing.",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae blanditiis corporis odit tempora!"
]
const currentIndex = ref(0)

const swipeLeft = () => {
  if (currentIndex.value < 1) {
    currentIndex.value = listItem.length - 1
  } else {
    currentIndex.value--
  }
}

const swipeRight = () => {
  if (currentIndex.value === listItem.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

const updateListItemVisible = () => {
  setInterval(() => {
    swipeRight()
  }, 14000)
}

onMounted(() => {
  updateListItemVisible()
})
</script>

<template>
<div class="carousel">
  <button @click="swipeLeft" class="arrow-btn">&#x2962;</button>
  <ul class="list">
    <transition-group name="carousel">
      <li v-for="item, index in listItem" key="index" v-show="index === currentIndex" class="carousel-text">{{ item }} {{ index }}</li>
    </transition-group>
  </ul>
  <button @click="swipeRight" class="arrow-btn">&#x2964;</button>
  </div>
</template>

<style scoped>

ul {
  list-style: none;
  padding-left: 0;
  flex-grow: 1;
}
.carousel {
  display: flex;
  gap: 4rem;
  min-height: 150px;
  max-width: 600px;

}
.arrow-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.carousel-text {
  position: relative;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 1rem;

}
</style>