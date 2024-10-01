<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useCompanysStore } from "@/stores/useCompanys";
import { useJobsStore } from "@/stores/useJobs";
import JobsLoading from "@/components/isLoading/JobsLoading.vue";

const tab = ref(null);
const route = useRoute();
const companyId = route.params.id;
const useCompany = useCompanysStore();
const useJobs = useJobsStore();

const posts = computed(() => useJobs.posts);

const company = computed(() => useCompany.company);

onMounted(() => {
  useJobs.fetchCompanyPosts(companyId);
  useCompany.fetchCompany(companyId);
});
</script>
<template>
  <CommonHeroTop />
  <ProfileOverview :company-item="company" />
  <JobDetail />
  <v-container>
    <div class="product-overview">
      <v-tabs v-model="tab">
        <v-tab value="description">Jobs</v-tab>
        <v-tab value="overview">Overview</v-tab>
        <v-tab value="review">Reviews</v-tab>
      </v-tabs>
      <v-tabs-window v-model="tab" class="pa-0">
        <v-tabs-window-item value="description">
          <JobsLoading v-if="useJobs.loadingPosts" />
          <v-row class="mt-5" v-else>
            <v-col
              lg="4"
              md="6"
              sm="6"
              cols="12"
              v-for="(post, index) in posts"
              :key="index"
            >
              <JobCard :job-item="post" @click="useJobs.drawerHandeler(post.id)" />
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
