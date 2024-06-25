<template>
  <Header/>
  <div class="projects">
    <h1>НАШИ ПРОЕКТЫ</h1>
    <div class="project-wrapper">
      <div class="project-image" v-for="image in images" :key="image.name">
        <img :src="image.path" :alt="image.name" />
        <div class="overlay">
          <div class="overlay-text">{{ image.name }}</div>
        </div>
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
*{
  font-family: HelveticaNeueCyrmedium, sans-serif;
  font-style: normal;
  font-size: 84px;
  font-weight: 400;
  line-height: 29px;
}
.projects {
  text-align: center;
}

.project-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
}

.project-image {
  position: relative;
  width: 300px;
  box-sizing: border-box;
}

.project-image img {
  width: 300px;
  height: 200px;
  transition: transform 1s;
}

.project-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  height: fit-content;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s;
}

.project-image:hover .overlay {
  opacity: 1;
}

.project-image .overlay-text {
  color: white;
  font-size: 16px;
  text-align: center;
  padding: 10px;
}
</style>
