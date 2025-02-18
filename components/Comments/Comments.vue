<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <div v-for="comment in comments" :key="comment.name" class="comment">
        <p class="name">{{ comment.name }}</p>
        <p class="text">{{ comment.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  comments: {
    type: Array,
    default: null
  }
})
</script>

<style lang="scss" scoped>
.comments {
  margin: 30px auto;
  text-align: center;
}
.comment {
  width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  background: #fff;
  .name {
    margin-bottom: 12px;
    font-size: 24px;
    color: #1e49b5;
  }
}
</style>