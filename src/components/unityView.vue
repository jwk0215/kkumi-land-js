<script setup lang="ts">
    import { onMounted, useTemplateRef } from "vue";
import { unityStore } from "../store/unityStore";


    // UNITY CANVAS ELEMENT
    const unityCanvas = useTemplateRef("unity-canvas");

    // UNITY PATH (유니티 빌드파일 위치)
    const unityPath = "unity/";

    // UNITY CONFIG
    const config = {
        dataUrl: unityPath + "data.gz",
        frameworkUrl: unityPath + "framework.js.gz",
        codeUrl: unityPath + "wasm.gz",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Kkumi-Land_unity",
        productVersion: "0.1",
    };


    /**
     * UNITY LOAD
     * @param src string 유니티 로딩을 위한 build.loader.js 위치
     */
    function loadUnity(src: string) {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            createUnityInstance(
                unityCanvas.value as HTMLCanvasElement,
                config
            ).then((unityInstance) => {
                console.log("%c ----- unity instance load success -----", "color: #fff; background-color: #0ea500");
                window.unityInstance = unityInstance;
            }).catch((msg) => {
                console.error("%c ----- unity instance load fail -----", "color: #fff; background-color: red");
            });
        };

        document.body.appendChild(script);
    };


    /**
     * onUnityLoaded 초기화
     */
    window.onUnityLoaded = () => {
        unityStore.state = true;
    };


    onMounted(() => {
        loadUnity("/unity/loader.js");
    });
</script>




<template>
	<canvas id="unity-canvas" ref="unity-canvas" width="960" height="600"></canvas>
</template>





<style scoped>
    #unity-canvas {
        width: 100%;
        height: 100%;
        background: none !important;
    }
</style>
