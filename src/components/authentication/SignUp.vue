<script setup>
import { useAuthenticationStore } from "@/stores/useAuthentication";
import { useCompanysStore } from "@/stores/useCompanys";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
const name = ref();
const email = ref();
const password = ref();
const confirm_password = ref();
const showPass = ref(false);
const showConfirmPass = ref(false);
const useAuth = useAuthenticationStore();
const useCompany = useCompanysStore();
const emit = defineEmits();

const register = async () => {
  const res = await useAuth.executeRegister({
    data: {
      name: name.value,
      email: email.value,
      password: password.value,
      confirm_password: confirm_password.value,
    },
  });

  try {
    if (res.response.value.status === 201) {
      useCompany.executeCompanys();
      useAuth.authSwitch();
      emit("showSnacbar");
    }
  } catch (error) {
    console.log(error);
  }
};

const rules = {
  email: (v) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || "Invalid e-mail";
  },
  min: (v) => (v || "").length >= 6 || "Min 6 characters",
  pass: (v) => v === password.value || "Password Not Macthed",
};

const isSubmitDisable = computed(() => {
  return (
    !name.value ||
    !email.value ||
    !password.value ||
    !confirm_password.value ||
    rules.email(email.value) !== true ||
    rules.min(password.value) !== true ||
    rules.pass(confirm_password.value) !== true
  );
});
</script>

<template>
  <v-card width="100%" max-width="400" elevation="0" class="mx-auto mt-10 pl-8 auth-card">
    <div class="text-h5 font-weight-black text-uppercase text-center mb-5">Sign Up</div>
    <v-divider class="mb-8"></v-divider>

    <div class="text-subtitle-1 text-medium-emphasis mt-3">Your Name</div>
    <v-text-field
      v-model="name"
      prepend-inner-icon="mdi-account"
      class="mt-3"
    ></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis">Email Address</div>
    <v-text-field
      v-model="email"
      prepend-inner-icon="mdi-email"
      class="mt-3"
      :rules="[rules.email]"
    ></v-text-field>

    <div
      class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
    >
      Password
    </div>
    <v-text-field
      v-model="password"
      placeholder="6+ character"
      prepend-inner-icon="mdi-lock"
      :rules="[rules.min]"
      :type="showPass ? 'text' : 'password'"
      :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="showPass = !showPass"
      class="mt-3"
    ></v-text-field>
    <v-text-field
      v-model="confirm_password"
      placeholder="Confirmed Password"
      prepend-inner-icon="mdi-lock"
      :rules="[rules.pass]"
      :type="showConfirmPass ? 'text' : 'password'"
      :append-inner-icon="showConfirmPass ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append-inner="showConfirmPass = !showConfirmPass"
    ></v-text-field>
    <!-- <v-card-text class="text-medium-emphasis text-center text-caption">
      Login Failed
    </v-card-text> -->
    <v-btn
      @click="register"
      color="primary"
      class="mt-2"
      size="large"
      block
      :loading="useAuth.loadingRegister"
      :disabled="isSubmitDisable"
    >
      Sign Up
    </v-btn>
    <div
      class="text-subtitle-2 mt-5 text-center font-weight-medium text-decoration-none"
      href="#"
    >
      <span class="cursor-pointer" @click="useAuth.authSwitch"
        >Already have an account ? SIGN In</span
      >
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@media (min-width: 280px) and (max-width: 599.98px) {
  .auth-card {
    padding-left: 0px !important;
    padding: 20px !important;
    background-color: transparent;
  }
}
</style>
