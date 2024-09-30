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
            variant="text"
            v-for="(item, index) in links"
            :key="index"
            :to="item.route"
            color="#343434"
            active-color="primary"
          >
            {{ item.text }}
          </v-btn>
          <v-btn
            size="small"
            variant="text"
            color="#343434"
            active-color="primary"
            @click.stop="useAuth.drawerHandeler"
          >
            Add Job
          </v-btn>
        </div>
        <v-btn
          min-width="100"
          append-icon="mdi-account-circle"
          color="primary"
          rounded="lg"
          @click.stop="useAuth.drawerHandeler"
        >
          Company
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useAuthenticationStore } from "@/stores/useAuthentication";
import { ref } from "vue";
import { useRoute } from "vue-router";

const useAuth = useAuthenticationStore();
const links = ref([
  { text: "Home", route: "/" },
  { text: "Jobs", route: "/jobs" },
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
