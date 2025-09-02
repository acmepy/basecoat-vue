<template>
<div class="hidden text-sm xl:block w-full max-w-[300px]">
	<nav class="sticky top-22 space-y-2 [&_ul]:m-0 [&_ul]:list-none [&_ul_ul]:pl-4 [&_li]:mt-0 [&_li]:pt-2 [&_a]:inline-block [&_a]:no-underline [&_a]:transition-colors [&_a]:hover:text-foreground [&_a]:text-muted-foreground">
		<h4 class="font-medium">On This Page</h4>
		<ul>
			<li v-for="(i, x) in items"><a :href="i.link">{{ i.text }}</a></li>
		</ul>
	</nav>
</div>
</template>
<script setup>
	const props = defineProps({
		items:{type:Array, default:()=>[]}
	})
</script>