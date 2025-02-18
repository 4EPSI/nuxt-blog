<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <label>Name:</label>
        <input v-model="user.name" type="text">
        <label>Email:</label>
        <input v-model="user.email" type="text">
        <label>Text:</label>
        <textarea v-model="user.text"></textarea>

        <div class="controls">
          <button class="btn btnWhite">Submit!</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const user = reactive({
  name: '',
  email: '',
  text: ''
})

const onSubmit = () => {
  console.log(user)
}
</script>

<style lang="scss" scoped>
.contact {
  text-align: center;
  background: #4a4acc;
  color: #fff;
  .title {
    color: #fff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>