import { defineStore } from "pinia";
import { ref } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";
import { url } from "@/plugins/baseUrl";

export const useAuthenticationStore = defineStore("useAuthentication", () => {
  const drawer = ref(false);
  const showSigIn = ref(true);

  const authSwitch = () => {
    showSigIn.value = !showSigIn.value;
  };
  const drawerHandeler = () => {
    return (drawer.value = !drawer.value);
  };

  const { execute: executeLogin, isLoading: loadingLogin } = useAxios(
    `${url}/login`,
    { method: "POST" },
    { immediate: false }
  );

  const { execute: executeRegister, isLoading: loadingRegister } = useAxios(
    `${url}/register`,
    { method: "POST" },
    { immediate: false }
  );

  return {
    showSigIn,
    drawer,
    authSwitch,
    drawerHandeler,
    executeLogin,
    loadingLogin,
    executeRegister,
    loadingRegister,
  };
});
