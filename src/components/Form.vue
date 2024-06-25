<script setup>
import {computed, ref} from 'vue'
import data from '@/data/services.json'
const serviceOptions = computed(() => {
  return data.services.map(service => ({
    name: service.name,
    price: service.price
  }))
})
const isChecked = ref(false)
const isButtonDisabled  = computed(()=> !isChecked.value)
</script>

<template>
  <section class="formContainer">
  <form class="form">
    <input type="text" class="input" placeholder="Имя" />
    <input type="email" class="input" placeholder="Номер телефона" />
    <textarea class="textarea" placeholder="Сообщение"></textarea>
    <select class="select" >
      <option selected disabled value="">Выберите сервис</option>
      <option v-for="service in serviceOptions" :key="service.name">{{ service.name }}</option>
    </select>
    <div>
      <input type="checkbox" id="checkbox" v-model="isChecked" class="checkbox" />
      <label for="checkbox">Даю согласие на обработку персональных данных</label>
    </div>
    <button type="submit" class="button" :disabled="isButtonDisabled">Отправить</button>
  </form>
  </section>
</template>

<style scoped>
  .form{
    background-color: #DBEEDA;
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;

  }
  label{
    font-size: 14px;
    font-weight: 500;
    color: #000;
    margin-left: 10px;
  }
  input,select{
    border-left: none;
    width: 80%;
    height: 20px;
    border-bottom: black 1px solid;
    border-right: none;
    border-top: none;
    background-color: #DBEEDA;
  }
.textarea{
  border-left: none;
    width: 80%;
    height: 100px;
    border-bottom: black 1px solid;
    border-right: none;
    border-top: none;
    background-color: #DBEEDA;
}
  .button{
    border-radius: 0.5rem;
    width: 30%;
  }
</style>