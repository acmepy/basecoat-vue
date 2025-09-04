<template>
  <button
    type="button"
    onclick="document.dispatchEvent(new CustomEvent('basecoat:sidebar'))"
    aria-label="Toggle sidebar"
    data-tooltip="Toggle sidebar"
    data-side="bottom"
    data-align="start"
    class="btn-sm-icon-ghost mr-auto size-7 -ml-1.5"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
    </svg>
  </button>
</template>
<script setup></script>
