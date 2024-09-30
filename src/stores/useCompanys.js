import { defineStore } from "pinia";
import { ref } from "vue";
import { url } from "@/plugins/baseUrl";
import { useAxios } from "@vueuse/integrations/useAxios";

export const useCompanysStore = defineStore("useCompany", () => {
  // All Jobs
  const {
    execute: executeCompanys,
    data: companys,
    isLoading: loadingCompanys,
  } = useAxios(`${url}/companys`);

  const singleCompany = (id) =>{
     if(companys.value && companys.value.length > 0){
      return companys.value.find( item => item.id == id)
     }else{
      return null;
     }
  }

  return { executeCompanys, companys, loadingCompanys , singleCompany };
});
