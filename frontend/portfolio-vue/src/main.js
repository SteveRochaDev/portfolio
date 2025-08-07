import { createApp } from 'vue'
import App from './App.vue'
import Particles from '@tsparticles/vue3'   // plugin (default export)
import { loadSlim } from '@tsparticles/slim'
import './assets/global.css'

const app = createApp(App)

// Register globally and initialize the engine with Slim (or loadFull)
app.use(Particles, {
  init: async (engine) => {
    await loadSlim(engine)                 // or: const { loadFull } = await import('tsparticles'); await loadFull(engine)
  },
})

app.mount('#app')
