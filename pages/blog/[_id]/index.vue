<template>
  <div class="wrapper-content wrapper-content--fixed">
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
  </div>
</template>

<script setup>
const post = ref({
  id: 1,
  title: '1 post',
  descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor quasi unde ea distinctio amet deleniti suscipit nesciunt, maiores nisi sunt quos dolorem rerum eveniet fuga. Modi dolores earum incidunt fugiat! Explicabo necessitatibus animi doloremque omnis aut dolores ducimus beatae maiores accusamus quia tempore natus minus, inventore architecto unde a delectus incidunt repellendus libero, voluptates eaque! Optio ratione sit maxime excepturi.',
  img: 'https://media.istockphoto.com/id/1430842114/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F.jpg?s=1024x1024&w=is&k=20&c=6b9vrbQK00Xy563-DjfcmCyYLp9aM1IG-GIQHGU9Vuw='
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