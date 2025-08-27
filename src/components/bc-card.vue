<template>
  <div class="card">
    <header>
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </header>
    <section>
      <slot/>
    </section>
    <footer v-if="$slots.footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
<script setup>
  defineProps({
    title:   {type: String, default: ''},
    subtitle: {type: String, default: ''}
  })
</script>