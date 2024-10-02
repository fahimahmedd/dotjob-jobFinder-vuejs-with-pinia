<script setup>
import { useAuthenticationStore } from "@/stores/useAuthentication";
import { useCompanysStore } from "@/stores/useCompanys";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const useAuth = useAuthenticationStore();
const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});

const links = ref([
  { text: "Home", route: "/" },
  { text: "Jobs", route: "/jobs" },
  { text: "Add Job", route: "/add-job" },
]);

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
const useCompany = useCompanysStore();

const user = computed(() => {
  return useCompany.user;
});
</script>

<template>
  <div class="app-header">
    <v-container class="d-flex align-center justify-space-between pa-0 px-3 d-sm-pa-0">
      <!-- App logo -->
      <router-link to="/" class="log">
        <v-img width="130" aspect-ratio="16/9" src="../../assets/images/logo/logo.png">
        </v-img>
      </router-link>

      <!-- Navigation links -->
      <div class="login-btn d-flex align-center">
        <div class="navigation-link mr-10 d-none d-sm-flex">
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
        </div>
        <v-avatar
          v-if="user"
          @click="useCompany.clearLocalStorage"
          class="cursor-pointer"
          color="primary"
        >
          <span class="text-h5 font-weight-bold">
            {{ user.name.toUpperCase().slice(0, 1) }}
          </span>
          <v-tooltip activator="parent" location="bottom">Click for Logout</v-tooltip>
        </v-avatar>

        <v-btn
          v-else
          min-width="100"
          append-icon="mdi-account-circle"
          color="primary"
          rounded="lg"
          @click.stop="useAuth.drawerHandeler"
        >
          Company
        </v-btn>
        <v-btn
          @click.stop="drawer = !drawer"
          elevation="0"
          color="primary"
          variant="outlined"
          rounded="lg"
          icon="mdi-menu"
          size="small"
          class="ml-4 d-sm-none"
        ></v-btn>
      </div>
    </v-container>
  </div>

  <!-- Navigation Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
    width="260"
    elevation="0"
    class="header-drawer"
  >
    <v-btn
      class="drawer-close"
      icon="mdi-close"
      elevation="0"
      variant="tonal"
      color="primary"
      size="small"
      @click.stop="drawer = !drawer"
    >
    </v-btn>

    <div class="drawer-container">
      <div class="navigation-link d-flex flex-column">
        <v-btn
          size="medium"
          variant="plain"
          v-for="(item, index) in links"
          :key="index"
          :to="item.route"
          color="#000"
          active-color="primary"
          class="mt-6"
        >
          {{ item.text }}
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<style scoped lang="scss">
.app-header {
  position: absolute !important;
  width: 100%;
  background-color: transparent !important;
  z-index: 10;
  padding: 10px 0;
}

.v-navigation-drawer__scrim {
  opacity: 0.3;
  z-index: 9999999 !important;
}
.v-navigation-drawer {
  z-index: 99999999 !important;
  transform: none !important;
  left: -265px !important;
  transition: left 0.3s ease !important;
  position: fixed !important;
  height: 100vh !important;
  top: 0 !important;
}
.v-navigation-drawer--active {
  left: 0 !important;
}

.header-drawer {
  position: relative;
}
.drawer-close {
  position: absolute;
  right: 10px;
  top: 10px;
}
.drawer-container {
  height: 100%;
  padding-top: 40px;
}
</style>
