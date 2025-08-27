<template>
  <input v-if="i.after.type=='checkbox'" type="checkbox" role="switch" class="input" v-model="model" />
</template>
<script setup>
  defineProps({
    model:{type:Boolean, default:false}
  })
</script>