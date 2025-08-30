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

/* 
test de aside
  -cuando es vista movil(por defacto oculto)
    -aside oculto: aria-hidden:true, inert
    -aside visible:aria-hidden:false, sin inert
  -no movil(por defecto visible)
    -aside oculto: aria-hidden:true, inert
    -aside visible:aria-hidden:true, sin inert

bottomClassAside1
  tipo   hidden  visible
  mobile    X        x
  otros     x        -
bottomClassAside2
  tipo   hidden  visible
  mobile    -       -
  otros     -       X
*/

  let [wFull, left64, right0] = [ref(false), ref(false), ref(false)]
  const topClass = 'bg-background fixed flex items-center justify-around p-2 border-b top-0 sticky'                            
  const bottomClass = ['bg-background', 'fixed', 'flex', 'items-center', 'justify-around', 'p-2', 'bottom-0', 'border-t', 'z-10', {'w-full':wFull}, {'left-64':left64}, {'right-0':right0}]
  //const bottomClassAside1 = 'bg-background fixed flex items-center justify-around p-2 bottom-0 border-t z-10 w-full'
  //const bottomClassAside2 = 'bg-background fixed flex items-center justify-around p-2 bottom-0 border-t z-10 left-64 right-0' 
  //'bg-background fixed flex items-center justify-around p-2 bottom-0 left-64 right-0 border-t z-10 bg-blue-600'
  //const bottomClass = isMobile?bottomClassAside1:bottomClassAside2
  const classx = ref(props.position==='top'?topClass:bottomClass)

  onMounted(() => {
    const aside = document.querySelector("aside");
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
          if (mutation.type === "attributes" && mutation.attributeName === "aria-hidden") {
            updToolbar(aside.getAttribute("aria-hidden"))
          }
      }
    });

    observer.observe(aside, {attributes: true, attributeFilter: ["aria-hidden"]})
  })

  const updToolbar = (asideHidden)=>{
    asideHidden = asideHidden=="false"?false:true
    const isMobile = window.innerWidth < 768
    if(props.position==='bottom'){
      if(isMobile || asideHidden){
        wFull.value  = true
        left64.value = false
        right0.value = false
      }else{
        wFull.value  = false
        left64.value = true
        right0.value = true
      }
    }
  }
</script>

<template>
  <nav :class="classx">
    <slot />
  </nav>
</template>