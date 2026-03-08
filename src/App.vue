<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="app-view" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </Transition>
  </RouterView>
</template>

<style scoped>
.app-view-enter-active,
.app-view-leave-active {
  transition: opacity 240ms ease, transform 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.app-view-enter-from {
  opacity: 0;
  transform: translateY(10px) scale(0.995);
}

.app-view-leave-to {
  opacity: 0;
  transform: translateY(-8px) scale(1.005);
}
</style>
