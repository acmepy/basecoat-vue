<template>
  <label class="label gap-3">
    <input :id="inputId" type="checkbox" :class="inputClass" v-model="model">
    {{ label }}
  </label>
</template>
<script setup>
  import { computed } from 'vue'
  import { useUniqueId } from '../js/utils'

  const props = defineProps({
    label:{type:String},
    inputId:{type:String, default:()=>useUniqueId()},
    inputClass:{type:String, default:'input'},
    modelValue: { type: Boolean, default: false }
  })

  const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val)
})
</script>