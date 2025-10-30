import { writable } from "svelte/store";
import { update } from "three/examples/jsm/libs/tween.module.js";





interface ViewStoreType {
    theme: "light" | "dark";
    color: string;
}


function createViewStore() {
    const { subscribe, update, set } = writable<null | ViewStoreType>(null);

    function changeTheme(html: HTMLElement,theme: "light" | "dark") {
        html.classList.remove("dark");
        html.classList.remove("light");
        html.classList.add(theme);
    }

    function changeColor(html: HTMLElement, color: string) {
        const primary = getComputedStyle(html).getPropertyValue(`--c-${color}-primary`).trim();
        const secondary = getComputedStyle(html).getPropertyValue(`--c-${color}-secondary`).trim();
        html.style.setProperty("--color-primary", primary);
        html.style.setProperty("--color-secondary", secondary);
    }

    return {
        subscribe,
        setStore: (data: ViewStoreType) => {
            const html = document.documentElement;
            changeTheme(html, data.theme);
            changeColor(html, data.color);
            set(data);
        },
        themeUpdate: (theme: "light" | "dark") => {
            update((store) => {
                const html = document.documentElement;
                changeTheme(html, theme);
                localStorage.setItem("kk-land-theme", theme);

                const updateStore = store as ViewStoreType;
                updateStore.theme = theme;

                return updateStore;
            });
        },
        colorUpdate: (color: string) => {
            update((store) => {
                const html = document.documentElement;
                changeColor(html, color);
                localStorage.setItem("kk-land-color", color);
                
                const updateStore = store as ViewStoreType;
                updateStore.color = color;
                
                return updateStore;
            });
        }
    }
}
export default createViewStore();