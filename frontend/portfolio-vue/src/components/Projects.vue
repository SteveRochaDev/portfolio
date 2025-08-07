<template>
  <section id="projects" class="full-width-bg fade-in" style="background-color: rgba(0, 31, 77, 0.2); border-radius: 8px; margin: 2rem 0; padding: 2rem 1.5rem;">
    <div class="content-wrapper">
      <h2>My Projects</h2>
      <ul>
        <li class="hover-scale">
          <strong>Portfolio Website</strong> - Built with Vue.js and Vite.
        </li>
        <li class="hover-scale">
          <strong>To Do App</strong> - A simple task management app.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects"
}
</script>

<style scoped>
h2 {
  color: #a8c5ff; /* lighter blue */
  margin-bottom: 1rem;
}
ul {
  list-style: disc;
  padding-left: 1.5rem;
}
li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  cursor: default;
  color: #f0f0f5; /* white-ish */
  transition: transform 0.3s ease;
}
</style>
