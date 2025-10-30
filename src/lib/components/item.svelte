<script lang="ts">
    import unityStore from "$stores/unityStore";
    import { onMount } from "svelte";
    import * as THREE from "three";
    import { GLTFLoader } from "three/examples/jsm/Addons.js";


    
    // props
    let { props }: { props: {
        src: string,
        info: string,
        name: string
    }} = $props();


    // state
    let previewCanvasEl = $state<HTMLCanvasElement>();


    /**
     * load btn 클릭 이벤트
     * @param e Event
     */
    function loadBtnClickEvt(e: Event) {
        const target = e.currentTarget as HTMLElement;
        const modelName = target.dataset.name as string;
        $unityStore.unityInstance?.SendMessage("Manager", "LoadPrefab", modelName);
    }


    /**
     * onMount()
    */
    onMount(() => {
        if (!previewCanvasEl) return;

        const scene = new THREE.Scene();

        const renderer = new THREE.WebGLRenderer({
            canvas: previewCanvasEl,
            antialias: true,
            alpha: true
        });

        const camera = new THREE.PerspectiveCamera(
            24,
            previewCanvasEl.clientWidth / previewCanvasEl.clientHeight,
            0.1,
            1000
        );

        const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
        scene.add(light);

        const loader = new GLTFLoader();
        loader.load(
            props.src,
            (gltf) => {
                const model = gltf.scene;

                // ✅ 모델 중심 계산
                const box = new THREE.Box3().setFromObject(model);
                const center = new THREE.Vector3();
                box.getCenter(center);

                // ✅ 모델을 중앙으로 이동
                model.position.sub(center);

                // ✅ 카메라를 대각선 위쪽으로 이동
                const size = box.getSize(new THREE.Vector3()).length();
                const distance = size * 0.8;
                camera.position.set(distance * 2.5, distance * 1.5, distance * 2.5);
                camera.lookAt(0, 0, 0);

                scene.add(model);
                renderer.render(scene, camera);
            },
            undefined,
            (err) => console.log(err)
        );
    });
</script>




<div id="preview">
    <canvas id="preview-canvas" bind:this={previewCanvasEl}></canvas>

    <p id="info-text">
        {props.info}
    </p>

    <button id="load-btn" aria-label="load" data-name="{props.name}" onclick="{loadBtnClickEvt}"></button>
</div>




<style>
    #preview {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        background-color: var(--color-background);
        border-radius: 1rem;
    }

    #preview-canvas {
        width: 100%;
        aspect-ratio: 1;
        background-color: var(--color-background-mute);
        border-radius: 1rem;
        border: 0.5rem solid transparent;
        transition: border-color 0.3s, scale 0.3s;
    }

    #info-text {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.4rem;
    }

    #load-btn {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        cursor: pointer;
        
    }


    /* 효과 */
    #preview:hover {
        & #preview-canvas {
            scale: 1.1;
            border-color: var(--color-secondary);
        }
    }
</style>