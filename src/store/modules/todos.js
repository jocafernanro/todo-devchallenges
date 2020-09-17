import { TABS } from "@/utils/CONSTANTS";

const parsedTodo = name => {
  return {
    name,
    isDone: false,
    createdAt: Date.now()
  };
};

const state = () => ({
  todos: []
});

const getters = {
  getAllTodos(state) {
    return state.todos;
  },
  getActiveTodos(state) {
    return state.todos.filter(todo => !todo.isDone);
  },
  getDoneTodos(state) {
    return state.todos.filter(todo => todo.isDone);
  },
  getTodos(state, getters, rootState) {
    let todos;
    switch (rootState.tabActive) {
      case TABS.ALL:
        todos = getters.getAllTodos;
        break;
      case TABS.ACTIVE:
        todos = getters.getActiveTodos;
        break;
      case TABS.COMPLETED:
        todos = getters.getDoneTodos;
        break;
    }
    return todos;
  }
};

const actions = {
  createTodo({ commit }, name) {
    commit("createTodo", parsedTodo(name));
  },
  toggleTodoStatus({ commit }, todo) {
    commit("toggleTodoStatus", todo);
  },
  removeTodo({ commit }, todo) {
    commit("removeTodo", todo);
  },
  removeAllTodos({ commit }) {
    commit("removeAllTodos");
  }
};

const mutations = {
  createTodo(state, todo) {
    state.todos.push(todo);
  },
  toggleTodoStatus(state, todo) {
    let toToggleTodo = state.todos.find(
      el => el.createdAt === todo.createdAt && el.name === todo.name
    );
    console.log("-------------");
    console.log(toToggleTodo);
    toToggleTodo.isDone = !toToggleTodo.isDone;
    console.log(toToggleTodo);
    console.log("-------------");
  },
  removeTodo(state, todo) {
    const todoIndex = state.todos.indexOf(todo);
    if (todoIndex > -1) state.todos.splice(todoIndex, 1);
  },
  removeAllTodos(state) {
    state.todos
      .filter(todo => todo.isDone)
      .forEach(todo => {
        const todoIndex = state.todos.indexOf(todo);
        if (todoIndex > -1) state.todos.splice(todoIndex, 1);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
