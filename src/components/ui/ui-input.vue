<template>
  <div :class="containerClass">
    <label v-if="!!label" :for="id">{{ label }}</label>
    <input :type="type" :id="id" :placeholder="placeholder" :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>
<script setup>
import { useUniqueId } from './js/utils';

defineProps({
  label: String,
  type: { type: String, default: 'text' },
  id: { type: String, default: () => useUniqueId('input') },
  modelValue: { type: [String, Number], default: '' },
  placeholder: String,
  containerClass: String,
});

defineEmits(['update:modelValue']);
</script>
