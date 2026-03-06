<script setup>
defineProps({ element: { type: Object, required: true } })
</script>

<template>
  <div
    class="image-element"
    :style="{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      borderRadius: (element.content?.borderRadius || 0) + 'px',
      border: `${element.content?.borderWidth || 0}px solid ${element.content?.borderColor || 'transparent'}`,
    }"
  >
    <img
      v-if="element.content?.src"
      :src="element.content.src"
      :alt="element.content.alt || ''"
      :style="{ width: '100%', height: '100%', objectFit: element.content.objectFit || 'cover', display: 'block' }"
      draggable="false"
    />
    <div v-else class="image-placeholder">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:.3">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
      </svg>
      <span>Image</span>
    </div>
  </div>
</template>

<style scoped>
.image-element { position: relative; }
.image-placeholder {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 8px;
  background: rgba(108,71,255,.06);
  border: 2px dashed rgba(108,71,255,.2);
  border-radius: inherit;
  color: var(--color-text-muted);
  font-size: 12px;
}
</style>
