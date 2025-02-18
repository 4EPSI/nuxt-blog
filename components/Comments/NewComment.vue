<template>
  <section class="new-comment">
    <div class="container">
      <form @submit.prevent="onSubmit" class="comment-form">
        <label>Name:</label>
        <input v-model="comment.name" type="text">
        <label>Text:</label>
        <textarea v-model="comment.text"></textarea>

        <div class="controls">
          <button class="btn btnPrimary">Submit!</button>
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

const onSubmit = () => {
  console.log(comment)
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