<script setup>
import { ref, onMounted } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Logo from '@/assets/Logo.png';
import Photo from '@/assets/women.png';
import ServicesComponent from "@/components/ServicesComponent.vue";
import ContactsComponent from "@/components/ContactsComponent.vue";
import Popup from "@/components/Popup.vue";

const isPopupVisible = ref(false);

const openPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};

const projects = ref([]);
const visibleProjects = ref([]);
const showMoreVisible = ref(false);

const fetchProjects = async () => {
  try {
    const response = await fetch('src/data/projects.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    projects.value = data;
    visibleProjects.value = projects.value.slice(0, 4);
    if (projects.value.length > 4) {
      showMoreVisible.value = true;
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
  }
};

const showMoreProjects = () => {
  visibleProjects.value = projects.value;
  showMoreVisible.value = false;
};

onMounted(() => {
  fetchProjects();
});
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
    </section><section class="projects">
    <h1>Наши проекты</h1>
    <div class="project-list">
      <div v-for="project in visibleProjects" :key="project.name" class="project-item">
        <img :src="project.path" :alt="project.name">
      </div>
    </div>
    <button v-if="showMoreVisible" @click="showMoreProjects">Показать больше</button>
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
/* Reset default browser styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Inter, sans-serif;
}

/* Set base font and line height */
body {
  font-family: HelveticaNeueCyr, sans-serif;
  font-style: normal;
  font-size: 16px; /* Base font size */
  line-height: 1.6; /* Base line height */
}

/* Ensure full-width viewport */
html, body {
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

/* Basic styling for headings and buttons */
.main-title,.main-subtitle {
  color: #fff;
}

h1 {
  font-size: 36px;
  margin: 20px 0;
  text-align: center;
}

h3 {
  font-size: 24px;
  margin: 10px 0;
  text-align: center;
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

button:hover {
  background-color: #003300; /* Darken color on hover */
}

/* Header section */
.container-head {
  background: url("../assets/photo.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
}

/* Main content container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Text and image section */
.text {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.text img {
  width: 100%;
  max-width: 603px;
  height: auto;
  margin: 20px 0;
}

.text-wrapper {
  flex: 1;
  margin-right: 20px;
}

/* Statistic section */
.statistic {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 40px;
}

.statistic-item {
  text-align: center;
  flex: 1 1 30%;
  margin-bottom: 20px;
}

.statistic-number {
  font-size: 32px;
  font-weight: bold;
}

.statistic-text {
  font-size: 16px;
  margin-top: 5px;
}

/* Projects section */
.projects {
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.project-item {
  text-align: center;
}

.project-item img {
  width: 300px;
  height: 250px;
  object-fit: cover;
}

/* Services and Contacts sections */
.services, .contacts {
  padding: 20px;
}

/* Footer section */
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container-head {
    height: 400px;
  }

  .main-title {
    font-size: 28px;
  }

  .main-subtitle {
    font-size: 20px;
  }

  .text img {
    margin: 10px 0;
  }

  .statistic {
    margin-top: 20px;
  }

  .statistic-item {
    flex: 1 1 45%; /* Adjust item size for smaller screens */
    margin-bottom: 10px;
  }

  .statistic-number {
    font-size: 24px;
  }

  .projects {
    margin-top: 20px;
  }

  .project-item img {
    width: 100%; /* Make project images full width on smaller screens */
    height: auto;
  }
}

@media (max-width: 480px) {
  .main-title {
    font-size: 24px;
  }

  .main-subtitle {
    font-size: 18px;
  }

  .text {
    flex-direction: column;
  }

  .text-wrapper {
    margin-right: 0;
  }

  .statistic-item {
    flex: 1 1 100%; /* Full width for statistic items on very small screens */
  }

  .project-item img {
    width: 100%; /* Ensure project images adapt to container width */
    height: auto;
  }
}

</style>
