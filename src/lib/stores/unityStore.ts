import { writable } from "svelte/store";




export interface UnityStoreType {
    unityLoadState: boolean | null;
    unityInstance: UnityInstance | null;
}


const initialStore: UnityStoreType = {
    unityLoadState: false,
    unityInstance: null
}


function createUnityStore() {
    const { subscribe, update, set } = writable<UnityStoreType>(initialStore);

    return {
        subscribe,
        updateUnityInstance: (instance: UnityInstance) => {
            update((store) => {
                const uStore = store;
                uStore.unityInstance = instance;
                return uStore;
            });
        },
        updateUnityState: (state: boolean) => {
            update((store) => {
                const uStore = store;
                uStore.unityLoadState = state;
                return uStore;
            });
        }
    }
}
export default createUnityStore();