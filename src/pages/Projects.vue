<template>
  <Header/>
  <div class="projects">
    <h1>НАШИ ПРОЕКТЫ</h1>
    <div class="project-wrapper">
      <div class="project-image" v-for="image in images" :key="image.name">
        <img :src="image.path" :alt="image.name" />
        <router-link :to="'/project/' + image.id">
          <div class="overlay">
            <div class="overlay-text">{{ image.name }}</div>
          </div>
        </router-link>

      </div>
    </div>
  </div>
  <Form/>
  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { ref } from "vue";
import Footer from "@/components/Footer.vue";
import Form from "@/components/Form.vue";
import projectsData from "@/data/projects.json";

const images = ref(projectsData);
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
}

.projects {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.project-wrapper {
  display: flex;
  flex-wrap: wrap; /* Позволяет элементам переноситься на новую строку */
  justify-content: center; /* Центрируем элементы по горизонтали */
  gap: 16px; /* Расстояние между элементами */
}

.project-image {
  position: relative;
  width: calc(50% - 8px); /* Ширина элемента - половина от общей ширины с учетом отступов */
  max-width: 300px; /* Максимальная ширина изображения */
  box-sizing: border-box;
}

.project-image img {
  width: 100%; /* Растягиваем изображение на всю ширину контейнера */
  height: 300px; /* Фиксированная высота изображения */
  transition: transform 1s; /* Анимация при наведении */
}

.project-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Полупрозрачный фон */
  opacity: 0; /* Начальная прозрачность */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s; /* Анимация появления */
}

.project-image:hover .overlay {
  opacity: 1; /* Показываем оверлей при наведении */
}

.overlay-text {
  color: white;
  font-size: 1rem;
  text-align: center;
  padding: 8px;
}
</style>
