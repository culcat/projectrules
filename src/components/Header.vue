<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header>
    <div class="logo">
      <h1>"Правила Проекта"</h1>
    </div>

    <button class="burger-menu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="wrapper" :class="{ 'active': isMenuOpen }">
      <router-link to="/">ГЛАВНАЯ</router-link>
      <router-link to="/projects">ПРОЕКТЫ</router-link>
      <router-link to="/services">УСЛУГИ</router-link>
      <router-link to="/about">О КОМПАНИИ</router-link>
    </div>
  </header>
</template>

<style scoped>
* {
  font-family: Inter Regular, sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #c8ffcc;
  padding: 10px 20px;
}

.logo {
  padding-left: 20px;
}

.wrapper {
  display: flex;
  gap: 30px;
}

.burger-menu {
  display: none; /* Hide the burger menu button by default on larger screens */
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  width: 30px;
  height: 30px;
  position: relative;
}

.burger-menu span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #000;
  border-radius: 4px;
  transition: transform 0.4s, opacity 0.4s;
}

.burger-menu span:nth-child(1) {
  top: 0;
}

.burger-menu span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.burger-menu span:nth-child(3) {
  bottom: 0;
}

.active .burger-menu span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.active .burger-menu span:nth-child(2) {
  opacity: 0;
}

.active .burger-menu span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}

/* Media query for smaller screens */
@media screen and (max-width: 768px) {
  .wrapper {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px; /* Adjust this value based on your header height */
    right: 20px;
    background-color: #c8ffcc;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 200px;
    gap: 10px;
    z-index: 1000;
  }

  .wrapper.active {
    display: flex;
  }

  .burger-menu {
    display: block; /* Show the burger menu button on smaller screens */
  }

  .logo {
    order: -1; /* Move logo to the start on smaller screens */
    padding-left: 0;
  }

  .wrapper a {
    text-align: center;
  }
}
</style>
