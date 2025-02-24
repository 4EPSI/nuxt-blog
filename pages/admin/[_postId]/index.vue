<template>
  <newPostForm 
    @submit="onSubmit" 
    :postEdit="post"
  />
</template>

<script setup>
import newPostForm from '@/components/Admin/NewPostForm.vue'

definePageMeta({
  layout: 'admin'
})

const post = ref({
  id: 1,
  title: '1 post',
  descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quasi unde ea distinctio amet deleniti suscipit nesciunt, maiores nisi sunt quos dolorem rerum eveniet fuga. Modi dolores earum incidunt fugiat! Explicabo necessitatibus animi doloremque omnis aut dolores ducimus beatae maiores accusamus quia tempore natus minus, inventore architecto unde a delectus incidunt repellendus libero, voluptates eaque! Optio ratione sit maxime excepturi.',
  img: 'https://media.istockphoto.com/id/1430842114/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F.jpg?s=1024x1024&w=is&k=20&c=6b9vrbQK00Xy563-DjfcmCyYLp9aM1IG-GIQHGU9Vuw='
})

const comments = ref([
  { name: 'Alex', text: 'Lorem ipsum dolor sit amet' },
  { name: 'Costa', text: 'Lorem ipsum dolor sit amet' },
])

const onSubmit = (post) => {
  console.log(post, 'Post Editing')
}
</script>