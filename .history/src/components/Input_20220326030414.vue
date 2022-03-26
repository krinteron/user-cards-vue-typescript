<template>
  <div class="input-form-item input-name">
    <label for="name">
      <p class="input-label">{{ label }}</p>
      <input
        class="input"
        :type="type"
        id="name"
        :value="value"
        @input="$emit('update:value', inputHandler($event))"
      />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // props: ['value', 'label', 'type'],
  props: {
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  emits: ["update:value"],
  methods: {
    inputHandler(event: Event) {
      return (event.target as HTMLInputElement).value;
    },
  },
});
</script>

<style scoped>
.input-form-item {
  box-sizing: border-box;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  height: 56px;
  padding: 6px 16px;
  text-align: left;
}
.input-label {
  display: inline-block;
  font-size: 13px;
  color: #1111117a;
  margin: 2px 0;
}
.input {
  box-sizing: border-box;
  width: 100%;
  height: 24px;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 24px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
