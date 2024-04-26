<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Image from 'primevue/image'
import Spinner from '@/components/ui/Spinner.vue'

const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})
</script>
<template>
  <Spinner v-model="isLoading"/>
  <div class="min-h-screen flex flex-col gap-10 px-4 my-5" v-show="!isLoading">
    <div class="h-20 flex justify-between items-center">
      <div class="flex gap-10">
        <Image
          src="../../public/logo.png"
          alt=""
          class="w-24 h-24 rounded-full"
        />
        <ul class="flex items-center gap-10">
          <li><router-link>Каталог</router-link></li>
        </ul>
      </div>

      <div class="flex items-center justify-center gap-10">
        <a href="https://github.com/VladSolyankin">
          <i class="pi pi-github text-4xl"></i>
        </a>
        <router-link>
          <img class="rounded-xl w-10 h-10" src="../../public/default_profile.png"/>
        </router-link>
      </div>

    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
