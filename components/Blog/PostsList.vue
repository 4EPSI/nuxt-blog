<template>
  <section class="post-list">
    <div class="container">
      <div class="posts_wrapper">
        <postPreview 
          v-for="post in posts" :key="post.id" 
          :admin="admin"
          :post="post"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// PostPreview
import postPreview from '@/components/Blog/PostPreview.vue'
const props = defineProps({
  posts: {
    type: Array,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.posts_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>