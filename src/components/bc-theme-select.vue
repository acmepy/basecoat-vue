<template>
  <select
    v-model="theme"
    class="select h-8 leading-none"
    @change="applyTheme"
  >
    <option value="">Default</option>
    <option value="claude">Claude</option>
    <option value="doom-64">Doom 64</option>
    <option value="supabase">Supabase</option>
  </select>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('')

const applyTheme = () => {
  // limpiar clases previas
  document.documentElement.classList.forEach(c => {
    if (c.startsWith('theme-')) document.documentElement.classList.remove(c)
  })

  if (theme.value) {
    document.documentElement.classList.add(`theme-${theme.value}`)
    localStorage.setItem('themeVariant', theme.value)
  } else {
    localStorage.removeItem('themeVariant')
  }
}

onMounted(() => {
  const stored = localStorage.getItem('themeVariant')
  if (stored) {
    theme.value = stored
    applyTheme()
  }
})
</script>
<!--
<select class="select h-8 leading-none" id="theme-select" @change="themeChange">
  <option value="">Default</option>
  <option value="claude">Claude</option>
  <option value="doom-64">Doom 64</option>
  <option value="supabase">Supabase</option>
</select>
<script>
  (() => {
    const themeSelect = document.getElementById('theme-select');
    const storedTheme = localStorage.getItem('themeVariant');
    if (themeSelect && storedTheme) themeSelect.value = storedTheme;
    themeSelect.addEventListener('change', () => {
    const newTheme = themeSelect.value;
    document.documentElement.classList.forEach(c => {
      if (c.startsWith('theme-')) document.documentElement.classList.remove(c);
    });
    if (newTheme) {
      document.documentElement.classList.add(`theme-${newTheme}`);
      localStorage.setItem('themeVariant', newTheme);
    } else {
      localStorage.removeItem('themeVariant');
    }
    });
  })();
</script>
-->