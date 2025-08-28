<template>
  <button type="button" :class="buttonClass">
    <bcIcon v-if="!!material||!!fa||!!svg" :material="material" :fa="fa" :svg="svg"/>
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
    text:{type:String, default:'GitHub'}
  })
</script>