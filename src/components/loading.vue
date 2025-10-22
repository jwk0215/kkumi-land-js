<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import { unityStore } from '../store/unityStore';


    const route = useRoute();


    const colorList = [
        "green",
        "sky",
        "blue",
        "yellow",
        "scarlet"
    ];
</script>




<template>
    <div id="loading-wrapper" :class="{'on': unityStore.state || route.path === '/'}">
        <img id="loading-logo" src="../assets/images/logo.svg" alt="logo">

        <div id="loading-anim-wrapper">
            <div v-for="(color, idx) in colorList" :key="idx" :id="color" class="loading"></div>
        </div>
    </div>
</template>





<style scoped>
    @keyframes loading {
        0% { transform: scale(0.5); }
        50% { transform: scale(1); }
        100% { transform: scale(0.5); }
    }


    #loading-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;
        width: 100%;
        height: 100%;
        background-color: var(--color-background);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        /* visibility: visible; */


        & #loading-logo {
            width: 10rem;
            height: 10rem;
        }


        & #loading-anim-wrapper {
            display: flex;
            gap: 1rem;


            & .loading {
                width: 1.5rem;
                aspect-ratio: 1;
                background-color: var(--color-background-mute);
                border-radius: 50%;
                transform: scale(0.5);
                animation: loading 1.5s ease-in-out infinite;
            }
            & .loading:nth-child(2) { animation-delay: 0.2s; }
            & .loading:nth-child(3) { animation-delay: 0.4s; }
            & .loading:nth-child(4) { animation-delay: 0.6s; }
            & .loading:nth-child(5) { animation-delay: 0.8s; }


            & #green { background-color: var(--c-green); }
            & #sky { background-color: var(--c-sky); }
            & #blue { background-color: var(--c-blue); }
            & #yellow { background-color: var(--c-yellow); }
            & #scarlet { background-color: var(--c-scarlet); }
        }
    }
    #loading-wrapper.on {
        /* visibility: hidden; */
        display: none;
    }
</style>
