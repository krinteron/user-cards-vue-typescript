<template>
  <button type="button" :class="[btnStyle, 'thin-btn']" @click="$emit('handler')">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    btnStyle: {
      type: String,
      required: true,
    }
  },
  emits: ["handler"],
});
</script>

<style scoped>
.thin-btn {
  color: white;
  border-radius: 2px;
  cursor: pointer;
  opacity: 1;
}

.thin-btn:hover {
  opacity: 0.8;
  transition-duration: 0.2s;
}

.thin-btn:active {
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.7);
}
.danger {
  background: #ae4d4a;
  border: 1px solid #ae4d4a;
}

.success {
  background: #4aae9b;
  border: 1px solid #4aae9b;
}

</style>
