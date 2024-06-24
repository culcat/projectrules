<script setup>
import { ref } from 'vue';
import arrow from '@/assets/arrow.svg';

const services = {
  services: [
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
    { name: 'ЖИЛЫЕ ДОМА', price: '2500' },
  ],
};

const visibleServices = ref(3);

const showMore = () => {
  if (visibleServices.value === services.services.length) {
    visibleServices.value = 3;
  } else {
    visibleServices.value = services.services.length;
  }
};
</script>

<template>
  <div class="services">
    <div class="wrapper">
      <div v-for="(service, index) in services.services" :key="index" v-show="index < visibleServices">
        <div class="container">
          <h1>{{ service.name }}</h1>
          <p>от {{ service.price }}р. за кв.м.</p>
          <img :src="arrow" alt="arrow" />
        </div>
      </div>
    </div>
    <button @click="showMore">
      {{ visibleServices === services.services.length ? 'Показать меньше' : 'Показать еще' }}
    </button>
  </div>
</template>

<style scoped>
.services{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container{
  display: flex;
  flex-direction: row;
  border: 1px solid #061C0480;
  border-left: none;
  border-right: none;
  align-items: center;
  gap: 100px;
}
</style>
