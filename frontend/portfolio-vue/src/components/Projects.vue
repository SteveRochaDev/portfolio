<template>
  <section
    id="projects"
    class="full-width-bg fade-in"
    style="background-color: rgba(0, 31, 77, 0.2); border-radius: 8px; margin: 2rem 0; padding: 2rem 1.5rem;"
  >
    <div class="content-wrapper">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div class="project-card hover-scale" v-for="project in projects" :key="project.id">
          <img :src="project.image" :alt="project.title" class="project-image" />
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-desc">{{ project.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Portfolio Website",
          description: "Built with Vue.js and Vite.",
          image: "/images/portfolio_website.png"
        },
        {
          id: 2,
          title: "To Do App",
          description: "A simple task management app.",
          image: "/images/to_do_app.png"
        },
        {
          id: 3,
          title: "Personal Blog",
          description: "A blog platform to share ideas and experiences.",
          image: "/images/blog.png"
        },
        {
          id: 4,
          title: "E-commerce Store",
          description: "An online shop with products, cart, and checkout.",
          image: "/images/ecom.png"
        },
        {
          id: 5,
          title: "Weather Dashboard",
          description: "Real-time weather forecasts using external APIs.",
          image: "/images/weather.png"
        },
        {
          id: 6,
          title: "Messaging App",
          description: "A real-time chat application with user-friendly UI.",
          image: "/images/Messaging_App.png"
        },
        {
          id: 7,
          title: "Habit Tracker",
          description: "Track and build new habits with weekly insights.",
          image: "/images/Habit_Tracker.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
h2 {
  color: #a8c5ff;
  margin-bottom: 2rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  justify-items: center;
}

.project-card {
  background-color: #001f4d;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  width: 100%;
  max-width: 320px;
  color: white;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(0, 85, 255, 0.7);
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: #a8c5ff;
}

.project-desc {
  font-size: 1rem;
  color: #cbd5ff;
}
</style>
