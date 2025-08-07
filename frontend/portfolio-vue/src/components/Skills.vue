<template>
  <section
    id="skills"
    class="full-width-bg fade-in"
    style="background-color: rgba(0, 31, 77, 0.2); border-radius: 12px; margin: 2rem 0; padding: 2rem 1.5rem;"
    ref="skillsSection"
  >
    <div class="content-wrapper">
      <h2 class="skills-title">Skills</h2>
      <div class="skills-wrapper">
        <div v-for="(category, index) in skills" :key="index" class="skill-category">
          <h3>{{ category.title }}</h3>
          <div v-for="(skill, i) in category.items" :key="i" class="skill-bar">
            <div class="skill-info">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-percent">{{ skill.level }}%</span>
            </div>
            <div class="bar-container">
              <div
                class="bar-fill"
                :style="{
                  width: isVisible ? skill.level + '%' : '0%',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      isVisible: false,
      skills: [
        {
          title: "Front-End",
          items: [
            { name: "JavaScript (ES6+)", level: 90 },
            { name: "Vue.js", level: 85 },
            { name: "HTML5", level: 95 },
            { name: "CSS3", level: 90 }
          ]
        },
        {
          title: "Back-End",
          items: [
            { name: "Node.js (Basics)", level: 50 },
            { name: "REST APIs", level: 55 }
          ]
        },
        {
          title: "Tools",
          items: [
            { name: "Git & GitHub", level: 85 },
            { name: "VS Code", level: 95 },
            { name: "Vite", level: 80 }
          ]
        }
      ]
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          observer.unobserve(this.$refs.skillsSection);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(this.$refs.skillsSection);
  }
};
</script>

<style scoped>
.skills-title {
  color: #a8c5ff;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.skills-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  color: #a8c5ff;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.skill-bar {
  margin-bottom: 1rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  font-size: 0.95rem;
  color: #e0e0ff;
}

.bar-container {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  height: 8px;
  width: 100%;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #4b8cff, #9ae7ff);
  transition: width 1s ease-in-out;
  border-radius: 10px;
}
</style>
