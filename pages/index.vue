<script setup>
import { useCounterStore } from "~/stores/myStore";
// const { $sayHello } = useNuxtApp();
// $sayHello("oke");

definePageMeta({
  middleware: "auth",
});

// const { data: products, pending } = useLazyFetch("/api/products", {
//   transform: (_products) => {
//     return _products;
//   },
// });

// const {data: productCounter, pending} = await useAsyncData("products", () => {
//   return $fetch("/api/products");
// })

// const refresh = () => refreshNuxtData("products")


useHead({
  title: "Home Learning Nuxr 3"
})

</script>

<template>
  <div>
    <h1>Home Page</h1>
    <!-- <div class="flex gap-2">
      <img src="@/assets/images/1.jpeg" alt="Discover Nuxt 3" width="200" />
      <img src="@/assets/images/2.jpeg" alt="Discover Nuxt 3" width="200" />
      <img src="@/assets/images/3.jpeg" alt="Discover Nuxt 3" width="200" />
    </div>
    <div class="flex gap-2 mt-2">
      <img src="/2.jpeg" alt="Discover Nuxt 3" width="200" />
      <img src="/3.jpeg" alt="Discover Nuxt 3" width="200" />
    </div> -->
    <!-- <div v-if="pending">Loading...</div>
    <div v-else class="flex flex-col gap-2">
      <div v-for="product in products" :key="product.id" class="my-3">
        <span class="px-3 py-2 bg-green-400 rounded">{{ product.type }}</span>
      </div>
    </div> -->

    <!-- <div >
      <p>{{ pending ? "Loading..." : productCounter }}</p>
    </div>

    <button @click="refresh">Refresh</button> -->

    <div class="flex gap-2 mt-2">
      <h2>Icon</h2>
      <IconFluent />
    </div>
    <!-- <p>This is the profile page of the application.</p> -->
    <ContentDoc />
    <!-- <ContentDoc />
    <Alert />
    <Profile /> -->
  </div>
</template>
