<template>
  <PageTop />
  <div>
    <div v-if="useJobs.loadingJobs">
      <JobsLoading />
    </div>
    <AllJob v-else :all-jobs="allJobs" />
  </div>
  <JobDetail />
</template>

<script setup>
import PageTop from "@/components/hero/PageTop.vue";
import JobsLoading from "@/components/isLoading/JobsLoading.vue";
import AllJob from "@/components/job/AllJob.vue";
import { useJobsStore } from "@/stores/useJobs";
import { computed } from "vue";

const useJobs = useJobsStore();
useJobs.executeJobs();

const allJobs = computed(() => {
  return useJobs.jobs;
});
</script>
