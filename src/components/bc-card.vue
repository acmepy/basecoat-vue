<template>
  <div class="card">
    <header v-if="!!title">
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>
    </header>
    <section :class="sectionClass">
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
    subtitle: {type: String, default: ''},
    sectionClass:{type:String}
  })
</script>