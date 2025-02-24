<template>
  <newPostForm @submit="onSubmit" />
</template>

<script setup>
import newPostForm from '@/components/Admin/NewPostForm.vue'

definePageMeta({
  layout: 'admin'
})

const onSubmit = (post) => {
  console.log(post, 'Post added')
}
</script>