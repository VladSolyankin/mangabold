<template>
  <div
    v-show="modelValue"
    class="min-h-screen flex flex-col items-center justify-center gap-5"
  >
    <ProgressSpinner />
    <span class="text-lg font-bold">Сильная загрузка страницы...</span>
  </div>
</template>

<script setup lang="ts">
import ProgressSpinner from 'primevue/progressspinner'

defineProps(['modelValue'])
</script>

<style scoped></style>
