<script setup>
import telegram from '@/assets/Telegram.svg';
import whatsapp from '@/assets/WhatsApp.svg';
</script>

<template>
  <footer>
    <div class="wrapper">
      <div class="contact-us">
        <h1>СВЯЗАТЬСЯ С НАМИ</h1>
      </div>
      <div class="site-map">
        <p>Карта сайта</p>
      </div>
      <div class="menu">
        <p>Главная</p>
        <p>Проекты</p>
        <p>Услуги</p>
        <p>О компании</p>
      </div>
      <div class="contact-info">
        <img :src="telegram" alt="telegram" />
        <img :src="whatsapp" alt="whatsapp" />
        <a href="tel:+7(863)291-35-19" target="_blank"><p>+7 (863) 291-35-19</p></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
*{
  font-family:  'Inter',sans-serif;
}
footer {
  background-color: #0C220B; /* Dark green background */
  color: white;
  padding: 20px 0;
  text-align: center;
}
a{
  text-decoration: none;
  color:white;
}
.wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.contact-us h1 {
  font-size: 29px;
  margin: 0;
}
p{
  font-size: 24px;
  line-height: 29px;
}

.site-map p,
.menu p,
.contact-info p {
  margin: 0;
}

.contact-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-info img {
  width: 20px;
  height: 20px;
}
</style>
