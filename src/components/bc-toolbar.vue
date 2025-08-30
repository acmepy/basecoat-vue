<script setup>
  import { onMounted, ref } from 'vue'

  const props = defineProps({
    shadow: {type: Boolean,default: true},
    position: {type: String, default: "bottom",  validator: (value) => ["bottom", "top"].includes(value)},
    items:{type:Array, default:[
      {text:'Home', material:'home'},
      {text:'Buscar', material:'search'},
      {text:'Perfil', material:'person'}
    ]}
  })

  const topClass = 'bg-background fixed flex items-center justify-around p-2 border-b top-0 sticky'
  const bottomClassAsideOff = 'bg-background fixed w-full flex items-center justify-around bg-white border-t p-2 bottom-0 border-t'
  //const bottomClassAsideOn = 'bg-background fixed flex items-center justify-around p-2 bottom-0 left-64 right-0 border-t z-10 bg-blue-600'
  //'bg-background fixed flex items-center justify-around p-2 bottom-0 left-64 right-0 border-t z-10 bg-blue-600'

  const classx = ref(props.position === 'bottom'? bottomClassAsideOff : topClass)
/*

  onMounted(() => {
    const aside = document.querySelector("aside");
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
          if (mutation.type === "attributes" && mutation.attributeName === "aria-hidden") {
            //console.log("aria-hidden cambió a:", aside.getAttribute("aria-hidden"));
            uptToolbar(aside.getAttribute("aria-hidden"))
          }
      }
    });

    observer.observe(aside, {attributes: true, attributeFilter: ["aria-hidden"]})
  })

  const uptToolbar = (asideHidden)=>{

  }*/
</script>

<template>
  <nav :class="classx">
    <slot />
  </nav>
</template>