<script setup>
import { computed } from 'vue'
const props = defineProps({ element: { type: Object, required: true } })
const c = computed(() => props.element.content || {})

const buttonStyle = computed(() => {
  const variants = {
    primary: { background: '#6c47ff', color: '#fff', border: 'none' },
    secondary: { background: '#f0f0f0', color: '#333', border: '1px solid #ddd' },
    outline: { background: 'transparent', color: '#6c47ff', border: '2px solid #6c47ff' },
    ghost: { background: 'transparent', color: '#6c47ff', border: 'none' },
    danger: { background: '#ef4444', color: '#fff', border: 'none' },
  }
  const base = variants[c.value.variant || 'primary'] || variants.primary
  return {
    ...base,
    background: c.value.bgColor || base.background,
    color: c.value.textColor || base.color,
    border: c.value.borderColor ? `1px solid ${c.value.borderColor}` : base.border,
    borderRadius: (c.value.borderRadius ?? 8) + 'px',
  }
})
</script>

<template>
  <div
    class="button-element"
    :style="{
      width: '100%', height: '100%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '8px',
      fontSize: (c.fontSize ?? 15) + 'px',
      fontWeight: c.fontWeight ?? 600,
      letterSpacing: (c.letterSpacing || 0) + 'px',
      cursor: 'pointer',
      fontFamily: c.fontFamily || 'Inter, sans-serif',
      transition: 'opacity .15s',
      ...buttonStyle,
    }"
  >{{ c.label || 'Button' }}</div>
</template>
