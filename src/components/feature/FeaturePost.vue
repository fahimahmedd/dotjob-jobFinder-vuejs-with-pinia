<template>
  <v-container class="section-padding">
    <div class="text-h4 text-center secondary-font font-weight-bold">
      Featured companies actively hiring
    </div>
    <v-row class="mt-5 justify-center">
      <v-col cols="6" md="4" lg="3" v-for="(company, index) in allCompany" :key="index">
        <JobFeatureCard :company="company" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import JobFeatureCard from "./JobFeatureCard.vue";
import { useCompanysStore } from "@/stores/useCompanys";

const useCompany = useCompanysStore();
const props = defineProps({
  allCompany: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>
