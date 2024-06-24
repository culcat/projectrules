<script setup>

</script>

<template>
  <header>
    <div class="logo">
      <h1>"Правила Проекта"</h1>
    </div>
    <div class="wrapper">
 <router-link to="/">ГЛАВНАЯ</router-link>
      <router-link to="/projects">ПРОЕКТЫ</router-link>
      <router-link to="/services">УСЛУГИ</router-link></div>

  </header>
</template>

<style scoped>
*{
  font-family: Inter Regular,sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
}
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
      background: #C8FFCC;
    }
    .logo{
      padding-left: 20px;
    }
    .wrapper{
      padding-right: 20px;
      display: flex;
      gap: 86px;
    }
    a{
      text-decoration: none;
      color: #000000;
    }

</style>