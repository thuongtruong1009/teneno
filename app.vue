<script setup>
import { AppSetup } from './helpers/app';
AppSetup();
useHead({
    title: 'Vitesse Nuxt 3',
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/nuxt.png',
        },
    ],
});
</script>

<template>
    <NuxtLoadingIndicator color="#f04f43" />
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
    height: 100vh;
    margin: 0;
    padding: 0;
}

html.dark {
    background: #222;
    color: white;
}
</style>
