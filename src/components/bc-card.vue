<template>
  <div class="card">
    <header>
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </header>
    <section>
      <slot/>
    </section>
  </div>
</template>
<script setup>
  defineProps({
    title:   {type: String, default: ''},
    subtitle: {type: String, default: ''}
  })
</script>