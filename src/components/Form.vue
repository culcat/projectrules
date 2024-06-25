<script setup>
import { computed, ref } from 'vue'
import data from '@/data/services.json'

const serviceOptions = computed(() => {
  return data.services.map(service => ({
    name: service.name,
    price: service.price
  }))
})

const isChecked = ref(false)
const isButtonDisabled = computed(() => !isChecked.value)
</script>

<template>
  <section class="formContainer">
    <form action="mailto:2487654@bk.ru" method="post"
          enctype="text/plain" class="form">
      <input type="text" class="input" placeholder="Имя" />
      <input type="text" class="input" placeholder="Номер телефона" />
      <textarea class="textarea" placeholder="Сообщение"></textarea>
      <select class="select">
        <option selected disabled value="">Выберите сервис</option>
        <option v-for="service in serviceOptions" :key="service.name">{{ service.name }}</option>
      </select>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox" v-model="isChecked" class="checkbox" />
        <label for="checkbox">Даю согласие на обработку персональных данных</label>
      </div>
      <button type="submit" class="button" :disabled="isButtonDisabled">Отправить</button>
    </form>
  </section>
</template>

<style scoped>
*{
  font-family: 'Inter', sans-serif;
}
.formContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/Frame 11.png") center center / cover no-repeat;
  margin-bottom: 50px;
  margin-top: 50px;
}

.form {
  background-color: #DBEEDA;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 50px;
  gap: 15px;
}

.input, .select, .textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #DBEEDA;
  border: 1px solid black;
  border-right: none;
  border-left: none;
  border-top:none;
  font-size: 16px;
}

.input:focus, .select:focus, .textarea:focus {
  outline: none;
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
}

.textarea {
  resize: none;
}

.checkbox-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.button {
  background-color: #061C04;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:disabled {
  background-color: #384A37;
  cursor: not-allowed;
}

.button:not(:disabled):hover {
  background-color: #161D16 ;
}

label {
  font-size: 14px;
  color: #333;
}

@media (max-width: 600px) {
  .form {
    width: 90%;
  }
}
</style>
