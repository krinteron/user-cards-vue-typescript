<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <!-- <slot name="header">
          {{ currentUser.first_name + " " + currentUser.last_name }}
        </slot> -->
        <div class="modal-photo">
          <img :src="currentUser.avatar" alt="Изображение товара" />
        </div>
        <button type="button" class="btn-close" @click="$emit('closeModal')">
          x
        </button>
      </header>

      <section class="modal-body">
        <div v-if="!editMode">
          <p class="profile-name">{{ `${currentUser.first_name} ${currentUser.last_name}` }}</p>
          <p class="profile-email">{{ currentUser.email }}</p>
        </div>
        <div v-if="editMode">
          <Input
            v-model:value="currentUser.avatar"
            label="Avatar"
            type="text"
            class="input-item"
          />
          <Input
            v-model:value="currentUser.first_name"
            label="First name"
            type="text"
          />
          <Input
            v-model:value="currentUser.last_name"
            label="Last name"
            type="text"
          />
          <Input v-model:value="currentUser.email" label="Email" type="email" />
        </div>
      </section>

      <footer class="modal-footer">
        <!-- <slot name="footer">
          This is the default footer!
        </slot> -->
        <button type="button" class="btn-delete" @click="deleteUser">
          Delete
        </button>
        <button type="button" class="btn-save" @click="saveUser">Save</button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Store from "@/store";
import User from "@/models/UserModel";
import Input from "./Input.vue";

export default defineComponent({
  data() {
    return {
      currentUser: { ...Store.state.currentUser },
      editMode: false,
    };
  },
  components: { Input },
  props: {
    user: {
      type: Object as PropType<User>,
      required: true,
    },
  },
  emits: ["update:user", "closeModal", "saveUser"],
  // mounted() {},
  methods: {
    saveUser() {
      Store.commit("setCurrentUser", this.currentUser);
      Store.commit("updateUser");
      this.$emit("closeModal");
    },
    deleteUser() {
      Store.commit("deleteUser");
      this.$emit("closeModal");
    },
  },
});
</script>

<style>
.modal-photo {
  position: relative;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  /* margin-bottom: 16px; */
  margin: 0 auto;
}
.modal-photo img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 150px;
  object-fit: cover;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.5);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 4px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: space-between;
}

.modal-footer button {
  width: 40%;
}

.modal-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  padding: 20px 10px;
}

.profile-name {
  font-size: 20px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-save {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
  cursor: pointer;
  opacity: 1;
}

.btn-delete {
  color: white;
  background: #ae4d4a;
  border: 1px solid #ae4d4a;
  border-radius: 2px;
  cursor: pointer;
  opacity: 1;
}

.modal-footer button:hover {
  opacity: 0.8;
  transition-duration: 0.2s;
}

.modal-footer button:active {
  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.7);
}
</style>
