<script setup>
</script>

<template>
  <section>
    <h1>КОНТАКТЫ</h1>
    <div class="contacts">
      <div class="contact">
        <p class="address"><span class="icon"></span>г. Ростов-на-Дону, пер. Соборный 94Е</p>
        <p class="time"><span class="icon"></span>ПН-ПТ 9:00-18:00</p>
        <p class="phone"><span class="icon"></span>+7 (863) 291-35-19</p>
        <p class="email"><span class="icon"></span>2487654@bk.ru</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
}

.contact {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 50px;
  align-items: center;
  width: 100%;

}

.contact p {
  display: flex;
  align-items: center;
  margin: 0;
}

.contact .icon {
  width: 34px; /* Adjust icon width as needed */
  height: 24px; /* Adjust icon height as needed */
  margin-right: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}

.address .icon {
  background-image: url('@/assets/Vector-1.svg');
}

.time .icon {
  background-image: url('@/assets/Vector.svg');
}

.phone .icon {
  background-image: url('@/assets/Workspace.svg');
}

.email .icon {
  background-image: url('@/assets/Vector-2.svg');
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}
</style>
