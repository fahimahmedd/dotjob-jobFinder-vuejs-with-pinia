<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <Authentication />
  </v-app>
</template>

<script setup>
import Authentication from "@/components/authentication/Authentication.vue";
import { useAuthenticationStore } from "@/stores/useAuthentication";

const useAuth = useAuthenticationStore();
</script>
