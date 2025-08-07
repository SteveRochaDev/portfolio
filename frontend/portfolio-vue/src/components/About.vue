<template>
  <section id="about" class="about-section fade-in">
    <div class="about-content">
      <h2>About Me</h2>
      <p>
        I'm Steve, a <strong>Computer Engineer</strong> from <strong>Paris, France</strong>, now based in Portugal.  
        I am deeply passionate about technology, learning, and building clean, impactful digital experiences.
      </p>
      <p>
        With a background in software development and a strong work ethic, I bring focus and discipline to everything I do — 
        whether it's designing web applications, solving problems, or collaborating on creative ideas.
      </p>
      <p>
        I'm constantly improving, curious about new technologies, and always willing to go the extra mile to deliver value.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.about-section {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 4rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-content {
  max-width: 800px;
  text-align: center;
  line-height: 1.8;
  font-size: 1.1rem;
  padding: 0 1rem;
}

.about-content h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--accent-color);
}

strong {
  font-weight: 600;
}
</style>
