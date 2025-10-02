<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Header from '@/components/header/Header.vue';
</script>




<template>
	<div id="layout">
		<Header />

		<div id="page-wrapper">
			<RouterView />
		</div>
	</div>
</template>




<style scoped>
	#layout {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		
		
		& #page-wrapper {
			position: relative;
			width: 100%;
			flex: 1;
		}
	}



	
	/* SCROLL STYLE */
	::-webkit-scrollbar {
		width: 1.2rem;
		height: 1.2rem;
		background-color: var(--color-scroll-track);
	}
	::-webkit-scrollbar-thumb {
		border-radius: 9999px;
		border-left: 0.2rem solid var(--color-scroll-track);
		border-right: 0.2rem solid var(--color-scroll-track);
		background-color: var(--color-scroll);
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-scroll-hover);
	}
</style>