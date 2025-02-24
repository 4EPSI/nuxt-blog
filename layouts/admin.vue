<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Pages">
        <nuxt-link to="/admin" class="link linkWhite">Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">New Post</nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite">Comments</nuxt-link>
      </Intro>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';

</script>