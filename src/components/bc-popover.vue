<template>
  <div :id="uniqueId" :class="classContainer">
    <button
      :id="`${uniqueId}-trigger`"
      type="button"
      aria-expanded="false"
      :aria-controls="`${uniqueId}-popover`"
      class="btn-ghost p-2 h-12 w-full flex items-center justify-start"
      data-keep-mobile-sidebar-open=""
    >
      <img v-if="!!img" :src="img" :class="imgClass" />
      <div class="grid flex-1 text-left text-sm leading-tight">
        <span v-if="!!title" class="truncate font-medium">{{ title }}</span>
        <span v-if="!!footer" class="truncate text-xs">{{ footer }}</span>
      </div>
      <bcIcon iconify="material-symbols:unfold-more" iconStyle="font-size:15px; color:gray;" />
      <!--bcSvg name="chevron-up-down" /-->
    </button>
    <div :id="`${uniqueId}-popover`" data-popover aria-hidden="true" data-side="top" class="w-[271px] md:w-[239px]">
      <div class="grid gap-4">
        <header class="grid gap-1.5">
          <h2 class="font-semibold">{{ popover.title }}</h2>
          <p v-if="popover.text.indexOf('>') < 0" class="text-muted-foreground text-sm">{{ popover.text }}</p>
          <div v-if="popover.text.indexOf('>') >= 0" v-html="`<p class='text-muted-foreground text-sm'>${popover.text}</p>`"></div>
        </header>
        <footer class="grid gap-2" v-if="$slots.popoverfooter">
          <slot name="popoverfooter" />
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUniqueId } from '../js/utils';
import bcIcon from './bc-icon.vue';
const uniqueId = useUniqueId('popover');

const props = defineProps({
  title: String,
  text: String,
  classContainer: { type: String, default: 'popover' },
  img: String,
  imgClass: { type: String, default: () => 'rounded-lg shrink-0 size-8' },
  popover: {
    type: Object,
    default: () => {
      return {
        title: '',
        text: '',
      };
    },
  },
});
</script>
