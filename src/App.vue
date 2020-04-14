<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>


<script>
import EnterLayout from "@/layouts/EnterLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "enter") + "-layout";
    }
  },
  components: {
    EnterLayout,
    MainLayout
  }
};
</script>
  