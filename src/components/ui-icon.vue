<template>
  <i v-if="!!material" :class="'material-icons ' + iconClass" :style="iconStyle" :data-tooltip="tooltip">
    {{ material }}
  </i>
  <i v-if="!!fa" :data-tooltip="tooltip" :class="'fa ' + fa" />
  <!--div v-if="!!svg" v-html="svg" :class="iconClass"></div-->
  <UiSvg v-if="!!svg" :name="svg" :class="iconClass" />
  <Icon v-if="!!iconify" :icon="iconify" :width="width" :height="height" :class="iconClass" />
</template>
<script setup>
import { Icon } from '@iconify/vue';
import UiSvg from './ui-svg.vue';
const props = defineProps({
  material: String,
  fa: String,
  svg: String,
  tooltip: String,
  iconClass: String,
  iconStyle: String,
  iconify: String,
  width: { type: [Number, String], default: () => 24 },
  height: { type: [Number, String], default: () => 24 },
  debug: { type: Boolean, default: () => false },
});
if (props.debug) console.log({ material: !!props.material, fa: !!props.fa, svg: !!props.svg, iconClass: props.iconClass }, props);
</script>
