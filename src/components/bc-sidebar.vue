<script setup>
  import bcIcon from "./bc-icon.vue"
import BcMenu from "./bc-menu.vue";

  const props = defineProps({
    id:String,
    class:{type:String, default:()=>'sidebar'},
    align:{type:String, default:()=>'left'},
    header:{type:Object, default:()=>{return {
      label:"Sidebar navigation", 
      link:'https://basecoatui.com/',
      title: 'Basecoat',
      subtitle:'v0.3.2',
      svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg>'
    }}},
    items:{type:Object, default:()=>[
      {label:'Getting started', items:[
        {debug:true, label:'Introduction', link:'https://basecoatui.com/introduction', iconify:'mdi:information-outline'},
        {label:'Installation', link:'https://basecoatui.com/installation', iconify:'mdi:terminal'},
        {label:'Kitchen sink', link:'https://basecoatui.com/kitchen-sink', iconify:'material-symbols:browse-outline'},
        {label:'GitHub',       link:'https://github.com/hunvreus/basecoat',iconify:'octicon:mark-github-24'},
        {label:'Discord',      link:'https://basecoatui.com/chat',         iconify:'fa6-brands:discord'}
      ]}
    ]},
    menu:{type:Array, default:()=>[
      {label:'Dasboard', }
    ]}
  })




</script>
<template>
  <aside :id="id" :class="class" :data-side="align" aria-hidden="false">
    <nav :aria-label="header.label||'Sidebar navigation'">
      <header>
        <a :href="header.link" class="btn-ghost p-2 h-12 w-full justify-start">
          <div class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <!--svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg-->
            <div v-html="header.svg"></div>
          </div>
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-medium">{{ header.title }}</span>
            <span class="truncate text-xs">{{ header.subtitle }}</span>
          </div>
        </a>
      </header>
      <section class="scrollbar">
        <div role="group" aria-labelledby="group-label-sidebar-content-1" v-for="g in items">
          <h3 id="group-label-sidebar-content-1">{{g.label}}</h3>
          <ul>
            <li v-for="i in g.items">
              <a :href="i.link" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML">
                <bcIcon :material=i.material iconClass="scale-75" :fa="i.fa" :svg="i.svg" :iconify="i.iconify" :debug="i.debug"/>                
                <span>{{ i.label }}</span>
              </a>
            </li>
          </ul>
        </div>

 <div role="group" aria-labelledby="group-label-sidebar-content-1">
          <h3 id="group-label-sidebar-content-1">Getting started</h3>
<BcMenu />

        </div>


        <div role="group" aria-labelledby="group-label-sidebar-content-2">
          <h3 id="group-label-sidebar-content-2">Components</h3>
          <ul>
            <li><a href="https://basecoatui.com/components/accordion" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Accordion</span></a></li>
            <li><a href="https://basecoatui.com/components/alert" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Alert</span></a></li>
            <li><a href="https://basecoatui.com/components/alert-dialog" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Alert Dialog</span></a></li>
            <li><a href="https://basecoatui.com/components/avatar" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Avatar</span></a></li>
            <li><a href="https://basecoatui.com/components/badge" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Badge</span></a></li>
            <li><a href="https://basecoatui.com/components/breadcrumb" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Breadcrumb</span></a></li>
            <li><a href="https://basecoatui.com/components/button" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Button</span></a></li>
            <li><a href="https://basecoatui.com/components/card" hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Card</span></a></li>
            <li><a href="https://basecoatui.com/components/checkbox"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Checkbox</span></a></li>
            <li><a href="https://basecoatui.com/components/combobox"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Combobox</span></a></li>
            <li><a href="https://basecoatui.com/components/dialog"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Dialog</span></a></li>
            <li><a href="https://basecoatui.com/components/dropdown-menu"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Dropdown Menu</span></a></li>
            <li><a href="https://basecoatui.com/components/form"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Form</span></a></li>
            <li><a href="https://basecoatui.com/components/input"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Input</span></a></li>
            <li><a href="https://basecoatui.com/components/label"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Label</span></a></li>
            <li><a href="https://basecoatui.com/components/pagination"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Pagination</span></a></li>
            <li><a href="https://basecoatui.com/components/popover"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Popover</span></a></li>
            <li><a href="https://basecoatui.com/components/radio-group"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Radio Group</span></a></li>
            <li><a href="https://basecoatui.com/components/select"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML" ><span>Select</span></a></li>
            <li><a href="https://basecoatui.com/components/skeleton"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Skeleton</span></a></li>
            <li><a href="https://basecoatui.com/components/sidebar"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Sidebar</span></a></li>
            <li><a href="https://basecoatui.com/components/slider"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Slider</span></a></li>
            <li><a href="https://basecoatui.com/components/switch"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Switch</span></a></li>
            <li><a href="https://basecoatui.com/components/table"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Table</span></a></li>
            <li><a href="https://basecoatui.com/components/tabs"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Tabs</span></a></li>
            <li><a href="https://basecoatui.com/components/textarea"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Textarea</span></a></li>
            <li><a href="https://basecoatui.com/components/theme-switcher"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Theme Switcher</span></a></li>
            <li><a href="https://basecoatui.com/components/toast"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Toast</span></a></li>
            <li><a href="https://basecoatui.com/components/tooltip"hx-boost="true" hx-select="#content" hx-target="#content" hx-swap="outerHTML"><span>Tooltip</span></a></li>
          </ul>
        </div>
      </section>
      <footer>
        <div id="popover-742781" class="popover ">
          <button id="popover-742781-trigger" type="button" aria-expanded="false" aria-controls="popover-742781-popover" class="btn-ghost p-2 h-12 w-full flex items-center justify-start" data-keep-mobile-sidebar-open="">
            <img src="https://github.com/hunvreus.png" class="rounded-lg shrink-0 size-8"/>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-medium">Ronan Berder</span>
              <span class="truncate text-xs">@hunvreus</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
          </button>
          <div id="popover-742781-popover" data-popover aria-hidden="true" data-side="top" class="w-[271px] md:w-[239px]"> 
            <div class="grid gap-4">
              <header class="grid gap-1.5">
                <h2 class="font-semibold">I hope you like Basecoat...</h2>
                <p class="text-muted-foreground text-sm">My name is <a href="https://ronanberder.com" target="_blank">Ronan</a> and I made this (and <a class="underline underline-offset-4" href="https://pagescms.org" target="_target">other things</a>). If you find it useful, please consider sponsoring me on GitHub or following me on X.</p>
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