<script setup>
import { computed, ref, watch } from 'vue'
import { useEditorStore } from '@/stores/editorStore'
import { useProjectStore } from '@/stores/projectStore'

const editorStore = useEditorStore()
const projectStore = useProjectStore()

const project = computed(() => projectStore.getProject(editorStore.projectId))
const slide = computed(() => project.value?.slides?.find(s => s.id === editorStore.currentSlideId))
const selectedEl = computed(() =>
  editorStore.selectedElementId
    ? slide.value?.elements?.find(e => e.id === editorStore.selectedElementId)
    : null
)

// Local copy of element for editing
const local = ref({})
watch(selectedEl, (el) => {
  if (el) local.value = JSON.parse(JSON.stringify(el))
  else local.value = {}
}, { immediate: true, deep: true })

function update(patch) {
  if (!selectedEl.value) return
  projectStore.updateElement(editorStore.projectId, editorStore.currentSlideId, selectedEl.value.id, patch)
}

function updateContent(patch) {
  if (!selectedEl.value) return
  const newContent = { ...selectedEl.value.content, ...patch }
  update({ content: newContent })
}

function updateGeometry(key, rawVal) {
  const val = parseFloat(rawVal)
  if (isNaN(val)) return
  update({ [key]: val })
}

// Slide background editing
const slideLocal = ref({})
watch(slide, (s) => { if (s) slideLocal.value = { ...s } }, { immediate: true })

function updateSlide(patch) {
  if (!slide.value) return
  projectStore.updateSlide(editorStore.projectId, slide.value.id, patch)
}

// Helper for input key down to commit on enter
function commitSlide(key, val) {
  updateSlide({ [key]: val })
}

const fontFamilies = [
  'Inter, sans-serif',
  'Poppins, sans-serif',
  'Montserrat, sans-serif',
  'Roboto, sans-serif',
  'Lato, sans-serif',
  '"Open Sans", sans-serif',
  'Raleway, sans-serif',
  'Nunito, sans-serif',
  'Arial, sans-serif',
  '"Trebuchet MS", sans-serif',
  'Tahoma, sans-serif',
  'Georgia, serif',
  '"Playfair Display", serif',
  'Merriweather, serif',
  '"Times New Roman", serif',
  'Verdana, sans-serif',
  '"Courier New", monospace',
  'Pacifico, cursive',
  'Caveat, cursive',
  '"Bebas Neue", sans-serif',
]
</script>

<template>
  <div class="properties-panel">
    <div class="panel-section autosave-note">
      Changes apply instantly
    </div>

    <!-- === No element selected: show slide properties === -->
    <template v-if="!selectedEl">
      <div class="panel-section">
        <div class="panel-title">Slide Properties</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Title</label>
          <input
            v-model="slideLocal.title"
            class="input"
            @input="commitSlide('title', slideLocal.title)"
          />
        </div>
        <div class="form-group">
          <label class="form-label">Background</label>
          <div class="bg-type-tabs">
            <button
              v-for="t in ['color','gradient','image']" :key="t"
              :class="['bg-type-btn', (slide?.backgroundType||'color') === t && 'active']"
              @click="updateSlide({ backgroundType: t })"
            >{{ t }}</button>
          </div>
          <template v-if="(slide?.backgroundType||'color') === 'color'">
            <div class="color-row">
              <input type="color" :value="slide?.background || '#ffffff'" @input="updateSlide({ background: $event.target.value })" class="color-input-native" />
              <input :value="slide?.background || '#ffffff'" class="input" @input="updateSlide({ background: $event.target.value })" style="font-size:var(--text-xs);font-family:var(--font-mono)" />
            </div>
          </template>
          <template v-else-if="slide?.backgroundType === 'gradient'">
            <input v-model="slideLocal.backgroundGradient" class="input" placeholder="linear-gradient(135deg, #667eea, #764ba2)" @input="updateSlide({ backgroundGradient: slideLocal.backgroundGradient })" />
          </template>
          <template v-else>
            <input v-model="slideLocal.backgroundImage" class="input" placeholder="https://..." @input="updateSlide({ backgroundImage: slideLocal.backgroundImage })" />
          </template>
        </div>
      </div>

      <div class="panel-section">
        <div class="panel-title">Slide Notes</div>
        <textarea
          v-model="slideLocal.notes"
          class="textarea"
          placeholder="Speaker notes…"
          style="min-height:80px"
          @input="commitSlide('notes', slideLocal.notes)"
        />
      </div>

      <div class="panel-section">
        <div class="panel-title">Transition</div>
        <select :value="slide?.transition || 'none'" class="select" @change="updateSlide({ transition: $event.target.value })">
          <option value="none">None</option>
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
          <option value="zoom">Zoom</option>
          <option value="flip">Flip</option>
        </select>
      </div>
    </template>

    <!-- === Element selected === -->
    <template v-else>
      <!-- Geometry -->
      <div class="panel-section">
        <div class="panel-title">
          Position &amp; Size
          <span class="element-type-badge">{{ selectedEl.type }}</span>
        </div>
        <div class="geo-grid">
          <div class="form-group">
            <label class="form-label">X</label>
            <input type="number" :value="Math.round(selectedEl.x)" class="input" @change="updateGeometry('x', $event.target.value)" />
          </div>
          <div class="form-group">
            <label class="form-label">Y</label>
            <input type="number" :value="Math.round(selectedEl.y)" class="input" @change="updateGeometry('y', $event.target.value)" />
          </div>
          <div class="form-group">
            <label class="form-label">W</label>
            <input type="number" :value="Math.round(selectedEl.width)" class="input" @change="updateGeometry('width', $event.target.value)" />
          </div>
          <div class="form-group">
            <label class="form-label">H</label>
            <input type="number" :value="Math.round(selectedEl.height)" class="input" @change="updateGeometry('height', $event.target.value)" />
          </div>
          <div class="form-group">
            <label class="form-label">Rot °</label>
            <input type="number" :value="Math.round(selectedEl.rotation || 0)" class="input" @change="updateGeometry('rotation', $event.target.value)" />
          </div>
          <div class="form-group">
            <label class="form-label">Opacity</label>
            <input type="number" min="0" max="1" step=".05" :value="selectedEl.opacity ?? 1" class="input" @change="updateGeometry('opacity', $event.target.value)" />
          </div>
        </div>
      </div>

      <!-- TEXT / HEADING properties -->
      <div v-if="['text','heading'].includes(selectedEl.type)" class="panel-section">
        <div class="panel-title">Text</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Content</label>
          <textarea
            :value="selectedEl.content?.text"
            class="textarea"
            style="min-height:64px"
            @input="updateContent({ text: $event.target.value })"
          />
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;">
          <div class="form-group">
            <label class="form-label">Size</label>
            <input type="number" :value="selectedEl.content?.fontSize" class="input" @change="updateContent({ fontSize: +$event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Weight</label>
            <select :value="selectedEl.content?.fontWeight" class="select" @change="updateContent({ fontWeight: $event.target.value })">
              <option value="normal">Normal</option>
              <option value="bold">Bold</option>
              <option value="600">Semi-bold</option>
              <option value="300">Light</option>
            </select>
          </div>
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Font Family</label>
          <select :value="selectedEl.content?.fontFamily" class="select" @change="updateContent({ fontFamily: $event.target.value })">
            <option v-for="f in fontFamilies" :key="f" :value="f">{{ f.split(',')[0] }}</option>
          </select>
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Align</label>
          <div class="align-btns">
            <button v-for="a in ['left','center','right','justify']" :key="a"
              :class="['align-btn', selectedEl.content?.textAlign === a && 'active']"
              @click="updateContent({ textAlign: a })">
              {{ a[0].toUpperCase() }}
            </button>
          </div>
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Style</label>
          <div class="style-btns">
            <button :class="['style-btn', selectedEl.content?.fontStyle === 'italic' && 'active']" @click="updateContent({ fontStyle: selectedEl.content?.fontStyle === 'italic' ? 'normal' : 'italic' })"><i>I</i></button>
            <button :class="['style-btn', selectedEl.content?.textDecoration === 'underline' && 'active']" @click="updateContent({ textDecoration: selectedEl.content?.textDecoration === 'underline' ? 'none' : 'underline' })"><u>U</u></button>
            <button :class="['style-btn', selectedEl.content?.textDecoration === 'line-through' && 'active']" @click="updateContent({ textDecoration: selectedEl.content?.textDecoration === 'line-through' ? 'none' : 'line-through' })"><s>S</s></button>
          </div>
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Color</label>
          <div class="color-row">
            <input type="color" :value="selectedEl.content?.color || '#000'" @input="updateContent({ color: $event.target.value })" class="color-input-native" />
            <input :value="selectedEl.content?.color || '#000'" class="input" @input="updateContent({ color: $event.target.value })" style="font-family:var(--font-mono);font-size:var(--text-xs)" />
          </div>
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Line Height</label>
          <input type="number" min=".8" max="3" step=".1" :value="selectedEl.content?.lineHeight ?? 1.5" class="input" @change="updateContent({ lineHeight: +$event.target.value })" />
        </div>

        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Case</label>
            <select :value="selectedEl.content?.textTransform || 'none'" class="select" @change="updateContent({ textTransform: $event.target.value })">
              <option value="none">Normal</option>
              <option value="uppercase">UPPERCASE</option>
              <option value="lowercase">lowercase</option>
              <option value="capitalize">Capitalize</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Letter Spacing</label>
            <input type="number" step=".2" :value="selectedEl.content?.letterSpacing ?? 0" class="input" @change="updateContent({ letterSpacing: +$event.target.value })" />
          </div>
        </div>
      </div>

      <!-- IMAGE properties -->
      <div v-if="selectedEl.type === 'image'" class="panel-section">
        <div class="panel-title">Image</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Source URL</label>
          <input :value="selectedEl.content?.src" class="input" placeholder="https://..." @input="updateContent({ src: $event.target.value })" />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Alt Text</label>
          <input :value="selectedEl.content?.alt" class="input" @input="updateContent({ alt: $event.target.value })" />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Object Fit</label>
          <select :value="selectedEl.content?.objectFit || 'cover'" class="select" @change="updateContent({ objectFit: $event.target.value })">
            <option value="cover">Cover</option>
            <option value="contain">Contain</option>
            <option value="fill">Fill</option>
            <option value="none">None</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Border Radius</label>
          <input type="number" min="0" :value="selectedEl.content?.borderRadius || 0" class="input" @change="updateContent({ borderRadius: +$event.target.value })" />
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Border Width</label>
            <input type="number" min="0" :value="selectedEl.content?.borderWidth || 0" class="input" @change="updateContent({ borderWidth: +$event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Border Color</label>
            <input type="color" :value="selectedEl.content?.borderColor || '#e2e8f0'" class="color-input-native" @input="updateContent({ borderColor: $event.target.value })" />
          </div>
        </div>
      </div>

      <!-- SHAPE properties -->
      <div v-if="selectedEl.type === 'shape'" class="panel-section">
        <div class="panel-title">Shape</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Type</label>
          <select :value="selectedEl.content?.shapeType || 'rectangle'" class="select" @change="updateContent({ shapeType: $event.target.value })">
            <option value="rectangle">Rectangle</option>
            <option value="circle">Circle</option>
            <option value="triangle">Triangle</option>
            <option value="star">Star</option>
            <option value="arrow">Arrow</option>
            <option value="diamond">Diamond</option>
          </select>
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Fill Color</label>
          <div class="color-row">
            <input type="color" :value="selectedEl.content?.fillColor || '#6c47ff'" @input="updateContent({ fillColor: $event.target.value })" class="color-input-native" />
            <input :value="selectedEl.content?.fillColor || '#6c47ff'" class="input" @input="updateContent({ fillColor: $event.target.value })" style="font-family:var(--font-mono);font-size:var(--text-xs)" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Border Color</label>
          <div class="color-row">
            <input type="color" :value="selectedEl.content?.borderColor || 'transparent'" @input="updateContent({ borderColor: $event.target.value })" class="color-input-native" />
            <input :value="selectedEl.content?.borderColor || 'transparent'" class="input" @input="updateContent({ borderColor: $event.target.value })" style="font-family:var(--font-mono);font-size:var(--text-xs)" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Border Width</label>
          <input type="number" min="0" :value="selectedEl.content?.borderWidth || 0" class="input" @change="updateContent({ borderWidth: +$event.target.value })" />
        </div>
        <div class="form-group">
          <label class="form-label">Corner Radius</label>
          <input type="number" min="0" :value="selectedEl.content?.borderRadius || 0" class="input" @change="updateContent({ borderRadius: +$event.target.value })" />
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Fill Opacity</label>
          <input type="number" min="0" max="1" step=".05" :value="selectedEl.content?.opacity ?? 1" class="input" @change="updateContent({ opacity: +$event.target.value })" />
        </div>
      </div>

      <!-- BUTTON properties -->
      <div v-if="selectedEl.type === 'button'" class="panel-section">
        <div class="panel-title">Button</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Label</label>
          <input :value="selectedEl.content?.label" class="input" @input="updateContent({ label: $event.target.value })" />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Style</label>
          <select :value="selectedEl.content?.variant || 'primary'" class="select" @change="updateContent({ variant: $event.target.value })">
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
            <option value="outline">Outline</option>
            <option value="ghost">Ghost</option>
            <option value="danger">Danger</option>
          </select>
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Action</label>
          <select :value="selectedEl.content?.action || 'none'" class="select" @change="updateContent({ action: $event.target.value })">
            <option value="none">None</option>
            <option value="navigate">Navigate to slide</option>
            <option value="link">Open URL</option>
            <option value="submit">Submit</option>
          </select>
        </div>
        <div class="form-group" v-if="selectedEl.content?.action && selectedEl.content.action !== 'none'">
          <label class="form-label">Target (slide # or URL)</label>
          <input :value="selectedEl.content?.target" class="input" placeholder="Slide # or https://..." @input="updateContent({ target: $event.target.value })" />
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Background</label>
            <input type="color" :value="selectedEl.content?.bgColor || '#6c47ff'" class="color-input-native" @input="updateContent({ bgColor: $event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Text Color</label>
            <input type="color" :value="selectedEl.content?.textColor || '#ffffff'" class="color-input-native" @input="updateContent({ textColor: $event.target.value })" />
          </div>
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Border Color</label>
            <input type="color" :value="selectedEl.content?.borderColor || '#6c47ff'" class="color-input-native" @input="updateContent({ borderColor: $event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Corner Radius</label>
            <input type="number" min="0" :value="selectedEl.content?.borderRadius ?? 8" class="input" @change="updateContent({ borderRadius: +$event.target.value })" />
          </div>
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Font Size</label>
            <input type="number" min="10" :value="selectedEl.content?.fontSize ?? 15" class="input" @change="updateContent({ fontSize: +$event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Weight</label>
            <select :value="String(selectedEl.content?.fontWeight ?? 600)" class="select" @change="updateContent({ fontWeight: +$event.target.value })">
              <option value="400">Normal</option>
              <option value="500">Medium</option>
              <option value="600">Semi-bold</option>
              <option value="700">Bold</option>
            </select>
          </div>
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Font Family</label>
            <select :value="selectedEl.content?.fontFamily || 'Inter, sans-serif'" class="select" @change="updateContent({ fontFamily: $event.target.value })">
              <option v-for="f in fontFamilies" :key="`btn-${f}`" :value="f">{{ f.split(',')[0] }}</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Letter Spacing</label>
            <input type="number" step=".2" :value="selectedEl.content?.letterSpacing ?? 0" class="input" @change="updateContent({ letterSpacing: +$event.target.value })" />
          </div>
        </div>
      </div>

      <!-- HOTSPOT properties -->
      <div v-if="selectedEl.type === 'hotspot'" class="panel-section">
        <div class="panel-title">Hotspot</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Icon</label>
          <select :value="selectedEl.content?.icon || '?'" class="select" @change="updateContent({ icon: $event.target.value })">
            <option value="?">? (Info)</option>
            <option value="!">! (Alert)</option>
            <option value="+">+ (Plus)</option>
            <option value="i">i (Info)</option>
            <option value="✦">✦ (Star)</option>
          </select>
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Background Color</label>
          <div class="color-row">
            <input type="color" :value="selectedEl.content?.bgColor || '#6c47ff'" @input="updateContent({ bgColor: $event.target.value })" class="color-input-native" />
            <input :value="selectedEl.content?.bgColor || '#6c47ff'" class="input" @input="updateContent({ bgColor: $event.target.value })" style="font-family:var(--font-mono);font-size:var(--text-xs)" />
          </div>
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-bottom:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Icon Color</label>
            <input type="color" :value="selectedEl.content?.iconColor || '#ffffff'" class="color-input-native" @input="updateContent({ iconColor: $event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Corner Radius</label>
            <input type="number" min="0" :value="selectedEl.content?.borderRadius ?? 999" class="input" @change="updateContent({ borderRadius: +$event.target.value })" />
          </div>
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Popup Title</label>
          <input :value="selectedEl.content?.popupTitle" class="input" @input="updateContent({ popupTitle: $event.target.value })" />
        </div>
        <div class="form-group">
          <label class="form-label">Popup Content</label>
          <textarea :value="selectedEl.content?.popupContent" class="textarea" @input="updateContent({ popupContent: $event.target.value })" />
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Popup Background</label>
            <input type="color" :value="selectedEl.content?.popupBgColor || '#ffffff'" class="color-input-native" @input="updateContent({ popupBgColor: $event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Popup Text</label>
            <input type="color" :value="selectedEl.content?.popupTextColor || '#1a1a2e'" class="color-input-native" @input="updateContent({ popupTextColor: $event.target.value })" />
          </div>
        </div>
      </div>

      <!-- VIDEO properties -->
      <div v-if="selectedEl.type === 'video'" class="panel-section">
        <div class="panel-title">Video</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Video URL / Embed</label>
          <input :value="selectedEl.content?.src" class="input" placeholder="YouTube, Vimeo, or direct .mp4 URL" @input="updateContent({ src: $event.target.value })" />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Poster Image URL</label>
          <input :value="selectedEl.content?.poster" class="input" @input="updateContent({ poster: $event.target.value })" />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Object Fit</label>
          <select :value="selectedEl.content?.objectFit || 'cover'" class="select" @change="updateContent({ objectFit: $event.target.value })">
            <option value="cover">Cover</option>
            <option value="contain">Contain</option>
            <option value="fill">Fill</option>
            <option value="none">None</option>
          </select>
        </div>
        <label class="check-row">
          <input type="checkbox" :checked="selectedEl.content?.autoplay" @change="updateContent({ autoplay: $event.target.checked })" />
          Autoplay
        </label>
        <label class="check-row">
          <input type="checkbox" :checked="selectedEl.content?.controls ?? true" @change="updateContent({ controls: $event.target.checked })" />
          Show Controls
        </label>
        <label class="check-row">
          <input type="checkbox" :checked="selectedEl.content?.loop" @change="updateContent({ loop: $event.target.checked })" />
          Loop
        </label>
        <label class="check-row">
          <input type="checkbox" :checked="selectedEl.content?.muted" @change="updateContent({ muted: $event.target.checked })" />
          Muted
        </label>
      </div>

      <!-- AUDIO properties -->
      <div v-if="selectedEl.type === 'audio'" class="panel-section">
        <div class="panel-title">Audio</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Audio URL</label>
          <input :value="selectedEl.content?.src" class="input" placeholder=".mp3 / .wav URL" @input="updateContent({ src: $event.target.value })" />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Label</label>
          <input :value="selectedEl.content?.label" class="input" @input="updateContent({ label: $event.target.value })" />
        </div>
        <label class="check-row">
          <input type="checkbox" :checked="selectedEl.content?.autoplay" @change="updateContent({ autoplay: $event.target.checked })" />
          Autoplay
        </label>
        <label class="check-row">
          <input type="checkbox" :checked="selectedEl.content?.controls !== false" @change="updateContent({ controls: $event.target.checked })" />
          Show Controls
        </label>
        <label class="check-row">
          <input type="checkbox" :checked="selectedEl.content?.loop" @change="updateContent({ loop: $event.target.checked })" />
          Loop
        </label>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Accent Color</label>
            <input type="color" :value="selectedEl.content?.accentColor || '#6c47ff'" class="color-input-native" @input="updateContent({ accentColor: $event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Text Color</label>
            <input type="color" :value="selectedEl.content?.textColor || '#555555'" class="color-input-native" @input="updateContent({ textColor: $event.target.value })" />
          </div>
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Background Color</label>
          <input type="color" :value="selectedEl.content?.bgColor || '#ede7ff'" class="color-input-native" @input="updateContent({ bgColor: $event.target.value })" />
        </div>
      </div>

      <!-- QUIZ properties -->
      <div v-if="selectedEl.type === 'quiz'" class="panel-section">
        <div class="panel-title">Quiz Question</div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Question</label>
          <textarea :value="selectedEl.content?.question" class="textarea" style="min-height:60px" @input="updateContent({ question: $event.target.value })" />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Options (one per line)</label>
          <textarea
            :value="selectedEl.content?.options?.join('\n')"
            class="textarea"
            style="min-height:80px"
            @input="updateContent({ options: $event.target.value.split('\n').filter(Boolean) })"
          />
        </div>
        <div class="form-group" style="margin-bottom:var(--space-3)">
          <label class="form-label">Correct Answer Index (0-based)</label>
          <input type="number" min="0" :value="selectedEl.content?.correctIndex ?? 0" class="input" @change="updateContent({ correctIndex: +$event.target.value })" />
        </div>
        <div class="form-group">
          <label class="form-label">Explanation</label>
          <textarea :value="selectedEl.content?.explanation" class="textarea" @input="updateContent({ explanation: $event.target.value })" />
        </div>
        <div class="geo-grid" style="grid-template-columns:1fr 1fr;margin-top:var(--space-3)">
          <div class="form-group">
            <label class="form-label">Card Background</label>
            <input type="color" :value="selectedEl.content?.cardBgColor || '#ffffff'" class="color-input-native" @input="updateContent({ cardBgColor: $event.target.value })" />
          </div>
          <div class="form-group">
            <label class="form-label">Question Color</label>
            <input type="color" :value="selectedEl.content?.questionColor || '#1a1a2e'" class="color-input-native" @input="updateContent({ questionColor: $event.target.value })" />
          </div>
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">Accent Color</label>
          <input type="color" :value="selectedEl.content?.accentColor || '#6c47ff'" class="color-input-native" @input="updateContent({ accentColor: $event.target.value })" />
        </div>
      </div>

      <!-- Actions -->
      <div class="panel-section">
        <div class="panel-title">Actions</div>
        <div class="actions-list">
          <button class="btn btn-secondary btn-sm w-full" @click="projectStore.duplicateElement(editorStore.projectId, editorStore.currentSlideId, selectedEl.id)">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            Duplicate
          </button>
          <button class="btn btn-secondary btn-sm w-full" @click="editorStore.showInteractionEditor = true; editorStore.interactionElementId = selectedEl.id">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            Interactions
          </button>
          <button class="btn btn-danger btn-sm w-full" @click="projectStore.deleteElement(editorStore.projectId, editorStore.currentSlideId, selectedEl.id); editorStore.clearSelection()">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M9 6V4h6v2"/></svg>
            Delete Element
          </button>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.properties-panel {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 100%;
  background: color-mix(in srgb, var(--color-surface) 92%, #10193a 8%);
}
.autosave-note {
  color: var(--color-text-muted);
  font-size: var(--text-xs);
  padding-bottom: 0;
  position: sticky;
  top: 0;
  z-index: 3;
  background: color-mix(in srgb, var(--color-surface-overlay) 65%, transparent 35%);
  border-bottom: 1px solid var(--color-border-subtle);
}
.element-type-badge {
  background: var(--color-surface-overlay);
  color: var(--color-text-dim);
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 2px 6px;
  border-radius: var(--radius-full);
  letter-spacing: .05em;
}
.geo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-2);
}
.color-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-1);
}
.color-input-native {
  width: 36px;
  height: 28px;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 2px;
  cursor: pointer;
  background: var(--color-surface-overlay);
  flex-shrink: 0;
}
.align-btns, .style-btns {
  display: flex;
  gap: 4px;
}
.align-btn, .style-btn {
  flex: 1;
  padding: 5px;
  background: var(--color-surface-overlay);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: var(--text-sm);
  transition: background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast);
  text-align: center;
}
.align-btn:hover, .style-btn:hover { color: var(--color-text); background: var(--color-surface-raised); }
.align-btn.active, .style-btn.active { background: var(--color-primary-light); color: var(--color-primary); border-color: rgba(108,71,255,.4); }
.check-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  cursor: pointer;
  margin-top: var(--space-2);
}
.check-row input { accent-color: var(--color-primary); width: 14px; height: 14px; }
.actions-list { display: flex; flex-direction: column; gap: var(--space-2); }
.bg-type-tabs {
  display: flex;
  gap: 4px;
  margin-bottom: var(--space-3);
}
.bg-type-btn {
  flex: 1;
  padding: 4px;
  background: var(--color-surface-overlay);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: .04em;
  transition: all var(--transition-fast);
}
.bg-type-btn.active { background: var(--color-primary-light); color: var(--color-primary); border-color: rgba(108,71,255,.4); }

@media (max-width: 780px) {
  .geo-grid {
    grid-template-columns: 1fr;
  }
}
</style>
