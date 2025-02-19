<template>
  <div class="control">
    <label><slot /></label>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)">
    </textarea>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  }
})

</script>