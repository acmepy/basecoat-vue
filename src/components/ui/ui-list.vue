<template>
  <ul class="grid gap-4">
    <li :class="liClass" v-for="(i, x) in items">
      <img v-if="!!i.img" :src="i.img" :alt="i.title" class="w-10 h-10 rounded-full" />
      <div :class="groupClass">
        <div :class="titleClass">{{ i.title }}</div>
        <div :class="footerClass">{{ i.footer }}</div>
      </div>
      <div v-if="i.after.type == 'select'" :id="'select-' + x" class="select">
        <button type="button" class="btn-outline justify-between font-normal" :id="'select-' + x + '-trigger'"
          aria-haspopup="listbox" aria-expanded="false" :aria-controls="'select-' + x + '-listbox'">
          <span class="truncate">{{i.after.items.find((a) => a.value == i.after.value).text}}</span>
          <UiIcon iconify="material-symbols:unfold-more" iconStyle="font-size:15px; color:gray;" />
        </button>
        <div :id="'select-' + x + '-popover'" data-popover aria-hidden="true" data-align="end">
          <header>
            <UiIcon iconify="material-symbols:search" />
            <input type="text" value="" placeholder="Search entries..." :id="'input-serch-' + x" autocomplete="off"
              autocorrect="off" spellcheck="false" aria-autocomplete="list" role="combobox" aria-expanded="false"
              :aria-controls="'select-' + x + '-listbox'" :aria-labelledby="'select-' + x + '-trigger'" />
          </header>
          <div role="listbox" :id="'select-' + x + '-listbox'" aria-orientation="vertical"
            :aria-labelledby="'select-' + x + '-trigger'">
            <div v-for="(ii, xx) in i.after.items" :id="'select-' + x + '-items-' + xx" role="option"
              :data-value="ii.value">{{ ii.text }}</div>
          </div>
        </div>
        <input type="hidden" name="'select-'+x+'-value'" id="input-hiden" :modelValue="i.after.value" />
      </div>
      <UiSwitch v-if="i.after.type == 'switch'" :modelValue="i.after.checked" />
      <!--input v-if="i.after.type=='switch'" type="checkbox" role="switch" class="input" v-model="i.after.checked" /-->
      <!--UiCheckBox v-if="i.after.type=='checkbox'" :modelValue="i.after.checked"/-->
    </li>
    <!--li class="flex items-center gap-4">
    <img src="../assets/images/avatar-3.png" alt="Isabella Nguyen" class="w-10 h-10 rounded-full" />
    <div class="flex flex-col gap-1 mr-auto">
    <h3 class="text-sm font-medium leading-none">Isabella Nguyen</h3>
    <p class="text-sm text-muted-foreground">i@example.com</p>
    </div>
    <div id="select-439366" class="select ">
    <button type="button" class="btn-outline justify-between font-normal " id="select-439366-trigger" aria-haspopup="listbox" aria-expanded="false" aria-controls="select-439366-listbox">
      <span class="truncate">Viewer</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down text-muted-foreground opacity-50 shrink-0"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
    </button>
    <div id="select-439366-popover" data-popover aria-hidden="true" data-align="end">
      <header>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input type="text" value="" placeholder="Search entries..." autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" role="combobox" aria-expanded="false" aria-controls="select-439366-listbox" aria-labelledby="select-439366-trigger">
      </header>
    
      <div role="listbox" id="select-439366-listbox" aria-orientation="vertical" aria-labelledby="select-439366-trigger">
      <div id="select-439366-items-1" role="option" data-value="viewer" aria-selected="true">Viewer</div>
      <div id="select-439366-items-2" role="option" data-value="developer">Developer</div>
      <div id="select-439366-items-3" role="option" data-value="billing">Billing</div>
      <div id="select-439366-items-4" role="option" data-value="owner">Owner</div>
      </div>
    </div>
    <input type="hidden" name="select-439366-value" value="viewer">
    </div>
  </li-->
  </ul>
  <!--esto se muestra igualito con ul/li-->
  <!--label class="flex items-center justify-between gap-2">
    <div class="flex flex-col gap-0.5">
      <div class="font-medium">Strictly Necessary</div>
      <div class="text-muted-foreground">These cookies are essential in order to use the website and use its features.</div>
    </div>
    <input type="checkbox" role="switch" class="input" checked />
  </label-->
</template>
<script setup>
import UiIcon from './ui-icon.vue';
import UiSwitch from './ui-switch.vue';

defineProps({
  items: { type: Array, default: () => [] },
  titleClass: { type: String, default: 'text-sm font-medium leading-none' },
  footerClass: { type: String, default: 'text-sm text-muted-foreground' },
  liClass: { type: String, default: 'flex items-center gap-4' },
  groupClass: { type: String, default: 'flex flex-col gap-1 mr-auto' },
  modelValue: { type: Boolean, default: true },
});
</script>
