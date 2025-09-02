<script setup>
	import { ref, onMounted } from 'vue';
	import bcIcon from './bc-icon.vue';

	const props = defineProps({
		items:{type:Array, default:()=>[]}
	})

	const currentUrl = ref('')
	const isActive = (link) => currentUrl.value.includes(link)

	onMounted(() => {
		currentUrl.value = window.location.href
		
  	const accordions = document.querySelectorAll(".accordion");
		accordions.forEach((accordion) => {
			accordion.addEventListener("click", (event) => {
				const summary = event.target.closest("summary");
				if (!summary) return;
				const details = summary.closest("details");
				if (!details) return;
				accordion.querySelectorAll("details").forEach((detailsEl) => {
					if (detailsEl !== details) {
						detailsEl.removeAttribute("open");
					}
				});
			});
		})
	})
</script>
<template>
	<div role="group" aria-labelledby="group-label-sidebar-content-1">
		<template v-for="(g, x) in items">
			<h3 v-if="!!g.block" :id="'group-label-sidebar-content-'+x">{{ g.block }}</h3>
			<section v-if="!!g.group" class="accordion">
				<!--details class="group border-b last:border-b-0"-->
				<details class="group">
					<summary class="w-full focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] transition-all outline-none rounded-md">
						<h2 class="flex flex-1 items-start justify-between gap-4 pl-2 pt-1 pb-4 text-left text-sm font-medium hover:underline">
							{{ g.group }}
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 group-open:rotate-180"><path d="m6 9 6 6 6-6" /></svg>
						</h2>
					</summary>
					<section class="pb-4">
						<ul>
							<li v-for="i in g.items">
								<a :href="i.link"><bcIcon :iconify="i.iconify" /><span>{{i.label}}</span></a>
							</li>
						</ul>
					</section>
				</details>
			</section>

			<ul v-if="!g.group&&!!g.items">
				<li v-for="i in g.items">
					<a :href="i.link"><bcIcon :iconify="i.iconify" /><span>{{i.label}}</span></a>
				</li>
			</ul>



		</template>
	</div>
</template>