<template>
  <!--button @click="open" class="px-4 py-2 bg-blue-600 text-white rounded-lg">Abrir Modal</button-->
  <div v-if="showModal" class="bg-background opacity-80 fixed inset-0 flex items-center z-50"></div>

  <div v-if="showModal" class="fixed inset-0 flex items-center justify-center z-50">
    <div class="bg-card opacity-100 border p-6 rounded-2xl shadow-lg flex flex-col items-center">
      <UiIcon iconify="svg-spinners:90-ring-with-bg" width="60" height="60" />
      <p v-if="!!text" class="mt-4 text-gray-700">{{ text }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import UiIcon from './ui-icon.vue';

defineProps({ text: String });

const showModal = ref(false);

const open = () => (showModal.value = true);
const close = () => (showModal.value = false);

defineExpose({ open, close });
</script>
