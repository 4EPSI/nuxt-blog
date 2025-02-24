<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My Lasts posts: " />
    <!-- posts -->
    <PostsList :posts="posts" />
    <contacts />
  </div>
</template>

<script setup>
import promo from '@/components/Promo.vue'
import contacts from '@/components/Contacts.vue'

const posts = ref([
  {
    id: 1,
    title: '1 post',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: 'https://media.istockphoto.com/id/1430842114/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F.jpg?s=1024x1024&w=is&k=20&c=6b9vrbQK00Xy563-DjfcmCyYLp9aM1IG-GIQHGU9Vuw='
  },
  {
    id: 2,
    title: '2 post',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: 'https://media.istockphoto.com/id/1497909628/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BA%D0%BE%D1%88%D0%BA%D0%B0-%D0%B8-%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D1%81%D0%B8%D0%B4%D1%8F%D1%82-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5-%D0%BD%D0%B0-%D0%BB%D1%83%D0%B3%D1%83.jpg?s=1024x1024&w=is&k=20&c=CM07c6e7EP4k-yFX_sS_yK9Wty3r3Sevo2QVLXDNDDY='
  },
  {
    id: 3,
    title: '3 post',
    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    img: 'https://media.istockphoto.com/id/1364253107/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0-%D0%B8-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0-%D0%BA%D0%B0%D0%BA-%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F-%D1%81%D0%BC%D0%BE%D1%82%D1%80%D1%8F%D1%89%D0%B8%D0%B5-%D0%B2-%D0%BE%D0%BA%D0%BD%D0%BE-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B5.jpg?s=1024x1024&w=is&k=20&c=GXvXpAS3lj31qap32O38oqxhJyXij6xjenMaYZzqYuI='
  }
])
</script>
