<script setup lang="ts">
const count = ref<number>(0)

function inc() {
  count.value++
}

function dec() {
  count.value--
}
</script>

<template>
  <div class="flex items-center">
    <button class="inc" @click="inc">
      +
    </button>
    {{ count }}
    <button class="dec" @click="dec">
      -
    </button>
  </div>
</template>
