import { writable } from "svelte/store";




export interface ItemDataStoreType {
    [key: string]: {
        [key: string]: {
            name: string,
            list: {
                src: string,
                info: string,
                name: string
            }[]
        };
    }
};


function createItemDataSTore() {
    const { subscribe, set } = writable<ItemDataStoreType | null>(null);

    // 현재 스토어 상태
    let currentStore: ItemDataStoreType | null = null;

    return {
        subscribe,
        init: (data: ItemDataStoreType) => {
            if (currentStore) {
                console.warn(`%c store data is not null`, "color: #fff; background-color: #e5ff00ff");
                return;
            }

            currentStore = data;
            set(data);
        }
    }
}
export default createItemDataSTore();