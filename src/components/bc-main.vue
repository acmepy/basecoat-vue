<template>
  <main id="content">
    <header class="bg-background sticky inset-x-0 top-0 isolate flex shrink-0 items-center gap-2 border-b z-10">
      <div class="flex h-14 w-full items-center gap-2 px-4">
        <bcSidebarToggle />
        <bcThemeSelect />
        <bcThemeSwitcher />
        <bcGithub />
      </div>
    </header>
    <main class="mx-auto relative flex w-full max-w-screen-lg gap-10">
      <router-view />
    </main>
  </main>
</template>

<script setup>
import bcSidebarToggle from '../components/bc-sidebar-toggle.vue';
import bcThemeSelect from '../components/bc-theme-select.vue';
import bcThemeSwitcher from '../components/bc-theme-switcher.vue';
import bcGithub from '../components/bc-github.vue';
</script>
