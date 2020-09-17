export const EVENTS = {
  TAB_ACTIVE: "tab-active",
  TODO_CLICK: "todo-click"
};

export const TABS = {
  ALL: 0,
  ACTIVE: 1,
  COMPLETED: 2
};

export const STORE = {
  TODOS_STORE: "todos",
  ROOT: {
    SET_TAB_ACTIVE: "setTabActive",
    GET_TAB_ACTIVE: "getTabActive"
  },
  TODOS: {
    CREATE_TODO: "createTodo",
    GET_ALL_TODOS: "getAllTodos",
    GET_ACTIVE_TODOS: "getActiveTodos",
    GET_DONE_TODOS: "getDoneTodos",
    GET_TODOS: "getTodos",
    TOGGLE_TODO_STATUS: "toggleTodoStatus",
    REMOVE_TODO: "removeTodo",
    REMOVE_ALL_TODOS: "removeAllTodos"
  }
};
