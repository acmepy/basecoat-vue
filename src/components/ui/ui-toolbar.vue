<template>
  <nav :class="classx">
    <slot />
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  shadow: { type: Boolean, default: true },
  position: { type: String, default: 'bottom', validator: (value) => ['bottom', 'top'].includes(value) },
  items: {
    type: Array,
    default: [
      { text: 'Home', iconify: 'ic:outline-home' },
      { text: 'Buscar', iconify: 'ic:twotone-search' },
      { text: 'Perfil', iconify: 'ic:outline-person-outline' },
    ],
  },
});

let [wFull, left64, right0] = [ref(false), ref(false), ref(false)];
const topClass = 'bg-background fixed flex items-center justify-around p-2 border-b top-0 sticky';
const bottomClass = ['bg-background', 'fixed', 'flex', 'items-center', 'justify-around', 'p-2', 'bottom-0', 'border-t', 'z-10', { 'w-full': wFull }, { 'left-64': left64 }, { 'right-0': right0 }];
const classx = ref(props.position === 'top' ? topClass : bottomClass);

onMounted(() => {
  const aside = document.querySelector('aside');
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'aria-hidden') {
        updToolbar(aside.getAttribute('aria-hidden'));
      }
    }
  });

  observer.observe(aside, { attributes: true, attributeFilter: ['aria-hidden'] });
});

const updToolbar = (asideHidden) => {
  asideHidden = asideHidden == 'false' ? false : true;
  const isMobile = window.innerWidth < 768;
  if (props.position === 'bottom') {
    if (isMobile || asideHidden) {
      wFull.value = true;
      left64.value = false;
      right0.value = false;
    } else {
      wFull.value = false;
      left64.value = true;
      right0.value = true;
    }
  }
};
</script>
