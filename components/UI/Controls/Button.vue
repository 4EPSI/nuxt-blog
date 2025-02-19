<template>
  <button 
    class="btn"
    :class="props.type"
    v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'btnPrimary'
  }
})
</script>