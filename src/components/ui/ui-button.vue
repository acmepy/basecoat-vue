<template>
  <button type="button" :class="buttonClass" :data-tooltip="tooltip">
    <UiIcon v-if="!!material || !!fa || !!svg || iconify" :material="material" :fa="fa" :svg="svg" :iconify="iconify"
      :iconClass="iconClass" />
    {{ text }}
  </button>
</template>
<script setup>
import UiIcon from './ui-icon.vue';
const prop = defineProps({
  buttonClass: { type: String, default: () => 'btn' },
  material: String,
  fa: String,
  svg: String,
  iconify: String,
  text: String,
  tooltip: String,
  iconClass: String,
});
</script>
