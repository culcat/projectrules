<script setup>
import arrow from '@/assets/arrow.svg';
const services = {
  services:[
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},
    {name:'ЖИЛЫЕ ДОМА',price:'2500'},

  ]
}
</script>

<template>

  <div class="services">
    <div class="wrapper">
      <div v-for="service in services.services" class="service">
        <div class="container">
        <h1>{{ service.name }}</h1>
        <p>от {{ service.price }}р. за кв.м.</p>
          <img :src="arrow" alt="arrow" />

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .service{
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