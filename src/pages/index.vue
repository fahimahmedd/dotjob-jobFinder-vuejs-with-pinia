<template>
  <Hero />
  <JobFeatureLoading v-if="useCompanys.loadingCompanys" />
  <FeaturePost v-else :all-company="allCompany" />

  <AddJobFeature />
</template>

<script setup>
import AddJobFeature from "@/components/feature/AddJobFeature.vue";
import Hero from "@/components/hero/Hero.vue";
import { useCompanysStore } from "@/stores/useCompanys";
import { computed } from "vue";

const useCompanys = useCompanysStore();

useCompanys.executeCompanys();

const allCompany = computed(() => {
  return useCompanys.companys;
});
</script>
