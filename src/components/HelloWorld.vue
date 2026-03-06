<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Edit <code>src/App.vue</code> to get started.</p>
  </div>
</template>

<style scoped>
.hello {
  font-family: sans-serif;
}
h1 {
  color: #42b883;
}
</style>
