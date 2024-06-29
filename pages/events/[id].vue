<template>
    <div>
        <h1 class="text-3xl font-bold underline">Events Page ID: {{ route.params.id }}</h1>
    </div>
</template>

<script setup>
const route = useRoute()
const nuxt = useNuxtApp()

console.log(nuxt)

</script>