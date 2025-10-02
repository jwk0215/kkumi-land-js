<script setup lang="ts">

</script>




<template>
    <main id="home-wrapper">
        <section id="banner">
            
        </section>
    </main>
</template>




<style scoped>
    #home-wrapper {
        margin: 0 auto;
        max-width: 1600px;
        width: 100%;
        height: 100%;
        padding: 1vw;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 1vw;


        & #banner {
            grid-column: span 12;
            height: 50vw;
        }
    }
</style>