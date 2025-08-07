<template>
  <section id="skills" class="full-width-bg fade-in" style="background-color: rgba(0, 31, 77, 0.2); border-radius: 8px; margin: 2rem 0; padding: 2rem 1.5rem;">
    <div class="content-wrapper">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (ES6+), Vue.js, HTML5, CSS3</li>
        <li>Version Control: Git & GitHub</li>
        <li>Basic knowledge of Node.js and backend concepts</li>
        <li>Fluent in English, Portuguese, and French</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>
h2 {
  color: #a8c5ff; /* lighter blue */
  margin-bottom: 1rem;
}
ul {
  list-style: square;
  padding-left: 1.5rem;
}
li {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  color: #f0f0f5; /* white-ish */
}
</style>
