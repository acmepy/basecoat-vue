<template>
  <main id="content">
    <header class="bg-background sticky inset-x-0 top-0 isolate flex shrink-0 items-center gap-2 border-b z-10">
      <div class="flex h-14 w-full items-center gap-2 px-4">
        <UiSidebarToggle />
        <UiThemeSelect />
        <UiThemeSwitcher />
        <UiGithub />
      </div>
    </header>
    <main class="mx-auto relative flex w-full max-w-screen-lg gap-10">
      <router-view />
    </main>
  </main>
</template>

<script setup>
import UiSidebarToggle from './ui-sidebar-toggle.vue';
import UiThemeSelect from './ui-theme-select.vue';
import UiThemeSwitcher from './ui-theme-switcher.vue';
import UiGithub from './ui-github.vue';
</script>
