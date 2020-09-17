<template>
  <div>
    <ui-tab-bar></ui-tab-bar>
    <ui-tab-content>
      <ui-add-todo v-if="isAddTodoVisible"></ui-add-todo>
      <div>
        <ui-todo
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          :tabActive="tabActive"
        ></ui-todo>
      </div>
      <button
        v-if="isDeleteAllButtonVisible"
        @click="removeAllTodos"
        class="float-right mt-6 bg-red text-xs text-white py-3 px-6 rounded-md font-bold flex flex-row items-center"
      >
        <i class="material-icons text-sm">delete_outline</i> delete all
      </button>
    </ui-tab-content>
  </div>
</template>

<script>
import UiTabBar from "@/components/ui/UiTabBar";
import UiAddTodo from "@/components/ui/UiAddTodo";
import UiTabContent from "@/components/ui/UiTabContent";
import UiTodo from "@/components/ui/UiTodo";

import { mapGetters, mapActions } from "vuex";
import { STORE, TABS } from "@/utils/CONSTANTS";

export default {
  name: "AppTodos",
  components: {
    UiTabBar,
    UiAddTodo,
    UiTabContent,
    UiTodo
  },
  computed: {
    ...mapGetters(STORE.TODOS_STORE, {
      todos: STORE.TODOS.GET_TODOS
    }),
    ...mapGetters({
      tabActive: STORE.ROOT.GET_TAB_ACTIVE
    }),
    isAddTodoVisible() {
      return this.tabActive === TABS.ACTIVE || this.tabActive === TABS.ALL;
    },
    isDeleteAllButtonVisible() {
      return this.tabActive === TABS.COMPLETED;
    }
  },
  methods: {
    ...mapActions(STORE.TODOS_STORE, {
      removeAllTodos: STORE.TODOS.REMOVE_ALL_TODOS
    })
  }
};
</script>

<style scoped></style>
