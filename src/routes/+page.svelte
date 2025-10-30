<script lang="ts">

</script>




<div id="home-page">
    <section id="home-content">
        <article id="banner-wrapper">
            <div class="banner"></div>
            <div class="banner"></div>
            <div class="banner"></div>
            <div class="banner"></div>
        </article>

        <article id="intro-info-wrapper">
            <div id="intro-box">
                <h3 id="intro-title"># 꾸미랜드</h3>

                <p id="intro-text">
                    <span>귀엽고 재밌는 집 꾸미기!</span>
                    <span>귀엽고 재밌는 집 꾸미기!</span>
                    <span>귀엽고 재밌는 집 꾸미기!</span>
                    <span>우리집을 옮기고 꾸며봐요😆</span>
                </p>

                <a href="/land" id="start-btn">↪ 꾸미랜드 시작하기</a>
            </div>

            <div id="info-box">
                <h3 id="info-title"># 프로젝트 구경</h3>

                <div id="use-pj-wrapper">
                    <div id="use-box" class="info">
                        <p class="info-text">사용 언어 및 기술</p>

                        <a href="https://svelte.dev/" class="info-link">Svelte (Javascript)</a>
                        <a href="https://threejs.org/" class="info-link">Three.js (Javascript)</a>
                        <a href="https://unity.com/kr" class="info-link">Unity</a>
                    </div>

                    <div id="pj-box" class="info">
                        <p class="info-text">저장소 구경가기</p>

                        <a href="/" class="info-link">JS 저장소 구경하러가기</a>
                        <a href="/" class="info-link">UNITY 저장소 구경하러가기</a>
                    </div>
                </div>
            </div>
        </article>
    </section>

    <footer id="footer">
        <p class="footer-text">해당 사이트는 학습의 목적으로 개발된 사이트입니다.</p>
        <p class="footer-text">원활한 사용을 위해 Chrome 등 webkit 기반의 브라우저 사용을 권장합니다.</p>
    </footer>
</div>




<style>
    #home-page {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }


    /* HOME CONTENT */
    #home-content {
        flex: 1;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;

        /* BANNER */
        & #banner-wrapper {
            max-height: 650px;
            height: 80%;
            aspect-ratio: 1;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            gap: 2rem;
            padding: 2rem;
            border-radius: 2rem;
            background-color: var(--color-background-mute);

            & .banner {
                border-radius: 2rem;
                background-color: var(--color-background);
            }
        }

        
        & #intro-info-wrapper {
            max-height: 650px;
            height: 80%;
            aspect-ratio: 1;
            display: flex;
            flex-direction: column;
            gap: 2rem;


            /* INTRO */
            & #intro-box {
                width: calc(50% - 1rem);
                aspect-ratio: 1;
                border-radius: 2rem;
                background-color: var(--color-background-mute);
                padding: 3rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                & #intro-title {
                    font-size: 1.8rem;
                    font-weight: bold;
                    color: var(--color-heading);
                }

                & #intro-text {
                    margin-top: 2rem;
                    display: flex;
                    flex-direction: column;

                    & span { font-size: 1.5rem; }
                }

                & #start-btn {
                    width: fit-content;
                    display: inline-flex;
                    justify-content: center;
                    align-items: center;
                    padding: 1.2rem 2rem;
                    font-size: 1.5rem;
                    margin: auto 0 0 auto;
                    background-color: var(--color-secondary);
                    border-radius: 1rem;
                    font-weight: bold;
                }
                & #start-btn:hover {
                    background-color: var(--color-primary);
                    color: #ffffff;
                }
            }


            /* INFO */
            & #info-box {
                flex: 1;
                height: 100%;
                border-radius: 2rem;
                background-color: var(--color-background-mute);
                padding: 3rem;
                display: flex;
                flex-direction: column;

                & #info-title {
                    font-size: 1.8rem;
                    font-weight: bold;
                    color: var(--color-heading);
                }

                & #use-pj-wrapper {
                    margin-top: 5rem;
                    width: 100%;
                    flex: 1;
                    display: flex;
                    gap: 10rem;

                    & .info {
                        flex: 1;
                        height: 100%;
                        display: flex;
                        flex-direction: column;

                        & .info-text {
                            font-size: 1.6rem;
                            margin-bottom: 2rem;
                        }
                        
                        & .info-link {
                            margin-left: auto;
                            font-size: 1.5rem;
                            text-decoration: underline;
                        }
                        & .info-link:hover {
                            color: var(--color-primary);
                        }
                    }
                }
            }
        }
    }


    /* FOOTER */
    #footer {
        border-top: 0.1rem solid var(--color-border);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem 0 2rem 0;


        & .footer-text {
            font-size: 1.2rem;
            text-align: center;
        }
    }
</style>