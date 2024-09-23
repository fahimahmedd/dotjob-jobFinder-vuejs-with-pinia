<template>
  <v-card class="job-card pa-3">
    <v-card-item>
      <div class="d-flex justify-space-between">
        <v-chip density="compact" color="primary"> {{ jobList.type }} </v-chip>
        <v-img :src="jobList.company.logo" max-height="40" max-width="60"></v-img>
      </div>
      <div class="text-subtitle-1 font-weight-medium mt-3">
        {{ jobList.title }}
      </div>
      <div class="text-subtitle-1 primary-color secondary-font font-weight-bold mt-2">
        {{ jobList.company.name }}
      </div>
      <div class="d-flex align-center mt-2">
        <div class="text-subtitle-2 text-grey-darken-3">
          <span> Experiance : </span>
          <span>2 - 4 years</span>
        </div>
        <div class="text-subtitle-2 ml-4">
          <span> Salary : </span>
          <span> {{ jobList.salary }} </span>
        </div>
      </div>
      <p class="mt-3 text-subtitle-2 font-weight-regular">
        {{ jobList.company.description.substring(0, 90) + ".." }}
      </p>
      <div class="job-card-footer">
        <div class="d-flex align-center">
          <span class="mdi mdi-map-marker-circle"></span>
          <span class="text-caption">{{ jobList.location }}</span>
        </div>
        <div class="text-caption">4 Days ago</div>
      </div>
    </v-card-item>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  jobList: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.job-card {
  height: 300px;
  width: 100%;
  border-radius: 22px;
  border: 1px solid #c3c3c351;
  box-shadow: rgba(115, 115, 124, 0.064) 0px 5px 17px 0px;
  border-radius: 26px;
  position: relative;
  &:hover {
    background: linear-gradient(rgb(255, 255, 255), #f1f9d52e 130%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
}
.job-card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 30px 20px 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .mdi {
    font-size: 20px;
    margin-right: 4px;
  }
}
.job-type {
  display: inline-block;
  padding: 2px 20px;
  background-color: rgba(84, 124, 113, 0.2);
}
</style>
