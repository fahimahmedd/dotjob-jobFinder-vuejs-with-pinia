import { defineStore } from "pinia";
import { ref, watchEffect } from "vue";
import { url } from "@/plugins/baseUrl";
import { useAxios } from "@vueuse/integrations/useAxios";

export const useCompanysStore = defineStore("useCompany", () => {
  const {
    execute: executeCompanys,
    data: companys,
    isLoading: loadingCompanys,
  } = useAxios(`${url}/companys`);

  const {
    execute: executeCompany,
    data: company,
    isLoading: loadingCompany,
  } = useAxios();

  const fetchCompany = (id) => {
    return executeCompany(`${url}/companys/${id}`);
  };

  const user = ref(null);

  const setUserLocalstore = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const getUser = (id) => {
    console.log(id)
    if (companys.value && companys.value.length) {
      console.log(companys.value)
      user.value = companys.value.find((item) => item.id == id) || null;
      console.log(user.value)
      if (user.value) {
        setUserLocalstore(user.value);
      }
    }
  };

  const loadUserFromLocalStorage = () => {
    const userData = localStorage.getItem("user");
    if (userData) {
      user.value = JSON.parse(userData);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("user");
    user.value = null;
  };

  return {
    executeCompanys,
    companys,
    loadingCompanys,
    fetchCompany,
    executeCompany,
    company,
    loadingCompany,
    getUser,
    user,
    loadUserFromLocalStorage,
    clearLocalStorage,
  };
});
