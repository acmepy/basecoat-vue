<template>
  <aside :id="id" :class="class" :data-side="align" aria-hidden="false">
    <nav :aria-label="header.label || 'Sidebar navigation'">
      <header>
        <a :href="header.link" class="btn-ghost p-2 h-12 w-full justify-start">
          <div class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <div v-html="header.svg"></div>
          </div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-medium">{{ header.title }}</span>
            <span class="truncate text-xs">{{ header.subtitle }}</span>
          </div>
        </a>
      </header>
      <section class="scrollbar">
        <bcMenu :items="items" />
      </section>
      <footer>
        <div id="popover-742781" class="popover">
          <button
            id="popover-742781-trigger"
            type="button"
            aria-expanded="false"
            aria-controls="popover-742781-popover"
            class="btn-ghost p-2 h-12 w-full flex items-center justify-start"
            data-keep-mobile-sidebar-open=""
          >
            <img src="https://github.com/hunvreus.png" class="rounded-lg shrink-0 size-8" />
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">Ronan Berder</span>
              <span class="truncate text-xs">@hunvreus</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m7 15 5 5 5-5" />
              <path d="m7 9 5-5 5 5" />
            </svg>
          </button>
          <div id="popover-742781-popover" data-popover aria-hidden="true" data-side="top" class="w-[271px] md:w-[239px]">
            <div class="grid gap-4">
              <header class="grid gap-1.5">
                <h2 class="font-semibold">I hope you like Basecoat...</h2>
                <p class="text-muted-foreground text-sm">
                  My name is <a href="https://ronanberder.com" target="_blank">Ronan</a> and I made this (and
                  <a class="underline underline-offset-4" href="https://pagescms.org" target="_target">other things</a>). If you find it useful, please consider sponsoring me on GitHub or following me
                  on X.
                </p>
              </header>
              <footer class="grid gap-2">
                <a href="https://github.com/sponsors/hunvreus" class="btn-sm" target="_blank">Sponsor me on GitHub</a>
                <a href="https://x.com/hunvreus" class="btn-sm-outline" target="_blank">Follow me on X</a>
              </footer>
            </div>
          </div>
        </div>
      </footer>
    </nav>
  </aside>
</template>

<script setup>
import bcMenu from './bc-menu.vue';

const props = defineProps({
  id: String,
  class: { type: String, default: () => 'sidebar' },
  align: { type: String, default: () => 'left' },
  header: {
    type: Object,
    default: () => {
      return {
        label: 'Sidebar navigation',
        link: 'https://basecoatui.com/',
        title: 'Basecoat',
        subtitle: 'v0.3.2',
        svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg>',
      };
    },
  },
  items: { type: Array, default: () => [] },
});
</script>
