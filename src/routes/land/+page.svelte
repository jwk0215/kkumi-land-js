<script lang="ts">
    import Loading from "$components/loading.svelte";
    import Sidebar from "$components/sidebar.svelte";
    import UnityView from "$components/unityView.svelte";
    import unityStore from "$stores/unityStore";
    import { onDestroy } from "svelte";



    /**
     * onDestroy()
    */
    onDestroy(() => {
        unityStore.updateUnityState(false);
    });
</script>




<div id="land-page">
    <Sidebar />

    <section id="view">
        <UnityView />
    </section>
</div>

{#if !$unityStore.unityLoadState}
    <Loading />
{/if}




<style>
    #land-page {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 4.5rem 1fr;
        grid-template-areas: "sidebar view";
    }
    #view {
        grid-area: view;
        max-height: calc(100vh - 5rem);
        overflow: hidden;
    }
</style>