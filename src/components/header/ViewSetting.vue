<script setup lang="ts">
    import { onMounted, ref } from "vue";


    const colorList = [
        "green",
        "sky",
        "blue",
        "yellow",
        "scarlet"
    ];

    
    const dropdownState = ref(false);                           // dropdown open 상태
    const themeState = ref<"light" | "dark">("light");          // 테마 상태
    const colorState = ref("");                                 // 색상 상태


    /**
     * dropdownState 상태 변경
     * @param e Event
     */
    function changeDropdownState(e: Event) {
        if (dropdownState.value) dropdownState.value = false;
        else dropdownState.value = true;
    }


    /**
     * 테마 상태값 변경 및 테마 변경
     * @param theme "light" | "dark"
     */
    function setTheme(theme: "light" | "dark") {
        const html = document.documentElement;

        if (theme === "dark") {
            html.classList.add("dark");
            themeState.value = "dark";
            
        } else {
            html.classList.remove("dark");
            themeState.value = "light";
        }
    }


    /**
     * 색상 상태 변경 및 색상 변경
     * @param color string
     */
    function setColor(color: string) {
        const html = document.documentElement;

        const primary = getComputedStyle(html).getPropertyValue(`--c-${color}`).trim();
        const focus = getComputedStyle(html).getPropertyValue(`--c-${color}-focus`).trim();
        html.style.setProperty("--color-primary", primary);
        html.style.setProperty("--color-focus", focus);

        colorState.value = color;
    }


    /**
     * theme change event()
     * @param e Event
     */
    function themeChangeEvt(e: Event) {
        const theme = (e.currentTarget as HTMLInputElement).dataset.theme as ("light" | "dark");
        localStorage.setItem("kk-theme", theme);
        setTheme(theme);
    }


    /**
     * color change event()
     * @param e Event
     */
    function colorChangeEvt(e: Event) {
        const color = (e.currentTarget as HTMLInputElement).dataset.color as string;
        localStorage.setItem("kk-color", color);
        setColor(color);
    }


    /**
     * OnMounted()
     * 테마, 색상, 사이즈 input element 상태 init
     */
    onMounted(() => {
        // 테마
        const theme = localStorage.getItem("kk-theme") as ("light" | "dark");

        if (theme) {
            setTheme(theme);
        } else {
            setTheme("light");
            localStorage.setItem("kk-theme", "light");
        }

        // 색상
        const color = localStorage.getItem("kk-color");

        if (color) {
            setColor(color);
        } else {
            setColor("green");
            localStorage.setItem("kk-color", "green");
        }
    });
</script>




<template>
    <div class="dropdown" :class="{'open': dropdownState}">
        <button id="setting-btn" class="dropdown-btn" :class="{'on': dropdownState}" @click="changeDropdownState">
            <div id="btn-icon"></div>
        </button>

        <div id="setting-wrapper" class="dropdown-content">
            <h3 class="dropdown-content-title">화면 설정</h3>

            <div id="theme-box" class="setting-box">
                <h4 class="setting-title">Theme 설정</h4>

                <div id="theme-control-wrapper">
                    <label class="theme-controller">
                        <input type="radio" name="theme" data-theme="light"
                        v-model="themeState" value="light" @change="themeChangeEvt">

                        <span>라이트 모드</span>
                    </label>

                    <label class="theme-controller">
                        <input type="radio" name="theme" data-theme="dark"
                        v-model="themeState" value="dark" @change="themeChangeEvt">

                        <span>다크 모드</span>
                    </label>
                </div>
            </div>

            <div id="color-box" class="setting-box">
                <h4 class="setting-title">Color 설정</h4>

                <div id="color-control-wrapper">
                    <label v-for="(color, idx) in colorList" class="color-controller"
                    :id="color" :key="idx">
                        <input type="radio" name="color" :data-color="color"
                        v-model="colorState" :value="color" @change="colorChangeEvt">
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>




<style scoped>
    /* BUTTON */
    #setting-btn {
        width: 3.5rem;
        height: 3.5rem;

        & #btn-icon {
            width: 100%;
            height: 100%;
            mask: url(../../assets/images/palette-icon.svg) center / 65% no-repeat;
            background-color: var(--color-text);
        }
    }
    @media (hover: hover) and (pointer: fine) {
        #setting-btn:hover {
            & #btn-icon {
                background-color: var(--color-heading);
            }
        }
    }
    #setting-btn.on {
        & #btn-icon {
            background-color: var(--color-primary);
        }
    }


    /* CONTENT */
    #setting-wrapper {
        top: 100%;
        right: 0;
        margin-top: 1rem;
        width: 30rem;
        background-color: var(--color-background-mute);


        /* 테마 설정 */
        & #theme-control-wrapper {
            display: flex;
            gap: 2.5rem;


            & .theme-controller {
                display: flex;
                padding: 0 2rem;
                height: 4.5rem;
                gap: 1rem;
                border-radius: 1rem;
                align-items: center;
                cursor: pointer;

                & input { display: none; }
                & span { font-size: 1.3rem; }
            }
            @media (hover: hover) and (pointer: fine) {
                & .theme-controller:hover {
                    background-color: var(--color-focus);
                }
            }
            & .theme-controller:has(:checked) {
                background-color: var(--color-focus);

                & span { color: var(--color-primary); }
            }
        }


        /* 색상 설정 */
        & #color-control-wrapper {
            margin-top: 1rem;
            display: flex;
            height: 2.5rem;
            justify-content: space-between;
            align-items: center;


            & .color-controller {
                position: relative;
                width: 2.5rem;
                height: 2.5rem;
                cursor: pointer;

                &::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }

                & input { visibility: hidden; }
            }
            & .color-controller:has(:checked) {
                &::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    mask: url(../../assets/images/checked-icon.svg) center / 60% no-repeat;
                    background-color: #fff;
                }
            }

            & #green::before { background-color: var(--c-green); }
            & #sky::before { background-color: var(--c-sky); }
            & #blue::before { background-color: var(--c-blue); }
            & #yellow::before { background-color: var(--c-yellow); }
            & #scarlet::before { background-color: var(--c-scarlet); }
        }
    }


    /* 설정 박스 (공통) */
    .setting-box {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 0;
        padding-left: 1rem;


        & .setting-title {
            font-size: 1.6rem;
            color: var(--color-heading);
        }
    }
    .setting-box:not(:last-of-type) { border-bottom: 0.15rem solid var(--color-border); }
</style>