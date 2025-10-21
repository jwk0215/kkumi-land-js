<script setup lang="ts">
    import { unityStore } from '@/components/store/unityState';
    import UnityView from '@/components/unityView.vue';
    import { onUnmounted } from 'vue';


    onUnmounted(() => {
        unityStore.state = false;
    })
</script>




<template>
	<UnityView />
</template>





<style scoped>

</style>
