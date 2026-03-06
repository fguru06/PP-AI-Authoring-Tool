<script setup>
defineProps({
  title: { type: String, default: '' },
  size: { type: String, default: 'md' }, // sm | md | lg | xl
  showClose: { type: Boolean, default: true },
})
const emit = defineEmits(['close'])
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-overlay" @mousedown.self="emit('close')">
        <div :class="['modal-box', `modal-${size}`]" role="dialog" aria-modal="true" :aria-label="title || 'Dialog'">
          <div v-if="title || showClose" class="modal-header">
            <h3 v-if="title" class="modal-title">{{ title }}</h3>
            <button v-if="showClose" class="btn btn-icon modal-close" @click="emit('close')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(4, 8, 22, 0.72);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: 20px;
}
.modal-box {
  background: color-mix(in srgb, var(--color-surface-raised) 90%, #0c1124 10%);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 48px);
  overflow: hidden;
}
.modal-sm { width: min(380px, calc(100vw - 32px)); }
.modal-md { width: min(520px, calc(100vw - 32px)); }
.modal-lg { width: min(720px, calc(100vw - 32px)); }
.modal-xl { width: min(960px, calc(100vw - 32px)); }

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px 14px;
  border-bottom: 1px solid var(--color-border);
  flex-shrink: 0;
}
.modal-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text);
}
.modal-close {
  margin-left: auto;
  color: var(--color-text-muted);
}
.modal-body {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}
.modal-footer {
  padding: 14px 20px;
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  flex-shrink: 0;
}

/* Transition */
.modal-enter-active,
.modal-leave-active { transition: opacity 200ms ease; }
.modal-enter-active .modal-box,
.modal-leave-active .modal-box { transition: transform 200ms ease, opacity 200ms ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from .modal-box,
.modal-leave-to .modal-box { transform: scale(0.94) translateY(8px); opacity: 0; }

@media (max-width: 640px) {
  .modal-overlay {
    align-items: flex-end;
    padding: 0;
  }

  .modal-box {
    width: 100% !important;
    border-radius: 16px 16px 0 0;
    max-height: calc(100vh - 8px);
  }
}
</style>
