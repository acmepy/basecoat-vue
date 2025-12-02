<template>
  <input type="checkbox" role="switch" :class="inputClass" :id="inputId" v-model="model" />
</template>

<script setup>
import { computed } from 'vue';
import { useUniqueId } from '../js/utils';

const props = defineProps({
  inputId: { type: String, default: () => useUniqueId() },
  modelValue: { type: Boolean, default: false },
  inputClass: { type: String, default: 'input' },
});

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});
</script>
