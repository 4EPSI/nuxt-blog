<template>
  <div :class="mesClass" class="message">
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  mesClass: {
    type: String,
    default: 'success'
  },
  message: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.message {
  font-size: 22px;
  &.success {
    color: #26de81;
  }
  &.error {
    color: #fc5c65;
  }
}
</style>