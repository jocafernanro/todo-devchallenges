<template>
  <div class="flex flex-row justify-between">
    <input
      class="border py-4 px-2 rounded-xl text-xs flex-auto mr-6 "
      type="text"
      @keypress.enter="createNewTodo"
      placeholder="add details"
      v-model="todoName"
    />
    <button
      @click="createNewTodo"
      class="bg-blue-500 hover:bg-blue-400 active:bg-blue-700 text-white text-xs px-10 py-4 rounded-xl shadow-blue no-outline transform active:translate-y-1"
    >
      Add
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { STORE } from "@/utils/CONSTANTS";

export default {
  name: "UiAddTodo",
  data() {
    return {
      todoName: undefined
    };
  },
  methods: {
    ...mapActions(STORE.TODOS_STORE, {
      createTodo: STORE.TODOS.CREATE_TODO
    }),
    createNewTodo() {
      if (this.todoName) this.createTodo(this.todoName);
      this.todoName = undefined;
    }
  }
};
</script>

<style scoped>
.shadow-blue {
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
}
</style>
