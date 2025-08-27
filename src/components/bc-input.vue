<template>
  <label v-if="!!label" :for="id">{{ label }}</label>
  <input :type="type" :id="id" :placeholder="placeholder" />
</template>
<script setup>
  defineProps({
    label: {type: String},
    type:  {type: String, default: 'text'},
		id:    {type:String, default: `input-${Date.now()}`},
    placeholder:  {type: String, default: 'placeholder'}
  })

</script>