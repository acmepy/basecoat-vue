<template>
<ul class="grid gap-4">
  <li class="flex items-center gap-4" v-for="(i, x) in items">
    <img :src="i.img" :alt="i.title" class="w-10 h-10 rounded-full" />
    <div class="flex flex-col gap-1 mr-auto">
      <h3 class="text-sm font-medium leading-none">{{ i.title }}</h3>
      <p class="text-sm text-muted-foreground">{{ i.footer }}</p>
    </div>
    <div v-if="i.after.component=='select'" :id="'select-'+x" class="select ">
      <button type="button" class="btn-outline justify-between font-normal " :id="'select-'+x+'-trigger'" aria-haspopup="listbox" aria-expanded="false" :aria-controls="'select-'+x+'-listbox'">
        <span class="truncate">{{ i.after.items.find(a=>a.value==i.after.value).text }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevrons-up-down-icon lucide-chevrons-up-down text-muted-foreground opacity-50 shrink-0"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>
      </button>
      <div :id="'select-'+x+'-popover'" data-popover aria-hidden="true" data-align="end">
        <header>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          <input type="text" value="" placeholder="Search entries..." autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" role="combobox" aria-expanded="false" aria-controls="select-231492-listbox" aria-labelledby="select-231492-trigger">
        </header>
        <div role="listbox" :id="'select-'+x+'-listbox'" aria-orientation="vertical" :aria-labelledby="'select-'+x+'-trigger'">
          <div v-for="(ii, xx) in i.after.items" :id="'select-'+x+'-items-'+xx" role="option" :data-value="ii.value">{{ ii.text }}</div>
        </div>
      </div>
      <input type="hidden" name="'select-'+x+'-value'" :value="i.after.value">
    </div>
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
</template>
<script setup>
  defineProps({
    items: {type: Array,default: () => [
      {img:"../assets/images/avatar-1.png", title:"Sofia Davis", footer:"m@example.com", after:{component:'select', value:"viewer", items:[
          {value:"viewer", text:"Viewer"},
          {value:"developer", text:"Developer"},
          {value:"billing", text:"Billing"},
          {value:"owner", text:"Owner", selected:true}
      ]}},
      {img:"../assets/images/avatar-2.png", title:"Jackson Lee", footer:"p@example.com", after:{component:'select', value:"developer", items:[
          {value:"viewer", text:"Viewer"},
          {value:"developer", text:"Developer"},
          {value:"billing", text:"Billing"},
          {value:"owner", text:"Owner", selected:true}
      ]}},
      {img:"../assets/images/avatar-3.png", title:"Isabella Nguyen", footer:"i@example.com", after:{component:'select', value:"owner", items:[
          {value:"viewer", text:"Viewer"},
          {value:"developer", text:"Developer"},
          {value:"billing", text:"Billing"},
          {value:"owner", text:"Owner", selected:true}
      ]}},      
    ]}
  })
</script>