<template>
  <section class="auth">
    <div class="container">
      <form @submit.prevent="onSubmit" class="auth_form">
        <AppInput type="email" v-model="user.email">Login:</AppInput>
        <AppInput type="password" v-model="user.password">Password:</AppInput>

        <div class="controls">
          <AppButton>Login!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'admin'
})

const user = ref({
  email: '',
  password: ''
})

const onSubmit = () => {
  // console.log(user.value)
  // Reset
  user.value = {
    email: '',
    password: ''
  }
}
</script>

<style lang="scss" scoped>
.auth {
  text-align: center;
}
.auth_form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 70vh;
  input {
    min-width: 460px;
  }
}
:deep(.control) {
  input {
    min-width: 460px
  }
}
</style>