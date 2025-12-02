<template>
  <button type="button" aria-label="Toggle dark mode" data-tooltip="Toggle dark mode" data-side="bottom"
    onclick="document.dispatchEvent(new CustomEvent('basecoat:theme'))" class="btn-icon-outline size-8">
    <span class="hidden dark:block">
      <UiIcon iconify="wi:day-sunny" />
    </span>
    <span class="block dark:hidden">
      <UiIcon iconify="fa7-regular:moon" />
    </span>
  </button>
</template>
<script setup>
import UiIcon from './ui-icon.vue';

(() => {
  try {
    const stored = localStorage.getItem('themeMode');
    if (stored ? stored === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  } catch (_) { }

  const apply = (dark) => {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('themeMode', dark ? 'dark' : 'light');
    } catch (_) { }
  };

  document.addEventListener('basecoat:theme', (event) => {
    const mode = event.detail?.mode;
    apply(mode === 'dark' ? true : mode === 'light' ? false : !document.documentElement.classList.contains('dark'));
  });
})();
</script>
