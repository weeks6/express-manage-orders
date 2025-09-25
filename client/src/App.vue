<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <header class="p-2 flex justify-center blue-500">
    <nav class="flex gap-2">
      <RouterLink
        class="hover:text-blue-500"
        to="/"
      >Заказы
      </RouterLink>
      <RouterLink
        class="hover:text-blue-500"
        to="/new"
      >Новый заказ
      </RouterLink>
      <RouterLink
        class="hover:text-blue-500"
        to="/analytics"
      >Аналитика
      </RouterLink>
    </nav>
  </header>

  <div class="p-2">
    <RouterView />
  </div>
</template>

<style scoped></style>
