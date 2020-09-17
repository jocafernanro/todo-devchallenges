<template>
  <div id="app" class="max-w-3xl mx-auto">
    <app-header></app-header>
    <app-todos></app-todos>
  </div>
</template>

<script>
import AppHeader from "@/components/layouts/AppHeader";
import AppTodos from "@/components/layouts/AppTodos";
export default {
  name: "App",
  components: {
    AppHeader,
    AppTodos
  }
};
</script>

<style>
:root {
  --global-font-family: "Montserrat", "Helvetica Neue", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --global-secundary-font-family: "Raleway", "Helvetica Neue", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --global-font-size: 1rem;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}
html,
body {
  font-family: var(--global-font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

input:focus {
  @apply outline-none;
}

.no-outline:focus {
  outline: 0;
}
.raleway-font {
  font-family: var(--global-secundary-font-family);
}
</style>
