<template>
  <div :id="uniqueId" :class="classContainer">
    <button :id="`${uniqueId}-trigger`" type="button" aria-expanded="false" :aria-controls="`${uniqueId}-popover`"
      class="btn-ghost p-2 h-12 w-full flex items-center justify-start" data-keep-mobile-sidebar-open="">
      <img v-if="!!img" :src="img" :class="imgClass" />
      <div v-if="!!title" class="grid flex-1 text-left text-sm leading-tight">
        <span v-if="!!title" class="truncate font-medium">{{ title }}</span>
        <span v-if="!!text" class="truncate text-xs">{{ text }}</span>
      </div>
      <UiIcon v-if="!!title" iconify="material-symbols:unfold-more" iconStyle="font-size:15px; color:gray;" />
    </button>
    <div :id="`${uniqueId}-popover`" data-popover aria-hidden="true" :data-side="popoverSide" :class="popoverClass">
      <div class="grid gap-2">
        <header class="border-b pl-3">
          <h2 class="font-semibold">{{ popover.title }}</h2>
          <p v-if="popover.text.indexOf('>') < 0" class="text-muted-foreground text-sm">{{ popover.text }}</p>
          <div v-if="popover.text.indexOf('>') >= 0"
            v-html="`<p class='text-muted-foreground text-sm'>${popover.text}</p>`"></div>
        </header>
        <UiMenu v-if="!!popover.menu" :items="popover.menu" :debug="true" />
        <!--ul v-if="!!popover.menu">
          <li v-for="(m, mx) in popover.menu">
            <div v-if="!!m.divider" class="border-b"></div>
            <a v-if="!!m.link" :href="m.link">
              <span>{{ m.label }}</span>
            </a>
          </li>
        </ul-->
        <!--div v-if="!!popover.menu">
          <div class="mb-2" v-for="(m, mx) in popover.menu">
            <div v-if="!!m.divider" class="border-b"></div>
            <a v-if="!!m.link" :href="m.link" class="pl-3"> {{ m.label }}</a>
          </div>
        </div-->
        <footer class="grid gap-2" v-if="$slots.popoverfooter">
          <slot name="popoverfooter" />
        </footer>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useUniqueId } from '../js/utils';
import UiIcon from './ui-icon.vue';
import UiMenu from './ui-menu.vue';
const uniqueId = useUniqueId('popover');

const props = defineProps({
  title: String,
  text: String,
  classContainer: { type: String, default: 'popover' },
  img: String,
  imgClass: { type: String, default: () => 'rounded-lg shrink-0 size-8' },
  popoverSide: String,
  popoverClass: String,
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
