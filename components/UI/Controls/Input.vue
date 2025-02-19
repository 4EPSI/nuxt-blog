<template>
  <div class="control">
    <label>
      <slot />
    </label>
    <input 
      v-bind="$attrs"
      :value="modelValue"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text'
  }
})

</script>