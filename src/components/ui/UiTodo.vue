<template>
  <div class="w-full">
    <label
      @click.prevent="toggleTodoStatus(todo)"
      class="inline-flex items-center w-full cursor-pointer"
    >
      <input type="checkbox" class="form-checkbox" :checked="todo.isDone" />
      <span class="ml-2" :class="lineThrough">{{ todo.name }}</span>
    </label>
    <i
      v-if="isRemoveTodoActive"
      @click="removeTodo(todo)"
      class="material-icons text-sm text-right absolute right-0 text-gray-500 text-xl p-4 z-10 cursor-pointer p-2"
      >delete_outline</i
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { EVENTS, STORE, TABS } from "@/utils/CONSTANTS";

export default {
  name: "UiTodo",
  props: {
    todo: Object,
    tabActive: Number
  },
  data() {
    return {
      EVENTS: EVENTS
    };
  },
  computed: {
    lineThrough() {
      return this.todo.isDone && "line-through";
    },
    isRemoveTodoActive() {
      return this.todo.isDone && this.tabActive === TABS.COMPLETED;
    }
  },
  methods: {
    ...mapActions(STORE.TODOS_STORE, {
      toggleTodoStatus: STORE.TODOS.TOGGLE_TODO_STATUS,
      removeTodo: STORE.TODOS.REMOVE_TODO
    })
  }
};
</script>

<style scoped></style>
