<script setup>
import { useAuthenticationStore } from "@/stores/useAuthentication";
import CommonSnackbar from "../snickbar/CommonSnackbar.vue";
import { ref } from "vue";

const useAuth = useAuthenticationStore();

const showSnacbar = ref(false);

const showSnacbarTrigger = () => {
  showSnacbar.value = true;
};
</script>

<template>
  <v-navigation-drawer
    v-model="useAuth.drawer"
    location="right"
    temporary
    width="500"
    elevation="1"
    class="auth-drawer"
  >
    <v-btn
      class="drawer-close"
      icon="mdi-close"
      elevation="0"
      variant="tonal"
      color="primary"
      size="small"
      @click.stop="useAuth.drawerHandeler"
    >
    </v-btn>

    <div class="drawer-container d-flex align-center justify-center">
      <SignIn v-if="useAuth.showSigIn" />
      <SignUp @showSnacbar="showSnacbarTrigger" v-else />
    </div>
  </v-navigation-drawer>

  <CommonSnackbar v-if="showSnacbar" content="Sign Up Successfull !" />
</template>

<style lang="scss" scoped>
.v-navigation-drawer__scrim {
  opacity: 0.1;
  z-index: 9999999 !important;
}
.v-navigation-drawer {
  z-index: 99999999 !important;
  transform: none !important;
  right: -505px !important;
  transition: right 0.3s ease !important;
  position: fixed !important;
  height: 100vh !important;
  top: 0 !important;
  border-top-left-radius: 35px !important;
  border-bottom-left-radius: 35px !important;
}
.v-navigation-drawer--active {
  right: 0 !important;
}

.auth-drawer {
  position: relative;
}
.drawer-close {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 10;
}
.drawer-container {
  height: 100%;
}
</style>
