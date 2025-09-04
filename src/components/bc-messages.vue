<template>
	<bcCard sectionClass="space-y-6">
		<header class="flex items-center gap-2">
			<img :src="avatar" :alt="name" class="w-10 h-10 rounded-full" />
			<div class="flex flex-col gap-1 mr-auto">
				<h3 class="text-sm font-medium leading-none">{{name}}</h3>
				<p class="text-sm text-muted-foreground">{{email}}</p>
			</div>
			<bcButton iconify="material-symbols:add" buttonClass="btn-icon-outline rounded-full" iconStyle="font-size:40px; color:gray;"  tooltip="New message"/>
		</header>
		<section class="space-y-4">
			<div v-for="m in messages" :class="messagesClass[m.type]">{{m.text}}</div>
		</section>
		<footer class="flex items-center gap-2">
			<input type="text" class="input w-full" id="input-message" placeholder="Type your message here..." v-model="message" @input="(value)=>sendDisabled=!!value">
			<bcButton iconify="material-symbols:send-outline-rounded" buttonClass="btn-icon" iconClass="rotate-315" iconStyle="font-size:40px; color:gray;"  tooltip="New message" :disabled="sendDisabled"/>
		</footer>
	</bcCard>
</template>
<script setup>
	import {ref} from 'vue'
	import bcButton from './bc-button.vue';
	import bcCard from './bc-card.vue';

	const props = defineProps({
		avatar:{type:String},
		name:{type:String},
		email:{type:String},
		messages:{type:Array}
	})

	const sendDisabled = ref(true)
	const message = ref('')

	const messagesClass = {
		sent:'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-primary text-primary-foreground',
		received:'flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted'
	}
</script>