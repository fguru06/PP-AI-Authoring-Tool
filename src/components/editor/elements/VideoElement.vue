<script setup>
import { computed } from 'vue'
const props = defineProps({ element: { type: Object, required: true } })
const c = computed(() => props.element.content || {})

const isYouTube = computed(() => {
  const src = c.value.src || ''
  return src.includes('youtube') || src.includes('youtu.be')
})

const embedSrc = computed(() => {
  const src = c.value.src || ''
  if (isYouTube.value) {
    const id = src.match(/(?:v=|youtu\.be\/)([^&?]+)/)?.[1]
    return id ? `https://www.youtube.com/embed/${id}` : ''
  }
  if (src.includes('vimeo.com')) {
    const id = src.match(/vimeo\.com\/(\d+)/)?.[1]
    return id ? `https://player.vimeo.com/video/${id}` : ''
  }
  return ''
})
</script>

<template>
  <div class="video-element" style="width:100%;height:100%;overflow:hidden;border-radius:4px;background:#000;">
    <iframe
      v-if="embedSrc"
      :src="embedSrc"
      style="width:100%;height:100%;border:none;"
      allowfullscreen
    />
    <video
      v-else-if="c.src && !embedSrc"
      :src="c.src"
      :poster="c.poster"
      :autoplay="c.autoplay"
      :controls="c.controls !== false"
      :loop="c.loop"
      :muted="c.muted"
      :style="{ width: '100%', height: '100%', objectFit: c.objectFit || 'cover' }"
    />
    <div v-else class="video-placeholder">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:.3">
        <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
      <span style="font-size:12px;color:#888;">Add video URL in Properties</span>
    </div>
  </div>
</template>

<style scoped>
.video-placeholder {
  width: 100%; height: 100%;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  gap: 8px; background: #111;
}
</style>
