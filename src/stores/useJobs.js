import { defineStore } from "pinia";
import { ref } from "vue";
import { url } from "@/plugins/baseUrl";
import { useAxios } from "@vueuse/integrations/useAxios";

export const useJobsStore = defineStore("useJobs", () => {
  // Jobs Details Drawer
  const drawer = ref(false);
  const drawerHandeler = () => {
    return (drawer.value = !drawer.value);
  };

  // All Jobs
  const {
    execute: executeJobs,
    data: jobs,
    isLoading: loadingJobs,
  } = useAxios(`${url}/all-jobs`);

  const {
    execute: executeCompanyPost,
    data: posts,
    isLoading: loadingPosts,
  } = useAxios();

  const fetchCompanyPosts = (id) => {
    return executeCompanyPost(`${url}/companys/jobs/${id}`);
  };

  return {
    drawer,
    drawerHandeler,
    executeJobs,
    jobs,
    loadingJobs,
    posts,
    loadingPosts,
    fetchCompanyPosts
  };
});
