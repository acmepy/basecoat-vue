<template>
  <div role="group" aria-labelledby="group-label-sidebar-content-1">
    <template v-for="(g, x) in items">
      <h3 v-if="!!g.block" :id="'group-label-sidebar-content-' + x">{{ g.block }}</h3>
      <!-- menu sin colapsar -->
      <ul v-if="!g.group && !!g.items">
        <li v-for="i in g.items">
          <a :href="i.link" hx-select="#content" hx-target="#content" hx-swap="outerHTML" hx-boost="true"
            :data-new-link="i.new">
            <UiIcon :iconify="i.iconify" :svg="i.svg" /><span>{{ i.label }}</span>
          </a>
        </li>
      </ul>
      <!-- menu colapsable -->
      <section v-if="!!g.group" class="accordion">
        <!--details class="group border-b last:border-b-0"-->
        <details class="group">
          <summary
            class="w-full focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-all outline-none rounded-md">
            <h2
              class="flex flex-1 items-start justify-between gap-4 pl-2 pt-1 pb-4 text-left text-sm font-medium hover:underline">
              {{ g.group }}
              <UiSvg name="accordion" />
            </h2>
          </summary>
          <section class="pb-4">
            <ul>
              <li v-for="i in g.items">
                <a :href="i.link">
                  <UiIcon :iconify="i.iconify" /><span>{{ i.label }}</span>
                </a>
              </li>
            </ul>
          </section>
        </details>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UiIcon from './ui-icon.vue';
import UiSvg from './ui-svg.vue';

const props = defineProps({
  items: { type: Array, default: () => [] },
  debug: { type: Boolean, default: () => false },
});

if (props.debug) console.log('ui-menu', props.items);

const currentUrl = ref('');
//const isActive = (link) => currentUrl.value.includes(link);

onMounted(() => {
  currentUrl.value = window.location.href;

  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', (event) => {
      const summary = event.target.closest('summary');
      if (!summary) return;
      const details = summary.closest('details');
      if (!details) return;
      accordion.querySelectorAll('details').forEach((detailsEl) => {
        if (detailsEl !== details) {
          detailsEl.removeAttribute('open');
        }
      });
    });
  });
});
</script>
