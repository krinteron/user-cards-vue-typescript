<template>
  <div class="user-cards-item shadow">
    <div class="user-photo">
      <img :src="user.avatar" alt="Изображение товара" />
    </div>
    <p class="user-name">{{ user.first_name + " " + user.last_name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import User from "@/models/UserModel";

export default defineComponent({
  data() {
    return {
      users: {},
    };
  },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  // mounted() {},
  methods: {
    // remove(removedId: number) {},
  },
});
</script>

<style>
.user-cards-item {
  display: block;
  width: 220px;
  /* height: 300px; */
  margin: 0;
  background-color: #fffefb;
  cursor: pointer;
}
.user-photo {
  position: relative;
  overflow: hidden;
  height: 220px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.user-photo img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 220px;
  object-fit: cover;
}
.user-name {
  box-sizing: border-box;
  width: calc(100% - 20px);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  text-align: center;
  margin: 0 auto;
  padding: 20px 0;
  overflow: hidden;
}
.user-cards-item:hover .user-photo {
  opacity: 0.5;
  transition-duration: 0.1s;
}
.shadow {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
</style>
