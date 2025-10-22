<script setup lang="ts">
    const data = defineProps({
        src: String
    });
</script>




<template>
    <div id="item-wrapper">
        <canvas id="three-canvas"></canvas>
        <p id="item-info">

        </p>
    </div>
</template>




<style scoped>
    #item-wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;


        & #three-canvas {
            width: 100%;
            aspect-ratio: 1;
        }


        & #item-info {
            width: 100%;
            flex: 1;
        }
    }
</style>