<template>
  <div class="app-header">
    <v-container class="d-flex align-center justify-space-between pa-0">
      <!-- App logo -->
      <div class="log">
        <v-img width="130" aspect-ratio="16/9" src="../../assets/images/logo/logo.png">
        </v-img>
      </div>

      <!-- Navigation links -->

      <div class="login-btn d-flex align-center">
        <div class="navigation-link mr-10">
          <v-btn
            size="small"
            variant="tex"
            v-for="item in links"
            :key="item.text"
            :to="item.route"
            color="#343434"
            active-color="primary"
          >
            {{ item.text }}
          </v-btn>
        </div>
        <v-btn
          min-width="100"
          append-icon="mdi-account-circle"
          variant="outlined"
          color="primary"
          rounded="lg"
        >
          Login
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const links = ref([
  { text: "Home", route: "/" },
  { text: "Jobs", route: "/jobs" },
  { text: "Add Job", route: "/f" },
]);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<style scoped lang="scss">
.app-header {
  position: absolute !important;
  width: 100%;
  background-color: transparent !important;
  z-index: 10;
  padding: 10px 0;
}
</style>
