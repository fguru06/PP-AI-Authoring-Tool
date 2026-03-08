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
  background:
    radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.16), transparent 22%),
    radial-gradient(circle at 80% 75%, rgba(251, 191, 36, 0.12), transparent 22%),
    rgba(4, 8, 22, 0.54);
  backdrop-filter: blur(14px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9000;
  padding: 20px;
}
.modal-box {
  background: rgba(255,255,255,0.94);
  border: 1px solid rgba(226, 232, 240, 0.92);
  border-radius: 24px;
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(18px);
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
  border-bottom: 1px solid rgba(226, 232, 240, 0.92);
  flex-shrink: 0;
  background: linear-gradient(180deg, rgba(248,250,252,0.9), rgba(255,255,255,0.78));
}
.modal-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text);
}
.modal-close {
  margin-left: auto;
  color: var(--color-text-muted);
  background: rgba(248,250,252,0.95);
  border: 1px solid rgba(226,232,240,0.9);
}
.modal-close:hover {
  color: var(--color-text);
  background: #ffffff;
}
.modal-body {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}
.modal-footer {
  padding: 14px 20px;
  border-top: 1px solid rgba(226, 232, 240, 0.92);
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  flex-shrink: 0;
  background: rgba(248,250,252,0.72);
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
    border-radius: 20px 20px 0 0;
    max-height: calc(100vh - 8px);
  }
}
</style>
