<template>
  <button type="button" onclick="document.dispatchEvent(new CustomEvent('basecoat:sidebar'))"
    aria-label="Toggle sidebar" data-tooltip="Toggle sidebar" data-side="bottom" data-align="start"
    class="btn-sm-icon-ghost mr-auto size-7 -ml-1.5">
    <UiSvg name="toggle-sidebar" />
  </button>
</template>
<script setup>
import UiSvg from './ui-svg.vue';

function onclick() {
  document.dispatchEvent(new CustomEvent('basecoat:sidebar'));
}
</script>
