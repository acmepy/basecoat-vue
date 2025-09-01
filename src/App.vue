<script setup>
import bcSidebar from './components/bc-sidebar.vue'
import bcMain from './components/bc-main.vue'

const menu = {
  header:{
      label:'Sidebar navigation', 
      link:'https://basecoatui.com/',
      title: 'Basecoat',
      subtitle:'v0.3.2',
      svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="h-4 w-4"><rect width="256" height="256" fill="none"></rect><line x1="208" y1="128" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line><line x1="192" y1="40" x2="40" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></line></svg>'
    },
    items:[
      {block:'Getting started'},
      {group:'Getting started', items:[
        {label:'Introduction', link:'/introduction', iconify:'mdi:information-outline'},
        {label:'Installation', link:'https://basecoatui.com/installation', iconify:'mdi:terminal'},
        {label:'Kitchen sink', link:'https://basecoatui.com/kitchen-sink', iconify:'material-symbols:browse-outline'},
        {label:'GitHub',       link:'https://github.com/hunvreus/basecoat',target:"_blank", iconify:'octicon:mark-github-24'},
        {label:'Discord',      link:'https://basecoatui.com/chat',         target:"_blank", iconify:'fa6-brands:discord'}
      ]}, 
      {block:'Components'},
      {items:[
        { label: "Accordion", link: "https://basecoatui.com/components/accordion" },
        { label: "Alert", link: "https://basecoatui.com/components/alert" },
        { label: "Alert Dialog", link: "https://basecoatui.com/components/alert-dialog" },
        { label: "Avatar", link: "https://basecoatui.com/components/avatar" },
        { label: "Badge", link: "https://basecoatui.com/components/badge" },
        { label: "Breadcrumb", link: "https://basecoatui.com/components/breadcrumb" },
        { label: "Button", link: "https://basecoatui.com/components/button" },
        { label: "Card", link: "https://basecoatui.com/components/card" },
        { label: "Checkbox", link: "https://basecoatui.com/components/checkbox" },
        { label: "Combobox", link: "https://basecoatui.com/components/combobox" },
        { label: "Dialog", link: "https://basecoatui.com/components/dialog" },
        { label: "Dropdown Menu", link: "https://basecoatui.com/components/dropdown-menu" },
        { label: "Form", link: "https://basecoatui.com/components/form" },
        { label: "Input", link: "https://basecoatui.com/components/input" },
        { label: "Label", link: "https://basecoatui.com/components/label" },
        { label: "Pagination", link: "https://basecoatui.com/components/pagination" },
        { label: "Popover", link: "https://basecoatui.com/components/popover" },
        { label: "Radio Group", link: "https://basecoatui.com/components/radio-group" },
        { label: "Select", link: "https://basecoatui.com/components/select" },
        { label: "Skeleton", link: "https://basecoatui.com/components/skeleton" },
        { label: "Sidebar", link: "https://basecoatui.com/components/sidebar" },
        { label: "Slider", link: "https://basecoatui.com/components/slider" },
        { label: "Switch", link: "https://basecoatui.com/components/switch" },
        { label: "Table", link: "https://basecoatui.com/components/table" },
        { label: "Tabs", link: "https://basecoatui.com/components/tabs" },
        { label: "Textarea", link: "https://basecoatui.com/components/textarea" },
        { label: "Theme Switcher", link: "https://basecoatui.com/components/theme-switcher" },
        { label: "Toast", link: "https://basecoatui.com/components/toast" },
        { label: "Tooltip", link: "https://basecoatui.com/components/tooltip" }
      ]}
    ]
  }
</script>

<template>
  <bcSidebar :header="menu.header" :items="menu.items"/>
  <bcMain/>
</template>

<style scoped>
</style>
