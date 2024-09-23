<template>
  <div class="all-job">
    <v-container>
      <v-row>
        <v-col cols="4" v-for="job in jobs" :key="job.id">
          <JobCard :job-list="job" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import jobData from "@/jobs.json";
import JobCard from "./JobCard.vue";
import { ref } from "vue";

const jobs = ref(jobData);
</script>

<style lang="scss" scoped>
.all-job {
  padding: 20px 0 60px 0;
}
</style>
