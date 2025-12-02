<template>
  <span :class="[size, color]" v-html="svgContent" />
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  name: { type: String, required: true },
  size: { type: String, default: '' },
  color: { type: String, default: '' },
});

const svgContent = ref('');
const svgFiles = import.meta.glob('/src/assets/svg/*.svg', { query: '?raw', import: 'default' });

watchEffect(async () => {
  const filePath = `/src/assets/svg/${props.name}.svg`;
  if (svgFiles[filePath]) {
    svgContent.value = await svgFiles[filePath]();
  } else {
    svgContent.value = '';
  }
});
</script>
