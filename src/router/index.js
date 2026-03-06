import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'
import EditorView from '@/views/EditorView.vue'
import PreviewView from '@/views/PreviewView.vue'

const routes = [
  { path: '/', name: 'dashboard', component: DashboardView },
  { path: '/editor/:id', name: 'editor', component: EditorView, props: true },
  { path: '/preview/:id', name: 'preview', component: PreviewView, props: true },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
