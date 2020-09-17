<template>
  <nav class="flex flex-row justify-around border-b">
    <ui-tab
      @[EVENTS.TAB_ACTIVE]="activeTab(TABS.ALL)"
      :active="isTabActive(TABS.ALL)"
      >All</ui-tab
    >
    <ui-tab
      @[EVENTS.TAB_ACTIVE]="activeTab(TABS.ACTIVE)"
      :active="isTabActive(TABS.ACTIVE)"
      >Active</ui-tab
    >
    <ui-tab
      @[EVENTS.TAB_ACTIVE]="activeTab(TABS.COMPLETED)"
      :active="isTabActive(TABS.COMPLETED)"
      >Completed</ui-tab
    >
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UiTab from "@/components/ui/UiTab";
import { EVENTS, TABS, STORE } from "@/utils/CONSTANTS";

export default {
  name: "UiTabBar",
  components: {
    UiTab
  },
  data() {
    return {
      EVENTS: EVENTS,
      TABS: TABS
    };
  },
  computed: {
    ...mapGetters({
      tabActive: STORE.ROOT.GET_TAB_ACTIVE
    })
  },
  methods: {
    ...mapActions({
      setTabActive: STORE.ROOT.SET_TAB_ACTIVE
    }),
    isTabActive(tab) {
      return this.tabActive === tab;
    },
    activeTab(tab) {
      this.$emit(EVENTS.TAB_CLICKED);
      this.setTabActive(tab);
    }
  }
};
</script>

<style scoped></style>
