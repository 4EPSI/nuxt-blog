<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p>Page not found</p>
        <nuxt-link class="title" to="/">Back to main page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({ layout: false })
</script>

<style lang="scss" scoped>
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
}
</style>
