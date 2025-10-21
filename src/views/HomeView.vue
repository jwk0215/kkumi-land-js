<template>
    <div id="home-view">
        <main id="main">
            <section id="banner" class="radius-ex">
                <div id="temp-banner1" class="banner radius-ex"></div>
                <div id="temp-banner2" class="banner radius-ex"></div>
                <div id="temp-banner3" class="banner radius-ex"></div>
                <div id="temp-banner4" class="banner radius-ex"></div>
            </section>

            <section id="box-wrapper">
                <article id="intro" class="radius-ex box">
                    <h3 class="box-title font-b">꾸미랜드</h3>

                    <p id="intro-text">
                        <span>귀엽고 재밌는 집 꾸미기!</span>
                        <span>우리집을 귀엽게 옮기고 꾸며봐요😆</span>
                    </p>

                    <router-link id="start-btn" class="radius font-b" to="/land">↪ 꾸미랜드 시작하기</router-link>
                </article>

                <article id="info" class="radius-ex box">
                    <h3 class="box-title font-b">프로젝트 구경가기</h3>

                    <div id="info-text-box" class="info-box">
                        <p id="info-text-title">사용 언어 및 기술</p>
                        <p id="info-text">
                            <span>Vue3(Javascript)</span>
                            <span>+</span>
                            <span>Unity</span>
                        </p>
                    </div>
                    
                    <div id="info-link-box" class="info-box">
                        <a href="" class="info-link">JS 저장소 구경가기</a>
                        <a href="" class="info-link">UNITY 저장소 구경가기</a>
                    </div>
                </article>
            </section>
        </main>

        <footer id="footer">
            <p class="footer-text">해당 사이트는 학습의 목적으로 개발된 사이트입니다.</p>
            <p class="footer-text">원활한 사용을 위해 Chrome 등 webkit 기반의 브라우저 사용을 권장합니다.</p>
        </footer>
    </div>
</template>




<style scoped>
    #home-view {
        position: relative;
        margin: 0 auto;
        max-width: 1600px;
        width: 100%;
        min-height: calc(100vh - 5.5rem);
        display: flex;
        flex-direction: column;


        /* ===== MAIN ===== */
        & #main {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2vw;


            /* ===== BANNER ===== */
            & #banner {
                max-width: 592px;
                width: calc(35vw + 2vw);
                aspect-ratio: 1;
                background-color: var(--color-background-mute);
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                gap: 2rem;
                padding: 2rem;


                & .banner {
                    flex: 1;
                    aspect-ratio: 1;
                }


                & #temp-banner1 { background-color: var(--color-primary); }
                & #temp-banner2 { background-color: var(--color-focus); }
                & #temp-banner3 { background-color: var(--color-focus); }
                & #temp-banner4 { background-color: var(--color-primary); }
            }


            /* ===== BANNER X ===== */
            & #box-wrapper {
                width: calc(35vw / 2);
                height: calc(35vw + 2vw);
                max-width: calc((592px - 2vw) / 2);
                max-height: 592px;
                display: flex;
                flex-direction: column;
                gap: 2vw;


                & .box {
                    width: 100%;
                    aspect-ratio: 1;
                    background-color: var(--color-background-mute);
                    padding: 2rem;
                    display: flex;
                    flex-direction: column;
                    gap: 1vw;


                    & .box-title {
                        font-size: 1.6rem;
                    }
                }


                /* ===== INTRO ===== */
                & #intro {
                    
                    & #intro-text {
                        display: flex;
                        flex-direction: column;

                        & span { font-size: 1.4rem; }
                    }


                    & #start-btn {
                        padding: 1rem 2rem;
                        font-size: 1.4rem;
                        margin: auto 0 0 auto;
                        color: var(--color-heading);
                        background-color: var(--color-focus);
                    }
                    & #start-btn:hover {
                        color: var(--color-background);
                        background-color: var(--color-primary);
                    }
                }


                /* ===== INFO ===== */
                & #info {
                    
                    & .info-box {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }
                    
                    
                    & #info-text-box {

                        & #info-text-title { font-size: 1.5rem; }


                        & #info-text {
                            display: flex;
                            align-items: center;
                            gap: 1rem;

                            & span { font-size: 1.4rem; }
                        }
                    }


                    & #info-link-box {
                        gap: 0.5rem;

                        & .info-link {
                            font-size: 1.4rem;
                            color: var(--color-heading);
                            text-decoration: underline;
                            margin-left: auto;
                        }
                        & .info-link:hover { color: var(--color-primary); }
                    }
                }
            }
        }


        /* ===== FOOTER ===== */
        & #footer {
            border-top: 0.1rem solid var(--color-border);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0 2vw 0;


            & .footer-text {
                font-size: 1.2rem;
                text-align: center;
            }
        }
    }



    @media (max-width: 1350px) {
        & #home-view {

            & #main {
                padding: 2vw 0;
                flex-direction: column;
    
    
                /* ===== BANNER X ===== */
                & #banner {
                    max-width: none;
                    width: 80%;
                    aspect-ratio: 4 / 1;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: none;
                }
    
    
                /* ===== BANNER X ===== */
                & #box-wrapper {
                    max-width: none;
                    width: 80%;
                    aspect-ratio: 0;
                    height: fit-content;
    
    
                    & .box {
                        width: 100%;
                        flex: 1;
                        flex-direction: column;
                        aspect-ratio: auto;
                    }
                }
            }
        }
    }


    @media (max-width: 900px) {
        & #home-view {

            & #main {

                & #banner {
                    aspect-ratio: 1;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(2, 1fr);
                }
            }
        }
    }


    /* ========== 모바일인 경우 ========== */
    @media (hover: hover) and (pointer: fine) {
        & #start-btn:hover {
            color: var(--color-heading);
            background-color: var(--color-focus);
        }


        & .info-link:hover { color: var(--color-heading); }
    }
</style>