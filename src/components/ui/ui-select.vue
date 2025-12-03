<template>
  <div :class="containerClass">
    <label :for="id">{{ label }}</label>
    <select :id="id" class="w-full" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
      <option v-for="(opt, i) in options" :key="i" :value="opt.value">
        {{ opt.text }}
      </option>
    </select>
  </div>
</template>
<script setup>
import { useUniqueId } from './js/utils';

defineProps({
  label: { type: String, default: '' },
  id: { type: String, default: () => useUniqueId('select') },
  options: { type: Array, default: () => [] },
  modelValue: { type: [String, Number], default: '' },
  containerClass: { type: String },
});

defineEmits(['update:modelValue']);
</script>
