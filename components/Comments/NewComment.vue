<template>
  <section class="new-comment">
    <div class="container">

      <Message 
        v-if="message"
        :message="message"
      />
      <form @submit.prevent="onSubmit" class="comment-form">
        <AppInput v-model="comment.name">Name:</AppInput>
        <client-only>
          <AppTextArea v-model="comment.text">Text:</AppTextArea>
        </client-only>

        <div class="controls">
          <AppButton>Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
const comment = reactive({
  name: '',
  text: ''
})

const message = ref(null)

const onSubmit = () => {
  console.log(comment)
  message.value = 'Submitted!'
  Object.assign(comment, {
    name: '',
    email: '',
    text: ''
  })
}
</script>

<style lang="scss" scoped>
.new-comment {
  text-align: center;
  .comment-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>