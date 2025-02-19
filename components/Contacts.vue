<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>

      <Message 
        v-if="message"
        :message="message"
      />
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name">Name:</AppInput>
        <AppInput v-model="user.email" type="email">Email:</AppInput>

        <client-only>
          <AppTextArea v-model="user.text">Text:</AppTextArea>
        </client-only>

        <div class="controls">
          <AppButton class="btnWhite">Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import Message from '@/components/UI/Message.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'
import AppButton from '@/components/UI/Controls/Button.vue'

const user = reactive({
  name: '',
  email: '',
  text: ''
})

const message = ref(null)


const onSubmit = () => {
  console.log(user)
  message.value = 'Submitted!'
  Object.assign(user, {
    name: '',
    email: '',
    text: ''
  })
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