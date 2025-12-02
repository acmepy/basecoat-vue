<script setup>
import UiSidebar from './components/ui-sidebar.vue';
import UiMain from './components/ui-main.vue';

const menu = {
  header: {
    label: 'Sidebar navigation',
    link: 'https://basecoatui.com/',
    title: 'Basecoat',
    subtitle: 'v0.3.2',
    svg: 'basecoat',
  },
  items: [
    { block: 'Main menu' },
    {
      group: 'Pages',
      items: [
        { label: 'Crud', link: '/crud', iconify: 'mdi:widgets-outline' },
        { label: 'Productos', link: '/productos', iconify: 'game-icons:cubeforce' },
        { label: 'Task', link: '/task', iconify: 'material-symbols:browse-outline' },
        { label: 'GitHub', link: 'https://github.com/hunvreus/basecoat', target: '_blank', iconify: 'octicon:mark-github-24' },
        { label: 'Discord', link: 'https://basecoatui.com/chat', target: '_blank', iconify: 'fa6-brands:discord' },
      ],
    },
    { block: 'Getting started' },
    {
      items: [
        { label: 'Introduction', link: '/introduction', iconify: 'mdi:information-outline' },
        { label: 'Installation', link: 'https://basecoatui.com/installation', iconify: 'mdi:terminal' },
        { label: 'Kitchen sink', link: 'https://basecoatui.com/kitchen-sink', iconify: 'material-symbols:browse-outline' },
        { label: 'GitHub', link: 'https://github.com/hunvreus/basecoat', target: '_blank', iconify: 'octicon:mark-github-24' },
        { label: 'Discord', link: 'https://basecoatui.com/chat', target: '_blank', iconify: 'fa6-brands:discord' },
      ],
    },
    { block: 'Components' },
    {
      items: [
        { label: 'Accordion', link: 'https://basecoatui.com/components/accordion' },
        { label: 'Alert', link: 'https://basecoatui.com/components/alert' },
        { label: 'Alert Dialog', link: 'https://basecoatui.com/components/alert-dialog' },
        { label: 'Avatar', link: 'https://basecoatui.com/components/avatar' },
        { label: 'Badge', link: 'https://basecoatui.com/components/badge' },
        { label: 'Breadcrumb', link: 'https://basecoatui.com/components/breadcrumb' },
        { label: 'Button', link: 'https://basecoatui.com/components/button' },
        { label: 'Card', link: 'https://basecoatui.com/components/card' },
        { label: 'Checkbox', link: 'https://basecoatui.com/components/checkbox' },
        { label: 'Combobox', link: 'https://basecoatui.com/components/combobox' },
        { label: 'Dialog', link: 'https://basecoatui.com/components/dialog' },
        { label: 'Dropdown Menu', link: 'https://basecoatui.com/components/dropdown-menu' },
        { label: 'Form', link: 'https://basecoatui.com/components/form' },
        { label: 'Input', link: 'https://basecoatui.com/components/input' },
        { label: 'Label', link: 'https://basecoatui.com/components/label' },
        { label: 'Pagination', link: 'https://basecoatui.com/components/pagination' },
        { label: 'Popover', link: 'https://basecoatui.com/components/popover' },
        { label: 'Radio Group', link: 'https://basecoatui.com/components/radio-group' },
        { label: 'Select', link: 'https://basecoatui.com/components/select' },
        { label: 'Skeleton', link: 'https://basecoatui.com/components/skeleton' },
        { label: 'Sidebar', link: 'https://basecoatui.com/components/sidebar' },
        { label: 'Slider', link: 'https://basecoatui.com/components/slider' },
        { label: 'Switch', link: 'https://basecoatui.com/components/switch' },
        { label: 'Table', link: 'https://basecoatui.com/components/table' },
        { label: 'Tabs', link: 'https://basecoatui.com/components/tabs' },
        { label: 'Textarea', link: 'https://basecoatui.com/components/textarea' },
        { label: 'Theme Switcher', link: 'https://basecoatui.com/components/theme-switcher' },
        { label: 'Toast', link: 'https://basecoatui.com/components/toast' },
        { label: 'Tooltip', link: 'https://basecoatui.com/components/tooltip' },
      ],
    },
  ],
};
</script>

<template>
  <UiSidebar :header="menu.header" :items="menu.items" />
  <UiMain />
</template>

<style scoped></style>
