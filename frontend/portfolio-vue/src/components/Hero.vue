<template>
  <section id="hero" class="hero-section fade-in">
    <h2 class="hover-scale">Hello, I'm Steve Rocha</h2>
    <p>Computer Engineering graduate passionate about Web Development.</p>
  </section>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style scoped>
.hero-section {
  padding: 4rem 2rem;
  text-align: center;
  background-color: rgba(0, 31, 77, 0.3); /* semi-transparent navy */
  color: var(--text-color);
  border-radius: 8px;
}
h2 {
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  color: var(--link-color);
}
p {
  font-size: 1.25rem;
  color: var(--text-muted);
}
</style>
