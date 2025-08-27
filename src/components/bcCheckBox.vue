<template>
  <label class="label gap-3">
    <input :id="inputId" type="checkbox" :class="inputClass" v-model="model">
    {{ label }}
  </label>
</template>
<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    label:{type:String},
    inputId:{type:String, default:`checkbox-${Date.now()}`},
    inputClass:{type:String, default:'input'},
    modelValue: { type: Boolean, default: false }
  })

  const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>