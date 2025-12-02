<template>
  <a :href="href" class="btn-icon size-8" target="_blank">
    <UiIcon iconify="octicon:mark-github-24" />
  </a>
</template>
<script setup>
import UiIcon from './ui-icon.vue';

defineProps({
  href: { type: String, default: 'https://github.com/acmepy/basecoat-vue' },
});
</script>
