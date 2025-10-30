import { writable } from "svelte/store";




export interface ColorDataStoreType {
    [key: string]: {
        primary: string,
        secondary: string
    }
};


function createColorDataSTore() {
    const { subscribe, set } = writable<ColorDataStoreType | null>(null);

    // 현재 스토어 상태
    let currentStore: ColorDataStoreType | null = null;

    return {
        subscribe,
        init: (data: ColorDataStoreType) => {
            if (currentStore) {
                console.warn(`%c store data is not null`, "color: #000000ff; background-color: #e5ff00ff");
                return;
            }

            currentStore = data;
            set(data);
        }
    }
}
export default createColorDataSTore();