<script setup>
import { ref, computed } from 'vue'
const props = defineProps({ element: { type: Object, required: true } })
const c = computed(() => props.element.content || {})
const selected = ref(null)
const submitted = ref(false)

function select(i) {
  if (submitted.value) return
  selected.value = i
}

function submit() {
  if (selected.value === null) return
  submitted.value = true
}

function reset() {
  selected.value = null
  submitted.value = false
}

const isCorrect = computed(() => submitted.value && selected.value === (c.value.correctIndex ?? 0))
</script>

<template>
  <div
    class="quiz-element"
    :style="{
      width: '100%', height: '100%',
      background: c.cardBgColor || '#fff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      overflow: 'auto',
      fontFamily: 'Inter, sans-serif',
      '--quiz-accent': c.accentColor || '#6c47ff',
    }"
  >
    <p :style="{ fontSize: '15px', fontWeight: 600, color: c.questionColor || '#1a1a2e', lineHeight: 1.4 }">{{ c.question || 'Question text…' }}</p>
    <div class="quiz-options">
      <div
        v-for="(opt, i) in (c.options || [])" :key="i"
        :class="['quiz-opt', selected === i && 'selected', submitted && i === c.correctIndex && 'correct', submitted && selected === i && i !== c.correctIndex && 'wrong']"
        @click="select(i)"
      >
        <span class="opt-letter">{{ String.fromCharCode(65 + i) }}</span>
        <span class="opt-text">{{ opt }}</span>
      </div>
    </div>
    <div v-if="submitted" :class="['quiz-feedback', isCorrect ? 'correct' : 'wrong']">
      {{ isCorrect ? '✓ Correct!' : '✗ Incorrect.' }}
      <span v-if="!isCorrect && c.explanation"> {{ c.explanation }}</span>
    </div>
    <div class="quiz-actions">
      <button v-if="!submitted" class="quiz-btn primary" :disabled="selected === null" @click="submit">Submit</button>
      <button v-else class="quiz-btn secondary" @click="reset">Try Again</button>
    </div>
  </div>
</template>

<style scoped>
.quiz-options { display: flex; flex-direction: column; gap: 6px; }
.quiz-opt {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 12px;
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color .15s, background .15s;
  font-size: 13px; color: #333;
}
.quiz-opt.correct { border-color: #16a34a; background: rgba(22,163,74,.08); color: #14532d; }
.quiz-opt.wrong { border-color: #ef4444; background: rgba(239,68,68,.08); color: #991b1b; }
.opt-letter {
  width: 22px; height: 22px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 700; flex-shrink: 0;
}
.quiz-feedback {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 13px; font-weight: 600;
}
.quiz-feedback.correct { background: rgba(22,163,74,.1); color: #16a34a; }
.quiz-feedback.wrong { background: rgba(239,68,68,.1); color: #ef4444; }
.quiz-actions { display: flex; }
.quiz-btn {
  padding: 7px 18px;
  border-radius: 6px;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity .15s;
}
.quiz-btn.primary:disabled { opacity: .4; cursor: not-allowed; }
.quiz-btn.secondary { background: #f0f0f0; color: #333; }

.quiz-element .quiz-opt:hover:not(.selected) { border-color: var(--quiz-accent); background: color-mix(in srgb, var(--quiz-accent) 8%, transparent); }
.quiz-element .quiz-opt.selected { border-color: var(--quiz-accent); background: color-mix(in srgb, var(--quiz-accent) 14%, transparent); }
.quiz-element .quiz-btn.primary { background: var(--quiz-accent); color: #fff; }
</style>
