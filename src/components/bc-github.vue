<template>
  <a :href="href" class="btn-icon size-8" target="_blank">
    <bcSvg name="github" />
  </a>
</template>
<script setup>
import bcSvg from './bc-svg.vue';

defineProps({
  href: { type: String, default: 'https://github.com/acmepy/basecoat-vue' },
});
</script>
