<script>
import { computed, ref } from 'vue';
import data from '@/data/services.json';

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  setup() {
    const serviceOptions = computed(() => {
      return data.services.map(service => ({
        name: service.name,
        price: service.price
      }));
    });

    const isChecked = ref(false);
    const isButtonDisabled = computed(() => !isChecked.value);

    const closePopup = () => {
      emit('close');
    };

    return {
      serviceOptions,
      isChecked,
      isButtonDisabled,
      closePopup
    };
  }
}
</script>

<template>
  <div v-if="isVisible" class="popup-overlay">
    <div class="popup-content">
      <input type="text" placeholder="Имя" class="input-field" />
      <input type="email" placeholder="Номер телефона" class="input-field" />
      <select class="select">
        <option selected disabled value="">Выберите сервис</option>
        <option v-for="service in serviceOptions" :key="service.name">{{ service.name }}</option>
      </select>
      <textarea placeholder="Сообщение" class="textarea-field"></textarea>
      <div class="checkbox-container">
        <input type="checkbox" id="checkbox" v-model="isChecked" class="checkbox" />
        <label for="checkbox">Даю согласие на обработку персональных данных</label>
      </div>
      <button type="submit" class="button" :disabled="isButtonDisabled">Отправить</button>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

.popup-content {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 500px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

.input-field,
.select,
.textarea-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 1px none black;
  border-bottom-style: solid;
}

.textarea-field {
  height: 100px;
  resize: none;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.checkbox {
  margin-right: 10px;
}

.button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background: #061C04;
  cursor: pointer;
  transition: background 0.3s ease;
}

.button:disabled {
  background: #aaa;
}

.button:hover:not(:disabled) {
  background: #0056b3;
}

.button-close {
  background: #dc3545;
}

.button-close:hover {
  background: #c82333;
}
</style>
