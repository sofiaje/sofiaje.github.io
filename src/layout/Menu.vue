<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <ul class="nav">
      <li><RouterLink to="/" class="link">Home</RouterLink></li>
      <li><RouterLink to="/work" class="link">Work</RouterLink></li>
      <li><RouterLink to="/contact" class="link">Contact</RouterLink></li>
    </ul>
  </header>
</template>

<style scoped>

/* menu goes missing when page enlarged */
.nav {
  display: flex;
  padding-left: 0px;
  gap: 1rem;
  /* margin: 0; */
  /* border: 1px solid red; */
}

.link {
  text-decoration: none;
  color: #121212DE;
  padding: .5rem .5rem .5rem 0;
  border-left: 1px solid transparent;
  /* border: 1px solid red; */
}

.link:hover {
  border-bottom: 1px solid #121212DE;
}

@media (min-width: 700px){
  .nav {
    transform: rotate(-90deg);
    transform-origin: top right;
    position: absolute;
    right: 60px;
    top: 20%;
  }
  .link {
    font-size: 1.3rem;
  }
}
</style>