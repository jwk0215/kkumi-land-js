<script setup lang="ts">
    import ViewSetting from "@/components/header/ViewSetting.vue";
</script>




<template>
    <header id="header">
        <h1 id="logo">
            <img id="logo-icon" src="../../assets/images/logo.svg" alt="logo-icon">
            <span id="title" class="font-b">꾸미랜드</span>
        </h1>

        <button id="play-btn" class="font-b">
            시작하기
        </button>
    
        <div id="view-setting">
            <ViewSetting />
        </div>
    </header>
</template>




<style scoped>
    #header {
        margin: 0 auto;
        position: sticky;
        left: 0;
        top: 0;
        z-index: 1000;
		max-width: 1600px;
        width: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        background-color: var(--color-background);


        /* LOGO */
        & #logo {
            display: flex;
            align-items: center;
            height: 3.5rem;

            & #logo-icon {
                width: 3rem;
                height: 3rem;
                margin-bottom: auto;
            }

            & #title {
                font-size: 2rem;
                color: var(--color-primary);
            }
        }


        & #play-btn {
            margin-left: auto;
            padding: 0 1rem;
            height: 3.5rem;
            font-size: 1.5rem;
        }
        @media (hover: hover) and (pointer: fine) {
            & #play-btn:hover {
                color: var(--color-heading);
                background-color: var(--color-focus);
            }
        }


        /* VIEW SETTING */
        & #view-setting {
            display: inline-flex;
        }
    }
</style>