<script setup>
import Header from "@/components/Header.vue";
import Form from "@/components/Form.vue";
import Footer from "@/components/Footer.vue";
import woomen from "@/assets/women.png"
</script>

<template>
  <Header/>
  <main>
    <section class="about-company">
      <h1 class="title">О КОМПАНИИ</h1>
      <div class="text">
        <h3>СОЗДАЙТЕ СВОЮ УНИКАЛЬНОСТЬ</h3>
        <br>
        Мы понимаем, что каждый хочет иметь свой уникальный стиль и индивидуальность. Поэтому мы объединили наши навыки, знания и креативность, чтобы помочь вам воплотить ваши идеи в реальность. Мы даем жизнь вашим мечтам, создавая уникальные и индивидуальные проекты.
        <br><br>
        <h3>МЫ ПОМОГАЕМ ИЗМЕНИТЬ ЖИЗНЬ К ЛУЧШЕМУ</h3>
        <br>
        Мы молодая и амбициозная команда, которая чувствует ритм изменений в мире. Мы поможем вам изменить свою жизнь к лучшему, оставаясь верными себе.
        <br><br>
        <h3>БЫТЬ САМИМ СОБОЙ - ЭТО ТАК ВАЖНО!</h3>
        <br>
        Давайте мечтать, создавать, строить жизненные планы. Мы знаем, как превратить ваши планы в реальность, и поможем вам создать уникальный проект, который отражает вашу индивидуальность.
        <br><br>
        <h3>НАШИ ОБЕЩАНИЯ</h3>
        <br>
        Мы поможем вам найти золотую середину между вашими желаниями и реальными возможностями. Независимо от объема проекта, мы гарантируем, что результат нашей совместной работы будет превышать ваши ожидания.
        <br><br>
        <h3>СОТРУДНИЧЕСТВО С ВАМИ</h3>
        <br>
        Если у вас есть свой специалист-строитель, мы с радостью будем сотрудничать с ним над вашим проектом. Или мы можем порекомендовать проверенных строителей, с которыми мы уже работали над успешными проектами.
      </div>
    </section>

    <section class="women">
      <div class="women-wrapper">
        <h1 class="title">АСЯ СЕРГЕЕВНА ВЕРОПOTВЕЛЬЯН</h1>
        <div class="text">
          Ася Сергеевна - опытный архитектор с более чем 18-летним стажем в области архитектуры. Она является директором архитектурной мастерской и имеет богатый опыт работы в различных организациях, включая ООО РК «Ростов-Дом», «Сантехмонтаж», «СевКавНипиАгроПром» и МУП «Энтазис».

          ОБРАЗОВАНИЕ И НАВЫКИ

          Ася Сергеевна имеет образование в Детской художественной школе г. Мирный, Архангельской области, и Ростовском архитектурном институте по специальности архитектура АЖОЗ. Она также владеет компьютерными программами AutoCAD, Autodesk 3ds Max, ArchiCad, MS Office и Photoshop.

          ДОСТИЖЕНИЯ

          Ася Сергеевна является членом Союза архитекторов России с 2008 года и автором запатентованной торговой марки "Живой Дом", которая имеет подтвержденные реальные результаты. Она руководит Творческой Архитектурной мастерской «Правила Проекта» и является директором архитектурной мастерской.
        </div>
      </div>
      <img :src='woomen' alt="women">
    </section>

    <section class="author-development">
      <h1 class="title">АВТОРСКОЙ РАЗРАБОТКА ПРОЕКТ "ЖИВОЙ ДОМ"</h1>
      <div class="text">(свидетельство на товарный знак №607150)
        Это проект, в котором учитываются помимо архитектурных, санитарно-эпидемиологических норм, конструктивных особенностей - еще и энергетика получившегося пространства. Мы имеем возможность подстраивать конструкции дома таким образом, чтобы получившиеся помещения подпитывали Вас в нужной сфере (бизнес, деньги, семья, дети, здоровье и др.).
      </div>
    </section>
  </main>
  <Form/>
  <Footer/>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.about-company, .women, .author-development {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.about-company {
  background: url("../assets/LogoBack.png") no-repeat center;
  background-size: cover;
}

.women {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.women img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
}

.women-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.title {
  font-family: HelveticaNeueCyr, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 2.25rem; /* Adjusted for responsiveness */
  line-height: 1.2;
  color: #096201;
  margin-bottom: 30px;
}

.text {
  font-family: HelveticaNeueCyr, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem; /* Adjusted for responsiveness */
  line-height: 1.2;
  color: #000000;
  width: 100%;
}

.text h3 {
  font-family: HelveticaNeueCyr, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.625rem; /* Adjusted for responsiveness */
  line-height: 1.2;
  color: #096201;
}

@media (min-width: 768px) {
  .women {
    flex-direction: row;
  }

  .women img {
    margin-top: 0;
    margin-left: 20px;
  }

  .text {
    width: 90%;
  }
}

@media (min-width: 1024px) {
  .text {
    width: 80%;
  }
}
</style>
