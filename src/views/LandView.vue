<script setup lang="ts">
    import { unityStore } from '@/store/unityStore';
    import UnityView from '@/components/UnityView.vue';
    import { onUnmounted, ref } from 'vue';
    import Category from '@/components/Category.vue';


    const data: {[key: string]: CategoryDataType} = {
        build: {
            depthList: {
                floor: "바닥",
                wall: "벽"
            },
            floor: {

            },
            wall: {

            }
        },
        living: {
            depthList: {
                floor: "바닥",
                wall: "벽"
            },
        },
        bath: {
            depthList: {
                floor: "바닥",
                wall: "벽"
            },
        }
    };


    // 현재 Category
    const currentCategory = ref<null | string>(null);


    /**
     * currentCategory change
     * @param category 카테고리
     */
    function changeCurrentCategory(category: string) {
        if (
            currentCategory.value === null ||
            (currentCategory.value !== null && currentCategory.value !== category)
        ) {
            currentCategory.value = category;
        } else {
            currentCategory.value = null;
        }
    }
    

    onUnmounted(() => {
        unityStore.state = false;
    });
</script>




<template>
    <div id="land-container">
        <UnityView />
    
        <div id="function-wrapper">
            <ul id="category-btn-wrapper" class="radius">
                <li>
                    <button id="build-btn" class="category-btn radius" :class="{'on': currentCategory === 'build'}"
                    @click="() => changeCurrentCategory('build')"></button>
                </li>
                <li>
                    <button id="living-btn" class="category-btn radius" :class="{'on': currentCategory === 'living'}"
                    @click="() => changeCurrentCategory('living')"></button>
                </li>
                <li>
                    <button id="bath-btn" class="category-btn radius" :class="{'on': currentCategory === 'bath'}"
                    @click="() => changeCurrentCategory('bath')"></button>
                </li>
            </ul>

            <ul id="category-wrapper">
                <li class="category radius" :class="{'on': currentCategory === 'build'}">
                    <Category :data="data.build" />
                </li>
            </ul>
        </div>
    </div>
</template>





<style scoped>
    #land-container {
        width: 100%;
        height: calc(100% - 5.5rem);
        position: relative;
        overflow: hidden;
    
    
        & #function-wrapper {
            width: 100%;
            height: 0;
            max-width: 1600px;
            z-index: 900;
            position: absolute;
            left: 50%;
            top: 1rem;
            transform: translateX(-50%);


            /* CATEGORY BUTTON WRAPPER */
            & #category-btn-wrapper {
                position: absolute;
                top: 0;
                left: 2rem;
                padding: .5rem;
                background-color: var(--color-background-mute);
                display: flex;
                flex-direction: column;
                gap: .5rem;


                & .category-btn {
                    width: 3.5rem;
                    aspect-ratio: 1;
                    color: var(--color-heading);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                & .category-btn:hover {
                    background-color: var(--color-focus);
                }
                & .category-btn.on {
                    background-color: var(--color-focus);
                    &::before { background-color: var(--color-heading); }
                }

                & .category-btn::before {
                    content: '';
                    width: 60%;
                    height: 60%;
                    background-color: var(--color-text);
                }


                & #build-btn::before { mask: url(../assets/images/build-icon.svg) center / cover; }
                & #living-btn::before { mask: url(../assets/images/living-icon.svg) center / cover; }
                & #bath-btn::before { mask: url(../assets/images/bath-icon.svg) center / cover; }
            }


            /* CATEGORY DETAIL WRAPPER */
            & #category-wrapper {
                position: absolute;
                top: 0;
                left: 7.5rem;
                
                
                & .category {
                    position: absolute;
                    left: 0;
                    top: 0;
                    background-color: var(--color-background-mute);
                    padding: 1rem;
                    width: 20rem;
                    visibility: hidden;
                    opacity: 0;
                    transition: visibility 0.3s, opacity 0.3s;
                }
                & .category.on {
                    visibility: visible;
                    opacity: 1;
                }
            }
        }
    }
</style>
