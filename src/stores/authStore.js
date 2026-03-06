import { defineStore } from 'pinia'
import { ref } from 'vue'
import { auth, googleProvider, microsoftProvider, signInWithPopup, signOut, onAuthStateChanged } from '@/firebase'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthReady = ref(false)

  // Listen to auth state changes
  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser
    isAuthReady.value = true
  })

  async function loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      user.value = result.user
      return result.user
    } catch (error) {
      console.error("Google Sign-In Error:", error)
      throw error
    }
  }

  async function loginWithMicrosoft() {
    try {
      const result = await signInWithPopup(auth, microsoftProvider)
      user.value = result.user
      return result.user
    } catch (error) {
      console.error("Microsoft Sign-In Error:", error)
      throw error
    }
  }

  async function logout() {
    try {
      await signOut(auth)
      user.value = null
    } catch (error) {
      console.error("Sign-Out Error:", error)
    }
  }

  return {
    user,
    isAuthReady,
    loginWithGoogle,
    loginWithMicrosoft,
    logout
  }
})
