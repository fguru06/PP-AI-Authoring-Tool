<script setup>
import { computed } from 'vue'
import { useEditorStore } from '@/stores/editorStore'
import { useProjectStore } from '@/stores/projectStore'

const editorStore = useEditorStore()
const projectStore = useProjectStore()

const project = computed(() => projectStore.getProject(editorStore.projectId))
const slide = computed(() => project.value?.slides?.find(s => s.id === editorStore.currentSlideId))
const elements = computed(() =>
  [...(slide.value?.elements || [])].sort((a, b) => (b.zIndex || 0) - (a.zIndex || 0))
)

function selectEl(id) {
  editorStore.selectElement(id)
}

function toggleVisible(el) {
  projectStore.updateElement(editorStore.projectId, editorStore.currentSlideId, el.id, { visible: !el.visible })
}

function toggleLock(el) {
  projectStore.updateElement(editorStore.projectId, editorStore.currentSlideId, el.id, { locked: !el.locked })
}

function moveUp(id) {
  projectStore.reorderElement(editorStore.projectId, editorStore.currentSlideId, id, 'up')
}

function moveDown(id) {
  projectStore.reorderElement(editorStore.projectId, editorStore.currentSlideId, id, 'down')
}

function deleteEl(id) {
  projectStore.deleteElement(editorStore.projectId, editorStore.currentSlideId, id)
  if (editorStore.selectedElementId === id) editorStore.clearSelection()
}

function getElementIcon(type) {
  const icons = {
    text: 'T', heading: 'H1', image: '🖼', shape: '■', button: '◉',
    hotspot: '?', video: '▶', audio: '♪', quiz: '✅', divider: '—',
  }
  return icons[type] || '◆'
}

function getElementLabel(el) {
  if (el.content?.text) return el.content.text.slice(0, 24)
  if (el.content?.label) return el.content.label
  if (el.content?.question) return el.content.question.slice(0, 24)
  return el.type.charAt(0).toUpperCase() + el.type.slice(1)
}
</script>

<template>
  <div class="layer-panel">
    <div class="layer-header panel-section">
      <div class="panel-title" style="margin-bottom:0">
        Layers
        <span class="layer-count">{{ elements.length }}</span>
      </div>
    </div>
    <div v-if="elements.length === 0" class="layers-empty">
      <p>No elements on this slide.</p>
      <p>Add elements using the toolbar above.</p>
    </div>
    <div v-else class="layers-list">
      <div
        v-for="el in elements"
        :key="el.id"
        :class="['layer-item', editorStore.selectedElementIds.includes(el.id) && 'selected', el.locked && 'locked', !el.visible && 'hidden']"
        @click="selectEl(el.id)"
      >
        <span class="layer-type-icon">{{ getElementIcon(el.type) }}</span>
        <span class="layer-name">{{ getElementLabel(el) }}</span>
        <div class="layer-actions">
          <button class="layer-action-btn" :class="{ active: el.visible }" @click.stop="toggleVisible(el)" :data-tooltip="el.visible ? 'Hide' : 'Show'">
            <svg v-if="el.visible" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
            <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          </button>
          <button class="layer-action-btn" :class="{ active: el.locked }" @click.stop="toggleLock(el)" :data-tooltip="el.locked ? 'Unlock' : 'Lock'">
            <svg v-if="el.locked" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <svg v-else width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>
            </svg>
          </button>
          <button class="layer-action-btn" @click.stop="moveUp(el.id)" data-tooltip="Move up">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </button>
          <button class="layer-action-btn" @click.stop="moveDown(el.id)" data-tooltip="Move down">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <button class="layer-action-btn danger" @click.stop="deleteEl(el.id)" data-tooltip="Delete">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layer-panel { display: flex; flex-direction: column; height: 100%; overflow: hidden; }
.layer-header {
  padding-top: var(--space-3);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border-subtle);
  background: color-mix(in srgb, var(--color-surface-overlay) 58%, transparent 42%);
}

.layer-count {
  color: var(--color-text-muted);
  background: var(--color-surface-overlay);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  padding: 2px 8px;
  font-size: 10px;
}

.layers-empty {
  margin: var(--space-4);
  padding: var(--space-6) var(--space-4);
  text-align: center;
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-lg);
  background: color-mix(in srgb, var(--color-surface-overlay) 65%, transparent 35%);
}
.layers-list {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-2) var(--space-3);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.layer-item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 8px 10px;
  border-radius: var(--radius-md);
  cursor: pointer;
  border: 1px solid transparent;
  transition: background var(--transition-fast), border-color var(--transition-fast), transform var(--transition-fast);
}
.layer-item:hover {
  background: color-mix(in srgb, var(--color-surface-overlay) 78%, #ffffff 22%);
  border-color: var(--color-border);
  transform: translateY(-1px);
}
.layer-item.selected {
  background: color-mix(in srgb, var(--color-primary-light) 26%, var(--color-surface-overlay));
  border-color: color-mix(in srgb, var(--color-primary) 52%, var(--color-border));
}
.layer-item.locked { opacity: 0.6; }
.layer-item.hidden { opacity: 0.4; }
.layer-type-icon {
  font-size: 11px;
  color: var(--color-text-muted);
  min-width: 20px;
  text-align: center;
  font-weight: 700;
}
.layer-name {
  flex: 1;
  font-size: var(--text-xs);
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.layer-actions {
  display: flex;
  gap: 1px;
  opacity: 0;
  transition: opacity var(--transition-fast);
}
.layer-item:hover .layer-actions,
.layer-item.selected .layer-actions { opacity: 1; }
.layer-action-btn {
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  color: var(--color-text-muted);
  cursor: pointer;
  border-radius: 3px;
  transition: background var(--transition-fast), color var(--transition-fast);
}
.layer-action-btn:hover { background: var(--color-surface-overlay); color: var(--color-text); }
.layer-action-btn.active { color: var(--color-primary); }
.layer-action-btn.danger:hover { color: var(--color-danger); }

@media (max-width: 780px) {
  .layers-list {
    padding: var(--space-2);
  }

  .layer-actions {
    opacity: 1;
  }
}
</style>
