<script setup lang="ts">
const counter = useCounter()

useHead({
  title: "Custom Learning Nuxr 3"
})
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++" class="text-xl p-2 bg-blue-400">
      +
    </button>
    <button @click="counter--" class="text-xl p-2 bg-red-400">
      -
    </button>
  </div>
</template>
