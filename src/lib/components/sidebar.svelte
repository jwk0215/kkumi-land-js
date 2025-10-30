<script lang="ts">
    import itemDataStore from "$stores/itemDataStore";
    import Item from "./item.svelte";



    
    // state
    let categoryState = $state<null | string>(null);
    let itemMenuState = $state<null | string>(null);


    /**
     * 카테고리 버튼 클릭 이벤트
     * @param e Event
     */
    function categoryBtnClickEvt(e: Event) {
        const target = e.currentTarget as HTMLElement;
        const category = target.dataset.category as string;

        itemMenuState = null;

        if (categoryState === category) {
            categoryState = null;
        } else {
            categoryState = category;
        }
    }


    /**
     * 아이템 메뉴 버튼 클릭 이벤트
     * @param e Event
     */
    function itemMenuClickEvt(e: Event) {
        const target = e.currentTarget as HTMLElement;
        const itemMenu = target.dataset.menu as string;

        if (itemMenuState === itemMenu) {
            itemMenuState = null;
        } else {
            itemMenuState = itemMenu;
        }
    }
</script>



{#if $itemDataStore}
    <div id="sidebar">
        <div id="category-btn-wrapper">
            {#each Object.keys($itemDataStore) as key}
                <button class="category-btn" class:on={categoryState === key} data-category="{key}" onclick="{categoryBtnClickEvt}">
                    {key}
                    <div class="category-img" style="mask: url({$itemDataStore[key].icon}) center / cover;"></div>
                </button>
            {/each}
        </div>


        {#each Object.keys($itemDataStore) as key}
            <div class="category-view" class:on={categoryState === key}>
                <!-- ITEM MENU LIST -->
                <div class="item-menu-list">
                    {#if key !== "icon"}
                        {#each Object.keys($itemDataStore[key]) as mKey}
                            {#if typeof $itemDataStore[key][mKey] !== "string"}
                                <button class="item-menu" class:on={itemMenuState === mKey}
                                data-menu="{mKey}" onclick="{itemMenuClickEvt}">
                                    {$itemDataStore[key][mKey].name}
                                </button>
                            {/if}
                        {/each}
                    {/if}
                </div>

                <!-- ITEM LIST -->
                {#if categoryState === key && categoryState !== null && itemMenuState !== null}
                    <ul class="item-list">
                        {#each $itemDataStore[categoryState][itemMenuState].list as itemData}
                            <li class="item">
                                <Item props={itemData} />
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        {/each}
    </div>
{/if}
    


<style>
    #sidebar {
        grid-area: sidebar;
        position: relative;
        background-color: var(--color-background-mute);
        z-index: 100;
    }


    /* CATEGORY BUTTON */
    #category-btn-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: var(--color-background-mute);
        display: flex;
        flex-direction: column;
        gap: .5rem;
        padding: .5rem;
        z-index: 10;


        & .category-btn {
            width: 100%;
            aspect-ratio: 1;
            text-indent: -9999em;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1rem;
            cursor: pointer;

            & .category-img {
                width: 65%;
                height: 65%;
                background-color: var(--color-text);
            }
        }
        & .category-btn:hover {
            background-color: var(--color-background);
        }
        & .category-btn.on {
            background-color: var(--color-secondary);
            & .category-img { background-color: var(--color-heading); }
        }
    }


    /* CATEGORY VIEW */
    .category-view {
        position: absolute;
        right: 0;
        top: 0;
        width: 20rem;
        height: 100%;
        padding: 0.5rem 0.5rem 1rem 0.5rem;
        background-color: var(--color-background-mute);
        border-left: 0.1rem solid var(--color-secondary);
        transition: transform 0.3s;
        z-index: 5;
        display: flex;
        flex-direction: column;

        /* ITEM MENU LIST */
        & .item-menu-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: .5rem;

            & .item-menu {
                height: 3.5rem;
                font-size: 1.5rem;
                cursor: pointer;
                border-radius: 1rem;
            }
            & .item-menu:hover {
                background-color: var(--color-secondary);
            }
            & .item-menu.on {
                color: var(--color-heading);
                background-color: var(--color-secondary);
            }
        }

        /* ITEM LIST */
        & .item-list {
            margin-top: 1.5rem;
            width: 100%;
            padding: 0 1rem 0 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            overflow-y: auto;

            & .item {
                position: relative;
                width: 16rem;
                aspect-ratio: 1 / 1.3;
            }
        }
    }
    .category-view.on {
        transform: translate(100%, 0);
    }
</style>