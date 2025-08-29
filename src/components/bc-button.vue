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
    material:{type:String},
    fa:{type:String},
    svg:{type:Object},
    text:{type:String},
    tooltip:String,
    iconClass:String
  })
</script>