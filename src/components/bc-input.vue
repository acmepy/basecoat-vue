<template>
  <div :class="containerClass">
    <label v-if="!!label" :for="inputId">{{ label }}</label>
    <input :type="type" :id="inputId" :placeholder="placeholder" />
  </div>
</template>
<script setup>
  defineProps({
    label:String,
    type:  {type: String, default: 'text'},
		inputId: {type:String, default:`input-${+ Math.floor(Math.random() * 1000)}`},
    placeholder: String,
    containerClass:String
  })
</script>