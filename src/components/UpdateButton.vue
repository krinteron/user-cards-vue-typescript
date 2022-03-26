<template>
  <div class="btn-update" @click="$emit('handler')">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" class="bi bi-cloud-download" viewBox="0 0 16 16">
      <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/>
      <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["handler"],
});
</script>

<style scoped>
.btn-update {
  display: inline-block;
  cursor: pointer;
  margin: 0;
  padding: 0;
  fill: #2c3e50;
}

.btn-update:hover {
  fill: #4aae9b;
}

.btn-update:active {
  transform:scale(0.95);
  transition-duration: 0.2s;
  transition: 0.2s;
}
</style>
