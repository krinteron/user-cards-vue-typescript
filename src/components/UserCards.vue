<template>
  <div>
    <transition-group name="list-complete" tag="p" class="user-cards">
      <Card
        v-for="user in users"
        :key="user.id"
        :user="user"
        class="list-complete-item"
        @click="showModal(user.id)"
      />
    </transition-group>
    <EmptyUsersBlock v-if="!users.length" />
    <Modal
      v-if="isModalVisible"
      v-model:user="currentUser"
      @close-modal="closeModal"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Store from "@/store";
import Card from "./Card.vue";
import Modal from "./Modal.vue";
import EmptyUsersBlock from "./EmptyUsersBlock.vue";
import User from "@/models/UserModel";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      isModalVisible: false,
      currentUser: {} as User,
    };
  },
  async beforeCreate() {
    await Store.dispatch("getUsers");
  },
  components: { Card, Modal, EmptyUsersBlock },
  computed: {
    users() {
      return Store.state.users;
    }
  },
  methods: {
    async getUsers() {
      await Store.dispatch("getUsers");
    },
    showModal(userId: number) {
      const user = this.users.filter(({ id }) => id === userId)[0];
      Store.commit("setCurrentUser", user);
      this.isModalVisible = true;
    },
    closeModal() {
      if (!this.isModalVisible) return;
      this.isModalVisible = false;
      Store.commit("clearCurrentUser");
    },
  },
});
</script>

<style scoped>
.user-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: stretch !important;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
}
.list-complete-enter, .list-complete-leave-to
{
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
