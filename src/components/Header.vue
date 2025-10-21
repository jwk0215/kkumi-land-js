<script setup lang="ts">
    import ViewSetting from "@/components/ViewSetting.vue";
    import { useRoute } from "vue-router";


    const route = useRoute();
</script>




<template>
    <header id="header">
        <h1 id="logo">
            <img id="logo-icon" src="../assets/images/logo.svg" alt="logo-icon">
            <span id="title" class="font-b">꾸미랜드</span>
        </h1>

        <router-link id="play-btn" class="font-b radius" to="/land">
            {{ route.path === '/' ? "시작하기" : "다시시작" }}
        </router-link>
    
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
            display: flex;
            justify-content: center;
            align-items: center;
        }


        /* VIEW SETTING */
        & #view-setting {
            display: inline-flex;
        }
    }



    /* ========== 모바일인 경우 ========== */
    @media (hover: hover) and (pointer: fine) {
        & #play-btn:hover {
            color: var(--color-heading);
            background-color: var(--color-focus);
        }
    }
</style>