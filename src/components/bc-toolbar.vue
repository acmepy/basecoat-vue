<script setup>
  const props = defineProps({
    shadow: {type: Boolean,default: true},
    position: {type: String, default: "bottom",  validator: (value) => ["bottom", "top"].includes(value)},
    items:{type:Array, default:[
      {text:'Home', material:'home'},
      {text:'Buscar', material:'search'},
      {text:'Perfil', material:'person'}
    ]}
  })

  const classx = props.position === 'bottom'? 'bg-background fixed flex items-center justify-around p-2 bottom-0 left-64 right-0 border-t z-10 bg-blue-600'
                                            : 'bg-background fixed flex items-center justify-around p-2 border-b top-0 sticky'
console.log(props.position, classx)
</script>

<template>
  <!--header class="bg-background sticky inset-x-0 top-0 isolate flex shrink-0 items-center gap-2 border-b z-10 bg-blue-600"></header-->
  <!--nav class="bg-background fixed w-full flex items-center justify-around bg-white border-t p-2" :class="[
      shadow ? 'shadow-md' : '',
      position === 'bottom' ? 'bottom-0 border-t' : 'left-0 top-0 border-b'
    ]"
-->
  <!--nav class="sticky fixed left-0 w-full flex items-center justify-around bg-white border-t p-2 " :class="[
      shadow ? 'shadow-md' : '',
      position === 'bottom' ? 'bottom-0 border-t' : 'top-0 border-b'
    ]"
-->
  <nav :class="classx">
    <slot />
  </nav>
</template>