<script setup>
const props = defineProps({ element: { type: Object, required: true } })
</script>

<template>
  <div
    class="audio-element"
    :style="{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center',
      gap: '10px',
      background: element.content?.bgColor || '#ede7ff',
      border: `1px solid ${element.content?.accentColor || '#6c47ff'}`,
      borderRadius: '8px',
      padding: '0 12px',
    }"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :stroke="element.content?.accentColor || '#6c47ff'" stroke-width="2">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
    <span :style="{ fontSize: '13px', color: element.content?.textColor || '#555', flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }">{{ element.content?.label || 'Audio Player' }}</span>
    <audio
      v-if="element.content?.src"
      :src="element.content.src"
      :controls="element.content?.controls !== false"
      :autoplay="element.content?.autoplay"
      :loop="element.content?.loop"
      style="height:28px;max-width:180px;"
      @mousedown.stop
    />
    <span v-else style="font-size:11px;color:#aaa;">No source</span>
  </div>
</template>
