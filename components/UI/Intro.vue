<template>
  <section class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.intro {
  width: 100%;
  margin: 30px 0;
  text-align: center;
  color: #ffffff;
  background: #4b40e3;
  h1 {
    font-size: 26px;
  }
}
</style>