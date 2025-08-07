<script setup>
import { ref } from 'vue'

import Landing from './components/Landing.vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'
import Footer from './components/Footer.vue'

const showLanding = ref(true)

function onDiscover() {
  showLanding.value = false
  // Optional: scroll to hero section after landing page
  window.location.hash = '#hero'
}
</script>

<template>
  <Landing v-if="showLanding" @discover="onDiscover" />

  <div v-else>
    <Header />
    <Hero />
    <About />
    <Projects />
    <Skills />
    <Footer />
  </div>
</template>
