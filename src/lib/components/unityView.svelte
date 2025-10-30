<script lang="ts">
    import unityStore from "$stores/unityStore";
    import { onMount } from "svelte";

    // state
    let unityCanvasEl = $state<HTMLCanvasElement>();


    // UNITY CONFIG
    const path = "/unity";
    const config = {
        dataUrl: path + "/data.gz",
        frameworkUrl: path + "/framework.js.gz",
        codeUrl: path + "/wasm.gz",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "DefaultCompany",
        productName: "Kkumi-Land_unity",
        productVersion: "0.1",
    }


    /**
     * 유니티 로드 완료 시 실행될 함수
     */
    window.onUnityLoaded = () => unityStore.updateUnityState(true);


    /**
     * onMount()
    */
    onMount(() => {
        const script = document.createElement("script");
        script.src = `${path}/loader.js`;

        script.onload = async () => {
            try {
                const instance = await createUnityInstance(unityCanvasEl!, config);
                unityStore.updateUnityInstance(instance);
                console.log("%c ----- unity instance load success -----", "color: #fff; background-color: #0ea500");

            } catch (error: any) {
                console.error("%c ----- unity instance load fail -----", "color: #fff; background-color: red");
            }
        }

        document.body.appendChild(script);
    });
</script>



<canvas id="unity-canvas" bind:this={unityCanvasEl} width="960" height="600"></canvas>



<style>
    #unity-canvas {
        width: 100%;
        height: 100%;
    }
</style>