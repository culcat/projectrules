<template>
  <div>
    <Header />
    <div v-if="project">
      <h2>{{ project.name }}</h2>
      <img :src="project.path" alt="Project Image" />
      <p>{{ project.description }}</p>
    </div>
    <router-link to="/projects"><button>К другим проектам</button></router-link>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import projects from "@/data/projects.json";

const projectId = ref(null);
const project = ref(null);

const getProjectIdFromUrl = () => {
  const hash = window.location.hash;
  if (hash.startsWith('#/project/')) {
    projectId.value = parseInt(hash.replace('#/project/', ''), 10);
  }
};

const findProjectById = () => {
  project.value = projects.find(p => p.id === projectId.value);
};

onMounted(() => {
  getProjectIdFromUrl();
  findProjectById();
});

</script>

<style scoped>
</style>
