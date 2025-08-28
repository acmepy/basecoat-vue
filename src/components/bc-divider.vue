<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center">
      <span class="w-full border-t"></span>
    </div>
    <div class="relative flex justify-center text-xs uppercase">
      <span class="bg-card px-2 text-muted-foreground">{{ label }}</span>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    label:String
  })
</script>