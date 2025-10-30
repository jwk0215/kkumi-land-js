<script lang="ts">
    import Header from '$components/header.svelte';
    import colorDataStore from '$stores/colorDataStore';
    import itemDataStore from '$stores/itemDataStore';
    import viewStore from '$stores/viewStore';
	import { page } from "$app/state";
    import { onMount } from 'svelte';
    import unityStore from '$stores/unityStore';




	// props
	let { children } = $props();


	/**
	 * 외부 JSON 파일 가져오기
	 * @param src 파일 경로
	 */
	async function importJSON(src: string) {
		try {
            const res = await fetch(src);
            if (!res.ok) throw new Error("Failed to fetch color data");
            return (await res.json());

        } catch (error: any) {
            console.error(`%c ${error.message}`, "color: #fff; background-color: #ff0000ff");
            console.error("-------------------------------------------------------------------");
            console.error(error);
        }
	}


	/**
	 * onMount()
	*/
	onMount(async () => {
		const html = document.documentElement;

		// 색상 데이터 변수로 등록
		colorDataStore.init(await importJSON("/data/colorData.json"));
		
		if ($colorDataStore) {
			for (const key of Object.keys($colorDataStore)) {
				html.style.setProperty(`--c-${key}-primary`, $colorDataStore[key].primary);
				html.style.setProperty(`--c-${key}-secondary`, $colorDataStore[key].secondary);
			}
		}

		// localStorage에서 뷰 관련 값들 가져오기
		let theme = localStorage.getItem("kk-land-theme") as ("light" | "dark");
		let color = localStorage.getItem("kk-land-color");

		// 테마 설정
		if (!theme) {
			localStorage.setItem("kk-land-theme", "light");
			theme = "light";
		}

		// 색상 설정
		if (!color) {
			localStorage.setItem("kk-land-color", "green");
			color = "green";
		}

		// 뷰 스토어 초기화
		viewStore.setStore(({theme, color}));

		// 아이템 스토어 초기화
		itemDataStore.init(await importJSON("/data/itemData.json"));
	});
</script>




<div id="layout">
	<Header />

	<main id="main">
		{@render children?.()}
	</main>
</div>




<style>
	#layout {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: 5rem 1fr;
		grid-template-areas:
			"header"
			"main";
	}
	#main {
		position: relative;
		grid-area: main;
	}



	/* SCROLL STYLE */
	:global(*::-webkit-scrollbar) {
		width: 0.8rem;
		height: 0.8rem;
		background-color: var(--color-background);
	}
	:global(*::-webkit-scrollbar-thumb) {
		border-radius: 9999rem;
		background-color: var(--color-scroll);
	}
	:global(*::-webkit-scrollbar-thumb:hover) {
		background-color: var(--color-scroll-hover);
	}
	:global(*::-webkit-scrollbar-corner) {
		background-color: var(--color-background);
	}
</style>