<script setup>
import { ref } from 'vue';
import arrow from '@/assets/arrow.svg';

 const service = {
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
  if (visibleServices.value === service.services.length) {
    visibleServices.value = 3;
  } else {
    visibleServices.value = service.services.length;
  }
};
</script>

<template>
  <div class="services">
    <h1>УСЛУГИ</h1>
    <div class="wrapper">
      <div v-for="(service, index) in service.services" :key="index" v-show="index < visibleServices">
        <div class="container">
          <h1>{{ service.name }}</h1>
          <p>от {{ service.price }}р. за кв.м.</p>
          <img :src="arrow" width="50px" height="50px" alt="arrow" />
        </div>
      </div>
    </div>
    <div class="btn">
    <button  @click="showMore">
      {{ visibleServices === service.services.length ? 'Показать меньше' : 'Показать еще' }}
    </button></div>
  </div>
</template>

<style scoped>
.services {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap on smaller screens */
  justify-content: center; /* Center items horizontally */
}

.container {
  display: flex;
  flex-direction: row; /* Stacked layout on small screens */
  border: 1px solid #061C0480;
  border-left: none;
  border-right: none;
  margin: 10px;
  padding: 10px;
  width: 300px; /* Adjust width as needed */
}

.btn {
  margin-top: 20px; /* Space between button and services */
  text-align: center; /* Center button */
}

@media (max-width: 768px) {
  .container {
    width: 100%; /* Full width on smaller screens */
  }
}
</style>
