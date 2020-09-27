<template>
  <div>
    <ui-tab-bar @[EVENTS.TAB_CLICKED]="tabClicked"></ui-tab-bar>
    <transition name="slide">
      <ui-tab-content v-if="contentShow">
        <ui-add-todo v-if="isAddTodoVisible"></ui-add-todo>
        <div>
          <ul>
            <li
              v-for="(todo, index) in todos"
              :key="index"
              class="relative flex flex-row items-center my-4"
            >
              <ui-todo :todo="todo" :tabActive="tabActive"></ui-todo>
            </li>
          </ul>
        </div>
        <button
          v-if="isDeleteAllButtonVisible"
          @click="removeAllTodos"
          class="float-right mt-6 bg-red-500 text-xs text-white py-3 px-6 rounded-md font-bold flex flex-row items-center active:bg-red-700 no-outline transform active:translate-y-1"
        >
          <i class="material-icons text-sm">delete_outline</i> delete all
        </button>
      </ui-tab-content>
    </transition>
  </div>
</template>

<script>
import UiTabBar from "@/components/ui/UiTabBar";
import UiAddTodo from "@/components/ui/UiAddTodo";
import UiTabContent from "@/components/ui/UiTabContent";
import UiTodo from "@/components/ui/UiTodo";

import { mapGetters, mapActions } from "vuex";
import { STORE, TABS, EVENTS } from "@/utils/CONSTANTS";

export default {
  name: "AppTodos",
  components: {
    UiTabBar,
    UiAddTodo,
    UiTabContent,
    UiTodo
  },
  data() {
    return {
      EVENTS: EVENTS,
      contentShow: true
    };
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
    }),
    tabClicked() {
      this.contentShow = false;
      setTimeout(() => (this.contentShow = true), 100);
    }
  }
};
</script>

<style scoped></style>
