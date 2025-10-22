<script setup lang="ts">
    import { ref } from 'vue';
import Item from './Item.vue';

    // props
    const { data } = defineProps<{
        data: CategoryDataType
    }>();


    // 현재 menu
    const currentMenu = ref<null | string>(null);


    /**
     * currentMenu change
     * @param menu 뎁스
     */
    function changeCurrentMenu(menu: string) {
        if (
            currentMenu.value === null ||
            (currentMenu.value !== null && currentMenu.value !== menu)
        ) {
            currentMenu.value = menu;
        } else {
            currentMenu.value = null;
        }
    }
</script>




<template>
    <ul id="menu-list">
        <li v-for="key in Object.keys(data.depthList)" class="menu-btn-wrapper">
            <button class="menu-btn radius" :class="{'on': currentMenu === key}"
            @click="() => changeCurrentMenu(key)">
                {{ data.depthList[key] }}
            </button>
        </li>
    </ul>

    <p v-if="!currentMenu" id="info-text">
        상단에 있는<br>메뉴를 선택해주세요.
    </p>

    <ul v-if="currentMenu" id="item-list">
        <li class="item">
            <Item />
        </li>
    </ul>
</template>




<style scoped>
    #menu-list {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;


        & .menu-btn-wrapper {
            width: calc(50% - 0.25rem);
            height: 3rem;
        
        
            & .menu-btn {
                width: 100%;
                height: 100%;
                font-size: 1.4rem;
            }
            & .menu-btn:hover {
                background-color: var(--color-focus);
            }
            & .menu-btn.on {
                background-color: var(--color-focus);
                color: var(--color-heading);
            }
        }
    }


    & #info-text {
        text-align: center;
        font-size: 1.4rem;
        padding: 5rem 0;
    }


    & #item-list {
        margin-top: 1rem;
        width: 100%;
        max-height: 30rem;
        display: flex;
        flex-wrap: wrap;
        gap: .5rem;
        overflow-y: auto;


        & .item {
            width: calc(50% - 0.25rem);
            aspect-ratio: 1 / 1.4;
        }
    }
</style>