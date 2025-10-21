<script setup lang="ts">
	import { RouterView } from 'vue-router';
	import Header from '@/components/Header.vue';
	import Loading from './components/loading.vue';
</script>




<template>
	<div id="layout">
        <Header />
		<RouterView />
	</div>

	<Loading />
</template>




<style scoped>
	#layout {
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	
	/* SCROLL STYLE */
	*::-webkit-scrollbar {
		width: 0.8rem;
		height: 0.8rem;
		background-color: var(--color-background);
	}
	*::-webkit-scrollbar-thumb {
		border-radius: 9999rem;
		background-color: var(--color-scroll);
	}
	*::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-scroll-hover);
	}
</style>