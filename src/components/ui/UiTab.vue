<template>
  <button
    class="text-center w-24 focus:outline-none"
    @click="$emit(EVENTS.TAB_ACTIVE)"
  >
    <span class="text-sm font-bold">
      <slot></slot>
    </span>
    <div :class="borderActive" class="h-1 rounded-t mt-2"></div>
  </button>
</template>

<script>
import { EVENTS } from "@/utils/CONSTANTS";
export default {
  name: "UiTab",
  props: {
    active: Boolean
  },
  data() {
    return {
      EVENTS: EVENTS
    };
  },
  computed: {
    borderActive() {
      return this.active ? "bg-blue-500" : "bg-white";
    }
  }
};
</script>

<style scoped></style>
