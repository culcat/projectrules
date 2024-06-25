<script setup>

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import Form from "@/components/Form.vue";
</script>

<template>
  <Header/>
<ServicesComponent/>
  <Form/>
  <Footer/>
</template>

<style scoped>
*{
  font-family: HelveticaNeueCyr, sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
}

</style>