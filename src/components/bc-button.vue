<template>
  <button type="button" :class="buttonClass" :data-tooltip="tooltip">
    <bcIcon v-if="!!material||!!fa||!!svg" :material="material" :fa="fa" :svg="svg" :iconClass="iconClass"/>
    {{text}}
  </button>
</template>
<script setup>
import BcIcon from './bc-icon.vue';
  const prop = defineProps({
    buttonClass:{type:String, default:'btn-outline flex-1'},
    material:String,
    fa:String,
    svg:String,
    text:String,
    tooltip:String,
    iconClass:String
  })
</script>