<template>
  <button 
    class="btn"
    :class="btnClass"
    v-on="$listeners"
    v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup>
const btnClass = defineProps({
  type: {
    type: String,
    default: 'btnPrimary'
  }
})
</script>