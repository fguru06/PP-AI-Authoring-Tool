<script setup>
import { computed } from 'vue'
const props = defineProps({ element: { type: Object, required: true } })
const c = computed(() => props.element.content || {})

const shapeStyle = computed(() => {
  const type = c.value.shapeType || 'rectangle'
  const base = {
    width: '100%', height: '100%',
    background: c.value.fillColor || '#6c47ff',
    border: `${c.value.borderWidth || 0}px solid ${c.value.borderColor || 'transparent'}`,
    opacity: c.value.opacity ?? 1,
  }
  if (type === 'circle') return { ...base, borderRadius: '50%' }
  if (type === 'rectangle') return { ...base, borderRadius: (c.value.borderRadius || 0) + 'px' }
  return base
})

const isPolygon = computed(() => ['triangle', 'star', 'arrow', 'diamond'].includes(c.value.shapeType))

const polygonPoints = computed(() => {
  const w = props.element.width || 150
  const h = props.element.height || 100
  const type = c.value.shapeType
  if (type === 'triangle') return `${w/2},0 ${w},${h} 0,${h}`
  if (type === 'diamond') return `${w/2},0 ${w},${h/2} ${w/2},${h} 0,${h/2}`
  if (type === 'arrow') return `0,${h*.3} ${w*.6},${h*.3} ${w*.6},0 ${w},${h/2} ${w*.6},${h} ${w*.6},${h*.7} 0,${h*.7}`
  if (type === 'star') {
    const cx = w/2, cy = h/2
    const outerR = Math.min(w,h)/2, innerR = outerR * 0.4
    let pts = ''
    for (let i = 0; i < 10; i++) {
      const angle = (i * 36 - 90) * Math.PI / 180
      const r = i % 2 === 0 ? outerR : innerR
      pts += `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)} `
    }
    return pts.trim()
  }
  return ''
})
</script>

<template>
  <div class="shape-element" style="width:100%;height:100%;">
    <!-- Simple shapes via div -->
    <div v-if="!isPolygon" :style="shapeStyle" />
    <!-- Complex shapes via SVG -->
    <svg v-else :width="element.width" :height="element.height" style="display:block;overflow:visible;">
      <polygon
        :points="polygonPoints"
        :fill="c.fillColor || '#6c47ff'"
        :stroke="c.borderColor || 'none'"
        :stroke-width="c.borderWidth || 0"
      />
    </svg>
  </div>
</template>
