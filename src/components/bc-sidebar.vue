<template>
  <aside :id="id" :class="class" :data-side="align" aria-hidden="false">
    <nav :aria-label="header.label || 'Sidebar navigation'">
      <header>
        <a :href="header.link" class="btn-ghost p-2 h-12 w-full justify-start">
          <div class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <bcSvg name="basecoat" />
            <!--div v-html="header.svg"></div-->
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
        <bcPopover
          img="https://github.com/hunvreus.png"
          title="Ronan Berder"
          text="@hunvreus"
          popoverSide="top"
          popoverClass="w-[271px] md:w-[239px]"
          :popover="{
            title: 'I hope you like Basecoat...',
            text: `My name is <a href='https://ronanberder.com' target='_blank'>Ronan</a> and I made this (and <a class='underline underline-offset-4' href='https://pagescms.org' target='_target'>other things</a>). If you find it useful, please consider sponsoring me on GitHub or following me on X.`,
          }"
        >
          <template #popoverfooter>
            <a href="https://github.com/sponsors/hunvreus" class="btn-sm" target="_blank">Sponsor me on GitHub</a>
            <a href="https://x.com/hunvreus" class="btn-sm-outline" target="_blank">Follow me on X</a>
          </template>
        </bcPopover>
      </footer>
    </nav>
  </aside>
</template>

<script setup>
import bcMenu from './bc-menu.vue';
import bcSvg from './bc-svg.vue';
import bcPopover from './bc-popover.vue';

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
        svg: 'basecoat',
      };
    },
  },
  items: { type: Array, default: () => [] },
});
</script>
