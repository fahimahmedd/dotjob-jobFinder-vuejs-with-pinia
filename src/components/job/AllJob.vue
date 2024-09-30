<script setup>
import jobData from "@/jobs.json";
import JobCard from "./JobCard.vue";
import { ref } from "vue";
import { useJobsStore } from "@/stores/useJobs";

const jobsStore = useJobsStore();

const props = defineProps({
  allJobs: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="all-job">
    <v-container>
      <v-row>
        <v-col cols="4" v-for="(job, index) in allJobs" :key="index">
          <JobCard :job-item="job" @click="jobsStore.drawerHandeler" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.all-job {
  padding: 20px 0 60px 0;
}
</style>
