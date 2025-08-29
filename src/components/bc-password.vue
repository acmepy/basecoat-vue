<template>
  <div class="grid gap-2">
    <div class="flex items-center gap-2">
    <label v-if="!!label" :for="inputId">{{ label }}</label>
    <a v-if="!!resetLink" :href="resetLink" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">{{ resetLabel }}</a>
    </div>
    <input type="password" :id="inputId">
  </div>
</template>
<script setup>
  import { useUniqueId

   } from '../js/utils';
  defineProps({
    label:String,
    type:  {type: String, default: 'text'},
		inputId: {type:String, default:()=>useUniqueId()},
    resetLabel:String,
    resetLink:String,
    placeholder: String,
    containerClass:String
  })
</script>