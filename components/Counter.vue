<script setup lang="ts">
const counter = useState('counter', () => 0)
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
