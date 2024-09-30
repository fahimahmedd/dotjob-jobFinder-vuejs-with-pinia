<template>
  <v-container class="section-padding">
    <div class="text-h4 text-center secondary-font font-weight-bold">
      Featured companies actively hiring
    </div>
    <v-row class="mt-5 justify-center">
      <v-col cols="3" v-for="(company, index) in allCompany" :key="index">
        <JobFeatureCard :company="company" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import JobFeatureCard from "./JobFeatureCard.vue";

const props = defineProps({
  allCompany: {
    type: Array,
    default: [],
  },
});

// const featureCompany = ref([
//   {
//     name: "Meghna Group of Industries",
//     logo: "src/assets/images/hero/floating-3.png",
//     postNumber: 6,
//     moto: "One of the largest Bangladeshi industrial conglomerates",
//     route: "/",
//   },
//   {
//     name: "BJIT Group",
//     logo: "src/assets/images/hero/floating-1.png",
//     postNumber: 12,
//     moto: "Best software development company in Bangladesh",
//     route: "/",
//   },
//   {
//     name: "Anwar Group of Industries",
//     logo: "src/assets/images/hero/floating-2.jpeg",
//     postNumber: 6,
//     moto: "One of the largest and oldest Bangladeshi conglomerates",
//     route: "/",
//   },
//   {
//     name: "DBL Group",
//     logo: "src/assets/images/hero/floating-4.png",
//     postNumber: 8,
//     moto: "Bangladeshi diversified conglomerate based in Dhaka",
//     route: "/",
//   },
//   {
//     name: "ILLIYEEN",
//     logo: "src/assets/images/hero/floating-5.png",
//     postNumber: 3,
//     moto: "ILLIYEEN , one of the fastest-growing lifestyle brands",
//     route: "/",
//   },
//   {
//     name: "Oxfam International",
//     logo: "src/assets/images/hero/floating-6.png",
//     postNumber: 5,
//     moto: "Focusing on the alleviation of global poverty, founded in 1942 ",
//     route: "/",
//   },
//   {
//     name: "SQUARE Group",
//     logo: "src/assets/images/hero/floating-7.png",
//     postNumber: 7,
//     moto: "Bangladeshi diversified multinantional conglomerate.",
//     route: "/",
//   },
// ]);
</script>

<style lang="scss" scoped></style>
