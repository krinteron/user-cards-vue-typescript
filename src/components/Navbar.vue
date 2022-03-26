<template>
  <nav class="nav">
    <UpdateButton @handler="fetchtUsers" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Store from "@/store";
import UpdateButton from "./UpdateButton.vue";

export default defineComponent({
  name: "App",
  components: { UpdateButton },
  methods: {
    fetchtUsers() {
      Store.dispatch("fetchUsers");
    },
  },
});
</script>

<style>
nav {
  box-sizing: border-box;
  height: 100px;
  padding: 25px;
  text-align: right;
  border-bottom: 1px solid #eeeeee;
}
</style>
