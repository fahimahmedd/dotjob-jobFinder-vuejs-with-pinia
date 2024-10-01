<script setup>
import Authentication from "@/components/authentication/Authentication.vue";
import { useAuthenticationStore } from "@/stores/useAuthentication";
import { useCompanysStore } from "@/stores/useCompanys";
import { onMounted } from "vue";

const useAuth = useAuthenticationStore();
const useCompany = useCompanysStore();

onMounted(() => {
  useCompany.loadUserFromLocalStorage();
});
</script>

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
