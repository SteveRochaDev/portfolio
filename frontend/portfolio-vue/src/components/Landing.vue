<template>
  <section class="landing-section">
    <!-- Animated Background Shapes -->
    <div class="animated-bg">
      <div class="circle circle1"></div>
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
    </div>

    <h1 class="animated-name">
      <span class="typewriter">Hi, I'm Steve Rocha</span>
    </h1>

    <button @click="$emit('discover')" class="discover-btn">
      Discover More
    </button>
  </section>
</template>

<script>
export default {
  name: 'Landing'
}
</script>

<style scoped>
.landing-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a0a0a;
  color: white;
  text-align: center;
  padding: 0 1rem;
}

/* === Animated Background Shapes === */
.animated-bg .circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(0, 102, 255, 0.15);
  animation: float 10s infinite ease-in-out;
}

.circle1 {
  width: 150px;
  height: 150px;
  top: 10%;
  left: 15%;
}

.circle2 {
  width: 200px;
  height: 200px;
  bottom: 20%;
  right: 10%;
  animation-delay: 3s;
}

.circle3 {
  width: 100px;
  height: 100px;
  bottom: 35%;
  left: 35%;
  animation-delay: 5s;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* === Animated Title === */
.animated-name {
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  animation: pulseGlow 2s ease-in-out infinite alternate;
}

@keyframes pulseGlow {
  from {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
  to {
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  }
}

.typewriter {
  display: inline-block;
  border-right: 2px solid white;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(30, end), blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink {
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

/* === Button Styling === */
.discover-btn {
  font-size: 1.25rem;
  padding: 0.75rem 2.25rem;
  border: none;
  border-radius: 30px;
  background: linear-gradient(135deg, #001f4d, #004080);
  color: white;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 0 10px rgba(0, 85, 255, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideUp 2s ease forwards 3.2s;
}

@keyframes fadeSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.discover-btn:hover {
  background: linear-gradient(135deg, #003366, #003cb3);
  box-shadow: 0 0 15px rgba(0, 119, 255, 0.8);
  transform: scale(1.05);
}
</style>
