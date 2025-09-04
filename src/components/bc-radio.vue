<template>
  <ul class="flex gap-4">
    <li class="flex-1" v-for="(i, x) in items">
      <input type="radio" :name="radioName(items, x)" :id="radioItemId(items, x)" :class="i.inputClass" />
      <label
        :for="i.id || 'input_' + x"
        class="text-sm font-medium leading-none flex flex-col items-center justify-between rounded-md border-2 border-muted p-4 hover:bg-muted peer-checked:border-primary"
      >
        <bcIcon :iconify="i.iconify" :material="i.material" :svg="i.svg" iconClass="mb-3 size-6" :width="i.width" :height="i.height" />
        {{ i.label }}
      </label>
    </li>
  </ul>
</template>
<script setup>
import bcIcon from './bc-icon.vue';

const radioName = (items, pos) => {
  return items[pos].radioName || `radio-${items.length}`;
};

const radioItemId = (items, pos) => {
  return items[pos].id || radioName(items, pos) + '-' + pos;
};

const props = defineProps({
  items: { type: Array, default: () => [] },
});
</script>
