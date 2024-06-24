<template>
  <Header/>
  <div class="projects">
    <h1>НАШИ ПРОЕКТЫ</h1>
    <div class="project-wrapper">
      <div class="project-image" v-for="image in images" :key="image.name">
        <img :src="image.address" :alt="image.name" />
        <div class="overlay">
          <div class="overlay-text">{{ image.name }}</div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script setup>
import Header from "@/components/Header.vue";
import { ref } from "vue";

import Group from '@/assets/Group 31.png'
import first from '@/assets/photo_2024-06-22_17-26-17 1.png'
import second from '@/assets/photo_2024-06-22_17-26-17 1-1.png'
import third from '@/assets/photo_2024-06-22_17-26-34.png'
import fourth from '@/assets/photo_2024-06-22_17-26-34-1.png'
import fifth from '@/assets/photo_2024-06-22_17-26-34-2.png'
import sixth from '@/assets/photo_2024-06-22_17-27-38.png'
import seventh from '@/assets/photo_2024-06-22_17-27-38-1.png'
import eighth from '@/assets/photo_2024-06-22_17-27-43.png'
import ninth from '@/assets/photo_2024-06-22_17-27-43-1.png'
import tenth from '@/assets/photo_2024-06-22_17-27-43-2.png'
import Footer from "@/components/Footer.vue";

const projects = {
  images: [
    { address: first, name: "photo_2024-06-22_17-26-17 1" },
    { address: second, name: "photo_2024-06-22_17-26-17 1-1" },
    { address: third, name: "photo_2024-06-22_17-26-34" },
    { address: fourth, name: "photo_2024-06-22_17-26-34-1" },
    { address: fifth, name: "photo_2024-06-22_17-26-34-2" },
    { address: sixth, name: "photo_2024-06-22_17-27-38" },
    { address: seventh, name: "photo_2024-06-22_17-27-38-1" },
    { address: eighth, name: "photo_2024-06-22_17-27-43" },
    { address: ninth, name: "photo_2024-06-22_17-27-43-1" },
    { address: tenth, name: "photo_2024-06-22_17-27-43-2" },
    { address: Group, name: "Group 31" },
  ],
};

const images = ref(projects.images);
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
  width: calc(33.33% - 16px);
  box-sizing: border-box;
}

.project-image img {
  width: 727px;
  height: 545px;
  transition: transform 1s;
}

.project-image .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
