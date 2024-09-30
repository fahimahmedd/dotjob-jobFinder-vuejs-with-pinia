<script setup>
import JobCard from "@/components/job/JobCard.vue";
import { useCompanysStore } from "@/stores/useCompanys";
import { useJobsStore } from "@/stores/useJobs";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const tab = ref(null);
const useJobs = useJobsStore();
const useCompany = useCompanysStore();

useJobs.executeJobs();

const allJobs = computed(() => {
  return useJobs.jobs;
});

const companyId = route.params.id;

onMounted(() => {
  useJobs.fetchCompanyPosts(companyId);
});

const posts = computed(() => useJobs.posts);
const company = computed(() => useCompany.singleCompany(companyId));
</script>
<template>
  <CommonHeroTop />
  <ProfileOverview :company-item="company" />
  <JobDetail />
  <v-container>
    <div></div>
    <div class="product-overview">
      <v-tabs v-model="tab">
        <v-tab value="description">Jobs</v-tab>
        <v-tab value="overview">Overview</v-tab>
        <v-tab value="review">Reviews</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab" class="pa-0">
        <v-tabs-window-item value="description">
          <v-row class="mt-5">
            <v-col cols="4" v-for="(post, index) in posts" :key="index">
              <JobCard :job-item="post" @click="useJobs.drawerHandeler" />
            </v-col>
          </v-row>
        </v-tabs-window-item>
        <v-tabs-window-item value="overview">
          <div class="text-h4 mt-10 font-weight-bold">Comming Sooon .</div>
        </v-tabs-window-item>
        <v-tabs-window-item value="review">
          <div class="text-h4 mt-10 font-weight-bold">Comming Sooon .</div>
        </v-tabs-window-item>
      </v-tabs-window>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
