<script setup>
import { useAuthenticationStore } from "@/stores/useAuthentication";
import { useCompanysStore } from "@/stores/useCompanys";
import { computed, ref } from "vue";

const useAuth = useAuthenticationStore();
const useCompany = useCompanysStore();
const email = ref();
const password = ref();
const showError = ref("");

const login = async () => {
  try {
    const res = await useAuth.executeLogin({
      data: {
        email: email.value,
        password: password.value,
      },
    });

    if (res.response.value.status === 200) {
      const userId = res.response.value.data.id;
      useCompany.getUser(userId);
      email.value = "";
      password.value = "";
      useAuth.drawerHandeler();
    }
  } catch (error) {
    console.log(error);
    showError.value = "Login failed, please check your credentials.";
  }
};

const isSubmitDisable = computed(() => {
  return (
    !email.value ||
    !password.value ||
    rules.email(email.value) !== true ||
    rules.min(password.value) !== true
  );
});

const rules = {
  email: (v) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || "Invalid e-mail";
  },
  min: (v) => (v || "").length >= 6 || "Min 6 characters",
};
</script>

<template>
  <v-card width="100%" max-width="400" elevation="0" class="mx-auto mt-10 pl-8 auth-card">
    <div class="text-h5 font-weight-black text-uppercase text-center">Sign In</div>
    <v-card-text class="text-medium-emphasis text-center text-subtitle-2">
      Signin your Comapny Profile for unlock new career paths & explore a wide range of
      job listings.
    </v-card-text>
    <v-divider class="mb-10"></v-divider>

    <div class="text-subtitle-1 text-medium-emphasis mt-8">Email Address</div>
    <v-text-field
      v-model="email"
      prepend-inner-icon="mdi-email"
      class="mt-3"
      :rules="[rules.email]"
      @keydown.enter="login"
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password

      <a
        class="text-caption text-subtitle-2 font-weight-medium text-decoration-none primary-color"
        href="#"
      >
        Forgot password?</a
      >
    </div>
    <v-text-field
      v-model="password"
      type="password"
      :rules="[rules.min]"
      prepend-inner-icon="mdi-lock"
      class="mt-3"
      @keydown.enter="login"
    ></v-text-field>
    <v-card-text v-if="showError" class="text-medium-emphasis text-center text-caption">
      {{ showError }}
    </v-card-text>
    <v-btn
      @click="login"
      color="primary"
      class="mt-2"
      size="large"
      block
      :disabled="isSubmitDisable"
      :loading="useAuth.loadingLogin"
    >
      Sign In
    </v-btn>

    <div
      class="text-subtitle-2 mt-5 text-center font-weight-medium text-decoration-none cursor-pointer"
      href="#"
      @click="useAuth.authSwitch"
    >
      Don't have an account ? SIGN UP now
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@media (min-width: 280px) and (max-width: 599.98px) {
  .auth-card {
    padding-left: 0px !important;
    padding: 20px !important;
  }
}
</style>
