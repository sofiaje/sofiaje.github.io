<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home-page">
    <h1>Sofia Jespersen</h1>
    <h2>Frontend developer</h2>

    <p>Hi, I'm Sofia! A curious and communicative frontend developer who enjoys creating beautiful and functional digital experiences. I recently graduated from Nackademin's 2-year Frontend program and am eager to bring my background in art and design into the world of web development. I love the creative problem-solving side of coding and thrive on turning ideas into reality.</p>
    <p>When I'm not coding, you’ll find me exploring analog photography, watching movies, visiting galleries, or creating my own art through painting and illustration. I’m currently open to work and excited to collaborate on projects that combine creativity and technology.</p>
    <br><li><RouterLink to="/work" class="link">Check out my work</RouterLink></li>

  </div>
</template>


<style scoped>
.home-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
}
img {
  width: 100%;
}
.link {
  color: black;
  text-decoration: none;
  font-weight: 500;
}
h1 {
  margin-bottom: 0;
  font-size: 4rem;
}
h2 {
  letter-spacing:.1rem;
}

</style>
