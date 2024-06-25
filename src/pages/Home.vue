<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Logo from '@/assets/Logo.png';
import Photo from '@/assets/women.png';
import ServicesComponent from "@/components/ServicesComponent.vue";
import Services from "@/pages/Services.vue";
import ContactsComponent from "@/components/ContactsComponent.vue";
import {ref} from "vue";
import Popup from "@/components/Popup.vue";


const isPopupVisible = ref(false);

const openPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};
</script>

<template>
  <Header/>
  <main>
    <section class="container-head">
      <h1 class="main-title">АРХИТЕКТУРНАЯ МАСТЕРСКАЯ</h1>
      <div class="text-wrapper-2">
        <h3 class="main-subtitle">Индивидуальное проектирование загородных домов и дизайн интерьера</h3>
        <button @click="openPopup">Получить консультацию</button>
      </div>
    </section>
    <section class="container">
      <h1 class="title">МАСТЕРСКАЯ <br><br> «ПРАВИЛА ПРОЕКТА»</h1>
      <div class="text">
        <div class="text-wrapper">
          <p class="about"> Мы давно заметили, что люди все больше и больше хотят иметь собственную уникальность. Мы объединили свой опыт ,знания и креатив в команду, для воплощения ваших идей в реальность. Мы оживляем мысль, даем ей жизнь. У нас любая мечта обретает свое индивидуальное, а точнее уникальное лицо.
            <br><br>
            Мы молоды и амбициозны и ясно ощущаем ,как быстро меняется мир вокруг – мы помогаем Вам изменить жизнь к лучшему, оставаясьпри этом самим собой.
            Быть самим собой – это так важно! Давайте мечтать, творить, строить жизненные планы. Мы знаем и умеем превращать Ваши планы в чертежи, а мечты запечатлеть в цвете и форме реальности. Мы будем творить Вашу мечту, пока она не обретет свой идеальный ,уникальный образ.
            <br><br>
            Мы помогаем каждому найти золотую середину между тем, что хочется, и тем, на что реально можно рассчитывать. И, вне зависимости от объема проекта - можем гарантировать, что результатом нашей с Вами совместной работы - Вы останетесь довольны. Ведь это и есть наша основная цель.
            <br><br>
            Если у Вас имеется свой специалист-строитель, мы с удовольствием с ним будем сотрудничать в процессе работы над Вашим проектом. Или можем порекомендовать строителей, с которыми уже работали и создавали проекты.</p>
          <div class="statistic">
            <div class="statistic-item">
              <div class="statistic-number">18</div>
              <div class="statistic-text">лет на рынке</div>
            </div>
            <div class="statistic-item">
              <div class="statistic-number">100+</div>
              <div class="statistic-text">выполненных проектов</div>
            </div>
            <div class="statistic-item">
              <div class="statistic-number">98%</div>
              <div class="statistic-text">довольных клиентов</div>
            </div>
          </div>
        </div>
        <img :src="Photo">
      </div>
    </section>
    <section class="services">
      <ServicesComponent/>
    </section>
    <section class="contacts">
      <ContactsComponent/>
    </section>
  </main>
  <Footer/>
  <Popup :isVisible="isPopupVisible" @close="closePopup"/>
</template>

<style scoped>
* {
  font-family: HelveticaNeueCyr, sans-serif;
  font-style: normal;
  font-size: 24px;
  line-height: 29px;
}
.text-wrapper-2  {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.container-head {
  background: url("../assets/photo.png") no-repeat;
  background-size: 100vw;
  width: calc(100vw - 20px);
  height:700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Align items to the bottom */
}

.main-title,
.main-subtitle,
button {
  color: #fff;
}

/* Additional styling for the button */
button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #004d00;
  color: #fff;
  border: none;
  cursor: pointer;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.logo {
  display: block;
  margin: 0 auto;
  width: 150px;
}
.main-title {
  text-align: left;
  font-size: 36px;
  margin: 20px 0;
  color: #fff;

}
.main-subtitle {
  font-size: 24px;
  color: #fff;

}
button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #004d00;
  color: #fff;
  border: none;
  cursor: pointer;

}
.title {
  font-size: 44px;
}
p {
  text-align: justify;
  line-height: 19.76px;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 300;
}
.statistic {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
  border: solid black 1px;
  border-left: none;
  border-right: none;
}
.statistic-item {
  text-align: center;
}
.statistic-number {
  font-size: 32px;
  font-weight: bold;
}
.statistic-text {
  font-size: 16px;
  margin-top: 5px;
}
.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.text img {
  width: 100%;
  max-width: 603px;
  height: auto;
  margin-left: 0;
}
.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  flex: 1;
  margin-right: 20px;
}

</style>
