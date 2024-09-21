<template>
  <v-container class="mt-10">
    <div class="job-category section-padding">
      <v-row>
        <v-col cols="4">
          <div class="text-h2 font-weight-bold">Popular Searches on dotjob</div>
        </v-col>
        <v-col cols="4" v-for="(item, index) in categoryList" :key="index">
          <CategoryCard :category-item="item" />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
const categoryList = ref([
  { name: "Job For Freshers", route: "/" },
  { name: "Work from home Jobs", route: "/" },
  { name: "Part Time Job", route: "/" },
  { name: "Jobs For Women", route: "/" },
  { name: "International Job", route: "/" },
]);
</script>

<style lang="scss" scoped></style>
