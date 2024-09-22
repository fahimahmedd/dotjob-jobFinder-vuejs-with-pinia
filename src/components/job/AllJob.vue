<template>
  <div class="all-job">
    <v-container>
      <v-row>
        <v-col cols="4" v-for="job in jobs" :key="job.id">
          <JobCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import Category from "../category/Category.vue";
import jobData from "@/jobs.json";

import { ref } from "vue";

const jobs = ref(jobData);
</script>

<style lang="scss" scoped>
.all-job {
  padding: 20px 0 60px 0;
}
</style>
