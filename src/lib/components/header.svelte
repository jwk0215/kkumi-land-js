<script lang="ts">
    import logoImg from "$assets/logo.svg";
    import colorDataStore from "$stores/colorDataStore";
    import viewStore from "$stores/viewStore";



    /**
     * viewStore color change
     * @param e Event
     * @param color string
     */
    function changeColor(e: Event, color: string) {
        if ($viewStore?.color === color) return;
        viewStore.colorUpdate(color);
    }


    /**
     * viewStore theme change
     * @param e Event
     */
    function changeTheme(e: Event) {
        if ((e.target as HTMLInputElement).checked) viewStore.themeUpdate("dark");
        else viewStore.themeUpdate("light");
    }
</script>




<header id="header">
    <h1 id="logo">
        <img id="logo-img" src="{ logoImg }" alt="logo">
        <span id="logo-title">꾸미랜드</span>
        <a id="logo-a" href="/" aria-label="home link"></a>
    </h1>

    <div id="view-option-wrapper">
        <div id="color-control-box">
            {#if $colorDataStore !== null && $viewStore !== null}
                {#each Object.keys($colorDataStore) as key}
                    <button class="color-controller" class:on={$viewStore.color === key} 
                    aria-label="color controller" style="background-color: {$colorDataStore[key].primary};"
                    onclick="{(e) => changeColor(e, key)}"></button>
                {/each}
            {/if}
        </div>

        <div id="theme-control-box">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            
            <input type="checkbox" id="theme-controller" checked={$viewStore?.theme === "dark"} onchange="{changeTheme}">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
        </div>
    </div>
</header>




<style>
    #header {
        grid-area: header;
        width: 100%;
        padding: .5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-background-mute);
    }


    /* LOGO */
    #logo {
        position: relative;
        height: 90%;
        display: flex;
        align-items: center;
        padding: 0 1rem;


        & #logo-img {
            height: 80%;
            aspect-ratio: 1;
        }
        & #logo-title {
            font-size: 2rem;
            font-weight: bold;
            margin-top: 0.1rem;
            color: var(--color-heading);
        }
        & #logo-a {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }
    #logo:hover {
        & #logo-title {
            color: var(--color-primary);
        }
    }


    /* VIEW OPTION */
    #view-option-wrapper {
        height: 100%;
        display: flex;
        gap: 3rem;
    }


    /* COLOR BOX */
    #color-control-box {
        display: flex;
        align-items: center;
        gap: 1rem;

        & .color-controller {
            position: relative;
            height: 40%;
            aspect-ratio: 1;
            border-radius: 50%;
            cursor: pointer;
        }
        & .color-controller::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            mask: url(../assets/check-icon.svg) center / cover;
            background-color: var(--color-background);
            visibility: hidden;
            opacity: 0;
            transition: visibility 0.3s, opacity 0.3s;
        }
        & .color-controller.on::before {
            visibility: visible;
            opacity: 1;
        }
    }


    /* THEME BOX */
    #theme-control-box {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        height: 100%;

        & svg * { color: var(--color-heading); }

        & #theme-controller {
            position: relative;
            visibility: hidden;
            width: 3.5rem;
            height: 50%;
            cursor: pointer;
        }
        & #theme-controller::before {
            content: '';
            display: block;
            width: 100%;
            height: 100%;
            background-color: var(--color-background);
            border-radius: 1rem;
            border: 0.2rem solid var(--color-primary);
            visibility: visible;
        }
        & #theme-controller::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 0.4rem;
            transform: translate(0, -50%);
            transition: left 0.3s, transform 0.3s;
            height: calc(100% - 0.8rem);
            aspect-ratio: 1 / 1;
            background-color: var(--color-primary);
            border-radius: 50%;
            visibility: visible;
        }
        & #theme-controller:checked::after {
            left: calc(100% - 0.4rem);
            transform: translate(-100%, -50%);
        }
    }
</style>