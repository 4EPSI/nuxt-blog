<template>
  <section class="pots">
    <div class="container">
      <div class="post-header">
        <img :src="post.img" :alt="post.title">
        <h1 class="title">{{ post.title }}</h1>
        <p>{{ post.descr }}</p>
      </div>

      <div class="post-body">
        <p>{{ post.content }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-bottom: 16px;
    max-width: 400px;
  }
  p {
    color: #999;
  }
}

.post-body {
  text-align: left;
}
</style>