<template>
  <header>
    <nav>
      <h1>Steve Rocha</h1>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  background-color: var(--primary-color); /* navy */
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 0.7);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}
a:hover {
  color: var(--link-color);
}
</style>
