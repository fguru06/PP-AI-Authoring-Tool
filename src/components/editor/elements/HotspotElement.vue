<script setup>
import { ref, computed } from 'vue'
const props = defineProps({ element: { type: Object, required: true } })
const c = computed(() => props.element.content || {})
const showPopup = ref(false)

function toggle(e) {
  e.stopPropagation()
  showPopup.value = !showPopup.value
}
</script>

<template>
  <div class="hotspot-root" style="width:100%;height:100%;position:relative;">
    <div
      class="hotspot-btn"
      :style="{
        width: '100%', height: '100%',
        background: c.bgColor || '#6c47ff',
        borderRadius: (c.borderRadius ?? 999) >= 999 ? '50%' : (c.borderRadius || 0) + 'px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: c.iconColor || '#fff',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 12px rgba(108,71,255,.4)',
      }"
      @click.stop="toggle"
    >
      {{ c.icon || '?' }}
    </div>

    <!-- Popup -->
    <Transition name="fade">
      <div v-if="showPopup" class="hotspot-popup" :style="{ background: c.popupBgColor || '#ffffff', color: c.popupTextColor || '#1a1a2e' }">
        <div class="popup-header">
          <strong>{{ c.popupTitle || 'Info' }}</strong>
          <button class="popup-close" @click.stop="showPopup = false">×</button>
        </div>
        <div class="popup-body">{{ c.popupContent || 'Add your content in the properties panel.' }}</div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.hotspot-root { position: relative; }
.hotspot-popup {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  min-width: 200px;
  max-width: 280px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0,0,0,.15);
  z-index: 200;
  overflow: hidden;
}
.popup-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 14px;
  color: inherit;
}
.popup-close {
  background: none; border: none;
  font-size: 18px; cursor: pointer; color: inherit;
  line-height: 1;
}
.popup-body {
  padding: 10px 14px;
  font-size: 13px;
  color: inherit;
  line-height: 1.6;
}
.fade-enter-active, .fade-leave-active { transition: opacity .15s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
