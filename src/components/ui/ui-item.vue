<template>
  <div class="flex flex-col">
    <article
      class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-transparent p-4 gap-4">
      <img src="https://github.com/hunvreus.png" alt="Ronan Berder" class="grayscale size-10 rounded-full object-cover">
      <div class="flex flex-1 flex-col gap-1">
        <h3 class="flex w-fit items-center gap-2 text-sm leading-snug font-medium">hunvreus</h3>
        <p
          class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4">
          hunvreus@gmail.com</p>
      </div>
      <button class="btn-icon-outline rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </article>

    <hr role="separator" class="border-border">

    <article
      class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-transparent p-4 gap-4">
      <img src="https://github.com/shadcn.png" alt="shadcn" class="grayscale size-10 rounded-full object-cover">
      <div class="flex flex-1 flex-col gap-1">
        <h3 class="flex w-fit items-center gap-2 text-sm leading-snug font-medium">shadcn</h3>
        <p
          class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4">
          shadcn@vercel.com</p>
      </div>
      <button class="btn-icon-outline rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </article>

    <hr role="separator" class="border-border">

    <article
      class="group/item flex items-center border text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] border-transparent p-4 gap-4">
      <img src="https://github.com/adamwathan.png" alt="Adam Wathan"
        class="grayscale size-10 rounded-full object-cover">
      <div class="flex flex-1 flex-col gap-1">
        <h3 class="flex w-fit items-center gap-2 text-sm leading-snug font-medium">adamwathan</h3>
        <p
          class="text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4">
          adam.wathan@gmail.com</p>
      </div>
      <button class="btn-icon-outline rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>
    </article>
  </div>
</template>
<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
